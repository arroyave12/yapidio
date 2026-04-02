import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService, Producto } from 'src/app/services/productos';
import { CarritoService } from 'src/app/services/carrito';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss'],
  standalone: false,
})
export class DetalleProductoComponent implements OnInit {

  producto: Producto | undefined;
  cantidad: number = 1;
  ingredientesSeleccionados: string[] = [];
  adicionalesSeleccionados: string[] = [];
  totalPrecio: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productosSrv: ProductosService,
    private carritoSrv: CarritoService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.producto = this.productosSrv.getProductoPorId(id);

    if (this.producto) {
      // por defecto todos los ingredientes seleccionados
      this.ingredientesSeleccionados = [...this.producto.ingredientes];
      this.calcularTotal();
    }
  }

  toggleIngrediente(ingrediente: string) {
    const index = this.ingredientesSeleccionados.indexOf(ingrediente);
    if (index > -1) {
      this.ingredientesSeleccionados.splice(index, 1);
    } else {
      this.ingredientesSeleccionados.push(ingrediente);
    }
  }

  toggleAdicional(adicional: string, precio: number) {
    const index = this.adicionalesSeleccionados.indexOf(adicional);
    if (index > -1) {
      this.adicionalesSeleccionados.splice(index, 1);
    } else {
      this.adicionalesSeleccionados.push(adicional);
    }
    this.calcularTotal();
  }

  calcularTotal() {
    if (!this.producto) return;
    let total = this.producto.precio * this.cantidad;
    this.adicionalesSeleccionados.forEach(nombre => {
      const adicional = this.producto!.adicionales.find(a => a.nombre === nombre);
      if (adicional) total += adicional.precio * this.cantidad;
    });
    this.totalPrecio = total;
  }

  cambiarCantidad(valor: number) {
    if (this.cantidad + valor >= 1) {
      this.cantidad += valor;
      this.calcularTotal();
    }
  }

  agregarAlCarrito() {
    if (!this.producto) return;
    this.carritoSrv.agregarItem({
      id: this.producto.id,
      nombre: this.producto.nombre,
      precio: this.producto.precio,
      imagen: this.producto.imagen,
      cantidad: this.cantidad,
      ingredientes: this.ingredientesSeleccionados,
      adicionales: this.adicionalesSeleccionados
    });
    this.router.navigate(['/pages/dashboard']);
  }

  volver() {
    this.router.navigate(['/pages/dashboard']);
  }
}