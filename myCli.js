// `List of all the commands:
//         node mycli.js view <dir-name> flat
//         node mycli.js view <dir-name> tree
//         node mycli.js organize <dir-name>
//         node mycli.js organize 
//         node mycli.js help`
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
        console.log("help command implemented");
        break;
    default :
        console.log("Invalid command, type help to see commands!!!");
        break;
}
