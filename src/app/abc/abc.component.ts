import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AbcComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {

  }

  isShow = false;

  items = [];

  click() {
    this.items = [1];
  }

  click2() {
    this.items = [1, 2];
  }

}
