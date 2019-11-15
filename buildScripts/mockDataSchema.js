export const schema = {
    type: "object",
    properties: {
        cats: {
            // json-server will expose this as an endpoint
            type: "array",
            minItems: 3,
            maxItems: 5,
            items: {
                type: "object",
                properties: {
                    id: {
                        type: "integer",
                        unique: true,
                        minimum: 1
                    },
                    name: {
                        type: "string",
                        pattern: "^(Todd)|(Manoli)|(Dexter)"
                    },
                    description: {
                        type: "string",
                        faker: "company.catchPhrase"
                    },
                    firstName: {
                        type: "string",
                        faker: "name.firstName"
                    },
                    lastName: {
                        type: "string",
                        faker: "name.lastName"
                    },
                    email: {
                        type: "string",
                        faker: "internet.email"
                    }
                },
                required: [
                    "id",
                    "name",
                    "description",
                    "firstName",
                    "lastName",
                    "email"
                ] // These properties will not be generated if not required
            }
        }
    },
    required: ["cats"]
};
