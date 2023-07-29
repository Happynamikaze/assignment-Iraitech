import { Component, OnInit  } from '@angular/core';
import { CommunicationService } from '../../communication.service';
@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  inputText: string = '';

  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
  }

  onInputChange() {
    this.communicationService.setSharedText(this.inputText);
  }
}
