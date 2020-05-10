import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDatepcikerComponent } from './custom-datepciker.component';

describe('CustomDatepcikerComponent', () => {
  let component: CustomDatepcikerComponent;
  let fixture: ComponentFixture<CustomDatepcikerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDatepcikerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDatepcikerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
