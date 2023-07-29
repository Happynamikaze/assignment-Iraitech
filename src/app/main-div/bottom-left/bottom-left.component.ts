import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../communication.service';

@Component({
  selector: 'app-bottom-left',
  templateUrl: './bottom-left.component.html',
  styleUrls: ['./bottom-left.component.css']
})
export class BottomLeftComponent implements OnInit {
  sharedText: string = '';

  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
    this.communicationService.sharedText$.subscribe(text => {
      this.sharedText = text;
    });
  }
}