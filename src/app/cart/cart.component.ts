import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public params: any;
  public quantity = 0;
  public addToCart = []

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.params = this.route.snapshot.params;
  }

  onClickAdd() {

    console.log(
      { name: this.params.name, price: this.params.price, image: this.params.image, quantity: this.quantity }
    )
    
    
  }

}
