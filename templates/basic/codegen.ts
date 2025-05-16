import type { ConfigFile } from "@rtk-query/codegen-openapi";
import "dotenv/config";

const config: ConfigFile = {
    apiFile: "./src/app/rootApi.ts",
    schemaFile: `${process.env.VITE_API_URL}/api/schema/`,
    apiImport: "rootApi",
    hooks: true,
    tag: true,
    outputFiles: {
        "./src/app/api/users.ts": {
            filterEndpoints: (endpointName, endpoint) =>
                endpoint.path.includes("api/users/"),
            exportName: "usersApi",
        },
        "./src/app/api/token.ts": {
            filterEndpoints: (endpointName, endpoint) =>
                endpoint.path.includes("api/token/"),
            exportName: "tokenApi",
        },
    },
};
export default config;