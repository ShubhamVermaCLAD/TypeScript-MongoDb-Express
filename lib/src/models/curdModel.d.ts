import { Schema } from 'mongoose';
export declare class CurdModel {
    static searchBooks(): Promise<Schema | Error>;
    static addBook(book: Schema): Promise<unknown>;
}
