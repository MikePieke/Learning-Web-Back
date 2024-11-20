/* Starting with Node JS */

/* const os = require('os');

// Get CPU information
console.log(os.cpus());

// Get GPU

const si = require('systeminformation');

si.graphics().then(data => {
    console.log(data.controllers); // This will display an array of GPU controllers
}).catch(error => console.error(error));

console.log(os.type());
console.log(os.version()); 
*/


// const {sum,substract,multiply,division} = require('./math');
// const math = require('./math');

// console.log(math.sum(7,5));






// Read and Write into the files

const { error } = require('console');
const fs = require('fs');
const path = require('path');


/* fs.readFile('./someText.txt', 'utf8',(error,data) => {
    if (error) throw error;
    console.log(data.toString()); // Remember to set this to toString(), beacuse this will always return the buffer value
}); */

// fs.readFile(path.join(__dirname, 'files', 'someText.txt'), 'utf-8' , (error,data) => {
//     if (error) throw error;
//     console.log(data);
// });

/* 

Async With AsyncFuntions

fs.writeFile(path.join(__dirname, 'files', 'someText.txt'), 
'Hello Niger', (error) => {
    if (error) throw error;
    console.log('Writing Completed');

    fs.rename(path.join(__dirname, 'files', 'someText.txt'), path.join(__dirname, 'files', 'newText.txt'), (error) => {
        if (error) throw error;
        console.log('Renaming Completed');

        fs.readFile(path.join(__dirname, 'files', 'newText.txt'), 'utf-8', (error, data) => {
            if (error) throw error;
            console.log(data);
        })
    });
}) 
*/

/* 
Async with Async/Await

let oldFilePath = path.join(__dirname, 'files', 'oldText.txt');

async function makeNewFileFromOld(path, info) {
    try {
        const fileSystem = require('fs').promises;
        const mainPath = require('path');
        const newPath = mainPath.join(__dirname, 'files', 'newText.txt')

        const oldFileReading = await fileSystem.readFile(path,'utf-8');
        console.log(oldFileReading);

        await fileSystem.writeFile(path, info);
        await fileSystem.rename(path,newPath);

        const newFromOldFile = await fileSystem.readFile(newPath, 'utf-8');
        console.log(newFromOldFile);

    } catch(error) {
        console.error(`Somethins went wrong with error: ${error}`);
    }
}

makeNewFileFromOld(oldFilePath,'Yes, yes Shkibidi Toilet'); 
*/

/* Reading Data By Stream and DataChunks */

// const stream = require('fs');

/* 
Reading Files

const readingChunk = stream.createReadStream(path.join(__dirname, 'files', 'BigOneFile.txt'), {encoding: 'utf-8'});

readingChunk.on('data', (dataChunk) => {
    console.log(dataChunk);
})

readingChunk.on('end', () => {
    console.log('Reading file end');
})

readingChunk.on('close', () => {
    console.log('File has been closed');
}) 
 */


/* 
Writting into the Files

const writingToFileByChunk = stream.createWriteStream(path.join(__dirname, 'files', 'newText.txt'), {encoding: 'utf-8'});

writingToFileByChunk.write('This should be the large one text but something went wrong gdf gdf gdf gf gdf gfd gdf gd fg ');
writingToFileByChunk.end(); // Specify this method when you want to use the .on('finish')

writingToFileByChunk.on('finish', () => {
    console.log('Writing finished');
})

writingToFileByChunk.on('erorr', (error) => {
    console.error(`Error: ${error}`)
}) 
*/

// const streamSync = require('fs');

// const fromWhere = streamSync.createReadStream(path.join(__dirname, 'files', 'BigOneFile.txt'), {encoding: 'utf-8'});
// const toWhere = streamSync.createWriteStream(path.join(__dirname, 'files', 'SmallOneFile.txt'),{encoding: 'utf-8'})

// fromWhere.on('data', (data) => {
//     const toWhere = streamSync.createWriteStream(path.join(__dirname, 'files', 'SmallOneFile.txt'),{encoding: 'utf-8'});
//     toWhere.write(data);
//     toWhere.end();
//     toWhere.on('finish', () => {
//         console.log('Rekoping is finnished');
//     })
// })

// fromWhere.pipe(toWhere);






/* NPM Modules */


console.log('hi');