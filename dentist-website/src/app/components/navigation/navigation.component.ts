import { Component, ElementRef, HostListener, OnInit } from '@angular/core';


@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {
    public showMobileMenu: boolean = false;
    private menuFixedBreakpoint: number = 108; 
    private menuFixed: boolean = false;
    private menu: HTMLDivElement | null = null;
    private sections!: HTMLElement[];
    private navTiles!: HTMLDivElement[];
    private selectedNavTile!: HTMLDivElement;

    constructor () { }

    public ngOnInit(): void {
        this.menu = document.getElementById("menu") as HTMLDivElement;
        this.sections = Array.from(document.querySelectorAll('section'));
        this.navTiles = Array.from(document.querySelectorAll('.nav-tile'));
    }

    public toggleMobileMenu(): void{
        this.showMobileMenu = !this.showMobileMenu;
    }

    @HostListener("window:scroll") 
    public onWindowScroll(): void {
        this.updateFixedMenu();
        this.updateNav();
    }

    private updateFixedMenu(): void {
        if (window.scrollY >= this.menuFixedBreakpoint && !this.menuFixed && this.menu != null) {
            this.menuFixed = true;
            this.menu.style.position = "fixed";
            this.menu.style.top = "35px";

        } else if (window.scrollY < this.menuFixedBreakpoint && this.menuFixed && this.menu != null) {
            this.menuFixed = false;
            this.menu.style.position = "relative";
            this.menu.style.top = "0";
        }
    }

    public async scrollTo(elementID: string): Promise<void> {
        window.location.href = `#${elementID}`;
    
        await new Promise<void>((resolve) => {
            const checkScrollInterval = setInterval(() => {
                if (window.location.hash === `#${elementID}`) {
                    clearInterval(checkScrollInterval);
                    resolve();
                }
            }, 10);
        });
    
        const yOffset = -150;
        const element = document.getElementById(elementID);
        
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }

    public scrollToAndExitMenu(elementID: string): void {
        this.scrollTo(elementID);
        this.toggleMobileMenu();
    }

    public scrollUp(): void {
        window.scroll({top: 0, left: 0, behavior: 'smooth'});
    }

    private updateNav(): void {
        let currentScrollY: number = window.scrollY;
        let offset: number = 280;

        for (let i = 0; i < this.sections.length; i++){
            if ((i < this.sections.length - 1 && (currentScrollY + offset >= this.sections[i].offsetTop && currentScrollY + offset < this.sections[i+1].offsetTop)) 
            || (i === this.sections.length - 1&& currentScrollY + offset >= this.sections[i].offsetTop)){
                this.selectNewNavTile(i);
            }
        }
    }

    private unselectCurrentNavTile(): void {
        let spans: HTMLSpanElement[];

        if (this.selectedNavTile != undefined) {
            spans = Array.from(this.selectedNavTile.querySelectorAll('span'));
            spans.map(span => span.classList.remove('max-w-full'));
        }
    }

    private selectNewNavTile(newNavTileIndex: number): void {
        let spans: HTMLSpanElement[];
        this.unselectCurrentNavTile();
        this.selectedNavTile = this.navTiles[newNavTileIndex];
        spans = Array.from(this.selectedNavTile.querySelectorAll('span'));
        spans.map(span => span.classList.add('max-w-full'));
    }
}
