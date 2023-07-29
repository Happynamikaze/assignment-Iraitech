import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../communication.service';


@Component({
  selector: 'app-bottom-right',
  templateUrl: './bottom-right.component.html',
  styleUrls: ['./bottom-right.component.css']
})
export class BottomRightComponent implements OnInit {
  sharedText: string = '';

  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
    this.communicationService.sharedText$.subscribe(text => {
      this.sharedText = text;
    });
  }
}