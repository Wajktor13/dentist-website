import { Component, HostListener, OnInit } from '@angular/core';


@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {
    public showMobileMenu: boolean = false;
    private breakpoint: number = 108; 
    private menuFixed: boolean = false;
    private menu: HTMLDivElement | null = null;

    public ngOnInit(): void {
        this.menu = document.getElementById("menu") as HTMLDivElement;
    }

    public toggleMobileMenu(): void{
        this.showMobileMenu = !this.showMobileMenu;
    }

    @HostListener("window:scroll") 
    public onWindowScroll(): void {
        
        if (window.scrollY >= this.breakpoint && !this.menuFixed && this.menu != null) {
            this.menuFixed = true;
            this.menu.style.position = "fixed";
            this.menu.style.top = "35px";

        } else if (window.scrollY < this.breakpoint && this.menuFixed && this.menu != null) {
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
}
