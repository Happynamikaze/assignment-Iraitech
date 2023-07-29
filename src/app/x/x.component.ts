import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface YComponent {
  text: string;
}

interface XComponent {
  name: string;
  yComponents: YComponent[];
}

@Component({
  selector: 'app-x',
  templateUrl: './x.component.html',
  styleUrls: ['./x.component.css'],
})
export class XComponentClass {
  xComponents: XComponent[] = [];

  constructor(private http: HttpClient) {}

  addXComponent() {
    this.xComponents.push({ name: '', yComponents: [] });
  }

  addYComponent(xIndex: number) {
    this.xComponents[xIndex].yComponents.push({ text: '' });
  }

  saveXComponent(xItem: XComponent) {
    // Save X component's name to backend (Node.js).
    this.http.post('/api/saveXComponent', xItem).subscribe();
  }

  saveYComponent(yItem: YComponent) {
    // Save Y component's data to backend (Node.js).
    this.http.post('/api/saveYComponent', yItem).subscribe();
  }
}
