"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
function ensureAuthenticated(request, response, next) {
    // receive token
    var authToken = request.headers.authorization;
    // validate that the token is filled in
    if (!authToken) {
        return response.status(401).end();
    }
    // validate token
    var _a = authToken.split(" "), token = _a[1];
    try {
        var sub = jsonwebtoken_1.verify(token, "e5ce196fda8a1d8b73937431da9a55c8").sub;
        request.user_id = sub;
        return next();
    }
    catch (e) {
        return response.status(401).end();
    }
    // retrieve user information
}
exports.ensureAuthenticated = ensureAuthenticated;
