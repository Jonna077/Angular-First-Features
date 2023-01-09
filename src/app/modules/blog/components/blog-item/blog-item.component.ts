import { Blog } from './../../models/blog';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent {

  // @Input('blogItem') blog: Blog | undefined
  @Input() blog: Blog | undefined
  // @Output('outItem') actionEmitter = new EventEmitter<Blog>();
  @Output() actionEmitter = new EventEmitter<Blog>();

  @Output() siblingEmitter = new EventEmitter<string>();
  @Input() acceptFromSibling: string | undefined

  sendAction = () => {
    this.actionEmitter.emit(this.blog);
  }
}
