import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FirstTenPosIntegers {

  firstTenAlgo(i) {
    return i;
  }

  getSample(num): any[] {
    const sample = [];

    for (let i = 1; i < num+1; i++) {
      sample.push(this.firstTenAlgo(i));
    }

    return sample;
  }

  getAlgoAsText() {
    const subStart = this.firstTenAlgo.toString().indexOf('{');
    return `func () ${this.firstTenAlgo.toString().substring(subStart)}`
  }
}
