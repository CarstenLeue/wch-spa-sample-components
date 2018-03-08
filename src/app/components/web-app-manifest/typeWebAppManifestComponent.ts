import {
    RenderingContext
} from 'ibm-wch-sdk-ng';
import { Component } from '@angular/core';
import { AbstractWebAppManifestComponent } from './abstractWebAppManifestComponent';

/** Useful imports */
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/takeUntil';
// import 'rxjs/add/operator/distinctUntilChanged';

/*
 * @name WebAppManifest
 * @id 3900cd47-0f9a-45a9-892f-3f9a3e42c751
 */
/* TODO uncomment this if you plan to use the component standalone, i.e. not as the basis of a layout.
@Component({
  selector: 'app-type-web-app-manifest-component',
  templateUrl: './typeWebAppManifestComponent.html',
  styleUrls: ['./typeWebAppManifestComponent.scss'],
  preserveWhitespaces: false
})
*/
export class TypeWebAppManifestComponent extends AbstractWebAppManifestComponent {

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