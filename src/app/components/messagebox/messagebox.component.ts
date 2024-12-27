import { Component } from '@angular/core';
import { TextareaModule } from 'primeng/textarea';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-messagebox',
  imports: [TextareaModule , FormsModule  , InputTextModule  ,ButtonModule],
  templateUrl: './messagebox.component.html',
  styleUrl: './messagebox.component.css'
})
export class MessageboxComponent {

  text?:string = "ola";
  response?:Observable<string> ;
  valor?:string = "ola";

  enviar():void{
    alert("ola teste button");
  }
}
