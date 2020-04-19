import { Component, OnInit } from '@angular/core';
import { Hero } from "../../shared/models/data-model";
import { ConstantHeroes } from "../../shared/constants/constants";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  public heroModel: Hero[] = [];
  public heroSelectedModel: number;
  public conditionFlag: boolean;
  constructor() {
    this.conditionFlag = true;
    //this.heroModel = ConstantHeroes;
  }

  ngOnInit() {
    this.heroModel = ConstantHeroes;
    this.heroSelectedModel = 0;
  }
}
