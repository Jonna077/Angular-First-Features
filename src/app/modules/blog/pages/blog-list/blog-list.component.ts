import { Blog } from './../../models/blog';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent {
  
  @Input() passedBlog: Blog | undefined

  blogs: Blog[] = [
    {
      title: 'Blog 1', 
      description: 'My Blog 1',
      published: true,
      authorActive: false
    },
    {
      title: 'Blog 2', 
      description: 'My Blog 2',
      published: false,
      authorActive: true
    },
    {
      title: 'Blog 3', 
      description: 'My Blog 3',
      published: true,
      authorActive: true
    }
  ]

  // executeAction = (blog: Blog) => {
  //   console.log(blog)
  // }

  executeAction(blog: Blog) {
    //console.log(blog)
    // this.passedBlog = blog
  }
}
