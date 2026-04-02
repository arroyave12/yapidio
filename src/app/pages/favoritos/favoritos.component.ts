import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss'],
  standalone: false,
})
export class FavoritosComponent  implements OnInit {

  constructor(
    private router: Router,
    private menu: MenuController
  ) { }

  ngOnInit() {
    this.getAllNews();
  }

  getAllNews() {
    // tu lógica aquí
  }

  irA(ruta: string) {
    this.menu.close();
    this.router.navigate([ruta]); // 👈 esto faltaba
  }

    cerrarSesion() {
  this.router.navigateByUrl('/auth/login', { replaceUrl: true }); // 👈 reemplaza el historial
}
}