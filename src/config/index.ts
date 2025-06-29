import merge from "lodash.merge";

process.env.NODE_ENV = process.env.NODE_ENV || "development";
const stage = process.env.STAGE || "local";

let envConfig;

if (stage === "production") {
  envConfig = require("./production").default;
} else if (stage === "testing") {
  envConfig = require("./testing").default;
} else {
  envConfig = require("./local").default;
}

const globalConfig = merge(
  {
    stage,
    env: process.env.NODE_ENV,
    port: 3001,
    secrets: {
      jwt: process.env.JWT_SECRET,
      dbUrl: process.env.DB_URL,
    },
  },
  envConfig
);

export default globalConfig;
