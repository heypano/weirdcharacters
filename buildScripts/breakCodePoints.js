import { getAuthData } from "./esAuth";

const { exec } = require("child_process");
const { username, password } = getAuthData();
let i = 0;
//https://gist.githubusercontent.com/97-109-107/bf9211c4a160deb4ee15/raw/83c03a4d3170c5bb91c519d5d3829c8dc2b77d00/json-split.py
setInterval(() => {
    if (i <= 244) {
        exec(
            `cat docs/codepoints.json_${i}.json | jq -c '.[]  | .id = ._id | del (._id) | {"index": {"_index": "codepoints", "_type": "cats", "_id": .id}}, .' | curl  -XPOST http://${username}:${password}@35.239.82.198/elasticsearch/_bulk --data-binary @-  -H "Content-Type: application/json"`,
            (err, stdout, stderr) => {
                if (err) {
                    // node couldn't execute the command
                    return;
                }

                // the *entire* stdout and stderr (buffered)
                console.log(`stdout: ${stdout}`);
                console.log(`stderr: ${stderr}`);
            }
        );
    } else {
        console.log("done");
    }
    i++;
}, 10000);
