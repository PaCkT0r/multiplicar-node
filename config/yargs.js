//paquete de yargs

const opts = {
    base: {
        demand: true,
        alias: 'b'
     },
     limite: {
        alias: 'l',
        default: 10
     }
}

const argv = require('yargs')
.command('listar', 'Imprime en consola la tabla a multiplicar', opts)
.command('crear', 'Crea la tabla especificada con limite o sin limite y lo alamacena en un .txt', opts)
.help()
.argv;

module.exports = {
    argv
}