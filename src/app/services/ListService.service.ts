import { Injectable } from '@angular/core';
import { StringifyService } from './stringify.s'
@Injectable({
    providedIn: 'root'
})
export class ListService {
    list: any[] = [];

    constructor(private stringifyFunction: StringifyService) {

    }

    getList(): any[] {
        return this.list;
    }

    addToList(name, service, num, description): void {
        let obj = {
            sample: `${service.getSample(num).join(', ')}, . . . `,
            description,
            name,
            algo: this.stringifyFunction.stringify(service.algo)
        }
        this.list.push(obj);
    }

}