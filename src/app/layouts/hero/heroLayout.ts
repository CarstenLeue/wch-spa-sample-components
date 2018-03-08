import {
    LayoutComponent
} from 'ibm-wch-sdk-ng';
import { Component } from '@angular/core';
import { TypeStandardPageComponent } from './../../components/standard-page/typeStandardPageComponent';

/** Useful imports */
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/takeUntil';
// import 'rxjs/add/operator/distinctUntilChanged';

/*
 * @name Hero
 * @id standard-page-layout
 */
@LayoutComponent({
    selector: 'standard-page-layout'
})
@Component({
  /**
  * Consider to code your component such that all elements will be immutable and that it only
  * depends on its inputs. This can e.g. be achieved by basing all state changes on observables.
  *
  * @see https://angular-2-training-book.rangle.io/handout/change-detection/change_detection_strategy_onpush.html
  *
  * import { ChangeDetectionStrategy } from '@angular/core';
  */
  // changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-hero-layout-component',
  templateUrl: './heroLayout.html',
  styleUrls: ['./heroLayout.scss'],
  preserveWhitespaces: false
})
export class HeroLayoutComponent extends TypeStandardPageComponent {

    /*
     * TODO add custom fields here. These fields should be those
     * specific to this layout.
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
    }

}