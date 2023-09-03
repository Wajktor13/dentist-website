import { Component } from '@angular/core';


@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {
    public showMobileMenu: boolean = false;

    public toggleMobileMenu(): void{
        this.showMobileMenu = !this.showMobileMenu
    }
}
