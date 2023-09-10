import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
    public showFullGallery: boolean = false;
    public fullPhotoView: boolean = false;
    private noImages: number = 14;
    public numbers: number[];
    public fullImgSrc: string = "";

    constructor() {
        this.numbers = Array(this.noImages).fill(0).map((_, i)=>i);
    }

    ngOnInit(): void {
    }

    public galleryImageClicked(event: Event){
        this.toggleFullPhotoView();

        this.fullImgSrc = ("../../.." + ((event.target as HTMLImageElement).src).slice(21)).replace("reduced", "full");
    }

    public toggleFullGallery(): void {
        this.showFullGallery = !this.showFullGallery;
    }

    public toggleFullPhotoView(): void {
        this.fullPhotoView = !this.fullPhotoView;
    }
}
