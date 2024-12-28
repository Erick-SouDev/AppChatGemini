import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-messagebox',
  imports: [ FormsModule],
  templateUrl: './messagebox.component.html',
  styleUrl: './messagebox.component.css'
})
export class MessageboxComponent {

  text?:string = "ola";
  response?:Observable<string> ;
  valor?:string = "ola";


}
