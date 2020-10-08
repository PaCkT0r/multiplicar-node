   //requireds
   //libreria para files systems
   //const fs = require('fs'); 

   

   /**
    * yargs configurados 
    * node app listar --help
    * node app listar -b 15
    * node app listar -l=20 --base=15
    */

    //Si deseamos extraer algo que queramos especificamente de las importaciones despues final del parentecias poner .argv
    const argv = require('./config/yargs').argv;
    const colors = require('colors');

   /** Uso de require para poder hacer uso de la función crearArchivo */
   const { crearArchivo, listarTabla } = require('./multiplicar/mutiplicar'); 


   let comando = argv._[0];

   switch( comando ){
      case 'listar':
         listarTabla(argv.base, argv.limite)
         break;

      case 'crear':
         crearArchivo( argv.base , argv.limite)
         .then(archivo => console.log(`Archivo creado: ${ archivo }`))
         .catch(err => console.log(err));
         break

         default:
         console.log('comando no reconocido');
   }
   //Variable que se especifica el valor de la base para la tabla de multiplicar
   //let base = 'abc';

   //let argv2 = process.argv;
   //console.log('Limite', argv.limite);
   //console.log(argv2);
   //let parametro = argv[2];
   //let base = parametro.split('=')[1]
   //console.log(base);

/** 
 * Función que se ejecuta para asi llamar a la otra función que se
encuentra en el archivo multiplicar,
si no hay un error muestra el resultado en caso contrario
captura el error y lo muestra.
*/


/*npm init para crear la estructura de nuetro proyecto node JS
el cual crea un archivo package.json

npm i yargs --save
Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface.

*/