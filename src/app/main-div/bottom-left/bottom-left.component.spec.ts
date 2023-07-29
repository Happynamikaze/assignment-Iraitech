import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomLeftComponent } from './bottom-left.component';

describe('BottomLeftComponent', () => {
  let component: BottomLeftComponent;
  let fixture: ComponentFixture<BottomLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomLeftComponent]
    });
    fixture = TestBed.createComponent(BottomLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
