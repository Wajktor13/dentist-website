import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';


@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.css']
})

export class AboutMeComponent implements OnInit, OnDestroy {
    public imagesUrls: string[] = ["assets/clinic/1.jpg", "assets/clinic/2.jpg", "assets/clinic/3.jpg", "assets/clinic/4.jpg", "assets/clinic/5.jpg"];
    public images: HTMLImageElement[] = [];
    public currentImageIndex: number = 0;
    private intervalTime: number = 4500;
    private changeBackgroundSub: Subscription | null = null;

    public ngOnInit(): void {
        this.loadImages();

        this.changeBackgroundSub = interval(this.intervalTime).subscribe(_ => this.currentImageIndex = (this.currentImageIndex + 1) % this.imagesUrls.length);
    }

    public ngOnDestroy(): void {
        this.changeBackgroundSub?.unsubscribe();
    }

    public getCurrentImageUrl(): string {
        return this.imagesUrls[this.currentImageIndex];
    }

    private loadImages(): void{
        for(let i=0; i < this.imagesUrls.length; i++){
            let img = new Image();
            img.src = this.imagesUrls[i];
            this.images.push(img);
        }
    }
}
