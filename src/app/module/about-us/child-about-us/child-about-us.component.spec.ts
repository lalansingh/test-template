import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAboutUsComponent } from './child-about-us.component';

describe('ChildAboutUsComponent', () => {
  let component: ChildAboutUsComponent;
  let fixture: ComponentFixture<ChildAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
