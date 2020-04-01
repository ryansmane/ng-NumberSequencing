import { Injectable } from "@angular/core";
import { PrimeFunctions } from '../services/primeFunctions.s'

@Injectable({
    providedIn: "root"
})
export class PrimeService {

    constructor(private primeF: PrimeFunctions) {

    }

    algo(n) {
        if (n === 1 || n === 2) {
            return n;
        }
        let count = 0;
        let index = 1;
        while (count !== n - 1) {
            if (this.primeF.isPrime(index)) {
                count++;
            }
            index += 2;
        }
        return index - 2;
    }

    

    getSample(num): any[] {
        const sample = [];

        for (let i = 1; i < num + 1; i++) {
            sample.push(this.algo(i));
        }

        return sample;
    }

}