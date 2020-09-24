import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ds-paragraph',
  templateUrl: './paragraph.component.html',
  styles: []
})
export class ParagraphComponent implements OnInit {
  @Input() spacingStack:  'xxxs'|'xxs'|'xs'|'sm'|'md'|'lg';

  constructor() { }

  ngOnInit(): void {
  }

}
