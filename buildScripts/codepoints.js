import codepoints from "codepoints";
import path from "path";
import { getPath } from "./elasticSearch";

const fs = require("fs");

// write to a new file named 2pac.txt
fs.writeFile(
    getPath("../docs/codepoints.txt"),
    JSON.stringify(codepoints, null, 2),
    err => {
        // throws an error, you could also catch it here
        if (err) throw err;

        // success case, the file was saved
        console.log("codepoints saved!");
    }
);
