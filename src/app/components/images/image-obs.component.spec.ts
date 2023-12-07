import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageObsComponent } from './image-obs.component';

describe('ImageObsComponent', () => {
  let component: ImageObsComponent;
  let fixture: ComponentFixture<ImageObsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageObsComponent]
    });
    fixture = TestBed.createComponent(ImageObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
