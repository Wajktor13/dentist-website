import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-certificates-section',
    templateUrl: './certificates-section.component.html',
    styleUrls: ['./certificates-section.component.css']
})

export class CertificatesSectionComponent implements OnInit {
    private certsDir: string = "../../../assets/certs";
    private noCerts: number = 3;
    public certsPaths: string[] = [];

    public ngOnInit(): void {
        for (let i=0; i < this.noCerts; i++){
            this.certsPaths.push(`${this.certsDir}/${i}.jpg`);
        }
    }
}

