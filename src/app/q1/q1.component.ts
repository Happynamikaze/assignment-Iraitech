import { Component } from '@angular/core';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.css']
})
export class Q1Component {

  
  series: number[] = [2, 3, 10, 15, 26, 35, 50, 63];
  index: number = 0;
  result: number | null = null;

  onCalculateClicked() {
    if (this.index >= 0 && this.index < this.series.length) {
      this.result = this.series[this.index];
    } else {
      this.result = null;
    }
  }
}


