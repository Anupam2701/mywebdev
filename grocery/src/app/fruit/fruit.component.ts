import { Component } from '@angular/core';
import { WaterService } from '../water.service';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent {
  water: string;
  fruits: string[] = ['Apple', 'Banana', 'Orange'];

  constructor(private waterService: WaterService) {
    this.water = waterService.getWater();
  }
}
