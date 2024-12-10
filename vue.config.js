// import * as path from 'path'

// module.exports = {
//   // Definisce il percorso pubblico per il deploy su GitHub Pages
//   publicPath: '/progetto-astici-CISMAR/',

//   // Configurazione di Webpack
//   configureWebpack: {
//     resolve: {
//       alias: {
//         // Aggiungi un alias per la cartella src
//         '@': path.resolve(__dirname, 'src'),
//       },
//     },
//   },

//   // Altri eventuali parametri di configurazione per Vue CLI
//   // (ad esempio per il dev server, per la gestione delle risorse, ecc.)
// }

import * as path from 'path'

module.exports = {
  // Definisce il percorso pubblico per il deploy su GitHub Pages
  publicPath: process.env.NODE_ENV === 'production' ? '/progetto-astici-CISMAR/' : '/',

  // Configurazione di Webpack
  configureWebpack: {
    resolve: {
      alias: {
        // Aggiungi un alias per la cartella src
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },

  // Configurazione del dev server (opzionale)
  devServer: {
    port: 5173, // Cambia la porta se necessario
  },

  // Altri eventuali parametri di configurazione per Vue CLI
}
