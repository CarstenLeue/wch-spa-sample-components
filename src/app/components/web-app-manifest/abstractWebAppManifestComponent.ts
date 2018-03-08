/**
 * Do not modify this file, it is auto-generated.
 */
import {
    Image,
    RenderingContext,
    RenderingContextBinding,
    isImageElement,
    isTextElement,
    isToggleElement,
    AbstractRenderingComponent
} from 'ibm-wch-sdk-ng';
import {
    Observable
} from 'rxjs/Observable';
import {
    WebAppManifestRenderingContext
} from './webAppManifestRenderingContext';

/** Validates that the context is indeed of the desired type
 *
 * @param aContext instance of the {@link RenderingContext} to check
 * @return true if the context is a {@link WebAppManifestRenderingContext } else false
 */
function isWebAppManifestRenderingContext(aContext: RenderingContext): aContext is WebAppManifestRenderingContext {
    // cache access to the elements
    const el = aContext ? aContext.elements || [] : [];
    return !!aContext
        && (!el['context_root'] || isTextElement(el['context_root']))
            && isTextElement(el['short_name'])
            && isTextElement(el['name'])
            && isImageElement(el['icon'])
            && (!el['background_color'] || isTextElement(el['background_color']))
            && (!el['theme_color'] || isTextElement(el['theme_color']))
            && (!el['fullscreen'] || isToggleElement(el['fullscreen']))
            && (!el['standalone'] || isToggleElement(el['standalone']))
            && (!el['minimal_ui'] || isToggleElement(el['minimal_ui']))
            && (!el['browser'] || isToggleElement(el['browser']))
    ;
}

/** Provides a type assertion that can be used to validate and convert a generic {@link RenderingContext}
 * info a {@link WebAppManifestRenderingContext }
 *
 * @param aContext instance of the rendering context to check
 * @return the {@link WebAppManifestRenderingContext } version of the {@link RenderingContext} or an exception
 *
 * @example this.onRenderingContext.map(assertWebAppManifestRenderingContext);
 */
function assertWebAppManifestRenderingContext(aContext: RenderingContext): WebAppManifestRenderingContext {
    // test if the context is as expected
    if (isWebAppManifestRenderingContext(aContext)) {
        return aContext;
    }
    // type failure
    throw new TypeError('WebAppManifestRenderingContext');
}

/*
 * @name WebAppManifest
 * @id 3900cd47-0f9a-45a9-892f-3f9a3e42c751
 */
abstract class AbstractWebAppManifestComponent extends AbstractRenderingComponent {

    /**
    * Strongly typed stream of the rendering contexts
    */
    readonly onRenderingContext: Observable<WebAppManifestRenderingContext>;

    /**
    * Strongly typed rendering context
    */
    renderingContext: WebAppManifestRenderingContext;

    /*
     * {
     *   "elementType": "text",
     *   "key": "context_root",
     *   "label": "Context Root",
     *   "required": false
     * }
     */
    @RenderingContextBinding('text.context_root', '')
    readonly onContextRoot: Observable<string>;

    /*
     * @see #onContextRoot
     */
    @RenderingContextBinding()
    readonly contextRoot: string;

    /*
     * {
     *   "elementType": "text",
     *   "key": "short_name",
     *   "label": "Short Name",
     *   "minLength": 1,
     *   "required": true
     * }
     */
    @RenderingContextBinding('text.short_name')
    readonly onShortName: Observable<string>;

    /*
     * @see #onShortName
     */
    @RenderingContextBinding()
    readonly shortName: string;

    /*
     * {
     *   "elementType": "text",
     *   "key": "name",
     *   "label": "Name",
     *   "minLength": 1,
     *   "required": true
     * }
     */
    @RenderingContextBinding('text.name')
    readonly onName: Observable<string>;

    /*
     * @see #onName
     */
    @RenderingContextBinding()
    readonly name: string;

