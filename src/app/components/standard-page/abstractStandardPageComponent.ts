/**
 * Do not modify this file, it is auto-generated.
 */
import {
    RenderingContext,
    RenderingContextBinding,
    isReferenceElement,
    AbstractRenderingComponent
} from 'ibm-wch-sdk-ng';
import {
    Observable
} from 'rxjs/Observable';
import {
    StandardPageRenderingContext
} from './standardPageRenderingContext';

/** Validates that the context is indeed of the desired type
 *
 * @param aContext instance of the {@link RenderingContext} to check
 * @return true if the context is a {@link StandardPageRenderingContext } else false
 */
function isStandardPageRenderingContext(aContext: RenderingContext): aContext is StandardPageRenderingContext {
    // cache access to the elements
    const el = aContext ? aContext.elements || [] : [];
    return !!aContext
        && (!el['banner'] || isReferenceElement(el['banner']))
            && (!el['sectionOne'] || isReferenceElement(el['sectionOne']))
            && (!el['sectionTwo'] || isReferenceElement(el['sectionTwo']))
    ;
}

/** Provides a type assertion that can be used to validate and convert a generic {@link RenderingContext}
 * info a {@link StandardPageRenderingContext }
 *
 * @param aContext instance of the rendering context to check
 * @return the {@link StandardPageRenderingContext } version of the {@link RenderingContext} or an exception
 *
 * @example this.onRenderingContext.map(assertStandardPageRenderingContext);
 */
function assertStandardPageRenderingContext(aContext: RenderingContext): StandardPageRenderingContext {
    // test if the context is as expected
    if (isStandardPageRenderingContext(aContext)) {
        return aContext;
    }
    // type failure
    throw new TypeError('StandardPageRenderingContext');
}

/*
 * @name Standard page
 * @id 2af1d22a-fecf-41e1-a808-7301cb37b79f
 * @description Standard page has a one column layout, a two blocks and Hero, and a 4 blocks and Hero layout which include multiple sections for greater flexibility.  In the Oslo site, it's used for the Home, Events, and About us pages.
 */
abstract class AbstractStandardPageComponent extends AbstractRenderingComponent {

    /**
    * Strongly typed stream of the rendering contexts
    */
    readonly onRenderingContext: Observable<StandardPageRenderingContext>;

    /**
    * Strongly typed rendering context
    */
    renderingContext: StandardPageRenderingContext;

    /*
     * {
     *   "allowMultipleValues": true,
     *   "elementType": "reference",
     *   "fieldLabel": "Banner section",
     *   "helpText": "Add content, such as a hero banner, that you want to display at the top of your page.",
     *   "key": "banner",
     *   "label": "Banner section",
     *   "minimumValues": 0
     * }
     */
    @RenderingContextBinding('references.banner', [])
    readonly onBanner: Observable<RenderingContext[]>;

    /*
     * @see #onBanner
     */
    @RenderingContextBinding()
    readonly banner: RenderingContext[];

    /*
     * {
     *   "allowMultipleValues": true,
     *   "elementType": "reference",
     *   "fieldLabel": "Section content",
     *   "helpText": "Add body content here.",
     *   "key": "sectionOne",
     *   "label": "Section one",
     *   "minimumValues": 0
     * }
     */
    @RenderingContextBinding('references.sectionOne', [])
    readonly onSectionOne: Observable<RenderingContext[]>;

    /*
     * @see #onSectionOne
     */
    @RenderingContextBinding()
    readonly sectionOne: RenderingContext[];

    /*
     * {
     *   "allowMultipleValues": true,
     *   "elementType": "reference",
     *   "fieldLabel": "Section content",
     *   "helpText": "Add more related body content, lists, or images.",
     *   "key": "sectionTwo",
     *   "label": "Section two",
     *   "minimumValues": 0
     * }
     */
    @RenderingContextBinding('references.sectionTwo', [])
    readonly onSectionTwo: Observable<RenderingContext[]>;

    /*
     * @see #onSectionTwo
     */
    @RenderingContextBinding()
    readonly sectionTwo: RenderingContext[];

    protected constructor() {
        super();
    }
}

/**
* 18acd1c9-888e-4c44-bd2c-a38c5a62bf45
*/
export {
    StandardPageRenderingContext,
    isStandardPageRenderingContext,
    assertStandardPageRenderingContext,
    AbstractStandardPageComponent
};