import { Query, Schema } from 'mongoose';
import { Db } from 'mongodb';

const db = require('../connection_&_schema/mogoConnectionAndSchema');
export class CurdModel {
  static searchBooks(): Promise<Schema | Error> {
    return new Promise(async (resolve, reject) => {
      db.find({})
        .then((value: Schema) => {
          resolve(value);
        })
        .catch((err: Error) => {
          reject(err);
        });
    });
  }
  static addBook(book:){
    return new Promise(async (resolve, reject) => {
      const bookRecord = new db(book);
     // console.log('user',userReq);
      await bookRecord.save().then((value:Schema) =>resolve(value)).catch((error:Error) =>reject(error));
  });    
  }
}
