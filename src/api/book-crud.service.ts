import { bookModel } from "../entities/book-detail.entity";
import { HttpService } from "../shared/http.service";
import { BookDetails } from "../entities/interfaces/book-detail";
import { QueueConnector } from "../shared/queue_connectior";
import { RedisService } from '../shared/radis.service';

export class bookService {
  httpService: HttpService;
  constructor() {
    this.httpService = new HttpService();
  }
  async saveBook(book: BookDetails): Promise<boolean> {
    const newModel = new bookModel(book);
    const queuedata = {
      metadata: {
        entity: "MAIL SERVICE",
        operation: "SEND EMAIL",
        source: "testedBody",
        destination: "codingtest",
        timestamp: "2020-11-05T10:41:46.171Z",
        emailType: "gmail",
        receiver: "sumitsinghania68@gmail.com"
      },
      data: {
        bookName: `${book.bookName}`
      }
    };
    QueueConnector.sendMessageToQueue("ai-mail-service", queuedata);
    RedisService.setValue(book.bookName, book.bookPrice);
    console.log(RedisService.getValue(book.bookName));
    await newModel.save();

    return true;
  }
  async getBooks(bookId: string): Promise<any> {
    const resData = await bookModel.find({ bookId });
    if (resData.length === 0) {
      return "no data here";
    }
    return resData;
  }
  async deleteBook(bookId: string): Promise<boolean> {
    console.log(bookId);
    await bookModel.findOneAndDelete({ _id: bookId });
    return true;
  }
}
