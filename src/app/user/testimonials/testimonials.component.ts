import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {

  feedbacks:any
  types:string[]=[
    "All",
    "Fruits",
    "Juices",
    "Salads",
    "Vegetables"
  ]
  selected:string="All"
  
        constructor(private fs:FeedbackService)  {
           this.fs.getFeedbacks().subscribe(
              {
                  next : (data:any)=> this.feedbacks =data
              }
           )
        }

}
