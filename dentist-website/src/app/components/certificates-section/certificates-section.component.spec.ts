import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatesSectionComponent } from './certificates-section.component';

describe('CertificatesSectionComponent', () => {
  let component: CertificatesSectionComponent;
  let fixture: ComponentFixture<CertificatesSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificatesSectionComponent]
    });
    fixture = TestBed.createComponent(CertificatesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
