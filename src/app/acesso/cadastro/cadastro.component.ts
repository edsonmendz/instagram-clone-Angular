import { Component, EventEmitter, Output } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms'
import { Usuario } from '../usuario.model';
import { Autenticacao } from 'src/app/autenticacao.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']  
})
export class CadastroComponent {

  @Output() public exibindoPainel: EventEmitter<string> = new EventEmitter<string>()

  constructor(
    private autenticacao: Autenticacao
  ){}

  public formulario:FormGroup = new FormGroup({
    'email': new FormControl(null),
    'nome_completo': new FormControl(null),
    'nome_usuario': new FormControl(null),
    'senha': new FormControl(null)
  })

  public exibirPainelLogin():void {
    this.exibindoPainel.emit('login')
  }

  public cadastrarUsuario():void {
    let usuario: Usuario = new Usuario(
      this.formulario.value.email,
      this.formulario.value.nome_completo,
      this.formulario.value.nome_usuario,
      this.formulario.value.senha
    )
    this.autenticacao.cadastrarUsuario(usuario)
  }
}
