import merge from "lodash.merge";

let NODE_ENV = process.env.NODE_ENV || "development";
let STAGE = process.env.STAGE || "local";

let envConfig;

if (STAGE === "local"){
    envConfig = require("./local").default;
} else if (STAGE === "testing") {
    envConfig = require("./testing").default;

} else {
    envConfig = require("./production").default;

}


export default merge({
    port: process.env.PORT || 3000,
    secrets: {
        MONGODB_URI: "mongodb+srv://ibrahimrehman1:<password>@cluster0.ombuy.mongodb.net/?retryWrites=true&w=majority"
    }
}, envConfig);