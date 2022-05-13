import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PericosComponent } from './pericos.component';

describe('PericosComponent', () => {
  let component: PericosComponent;
  let fixture: ComponentFixture<PericosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PericosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PericosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
