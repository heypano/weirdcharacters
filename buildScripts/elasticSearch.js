import path from "path";
import { getAuthData } from "./esAuth";
import { Client } from "@elastic/elasticsearch";
const { username, password } = getAuthData();
const client = new Client({
    node: {
        url: new URL("http://35.239.82.198/elasticsearch"),
        id: "elasticsearch-1-vm"
    },
    auth: {
        username: username,
        password: password
    }
});

// cat data.json | jq -c '.[]  | .id = ._id | del (._id) | {"index": {"_index": "codepoints", "_type": "cats", "_id": .id}}, .' | curl  -XPOST ${username}:${password}@http://35.239.82.198/elasticsearch/_bulk --data-binary @-

// curl -XPUT '/_cluster/settings' -d '{ "transient":{ "cluster.routing.allocation.enable" : "all"}}'
// async function run(item) {
// Let's start by indexing some data
// if (item) {
//     await client.index({
//         id: item.code,
//         index: "codepoints",
//         body: item
//     });
// }
// }
//
// let i = 0;
// setInterval(() => {
//     const item = data[i];
//     i++;
//     run(item)
//         .then(response => {
//             // console.log(green("Adding item"), item, response);
//         })
//         .catch(error => {
//             console.error(red("Error Adding item"), item, error);
//         });
// }, 50);

export function getPath(location) {
    return path.join(__dirname, location);
}
