import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistapageComponent } from './artistapage.component';

describe('ArtistapageComponent', () => {
  let component: ArtistapageComponent;
  let fixture: ComponentFixture<ArtistapageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistapageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
