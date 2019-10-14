"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curdModel_1 = require("../models/curdModel");
curdModel_1.CurdModel.searchBooks()
    .then(value => console.log(value))
    .catch(err => console.log(err));
// export class CurdController{
//     static async
// }
//# sourceMappingURL=CurdController.js.map