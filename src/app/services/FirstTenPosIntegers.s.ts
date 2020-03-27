import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FirstTenPosIntegers {

  algo(n) {
    return n;
  }

  getSample(num): any[] {
    const sample = [];

    for (let i = 1; i < num+1; i++) {
      sample.push(this.algo(i));
    }

    return sample;
  }

  
}
