import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ds-button',
  templateUrl: './button.component.html',
  styles: []
})
export class ButtonComponent implements OnInit {
  @Input() spacingStack: 'xxxs'|'xxs'|'xs'|'sm'|'md'|'lg';
  constructor() { }

  ngOnInit(): void {
  }

}
