//         node mycli.js view <dir-name> flat
const helper = require("./commands/help");
let input = process.argv.slice(2);
let command = input[0];
let dirName = input[1];
switch(command) {
    case "view" :
        console.log("view command implemented!!");
        break;
    case "organize" :
        console.log("orgainze command implemented!!!");
        break;
    case "help" :
        helper.fun();
        break;
    default :
        console.log("Invalid command, type help to see commands!!!");
        break;
}
