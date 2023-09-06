import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-certificates-section',
    templateUrl: './certificates-section.component.html',
    styleUrls: ['./certificates-section.component.css']
})

export class CertificatesSectionComponent implements OnInit {
    private certsDivs: HTMLDivElement[] = [];
    private goToCertButtons: HTMLButtonElement[] = [];
    private currCertIndex: number = 5;
    private inTransition: boolean = false;

    public ngOnInit(): void {
        this.certsDivs = Array.from(document.querySelectorAll(".cert-wrapper"));
        this.goToCertButtons = Array.from(document.querySelectorAll(".go-to-cert-button"));
    }

    public slideLeft(transitionTimeSeconds: number): void {
        if (this.inTransition){
            return;
        }

        const prevCertIndex = this.currCertIndex;
        const prevDiv: HTMLDivElement =  this.certsDivs[this.currCertIndex];
        this.currCertIndex -= 1;

        if (this.currCertIndex < 0) {
            this.currCertIndex = this.certsDivs.length - 1;
        }

        const currDiv: HTMLDivElement = this.certsDivs[this.currCertIndex];

        this.changeSelectedButton(prevCertIndex, this.currCertIndex);
        this.performTransition(prevDiv, currDiv, -100, transitionTimeSeconds);
    }

    public slideRight(transitionTimeSeconds: number): void {
        if (this.inTransition){
            return;
        }
        
        const prevCertIndex = this.currCertIndex;
        const prevDiv: HTMLDivElement =  this.certsDivs[prevCertIndex];
        this.currCertIndex += 1;

        if (this.currCertIndex >= this.certsDivs.length) {
            this.currCertIndex = 0;
        }

        const currDiv: HTMLDivElement = this.certsDivs[this.currCertIndex];

        this.changeSelectedButton(prevCertIndex, this.currCertIndex);
        this.performTransition(prevDiv, currDiv, 100, transitionTimeSeconds);
    }

    public goToCert(newCertIndex: number): void {
        if (this.inTransition){
            return;
        }

        if (newCertIndex < this.currCertIndex) {
            this.performTransition(this.certsDivs[this.currCertIndex], this.certsDivs[newCertIndex], -100, 0.8);
        } else if (newCertIndex > this.currCertIndex) {
            this.performTransition(this.certsDivs[this.currCertIndex], this.certsDivs[newCertIndex], 100, 0.8);
        }

        this.currCertIndex = newCertIndex;
    }

    public goToCertButtonClicked(newCertIndex: number): void {
        if (this.inTransition) {
            return;
        }
        
        this.changeSelectedButton(this.currCertIndex, newCertIndex);
        this.goToCert(newCertIndex);
    }

    private changeSelectedButton(prevCertIndex:number, newCertIndex: number): void {
        const currentButton: HTMLButtonElement = this.goToCertButtons[prevCertIndex];
        const nextButton: HTMLButtonElement = this.goToCertButtons[newCertIndex];

        currentButton.style.opacity = "25%";
        currentButton.style.scale = "1.0";

        nextButton.style.opacity = "100%"
        nextButton.style.scale = "1.15";
    }

    private performTransition(prevDiv: HTMLDivElement, currentDiv: HTMLDivElement, translateValue: number, transitionTimeSeconds: number): void {
        this.inTransition = true;

        prevDiv.style.transition = "";
        currentDiv.style.transform = `translate(${translateValue}%, 0)`;
        currentDiv.style.zIndex = "20";

        setTimeout(() => {
            currentDiv.style.transition = `transform ${transitionTimeSeconds}s ease`;
            currentDiv.style.transform = "translate(0, 0)";

            setTimeout(() => {
                currentDiv.style.zIndex = "10";
                prevDiv.style.zIndex = "0";
                this.inTransition = false;

            }, transitionTimeSeconds * 1000);
        }, 1);
    }
}

