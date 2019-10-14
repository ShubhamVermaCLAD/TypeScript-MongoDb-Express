"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const envConfig = require('../config/envConfig.json');
const databaseConfig = envConfig[process.env.NODE_ENV || 'development'].database;
mongoose.connect(`${databaseConfig.host}${databaseConfig.port}/${databaseConfig.database}`, { useNewUrlParser: true });
const book = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true },
});
const books = mongoose.model('Books', book);
module.exports = books;
//# sourceMappingURL=mogoConnectionAndSchema.js.map