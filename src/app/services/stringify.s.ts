import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class StringifyService {

    
    
    stringify(f) {
        const subStart = f.toString().indexOf('{');
        
        return `func (n) ${f.toString().substring(subStart)}`;
    }

}