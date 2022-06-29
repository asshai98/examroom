import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleResponseComponentComponent } from './multiple-response-component.component';

describe('MultipleResponseComponentComponent', () => {
  let component: MultipleResponseComponentComponent;
  let fixture: ComponentFixture<MultipleResponseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleResponseComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleResponseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
