// import node modules
import { Request, Response } from 'express';

// import model
import Book, { IBook } from '../models/Book'

// books controller
class BooksController {

    public async home(req: Request, res: Response): Promise<void> {
        let books: IBook[] = await Book.find().lean();
        res.render('books/index', {title: 'Books List', books});
    }

    public addForm(req: Request, res: Response): void {
        res.render('books/add', {title: 'Book form'})
    }

    public async addBook(req: Request, res: Response): Promise<void> {
        const {title, author, isbn} = req.body;
        let book: IBook = new Book({title, author, isbn});
        await book.save();
        res.redirect('/books');
    }
}

const booksController = new BooksController();

export default booksController;