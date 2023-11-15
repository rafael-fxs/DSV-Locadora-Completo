import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RotaHelper } from 'src/app/helpers/rota-helper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router, private route: ActivatedRoute) { }

  getRoutes(): RotaHelper[] {
    const routes = this.router.config;
    const routeNames: RotaHelper[] = [];
    console.log(routes);
    routes.forEach(route => {
      if (route && route.path && route.path.length > 0 && route.path !== '**'
      && route.path != 'marcas' && route.path != 'modelos' && route.path != 'carros' ) {
        let rotaHelper = new RotaHelper();
        rotaHelper.title = route.title?.toString() || route.path || '';
        rotaHelper.path = route.path || '';
        routeNames.push(rotaHelper);
      }
    });
  console.log("routeNames", )
    return routeNames;
  }

  navigateTo(route: string): void {
    this.router.navigate([route], { relativeTo: this.route });
  }

  formatarTexto(route: RotaHelper) {
    if (route && route.title && route.title.length > 0)
      return route.title.charAt(0)?.toUpperCase() + route.title.slice(1);
    return '';
  }
}
