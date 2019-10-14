import { CurdModel } from '../models/curdModel';

CurdModel.searchBooks()
  .then(value => console.log(value))
  .catch(err => console.log(err));

CurdModel.addBook({
    "title":"Hello",
    "author":"shubham"
})
// export class CurdController{
//     static async
// }

