import { Component, OnInit } from "@angular/core";
import { ListService } from "../services/ListService.service";
import { FirstTenPosIntegers } from "../services/FirstTenPosIntegers.s";
@Component({
  selector: "app-list",
  template: `
    <div class="list-div">
      <div class='main-list' *ngFor="let sequence of sequences">
        <p class='s-title'>{{ sequence.name }}:</p>
        <p class='s-sample'>{{ sequence.sample }}</p>

        <div class='desc-box'>
            <p>Algorithm:</p>
            <p class='algo'>{{ sequence.algo }}
        </div>
      </div>
    </div>
  `,
  styleUrls: ["../styles/list.style.css"]
})
export class List implements OnInit {
  sequences: any[];

  constructor(
    public firstTenPosIntegers: FirstTenPosIntegers,
    private listService: ListService
  ) {}

  ngOnInit() {
    this.listService.addToList(
      "The First Ten",
      this.firstTenPosIntegers,
      10,
      "The First Ten Positive Integers"
    );
    this.listService.addToList(
      "The First Ten",
      this.firstTenPosIntegers,
      10,
      "The First Ten Positive Integers"
    );
    this.sequences = this.listService.getList();
    console.log("list");
  }
}
