import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';


@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.css']
})

export class AboutMeComponent implements OnInit, OnDestroy {
    public currentImageIndex: number = 0;
    private intervalTime: number = 4500;
    private changeBackgroundSub: Subscription | null = null;
    private imageDivs: HTMLDivElement[] | null = null;

    public ngOnInit(): void {
        this.imageDivs = Array.from(document.querySelectorAll(".background-div")) as HTMLDivElement[];
        this.changeBackgroundSub = interval(this.intervalTime).subscribe(() => this.changeBackground());
    }

    public ngOnDestroy(): void {
        this.changeBackgroundSub?.unsubscribe();
    }

    private changeBackground(): void {
        let newImageIndex = (this.currentImageIndex + 1) % this.imageDivs!.length;

        this.imageDivs![this.currentImageIndex].style.opacity = "0";
        this.imageDivs![newImageIndex].style.opacity = "1";

        this.currentImageIndex = newImageIndex;
    }
}
