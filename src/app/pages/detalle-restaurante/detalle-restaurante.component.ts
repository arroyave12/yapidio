import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService, Restaurante, Producto } from 'src/app/services/productos';
import { CarritoService } from 'src/app/services/carrito';

@Component({
  selector: 'app-detalle-restaurante',
  templateUrl: './detalle-restaurante.component.html',
  styleUrls: ['./detalle-restaurante.component.scss'],
  standalone: false,
})
export class DetalleRestauranteComponent implements OnInit {

  restaurante: Restaurante | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productosSrv: ProductosService,
    private carritoSrv: CarritoService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.restaurante = this.productosSrv.getRestaurantes().find(r => r.id === id);
  }

  irAProducto(producto: Producto) {
    // guardamos el producto temporalmente en el servicio
    this.productosSrv.setProductoTemporal(producto);
    this.router.navigate(['/pages/detalle-producto-restaurante']);
  }

  volver() {
    this.router.navigate(['/pages/dashboard']);
  }
}