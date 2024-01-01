import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NebelhornComponent } from './nebelhorn.component';

describe('NebelhornComponent', () => {
  let component: NebelhornComponent;
  let fixture: ComponentFixture<NebelhornComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NebelhornComponent]
    });
    fixture = TestBed.createComponent(NebelhornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
