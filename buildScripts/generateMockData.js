import jsf from "json-schema-faker";
import { schema } from "./mockDataSchema";
import fs from "fs";
import chalk from "chalk";
import faker from "faker";

const [r, y, b, g, i] = [
    chalk.red,
    chalk.yellow,
    chalk.blue,
    chalk.green,
    chalk.inverse
];
const outputFile = "./src/api/db.json";

jsf.extend("faker", function() {
    return faker;
});

jsf.resolve(schema).then(function(result) {
    fs.writeFile(outputFile, JSON.stringify(result, null, 2), function(err) {
        if (err) {
            return console.log(r(err));
        } else {
            console.log(g(`Mock Data Generated Here: ${outputFile}`));
        }
    });
});
