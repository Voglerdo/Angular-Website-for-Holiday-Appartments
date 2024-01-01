import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerienwohnungenComponent } from './ferienwohnungen.component';

describe('FerienwohnungenComponent', () => {
  let component: FerienwohnungenComponent;
  let fixture: ComponentFixture<FerienwohnungenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FerienwohnungenComponent]
    });
    fixture = TestBed.createComponent(FerienwohnungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
