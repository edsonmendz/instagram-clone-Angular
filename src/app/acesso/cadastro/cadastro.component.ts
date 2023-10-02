import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  @Output() public exibindoPainel: EventEmitter<string> = new EventEmitter<string>()

  public exibirPainelLogin():void {
    this.exibindoPainel.emit('login')
  }
}
