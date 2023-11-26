import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WaterService {
  getWater() {
    return 'Fresh water from the water service.';
  }
}
