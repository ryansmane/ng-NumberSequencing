import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PrimeFunctions {

  isPrime(n): boolean {
    if (n % 2 === 0) {
      return false;
    }
    let i = 2;
    let stopping = Math.sqrt(n);
    while (i <= stopping) {
      if (n % i == 0) {
        return false;
      }
      i++;
    }
    return true;
  }

}
