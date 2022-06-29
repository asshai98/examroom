import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuestionComponentComponent } from './view-question-component.component';

describe('ViewQuestionComponentComponent', () => {
  let component: ViewQuestionComponentComponent;
  let fixture: ComponentFixture<ViewQuestionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewQuestionComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewQuestionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
