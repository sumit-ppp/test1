import { NextFunction, Request, Response, Router } from "express";
import { bookService } from "../book-crud.service";
import { stat } from "fs";

const bookServiceListner = new bookService();

class BookCrudRouter {
  public router: Router;
  constructor() {
    this.router = Router();
    this.mountRoutes();
  }
  private mountRoutes() {
    this.router.post("/addBook", this.addBook);
    this.router.get("/getBook", this.getBook);
    this.router.delete("/deletebook/:id", this.deleteBookById);
    //this.router.put('/update',this.updateBook);
  }

  async addBook(req: Request, res: Response, next: NextFunction) {
    await bookServiceListner.saveBook(req.body);
    res.json({ status: true, message: "data inserted", data: null });
  }
  async getBook(req: Request, res: Response) {
    throw new Error();
    const result = await bookServiceListner.getBooks(req.params.id);
    res.json({ status: true, message: "data fetched", data: result });
  }
  async deleteBookById(req: Request, res: Response, next: NextFunction) {
    console.log(req.params.id);
    const result = await bookServiceListner.deleteBook(req.params.id);
    console.log(result);
    if (result) {
      res.json({ status: true, message: "record deleted", data: null });
    }
    res.json({ status: false, message:'not deleted', data:null});
  }
}


export = new BookCrudRouter().router;
