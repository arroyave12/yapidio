import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ProductosService, Producto, Restaurante } from 'src/app/services/productos';
import { CarritoService } from 'src/app/services/carrito';
import { AuthService } from 'src/app/services/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: false,
})
export class DashboardComponent implements OnInit {

  productos: Producto[] = [];
  restaurantes: Restaurante[] = [];
  cantidadCarrito: number = 0;
  nombreUsuario: string = '';

  constructor(
    private router: Router,
    private menu: MenuController,
    private productosSrv: ProductosService,
    private carritoSrv: CarritoService,
    private authSrv: AuthService // 👈
  ) {}

  ngOnInit() {
    this.productos = this.productosSrv.getProductos();
    this.restaurantes = this.productosSrv.getRestaurantes();

    this.carritoSrv.contador$.subscribe((cantidad: number) => {
      this.cantidadCarrito = cantidad;
    });

    // 👇 obtiene el nombre del usuario
    const usuario = this.authSrv.getUsuarioActual();
    this.nombreUsuario = usuario?.displayName || usuario?.email || 'Usuario';
  }

  irAProducto(id: number) {
    this.router.navigate(['/pages/detalle-producto', id]);
  }

  irARestaurante(id: number) {
    this.router.navigate(['/pages/detalle-restaurante', id]);
  }

  irA(ruta: string) {
    this.menu.close();
    this.router.navigate([ruta]);
  }

  cerrarSesion() {
    this.menu.close();
    this.authSrv.cerrarSesion(); // 👈 usa el servicio de auth
  }
}