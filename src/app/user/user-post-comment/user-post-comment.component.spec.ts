import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostCommentComponent } from './user-post-comment.component';

describe('UserPostCommentComponent', () => {
  let component: UserPostCommentComponent;
  let fixture: ComponentFixture<UserPostCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPostCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPostCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
