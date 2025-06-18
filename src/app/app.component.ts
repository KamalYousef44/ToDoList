import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDComponent } from './Components/to-d/to-d.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , ToDComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-list';
}
