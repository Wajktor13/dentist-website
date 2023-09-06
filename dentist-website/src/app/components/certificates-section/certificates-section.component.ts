import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-certificates-section',
    templateUrl: './certificates-section.component.html',
    styleUrls: ['./certificates-section.component.css']
})

export class CertificatesSectionComponent implements OnInit {
    private certsDivs: HTMLDivElement[] = [];
    private currCertIndex: number = 1;
    private transitionTimeSeconds: number = 0.6;
    private inTransition: boolean = false;

    public ngOnInit(): void {
        this.certsDivs = Array.from(document.querySelectorAll(".cert-wrapper"));
    }

    public slideLeft(): void {
        if (this.inTransition){
            return;
        }

        this.inTransition = true;

        let prevDiv: HTMLDivElement =  this.certsDivs[this.currCertIndex];
        this.currCertIndex -= 1;

        if (this.currCertIndex < 0) {
            this.currCertIndex = this.certsDivs.length - 1;
        }

        let currDiv: HTMLDivElement = this.certsDivs[this.currCertIndex];

        this.performTransition(prevDiv, currDiv, -100);
    }


    public slideRight(): void {
        if (this.inTransition){
            return;
        }

        this.inTransition = true;

        let prevDiv: HTMLDivElement =  this.certsDivs[this.currCertIndex];
        this.currCertIndex += 1;

        if (this.currCertIndex >= this.certsDivs.length) {
            this.currCertIndex = 0;
        }

        let currDiv: HTMLDivElement = this.certsDivs[this.currCertIndex];

        this.performTransition(prevDiv, currDiv, 100);
    }

    private performTransition(prevDiv: HTMLDivElement, currentDiv: HTMLDivElement, translateValue: number) {
        prevDiv.style.transition = "";
        currentDiv.style.transform = `translate(${translateValue}%, 0)`;
        currentDiv.style.zIndex = "20";

        setTimeout(()=>{
            currentDiv.style.transition = `transform ${this.transitionTimeSeconds}s ease`;
            currentDiv.style.transform = "translate(0, 0)";

            setTimeout(()=>{
                currentDiv.style.zIndex = "10";
                prevDiv.style.zIndex = "0";
                this.inTransition = false;

            }, this.transitionTimeSeconds * 1000)
        }, 1)
    }
}

