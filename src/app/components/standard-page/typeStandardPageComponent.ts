import {
    RenderingContext
} from 'ibm-wch-sdk-ng';
import { Component } from '@angular/core';
import { AbstractStandardPageComponent } from './abstractStandardPageComponent';

/** Useful imports */
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/takeUntil';
// import 'rxjs/add/operator/distinctUntilChanged';

/*
 * @name Standard page
 * @id 2af1d22a-fecf-41e1-a808-7301cb37b79f
 * @description Standard page has a one column layout, a two blocks and Hero, and a 4 blocks and Hero layout which include multiple sections for greater flexibility.  In the Oslo site, it's used for the Home, Events, and About us pages.
 */
/* TODO uncomment this if you plan to use the component standalone, i.e. not as the basis of a layout.
@Component({
  selector: 'app-type-standard-page-component',
  templateUrl: './typeStandardPageComponent.html',
  styleUrls: ['./typeStandardPageComponent.scss'],
  preserveWhitespaces: false
})
*/
export class TypeStandardPageComponent extends AbstractStandardPageComponent {

    /*
     * TODO add custom fields here. These fields should be those
     * common to all layouts.
     */

    constructor() {
        super();
        /*
         * TODO initialize your custom fields here, note that
         * you can refer to the values bound via @RenderingContextBinding from
         * your super class.
         *
         * Make sure to call 'this.safeSubscribe' if you plan to subscribe to observables
         */

         /*
          * Sample
          *
          * const that = this;
          * const onDestroy = that.onOnDestroy;
          */
    }

}