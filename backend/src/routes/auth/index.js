"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const controllers_1 = require("../../controllers");
const routes = () => {
    const router = (0, express_1.Router)();
    router.route("/register")
        .post(controllers_1.signupUser);
    router.route("/user/:id")
        .get(controllers_1.getUser);
    return router;
};
exports.routes = routes;
