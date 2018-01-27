var chalk = require('chalk');

var m = chalk.magenta;
var i = chalk.inverse;

var string = i("npm run bananas")
            +m(" will automatically trigger defined npm script ")
            +i("prebananas")
            +m(" before it runs and ")
            +i("postbananas")
            +m(" after it runs.");

console.log(string);

