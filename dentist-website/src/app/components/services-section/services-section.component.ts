import { Component, OnInit, ElementRef } from '@angular/core';
import VanillaTilt from "vanilla-tilt"


@Component({
    selector: 'app-services-section',
    templateUrl: './services-section.component.html',
    styleUrls: ['./services-section.component.css']
})

export class ServicesSectionComponent implements OnInit {

    constructor (
        private elRef: ElementRef
        ) { }

    ngOnInit() {
        VanillaTilt.init(
            this.elRef.nativeElement.querySelectorAll(".service-tile"), 
            {   max: 25,
                speed: 400,
                scale: 1.05,
                glare: true
            });
        }
}
