import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing-module';
import { IonicModule } from '@ionic/angular';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { HistorialComponent } from './historial/historial.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { DetalleRestauranteComponent } from './detalle-restaurante/detalle-restaurante.component';
import { DetalleProductoRestauranteComponent } from './detalle-producto-restaurante/detalle-producto-restaurante.component';


@NgModule({ 
  declarations: [
    DashboardComponent,
    FavoritosComponent,
    PedidosComponent,
    HistorialComponent,
    DetalleProductoComponent,
    DetalleRestauranteComponent,
    DetalleProductoRestauranteComponent,
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    IonicModule,
  ],
  exports: [
    DashboardComponent,
    FavoritosComponent,
    HistorialComponent,
    PedidosComponent,
  ]
})
export class PageModule { }