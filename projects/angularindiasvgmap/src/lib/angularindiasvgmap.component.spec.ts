import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularindiasvgmapComponent } from './angularindiasvgmap.component';

describe('AngularindiasvgmapComponent', () => {
  let component: AngularindiasvgmapComponent;
  let fixture: ComponentFixture<AngularindiasvgmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularindiasvgmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularindiasvgmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
