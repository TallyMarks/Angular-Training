import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleuserinfoComponent } from './singleuserinfo.component';

describe('SingleuserinfoComponent', () => {
  let component: SingleuserinfoComponent;
  let fixture: ComponentFixture<SingleuserinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleuserinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleuserinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
