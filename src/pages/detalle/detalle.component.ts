import {Component,OnInit} from "@angular/core";
import {NavController,NavParams,AlertController} from "ionic-angular";
import {Lista,ListaItem} from "../../app/clases/index";
import {ListaDeseosService} from "../../app/services/lista-deseos.service";

@Component({
  selector:'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements  OnInit {

  idx: number;
  lista:any;
  constructor(
    public navCtrl:NavController,
    public navParams:NavParams,
    public _listaDeseos:ListaDeseosService,
    public alertCtrl:AlertController,

  ) {

    this.idx=this.navParams.get("idx");
    this.lista=this.navParams.get("lista");

  }

  ngOnInit(){}

  actualizar(item:ListaItem){

    item.completado=!item.completado;

    let todosmarcados=true;
    for(let item of this.lista.items){
      if(!item.completado){
        todosmarcados=false;
        break;
      }
    }

    this.lista.terminado=todosmarcados;

    this._listaDeseos.actualizarData();
  }

  borrarItem(){

    let confirm = this.alertCtrl.create({
      title: this.lista.nombre,
      message: 'Esta seguro que desea eliminar la lista?',
      buttons: ['Cancelar',
        {
          text: 'Eliminar',
          handler: () => {
            // console.log('Agree clicked');
            this._listaDeseos.eliminarLista(this.idx);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }

}
