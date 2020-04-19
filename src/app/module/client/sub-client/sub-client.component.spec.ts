import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubClientComponent } from './sub-client.component';

describe('SubClientComponent', () => {
  let component: SubClientComponent;
  let fixture: ComponentFixture<SubClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
