"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./config/db");
const auth_1 = require("./routes/auth");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const clientUrl = process.env.CLIENT_URL;
console.log("🚀 ~ clientUrl:", clientUrl);
app.use((0, cors_1.default)({
    origin: clientUrl,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
}));
app.use("/", (0, auth_1.routes)());
(0, db_1.dbConnect)();
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("app is listening on port ", PORT);
});
