import { Component } from '@angular/core';
import { WaterService } from '../water.service';

@Component({
  selector: 'app-vegetable',
  templateUrl: './vegetable.component.html',
  styleUrls: ['./vegetable.component.css']
})
export class VegetableComponent {
  water: string;
  vegetables: string[] = ['Carrot', 'Broccoli', 'Spinach'];

  constructor(private waterService: WaterService) {
    this.water = waterService.getWater();
  }
}

