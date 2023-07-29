import { Component, OnInit  } from '@angular/core';
import { CommunicationService } from '../../communication.service';
@Component({
  selector: 'app-top-left',
  templateUrl: './top-left.component.html',
  styleUrls: ['./top-left.component.css']
})
export class TopLeftComponent implements OnInit {
  sharedText: string = '';

  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
    this.communicationService.sharedText$.subscribe(text => {
      this.sharedText = text;
    });
  }
}