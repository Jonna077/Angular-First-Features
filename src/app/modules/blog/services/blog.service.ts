import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogDetails: any[] = [
    {
      id: 1101,
      title: 'Noli Me Tangere',
      description: 'Filipino Novel',
      authors: ['Dr. Jose P. RizaL'],
      comments: '',
      isbn: '1225896487'
    },
    {
      id: 1102,
      title: 'The Great Gatsby',
      description: '',
      authors: ['F. Scott Fitzgerald'],
      comments: '',
      isbn: '2658745210'
    },
    {
      id: 1103,
      title: 'Invisible Man',
      description: '',
      authors: ['Ralph Ellison'],
      comments: '',
      isbn: '8954256301'
    }
  ];

  constructor() {}

  getDetails() {
    return this.blogDetails
  }
}