import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedNewComponent } from './featured-new.component';

describe('FeaturedNewComponent', () => {
  let component: FeaturedNewComponent;
  let fixture: ComponentFixture<FeaturedNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
