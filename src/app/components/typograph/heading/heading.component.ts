import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ds-heading',
  templateUrl: './heading.component.html',
  styles: []
})
export class HeadingComponent implements OnInit {
  @Input() size: 'lg'|'md'|'sm'|'xs';
  @Input() spacingStack:  'xxxs'|'xxs'|'xs'|'sm'|'md'|'lg';
  constructor() { }

  ngOnInit(): void {
  }

}
