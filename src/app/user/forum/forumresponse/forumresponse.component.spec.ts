import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumresponseComponent } from './forumresponse.component';

describe('ForumresponseComponent', () => {
  let component: ForumresponseComponent;
  let fixture: ComponentFixture<ForumresponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumresponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
