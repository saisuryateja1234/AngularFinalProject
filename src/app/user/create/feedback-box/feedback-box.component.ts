import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-feedback-box',
  templateUrl: './feedback-box.component.html',
  styleUrls: ['./feedback-box.component.css']
})
export class FeedbackBoxComponent {
  @Input() feedback:any;
}
