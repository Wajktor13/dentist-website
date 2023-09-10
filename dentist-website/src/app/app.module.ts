import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgTiltModule } from '@geometricpanda/angular-tilt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CertificatesSectionComponent } from './components/certificates-section/certificates-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';


@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        AboutMeComponent,
        CertificatesSectionComponent,
        ServicesSectionComponent,
        GalleryComponent,
        ContactSectionComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgTiltModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
