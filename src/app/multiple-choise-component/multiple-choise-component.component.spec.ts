import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoiseComponentComponent } from './multiple-choise-component.component';

describe('MultipleChoiseComponentComponent', () => {
  let component: MultipleChoiseComponentComponent;
  let fixture: ComponentFixture<MultipleChoiseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleChoiseComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleChoiseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
