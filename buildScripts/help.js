var chalk = require("chalk");
var [nodeExecutable, thisScript, ...args] = process.argv;
var [r, y, b, g, i] = [chalk.red, chalk.yellow, chalk.blue, chalk.green, chalk.inverse];
processHelpArguments(args);

/**
 * Process different help commands
 * @param args
 */
function processHelpArguments(args){
    switch(args.length){
        case 0:
            generalHelp();
            break;
        case 1:
            processHelpByType(args[0]);
            break;
        default:
            processComplicatedArguments(args);
    }
}

/**
 * Print General Info here
 */
function generalHelp () {

}

/**
 * Print info about a specific command
 * @param {String} type
 */
function processHelpByType (type) {
    pp(type);
}

/**
 * Print something more complicated
 * @param args
 */
function processComplicatedArguments (args) {
    console.log(y("Nothing here for now"));
}

function pp () {
    [...arguments].forEach(argument => {
        var string = JSON.stringify(argument, null, 2);
        console.log(b(string));
    });
}
