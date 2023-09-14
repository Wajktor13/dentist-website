import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import * as AOS from "aos";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
    title = 'dentist-website';
    
    constructor(
        private router: Router
    ) { }
    
    ngOnInit(): void {
        
        window.addEventListener('load', AOS.refresh);

        this.router.events.subscribe((event) => {
          if (event instanceof NavigationEnd) {
            AOS.init();
          }
        });
    }
}
