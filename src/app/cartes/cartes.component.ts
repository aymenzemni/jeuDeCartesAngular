import { Component, OnInit } from '@angular/core';
import { CartesService } from './cartes.service';

@Component({
  selector: 'app-cartes',
  templateUrl: './cartes.component.html',
  styleUrls: ['./cartes.component.css']
})
export class CartesComponent implements OnInit {

  loading;
  cartesNonTriee: any = [];
  cartesTriee: any = [];
  disableTriee = true;
  disableVider = true;
  constructor(private cartesService: CartesService) { }

  ngOnInit(): void {
    this.loading = true;
   // this.getCartes();
  }

  getCartes() {
    this.cartesService.getCartes().subscribe(
      data => {
        this.loading = false;
        this.cartesNonTriee = data;
      }
    );
    this.disableTriee = false;
    this.disableVider = false;
  }
  trieeCartes() {
    this.cartesService.trieeCartes(this.cartesNonTriee).subscribe(
      data => {
        this.cartesTriee = data;
      }
    );
    this.disableTriee = true;
  }

  newCartes() {
    this.cartesTriee = [];
    this.cartesNonTriee = [];
    this.getCartes();
  }

  viderTable() {
    this.cartesTriee = [];
    this.cartesNonTriee = [];
    this.disableTriee = true;
    this.disableVider = true;
  }

}
