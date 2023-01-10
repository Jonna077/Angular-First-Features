import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookDetails: any[] = [
    {
      id: 101,
      name: 'Noli Me Tangere',
      authors: ['Dr. Jose P. RizaL'],
      isbn: '1225896487'
    },
    {
      id: 102,
      name: 'The Great Gatsby',
      authors: ['F. Scott Fitzgerald'],
      isbn: '2658745210'
    },
    {
      id: 103,
      name: 'Invisible Man',
      authors: ['Ralph Ellison'],
      isbn: '8954256301'
    }
  ];

  constructor() {}

  getDetails() {
    return this.bookDetails
  }
}