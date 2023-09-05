import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { PlayoutComponent } from './playout/playout.component';

const routes: Routes = [

  {
    path: '', component: PlayoutComponent, children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },

      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'articles', component: ArticlesComponent
      },
      {
        path: 'gallery', component: GalleryComponent
      },
      {
        path: 'contact', component: ContactComponent
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
