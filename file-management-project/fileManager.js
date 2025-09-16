// CommonJS
import fs from 'fs';

function createDirectory(dirPath){
    return new Promise((resolve, reject)  => {
        fs.mkdir(dirPath, {recursive: true}, (err) => {
            if(err) {
                reject(err)
            } else {
                resolve(`Directory '${dirPath}' created successfuly`)
            }
        })
    })
}

function createFile(filePath, content = '') { // Content com parâmetros opcionais 
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err) =>{
            if(err) {
                reject(err);
            } else {
                resolve(`File '${filePath}' created succesfully`);
            }
        })
    })
}

function listFiles (dirPath) {
    // Retorna uma Promise que resolve com a lista de arquivos
    return new Promise((resolve, reject) => {
        fs.readdir(dirPath, (err, files) => {
            if(err) {
                reject(err); // Rejeita a Promisse em caso de erro
            } else {
                resolve(files); // Resolve a Promise com a lista de arquivos
            }
        })
       
    })

}

function readFile (filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if(err){
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

function writeFile(filePath, content){ // Content com parâmetro obrigatório
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err) => {
            if(err){
                reject(err);
            } else {
                resolve('File written successfully!')
            }
        })
    })
}

function deleteFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.unlink(filePath, (err) => {
            if(err){
                reject(err);
            } else {
                resolve('File deleted successfully!')
            }
        })
    })
}



export default {createDirectory, createFile, listFiles, readFile, writeFile, deleteFile}