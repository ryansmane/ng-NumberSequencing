import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class FibonacciService {

    algo(n) {
        let f0 = 0;
        let f1 = 1;
        let index = 0;
        let temp;

        while(index < n - 1) {
            temp = f0;
            f0 = f1;
            f1 += temp;
            index++
        }

        return f1;
    }

    getSample(num): any[] {
        const sample = [];

        for (let i = 1; i < num + 1; i++) {
            sample.push(this.algo(i));
        }

        return sample;
    }

}
