import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output() public exibirPainel:EventEmitter<string> = new EventEmitter<string>()

  public exibirPainelCadastro():void {
    this.exibirPainel.emit('cadastro')
  }
}
