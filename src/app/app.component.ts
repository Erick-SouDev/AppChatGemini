import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MessageboxComponent } from "./components/messagebox/messagebox.component";

@Component({
  selector: 'app-root',
  imports: [ MessageboxComponent ,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppChat';
}
