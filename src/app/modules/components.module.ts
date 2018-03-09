import { NgModule } from '@angular/core';

import { LAYOUTS } from './../layouts';
import { WchNgComponentsModule } from 'ibm-wch-sdk-ng';

@NgModule({
    imports: [
        WchNgComponentsModule
    ],
    declarations: [...LAYOUTS],
    providers: [],
    exports: [...LAYOUTS],
    entryComponents: [...LAYOUTS],
    bootstrap: []
})
export class ComponentsModule {

}