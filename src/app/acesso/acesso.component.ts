import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations'

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [
    trigger('animacao-banner', [
      state( 'criado', style({
        opacity:1
      })),
      transition( 'void => criado' , [
        style({ opacity: 0, transform: 'translate( -45px, 0)'}),
        animate( '1000ms 0ms ease-in-out')
      ])
    ]),
    trigger('animacao-painel', [
      state( 'criado', style({
        opacity:1
      })),
      transition( 'void => criado' , [
        style({ opacity: 0, transform: 'translate( 45px, 0)'}),

        //void --------------------------------------------------------- criado
        animate( '1500ms 0ms ease-in-out', keyframes([
          style({offset: 0.15, opacity: 1, transform: 'translateX(0)'}),
          style({offset: 0.75, opacity: 1, transform: 'translateX(0)'}),

          style({ offset: 0.80, opacity: 1, transform: 'translateY(-10px)'}),
          style({ offset: 0.83, opacity: 1, transform: 'translateY(10px)'}),
          style({ offset: 0.86, opacity: 1, transform: 'translateY(-10px)'}),
          style({ offset: 0.89, opacity: 1, transform: 'translateY(10px)'}),
          style({ offset: 0.92, opacity: 1, transform: 'translateY(-10px)'}),
          style({ offset: 0.95, opacity: 1, transform: 'translateY(10px)'})
        ]))
      ])
    ])
  ]
})
export class AcessoComponent {

  public estadoBanner:string = 'criado'
  public estadoPainel:string = 'criado'

  public cadastro = false

  public exibirPainel(event:string):void {
    this.cadastro = event === 'cadastro' ? true : false
  }

  public inicioDaAnimacao():void {

  }

  public fimDaAnimacao():void {
    
  }
}
