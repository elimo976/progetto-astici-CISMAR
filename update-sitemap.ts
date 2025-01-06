import fs from 'fs'
import path from 'path'

// Usa import.meta.url per ottenere il percorso della directory
const sitemapPath = path.resolve(new URL('.', import.meta.url).pathname, 'dist', 'sitemap.xml')

// Leggi la sitemap generata
fs.readFile(sitemapPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Errore nella lettura della sitemap:', err)
    return
  }

  // Trova tutte le URL nella sitemap
  const urlMatches = data.match(/<url>[\s\S]*?<\/url>/g)

  // Se non ci sono URL, non fare nulla
  if (!urlMatches) {
    console.log('Nessuna URL trovata nella sitemap.')
    return
  }

  // Rimuovi duplicati utilizzando un Set
  const uniqueUrls = Array.from(new Set(urlMatches))

  // Rimuovi tutte le URL esistenti dalla sitemap
  let updatedSitemap = data.replace(/<url>[\s\S]*?<\/url>/g, '')

  // Aggiungi le URL uniche con changefreq e priority
  uniqueUrls.forEach((url) => {
    const loc = url.match(/<loc>(https?:\/\/[^\s]+)<\/loc>/)
    if (loc) {
      const urlWithoutTags = loc[1]
      updatedSitemap += `<url>
        <loc>${urlWithoutTags}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
      </url>`
    }
  })

  // Scrivi la sitemap aggiornata senza duplicati e con changefreq monthly
  fs.writeFile(sitemapPath, updatedSitemap, 'utf8', (err) => {
    if (err) {
      console.error('Errore nella scrittura della sitemap:', err)
    } else {
      console.log('Sitemap aggiornata correttamente!')
    }
  })
})
