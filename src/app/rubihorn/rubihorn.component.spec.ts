import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubihornComponent } from './rubihorn.component';

describe('RubihornComponent', () => {
  let component: RubihornComponent;
  let fixture: ComponentFixture<RubihornComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RubihornComponent]
    });
    fixture = TestBed.createComponent(RubihornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
