import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MenubarComponent } from './menubar/menubar.component';
import { MaterialModule } from '../material/material.module';
import { DietplanComponent } from './dietplan/dietplan.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { ForumComponent } from './forum/forum.component';
import { ItemsComponent } from './home/items/items.component';
import { HttpClientModule,HttpClient} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypefilterPipe } from '../pipes/typefilter.pipe';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './home/details/details.component';
import { FeedbackBoxComponent } from './testimonials/feedback-box/feedback-box.component';
import { DietComponent } from './dietplan/diet/diet.component';
import { DietDetailsComponent } from './dietplan/dietdetails/dietdetails.component';
import { FormpageComponent } from './forum/formpage/formpage.component';
import { ForumresponseComponent } from './forum/forumresponse/forumresponse.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FeedbackFormComponent } from './testimonials/feedback-form/feedback-form.component';
import { ContactBoxComponent } from './contact/contact-box/contact-box.component';
import { ContactComponent } from './contact/contact.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    MenubarComponent,
    HomeComponent,
    DietplanComponent,
    CreateComponent,
    ForumComponent,
    ItemsComponent,
    TypefilterPipe,
    DetailsComponent,
    FeedbackBoxComponent,
    DietComponent,
    DietDetailsComponent,
    FormpageComponent,
    ForumresponseComponent,
    TestimonialsComponent,
    FeedbackFormComponent,
    ContactComponent,
    ContactBoxComponent,

  
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  
  ],
  exports:[
    HomeComponent,
    MenubarComponent,
    
  ]
})
export class UserModule { }
