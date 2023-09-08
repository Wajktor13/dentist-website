import { Component, AfterViewInit } from '@angular/core';
import * as AOS from "aos";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent implements AfterViewInit {
    title = 'dentist-website';
    
    public ngAfterViewInit() {
        AOS.init();
    }
}
