import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-demo',
  standalone: true,
  imports: [],
  templateUrl: './data-binding-demo.component.html',
  styleUrl: './data-binding-demo.component.css'
})
export class DataBindingDemoComponent {
  message= "MY FIRST APP!"

  imageUrl ="../../assets/lamok.jpeg";
  w = 100;
  h = 100;
  altText = 'Lamok';
  textColor='blue';
  isHighlighted = true;


}
