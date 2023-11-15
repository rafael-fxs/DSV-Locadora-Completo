import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router, private route: ActivatedRoute) { }

  getRoutes(): string[] {
    const routes = this.router.config;
    const routeNames: string[] = [];
    console.log(routes);
    routes.forEach(route => {
      if (route.path && route.path.length > 0 && route.path !== '**'
      && route.path != 'marcas' && route.path != 'modelos' && route.path != 'carros' ) {
        routeNames.push(route.path || '');
      }
    });
  
    return routeNames;
  }

  navigateTo(route: string): void {
    this.router.navigate([route], { relativeTo: this.route });
  }
}
