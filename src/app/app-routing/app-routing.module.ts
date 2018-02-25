import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { SearchBarComponent } from '../search-bar/search-bar.component';
    import { SearchResultComponent } from '../search-result/search-result.component';


    const routes: Routes = [
        {
            path: '',
            component: SearchResultComponent,
        },
           {
            path: 'search-result',
            component: SearchBarComponent,
        },
        
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }
    