import * as path from 'path'

module.exports = {
  // Definisce il percorso pubblico per il deploy su GitHub Pages (come hai già fatto)
  publicPath: '/progetto-homarus-gammarus/',

  // Configurazione di Webpack
  configureWebpack: {
    resolve: {
      alias: {
        // Aggiungi un alias per la cartella src
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },

  // Altri eventuali parametri di configurazione per Vue CLI
  // (ad esempio per il dev server, per la gestione delle risorse, ecc.)
}