    /*
     * {
     *   "acceptType": [
     *     "png"
     *   ],
     *   "elementType": "image",
     *   "imageProfileId": "cc4411cb-7fbe-49ea-8c49-16edfb63ade5",
     *   "key": "icon",
     *   "label": "Icon",
     *   "required": true
     * }
     */
    @RenderingContextBinding('image.icon')
    readonly onIcon: Observable<Image>;

    /*
     * @see #onIcon
     */
    @RenderingContextBinding()
    readonly icon: Image;

    /*
     * {
     *   "elementType": "text",
     *   "helpText": "Defines the expected background color for the web application. This value repeats what is already available in the application stylesheet, but can be used by browsers to draw the background color of a web application when the manifest is available before the style sheet has loaded. This creates a smooth transition between launching the web application and loading the application's content.",
     *   "key": "background_color",
     *   "label": "Background Color",
     *   "maxLength": 7,
     *   "required": false
     * }
     */
    @RenderingContextBinding('text.background_color', '')
    readonly onBackgroundColor: Observable<string>;

    /*
     * @see #onBackgroundColor
     */
    @RenderingContextBinding()
    readonly backgroundColor: string;

    /*
     * {
     *   "elementType": "text",
     *   "helpText": "Defines the default theme color for an application. This sometimes affects how the application is displayed by the OS (e.g., on Android's task switcher, the theme color surrounds the application).",
     *   "key": "theme_color",
     *   "label": "Theme Color",
     *   "maxLength": 7
     * }
     */
    @RenderingContextBinding('text.theme_color', '')
    readonly onThemeColor: Observable<string>;

    /*
     * @see #onThemeColor
     */
    @RenderingContextBinding()
    readonly themeColor: string;

    /*
     * {
     *   "elementType": "toggle",
     *   "helpText": "All of the available display area is used and no user agent chrome is shown.",
     *   "key": "fullscreen",
     *   "label": "Fullscreen"
     * }
     */
    @RenderingContextBinding('toggle.fullscreen', false)
    readonly onFullscreen: Observable<boolean>;

    /*
     * @see #onFullscreen
     */
    @RenderingContextBinding()
    readonly fullscreen: boolean;

    /*
     * {
     *   "elementType": "toggle",
     *   "helpText": "The application will look and feel like a standalone application. This can include the application having a different window, its own icon in the application launcher, etc. In this mode, the user agent will exclude UI elements for controlling navigation, but can include other UI elements such as a status bar.",
     *   "key": "standalone",
     *   "label": "Standalone"
     * }
     */
    @RenderingContextBinding('toggle.standalone', false)
    readonly onStandalone: Observable<boolean>;

    /*
     * @see #onStandalone
     */
    @RenderingContextBinding()
    readonly standalone: boolean;

    /*
     * {
     *   "elementType": "toggle",
     *   "helpText": "The application will look and feel like a standalone application, but will have a minimal set of UI elements for controlling navigation. The elements will vary by browser.",
     *   "key": "minimal_ui",
     *   "label": "Minimal UI"
     * }
     */
    @RenderingContextBinding('toggle.minimal_ui', false)
    readonly onMinimalUi: Observable<boolean>;

    /*
     * @see #onMinimalUi
     */
    @RenderingContextBinding()
    readonly minimalUi: boolean;

    /*
     * {
     *   "elementType": "toggle",
     *   "helpText": "The application opens in a conventional browser tab or new window, depending on the browser and platform. This is the default.",
     *   "key": "browser",
     *   "label": "Browser"
     * }
     */
    @RenderingContextBinding('toggle.browser', false)
    readonly onBrowser: Observable<boolean>;

    /*
     * @see #onBrowser
     */
    @RenderingContextBinding()
    readonly browser: boolean;

    protected constructor() {
        super();
    }
}

/**
* 18acd1c9-888e-4c44-bd2c-a38c5a62bf45
*/
export {
    WebAppManifestRenderingContext,
    isWebAppManifestRenderingContext,
    assertWebAppManifestRenderingContext,
    AbstractWebAppManifestComponent
};