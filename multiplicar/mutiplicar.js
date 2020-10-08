// Libreria de node js para trabajar con sistema de archivos = fs
const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {
        //Pequeño ciclo para crear el formato de la tabla de multiplicar
        console.log('================='.green);
        console.log(`tabla de ${ base }`.green);
        console.log(`=================`.green);
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`);
        }
}

/**
 * Promesa sencilla para poder crear la función que hara la creación de
 * la tabla de multiplicar dependiendo la base ingresada
 */
let data = '';
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        // Si no es numero mostrara el error
        if(!Number(base)){
            reject(`El valor introducido '${ base }' no es numero`);
            return;
        }

        //Pequeño ciclo para crear el formato de la tabla de multiplicar
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        /** 
         * Uso de la libreria file system, para escribir en un archivo
         * .txt, se le pasa primero la ruta de archivo, y se puede 
         * modificar para que muestre algun valor o variable el nombre
         * del archivo, psamos la data que contendra el archivo en su 
         * interior y por ultimo muestrael resultado en caso contrario
         * muestra el error capturado.
        */
        fs.writeFile(`tablas-multiplicar/tabla-${base} al ${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`The file has been saved! tabla-${base}`.brightGreen);
        });
    });
}

/** 
 * Objecto global, exporta objecto para que se trabaje de forma global
 * entre otras utilidades
*/
module.exports = {
    crearArchivo,
    listarTabla
}