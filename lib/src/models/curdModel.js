"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = require('../connection_&_schema/mogoConnectionAndSchema');
class CurdModel {
    static searchBooks() {
        return new Promise(async (resolve, reject) => {
            db.find({})
                .then((value) => {
                resolve(value);
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    static addBook(book) {
        return new Promise(async (resolve, reject) => {
            const bookRecord = new db(book);
            // console.log('user',userReq);
            await bookRecord.save().then((value) => resolve(value)).catch((error) => reject(error));
        });
    }
}
exports.CurdModel = CurdModel;
//# sourceMappingURL=curdModel.js.map