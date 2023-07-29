import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XComponentClass } from './x.component';

describe('XComponent', () => {
  let component: XComponentClass;
  let fixture: ComponentFixture<XComponentClass>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XComponentClass]
    });
    fixture = TestBed.createComponent(XComponentClass);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
