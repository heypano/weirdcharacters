import { getPath } from "./elasticSearch";

const fs = require("fs");
import { green, red } from "chalk";

const authFilePath = "./esAuth.json";

export const getAuthData = () => {
    try {
        const authRawData = fs.readFileSync(getPath(authFilePath));
        let { username, password } = JSON.parse(authRawData.toString());
        if (!username || !password) {
            throw "";
        }
        return {
            username,
            password
        };
    } catch {
        console.error(
            red(
                `Missing Elastic Search authentication file/data: ${authFilePath} in the format {username, password}`
            )
        );
        process.exit();
    }
};
