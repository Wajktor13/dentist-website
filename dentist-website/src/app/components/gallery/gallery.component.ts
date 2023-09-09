import { Component } from '@angular/core';


@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})

export class GalleryComponent {
    private noImages: number = 15;
    public numbers: number[];

    constructor() {
        this.numbers = Array(this.noImages).fill(0).map((_, i)=>i);
    }

    public galleryImageClicked(event: Event){
        console.log((event.target as HTMLImageElement).src);
    }
}
