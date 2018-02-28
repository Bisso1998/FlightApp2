import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { SearchResultComponent } from '../search-result/search-result.component';
    import { SearchDetailsComponent } from '../search-result/search-details/search-details.component';



    const routes: Routes = [
        {
            path: '',
            component: SearchResultComponent,
        },
           
            {
            path: 'search-details',
            component: SearchDetailsComponent,
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
    