import { Component, OnInit } from "@angular/core";
import { ListService } from "../services/ListService.service";
import { FirstTenPosIntegers } from "../services/FirstTenPosIntegers.s";
import { FibonacciService } from "../services/FibonacciService.s";
import { CollatzService } from "../services/CollatzService.s";
import { PrimeService } from "../services/PrimeService.s";
@Component({
  selector: "app-list",
  template: `
    <div class="list-div">
      <div class="main-list" *ngFor="let sequence of sequences">
        <p class="s-title">{{ sequence.name }}:</p>
        <p class="s-sample">{{ sequence.sample }}</p>

        <div class="desc-box">
          <p [style.color]="'#552600'" [style.text-decoration]="'underline'">
            Algorithm:
          </p>
          <p class="algo">{{ sequence.algo }}</p>
          <p [style.color]="'#552600'" [style.text-decoration]="'underline'">
            Description:
          </p>
          <p class="algo">{{ sequence.description }}</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["../styles/list.style.css"]
})
export class List implements OnInit {
  sequences: any[];

  constructor(
    private firstTenPosIntegers: FirstTenPosIntegers,
    private listService: ListService,
    private fibonacciService: FibonacciService,
    private collatzService: CollatzService,
    private primeService: PrimeService
  ) {}

  ngOnInit() {
    this.listService.addToList(
      "The Positive Integers",
      this.firstTenPosIntegers,
      15,
      "Where f(n) = the nth positive integer."
    );
    this.listService.addToList(
      "The Prime Numbers",
      this.primeService,
      15,
      "Where f(n) = the nth prime number."
    );
    this.listService.addToList(
      "The Fibonacci Numbers",
      this.fibonacciService,
      15,
      "As found by f(n+2) = f(n+1) + f(n) with f(0) = 0, f(1) = 1."
    );
    this.listService.addToList(
      "The Collatz Sequence",
      this.collatzService,
      15,
      "Where f(n) = the number of steps it takes to reduce n to 1 via the Collatz function."
    );

    this.sequences = this.listService.getList();
    console.log("list");
  }
}
