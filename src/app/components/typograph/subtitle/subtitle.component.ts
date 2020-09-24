import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ds-subtitle',
  templateUrl: './subtitle.component.html',
  styles: []
})
export class SubtitleComponent implements OnInit {
  @Input() spacingStack: 'xxxs'|'xxs'|'xs'|'sm'|'md'|'lg';
  constructor() { }

  ngOnInit(): void {
  }

}
