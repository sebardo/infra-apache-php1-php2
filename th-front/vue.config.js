const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: 'all',  // Permite todos los hosts
    port: 8080,  // Asegúrate de que el puerto coincida con el expuesto en Docker
  },
})
