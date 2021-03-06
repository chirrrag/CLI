const fs = require("fs");
const path = require("path");

function viewHelper(dirName, mode) {
    if(mode == "flat") {
        return viewFlat(dirName);
    }
    else if(mode == "tree") {
        return viewTree(dirName, "");
    }
    else {
        console.log(`Wrong command entered!!
            type help for watching commmands!!!`);
    }
}
// 1. check whether it is file or directoryy by fs.lstatSync(path_string).isDirectory() 
function checkFileOrNot(path) {
    return fs.lstatSync(path).isFile();
}
function readFile(path) {
    return fs.readdirSync(path);
}

function viewTree(src, indent) {
    // find if a given path is file or not
    let isFile = checkFileOrNot(src);
    if(isFile == true) {
        console.log(indent, path.basename(src),  "*");
    }
    else {
        console.log(indent, path.basename(src));

        // read content of the directory from OS
        let dirContent = readFile(src);
        // apply recursion call on dircontent Array
        for(let i = 0; i < dirContent.length; i++) {
            let child = dirContent[i];
            let dirNamePath = path.join(src, child);
            viewTree(dirNamePath, indent + "\t");
        }
    }
}
function viewFlat(src) {
    let isFile = checkFileOrNot(src);
    if(isFile == true) {
        console.log(src, "*");
    }
    else {
        console.log(src);
        // read content first
        let dirContent = readFile(src);

        for(let i = 0; i < dirContent.length; i++) {
            let child = dirContent[i];
            let dirNamePath = path.join(src, child);
            viewFlat(dirNamePath);
        }
    }
}

module.exports = {
    fun : viewHelper
};