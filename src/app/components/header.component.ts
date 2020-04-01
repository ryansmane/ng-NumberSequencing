import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-header',
    template: `
    <div class='header-div'>
    <h1>Tranquil Sequences</h1>
     
    </div>
    `,
    styleUrls: ['../styles/header.style.css']
})
export class Header implements OnInit {
    constructor() {

    }

    ngOnInit() {
        console.log('here');
    }
}