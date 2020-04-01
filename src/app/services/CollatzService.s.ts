import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class CollatzService {

    algo(n) {
        if (n === 1) {
            return 1;
        }

        let steps = 0;
        
        while (n != 1) {
            if (n%2 == 0) {
                n /= 2;
            } else {
                n = 3*n + 1
            }
            steps++;
        }

        return steps;
    }

    getSample(num): any[] {
        const sample = [];

        for (let i = 1; i < num + 1; i++) {
            sample.push(this.algo(i));
        }

        return sample;
    }

}
