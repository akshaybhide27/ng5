import { Component, OnInit } from '@angular/core';
import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit { 

  itemCount: number;

  btnText: string= 'Add an item';

  goalText: string='My first Goal';
  goals = [];
  constructor(private _date: DataService) { }

  ngOnInit() {
    
    this._date.goal.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length;
    this._date.changeGoal(this.goals);
  }

  addItem(){
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
    this._date.changeGoal(this.goals);
  }

}
