import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss'],
  standalone: false,
})
export class HistorialComponent  implements OnInit {

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
