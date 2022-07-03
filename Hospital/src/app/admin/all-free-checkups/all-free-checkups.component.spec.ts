import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFreeCheckupsComponent } from './all-free-checkups.component';

describe('AllFreeCheckupsComponent', () => {
  let component: AllFreeCheckupsComponent;
  let fixture: ComponentFixture<AllFreeCheckupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFreeCheckupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFreeCheckupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
