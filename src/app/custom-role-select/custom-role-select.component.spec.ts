import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRoleSelectComponent } from './custom-role-select.component';

describe('CustomRoleSelectComponent', () => {
  let component: CustomRoleSelectComponent;
  let fixture: ComponentFixture<CustomRoleSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomRoleSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomRoleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
