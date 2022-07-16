import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'pzs-adjuster',
  templateUrl: './adjuster.component.html',
  styleUrls: ['./adjuster.component.scss'],
})
export class AdjusterComponent implements OnInit {

  @Input() value!: number | string;
  @Output() valueChange = new EventEmitter<number>();

  resize(delta: number) {
    this.value = Math.min(10, Math.max(0, +this.value + delta));
    this.valueChange.emit(this.value);
  }

  ngOnInit(): void {}

}
