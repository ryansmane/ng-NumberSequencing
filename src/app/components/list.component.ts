import { Component, OnInit } from "@angular/core";
import { ListService } from "../services/ListService.service";
import { FirstTenPosIntegers } from "../services/FirstTenPosIntegers.s";
import { FibonacciService } from '../services/FibonacciService.s'
@Component({
  selector: "app-list",
  template: `
    <div class="list-div">
      <div class='main-list' *ngFor="let sequence of sequences">
        <p class='s-title'>{{ sequence.name }}:</p>
        <p class='s-sample'>{{ sequence.sample }}</p>

        <div class='desc-box'>
            <p [style.color]='"#552600"' [style.text-decoration]='"underline"'>Algorithm:</p>
            <p class='algo'>{{ sequence.algo }}
            <p [style.color]='"#552600"' [style.text-decoration]='"underline"'>Description:</p>
            <p class='algo'>{{ sequence.description }}
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
    private fibonacciService: FibonacciService

  ) {}

  ngOnInit() {
    this.listService.addToList(
      "The Positive Integers",
      this.firstTenPosIntegers,
      15,
      "Self-explanatory."
    );
    this.listService.addToList(
      "The Fibonacci Numbers",
      this.fibonacciService,
      15,
      "As found by f(n+2) = f(n+1) + f(n) with f(0) = 0, f(1) = 1."
    );
    this.sequences = this.listService.getList();
    console.log("list");
  }
}
