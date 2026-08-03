const path = require('node:path');
const fs = require('node:fs');
const { log, error } = require('node:console');
const EventEmitter = require("events");
const os = require("os");
const zlib = require("zlib");
const { pipeline } = require("stream");

const emitter = new EventEmitter();


//Part 1

//1
// let print = function () {
//     let fileExt = __filename;
//     let dirExt = __dirname;
//     const extObject = { File: fileExt, Dir: dirExt };
//     console.log(extObject);
    
// }
// print();

/* ----------------------------------------- */

//2

// let fileName = function (filePath) {
//     const fileName = path.basename(filePath);
//     console.log(fileName);
// }
// fileName(__filename);

/* ----------------------------------------- */

//3

// const pathObject = { dir: "/folder", fileName: "app", ext: ".js" };

// let finalForm = function (pathObject) {
//     const { dir, fileName, ext } = pathObject;
//     const finalForm = path.join(dir, fileName + ext);
//     console.log(finalForm);
    
// }
// finalForm(pathObject);

/* ----------------------------------------- */

//4

// const pathValue = "/docs/readme.md";

// let fileExt = function (pathValue) {
//     let fileName = path.basename(pathValue);
//     let ext = fileName.split('.')[1];
//     console.log(ext);
// }

// fileExt(pathValue);
/* ----------------------------------------- */

//5

// const pathValue = "/home/app/main.js";

// let nameAndExt = function (pathValue) {
//     const parsedPath = path.parse(pathValue);
//     const { name : Name, ext : Ext } = parsedPath;
    
//     const newObject = { Name, Ext };
//     console.log(newObject);
// }

// nameAndExt(pathValue);
/* ----------------------------------------- */

//6

// const pathValue = "/home/user/file.txt";

// let isAbs = function (pathValue) {
//     return path.isAbsolute(pathValue);
// }
// console.log(isAbs(pathValue));

/* ----------------------------------------- */

//7

// let funJoins = function (...input) {
//     return path.join(...input);
// }
// console.log(funJoins("src","components","app.js"));
/* ----------------------------------------- */

//8

// let resolvePath = input => {
//     return path.resolve(input);
// }
// console.log(resolvePath("./index.js"));

/* ----------------------------------------- */

//9

// let joinPaths = (x, y) => {
//     return path.join(x, y);
// }
// console.log(joinPaths("/folder1", "folder2/file.txt"));

/* ----------------------------------------- */

//10

// let deleteFile = function (filePath) {
//     fs.unlink(filePath, (err) => {
//         if (err) {
//             console.log(err.message);
//             return;
//         }
//         console.log(`${path.basename(filePath)} is deleted.`);
//     });
// }

// deleteFile("");
/* ----------------------------------------- */

//11

// let createDir = function () {
//     return fs.mkdirSync("dir");
// }
// console.log(createDir());

/* ----------------------------------------- */

//12

// emitter.on('start', () => {
//     console.log("Welcome event triggered");
// });

// emitter.emit('start');

/* ----------------------------------------- */

//13

// emitter.on('login', (userName) => {
//     console.log("user logged in : ", userName);
// });

// emitter.emit('login', "moaz");
/* ----------------------------------------- */

//14

// let fileData = function (filePath) {
//     return fs.readFileSync(filePath , {encoding : 'utf-8'});
// }
// console.log(fileData(path.join(__dirname, "file.txt")));

/* ----------------------------------------- */

//15

// fs.writeFile(path.join(__dirname, "file.txt"), "Async Save", (err) => {
//     if (err) {
//         console.log(err.message);
//         return;
//     }
//     console.log("success!!");
// });

/* ----------------------------------------- */

//16

// let dirExist = function (dirPath) {
//     return fs.existsSync(dirPath);
// }
// console.log(dirExist(""));

/* ----------------------------------------- */

//17

// let osObject = function () {
//     return {
//         platform: os.platform(),
//         architecture: os.arch()
//     }
// }
// console.log(osObject());
/* ----------------------------------------- */

//18

// const readStream = fs.createReadStream(path.join(__dirname, "file.txt"), 'utf-8');

// readStream.on('data', (chunk) => {
//     console.log(chunk);
// });

/* ----------------------------------------- */

//19

// const readStream = fs.createReadStream(path.join(__dirname, "file.txt"), 'utf-8');
// const writeStream = fs.createWriteStream(path.join(__dirname, "copy.txt"), 'utf-8');

// readStream.on('data', (chunk) => {
//     writeStream.write(chunk);
// });

// readStream.on("end", () => {
//     writeStream.end();
//     console.log("Copy Finished");
// });

/* ----------------------------------------- */

//20

// const inputFile = path.join(__dirname, "file.txt");
// const outputFile = path.join(__dirname, "copy.txt");

// let ok = function (input, output) {
//     pipeline(
//         fs.createReadStream(input),
//         zlib.createGzip(),
//         fs.createWriteStream(output),
//         (err) => {
//             if (err) {
//                 console.log(err.message);
//                 return;
//             }
//             console.log("File compressed successfully.");
//         }
//     )
// }

// ok(inputFile, outputFile);
/* ----------------------------------------- */
/* ----------------------------------------- */
/* ----------------------------------------- */