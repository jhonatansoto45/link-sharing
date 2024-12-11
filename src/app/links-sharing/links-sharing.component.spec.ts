import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksSharingComponent } from './links-sharing.component';

describe('LinksSharingComponent', () => {
  let component: LinksSharingComponent;
  let fixture: ComponentFixture<LinksSharingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksSharingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
