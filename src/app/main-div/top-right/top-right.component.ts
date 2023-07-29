import { Component, OnInit  } from '@angular/core';
import { CommunicationService } from '../../communication.service';
@Component({
  selector: 'app-top-right',
  templateUrl: './top-right.component.html',
  styleUrls: ['./top-right.component.css']
})
export class TopRightComponent implements OnInit {
  sharedText: string = '';

  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
    this.communicationService.sharedText$.subscribe(text => {
      this.sharedText = text;
    });
  }
}