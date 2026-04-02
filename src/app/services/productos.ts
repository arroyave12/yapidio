import { Injectable } from '@angular/core';

export interface Producto {
  id: number;
  nombre: string;
  imagen: string;
  precio: number;
  ingredientes: string[];
  adicionales: { nombre: string; precio: number }[];
}

export interface Restaurante {
  id: number;
  nombre: string;
  imagen: string;
  productos: Producto[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Hamburguesa',
      imagen: 'assets/img/hamburguesa.png',
      precio: 15000,
      ingredientes: ['Pan', 'Carne', 'Lechuga', 'Tomate', 'Queso'],
      adicionales: [
        { nombre: 'Bacon', precio: 2000 },
        { nombre: 'Doble carne', precio: 4000 },
        { nombre: 'Huevo', precio: 1500 }
      ]
    },
    {
      id: 2,
      nombre: 'Perro Caliente',
      imagen: 'assets/img/perro.png',
      precio: 10000,
      ingredientes: ['Pan', 'Salchicha', 'Mostaza', 'Ketchup'],
      adicionales: [
        { nombre: 'Papas fritas', precio: 3000 },
        { nombre: 'Queso extra', precio: 1500 }
      ]
    },
    {
      id: 3,
      nombre: 'Pizza',
      imagen: 'assets/img/pizza.png',
      precio: 25000,
      ingredientes: ['Masa', 'Salsa', 'Queso', 'Pepperoni'],
      adicionales: [
        { nombre: 'Orilla rellena', precio: 5000 },
        { nombre: 'Extra queso', precio: 2000 }
      ]
    },
    {
      id: 4,
      nombre: 'Salchipapa',
      imagen: 'assets/img/salchipapa.png',
      precio: 15000,
      ingredientes: ['Papa', 'Salchicha', 'Carne', 'Pollo'],
      adicionales: [
        { nombre: 'Tocineta', precio: 2000 },
        { nombre: 'Queso Derretido', precio: 4000 },
        { nombre: 'Huevo codornis', precio: 1500 }
      ]
    },
    {
      id: 5,
      nombre: 'Carne Asada',
      imagen: 'assets/img/carneasada.png',
      precio: 15000,
      ingredientes: ['Carne', 'Arepa', 'Tomate'],
      adicionales: [
        { nombre: 'Papas', precio: 2000 },
        { nombre: 'Guacamole', precio: 4000 },
      ]
    },
  ];

  restaurantes: Restaurante[] = [
    {
      id: 1,
      nombre: 'KFC',
      imagen: 'assets/img/KFC.png',
      productos: [
        {
          id: 101,
          nombre: 'Pollo KFC',
          imagen: 'assets/img/KFC.png',
          precio: 20000,
          ingredientes: ['Pollo', 'Especias secretas'],
          adicionales: [{ nombre: 'Papas', precio: 3000 }]
        }
      ]
    },
    {
      id: 2,
      nombre: 'Frisby',
      imagen: 'assets/img/frisby.png',
      productos: [
        {
          id: 201,
          nombre: 'Pechuga Frisby',
          imagen: 'assets/img/frisby.png',
          precio: 18000,
          ingredientes: ['Pollo', 'Apanado'],
          adicionales: [{ nombre: 'Arroz', precio: 2500 }]
        }
      ]
    },
    {
      id: 3,
      nombre: 'mcdonalds',
      imagen: 'assets/img/mcdonalds.png',
      productos: [
        {
          id: 301,
          nombre: 'hamburguesa Mcdonals',
          imagen: 'assets/img/mcdonalds.png',
          precio: 18000,
          ingredientes: ['Carne', 'Pan'],
          adicionales: [{ nombre: 'Pechuga', precio: 5000 }]
        }
      ]
    },
    {
      id: 4,
      nombre: 'Subway',
      imagen: 'assets/img/subway.png',
      productos: [
        {
          id: 401,
          nombre: 'Sandwich Subways',
          imagen: 'assets/img/subway.png',
          precio: 18000,
          ingredientes: ['Pan', 'pollo', 'lechuga', 'tomate'],
          adicionales: [{ nombre: 'Salsa', precio: 2000 }]
        }
      ]
    },
    {
      id: 5,
      nombre: 'Sr Wok',
      imagen: 'assets/img/wok.png',
      productos: [
        {
          id: 501,
          nombre: 'Arroz Wok',
          imagen: 'assets/img/wok.png',
          precio: 18000,
          ingredientes: ['Pollo a la naranja', 'Arroz Oriental', 'Pollo a la Wisky'],
          adicionales: [{ nombre: 'lumpias', precio: 4000 }]
        }
      ]
    }
  ];

  getProductos(): Producto[] {
    return this.productos;
  }

  getRestaurantes(): Restaurante[] {
    return this.restaurantes;
  }

  getProductoPorId(id: number): Producto | undefined {
    return this.productos.find(p => p.id === id);
  }

    // agrega esto al final de la clase ProductosService
  private productoTemporal: Producto | undefined;

  setProductoTemporal(producto: Producto) {
    this.productoTemporal = producto;
  }

  getProductoTemporal(): Producto | undefined {
    return this.productoTemporal;
  }
}