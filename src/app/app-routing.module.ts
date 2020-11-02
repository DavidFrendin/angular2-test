import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageListComponent } from './pages/image-list/image-list.component';
import { ThemeComponent } from './pages/theme/theme.component';
import { EmptyComponent } from './pages/empty/empty.component';
import { ProjectComponent } from './pages/project/project.component';

const routes: Routes = [
	{ path: '',   redirectTo: '/image-list', pathMatch: 'full' },
	{ path: 'project', component: ProjectComponent },
	{ path: 'image-list', component: ImageListComponent },
	{ path: 'theme', component: ThemeComponent },
	{ path: 'empty', component: EmptyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
