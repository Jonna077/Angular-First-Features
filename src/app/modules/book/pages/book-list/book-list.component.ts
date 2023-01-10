import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent  implements OnInit {
  bookDetails: any[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookDetails = this.bookService.getDetails();
  }


}