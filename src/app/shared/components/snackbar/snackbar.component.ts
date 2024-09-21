import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.sass'
})
export class SnackbarComponent {
  @Input({ required: true }) public content?: string;
}
