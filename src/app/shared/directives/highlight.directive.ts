import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight: string | undefined

  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.backgroundColor = 'gold'
  }

  @HostListener('mouseenter') onMouseEnter = () => {
    this.highlight(this.appHighlight ?? 'red')
  }

  // click, change, keyup, blur, keydown, mouseenter, mouseleave
  @HostListener('mouseleave') onMouseLeave = () => {
    this.highlight('')
  }

  private highlight = (color: string) => {
    this.el.nativeElement.style.backgroundColor = color
  }


}
