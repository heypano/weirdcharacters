import path from "path";
import { getAuthData } from "./esAuth";
import { Client } from "@elastic/elasticsearch";
import express from "express";
import open from "open";
const { username, password } = getAuthData();

//https://www.robinwieruch.de/node-express-server-rest-api
// https://medium.com/bb-tutorials-and-thoughts/how-to-write-production-ready-node-js-rest-api-javascript-version-db64d3941106

// ES client
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
// Express server
const server = express();
const domain = "http://localhost";
const port = 3030;
const firstPage = `${domain}:${port}/decimal/123`;

setupAPIEndpoints(server);

server.listen(port, function(err) {
    if (err) {
        console.error(err);
    } else {
        open(firstPage).then(() => {
            console.log(`Opened ${firstPage}`);
        });
    }
});

/**
 * Set up the API endpoints
 * @param server
 */
function setupAPIEndpoints(server) {
    server.get("/decimal/:decimalCode", function(req, res) {
        try {
            client
                .search({
                    df: "code",
                    q: req.params.decimalCode
                })
                .then(response => {
                    const hits = response.body.hits.hits.map(
                        hit => hit._source
                    );
                    res.json(hits);
                    console.log(JSON.stringify(hits, null, 2));
                });
        } catch (e) {
            res.status(400).send("I dunno");
        }
    });
}

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
