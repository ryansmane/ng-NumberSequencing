import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ListService {
    list: any[] = [];

    constructor() {

    }

    getList(): any[] {
        return this.list;
    }

    addToList(name, service, num, description): void {
        let obj = {
            sample: service.getSample(num).join(', '),
            description,
            name,
            algo: service.getAlgoAsText()
        }
        this.list.push(obj);
    }

}