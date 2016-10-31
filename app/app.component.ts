import { Component }          from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
<div id="head">
    <h1>{{title}}</h1>

    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Esileht</a>
      <a routerLink="/heroes" routerLinkActive="active">Filmid</a>
    </nav>
        </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Filmibaas';
}

