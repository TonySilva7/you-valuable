"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
require("express-async-errors");
require("reflect-metadata");
var cors_1 = __importDefault(require("cors"));
require("./database");
var routes_1 = require("./routes");
var app = express_1.default();
dotenv_1.default.config();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(routes_1.router);
app.use(function (err, request, response, next) {
    if (err instanceof Error) {
        return response.status(400).json({
            error: err.message,
        });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    });
});
app.listen(process.env.PORT || 3333);
