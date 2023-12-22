import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  d = new Date();
  year = this.d.getFullYear();
  email: string = 'julianosoder1989@gmail.com';
}
