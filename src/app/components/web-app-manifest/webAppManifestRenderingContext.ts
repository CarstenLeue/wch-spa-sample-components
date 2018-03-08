/**
 * Do not modify this file, it is auto-generated.
 */
import {
    SingleImageElement,
    SingleTextElement,
    SingleToggleElement,
    RenderingContext
} from 'ibm-wch-sdk-ng';

export const KEY_CONTEXT_ROOT = 'context_root';
export const KEY_SHORT_NAME = 'short_name';
export const KEY_NAME = 'name';
export const KEY_ICON = 'icon';
export const KEY_BACKGROUND_COLOR = 'background_color';
export const KEY_THEME_COLOR = 'theme_color';
export const KEY_FULLSCREEN = 'fullscreen';
export const KEY_STANDALONE = 'standalone';
export const KEY_MINIMAL_UI = 'minimal_ui';
export const KEY_BROWSER = 'browser';

/*
 * @name WebAppManifest
 * @id 3900cd47-0f9a-45a9-892f-3f9a3e42c751
 */
export interface WebAppManifestRenderingContext extends RenderingContext {

    /*
     * The ID of the content type this item belongs to.
     */
    typeId: '3900cd47-0f9a-45a9-892f-3f9a3e42c751';

    /*
     * this is the link to the content type document this content is based on.
     */
    type: 'WebAppManifest';

    /*
     * The classification defines the document type. For content items, all documents are classified as \"content\".
     */
    classification: 'content';

    /*
     * Defined by the type and capture in the schema given by the type,
     *  in a real content, this property will be filled with more information.
     */
    elements: {
        /**
         * {
     *   "elementType": "text",
     *   "key": "context_root",
     *   "label": "Context Root",
     *   "required": false
     * }
        */
        ['context_root']?: SingleTextElement;
        /**
         * {
     *   "elementType": "text",
     *   "key": "short_name",
     *   "label": "Short Name",
     *   "minLength": 1,
     *   "required": true
     * }
        */
        ['short_name']: SingleTextElement;
        /**
         * {
     *   "elementType": "text",
     *   "key": "name",
     *   "label": "Name",
     *   "minLength": 1,
     *   "required": true
     * }
        */
        ['name']: SingleTextElement;
        /**
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
        ['icon']: SingleImageElement;
        /**
         * {
     *   "elementType": "text",
     *   "helpText": "Defines the expected background color for the web application. This value repeats what is already available in the application stylesheet, but can be used by browsers to draw the background color of a web application when the manifest is available before the style sheet has loaded. This creates a smooth transition between launching the web application and loading the application's content.",
     *   "key": "background_color",
     *   "label": "Background Color",
     *   "maxLength": 7,
     *   "required": false
     * }
        */
        ['background_color']?: SingleTextElement;
        /**
         * {
     *   "elementType": "text",
     *   "helpText": "Defines the default theme color for an application. This sometimes affects how the application is displayed by the OS (e.g., on Android's task switcher, the theme color surrounds the application).",
     *   "key": "theme_color",
     *   "label": "Theme Color",
     *   "maxLength": 7
     * }
        */
        ['theme_color']?: SingleTextElement;
        /**
         * {
     *   "elementType": "toggle",
     *   "helpText": "All of the available display area is used and no user agent chrome is shown.",
     *   "key": "fullscreen",
     *   "label": "Fullscreen"
     * }
        */
        ['fullscreen']?: SingleToggleElement;
        /**
         * {
     *   "elementType": "toggle",
     *   "helpText": "The application will look and feel like a standalone application. This can include the application having a different window, its own icon in the application launcher, etc. In this mode, the user agent will exclude UI elements for controlling navigation, but can include other UI elements such as a status bar.",
     *   "key": "standalone",
     *   "label": "Standalone"
     * }
        */
        ['standalone']?: SingleToggleElement;
        /**
         * {
     *   "elementType": "toggle",
     *   "helpText": "The application will look and feel like a standalone application, but will have a minimal set of UI elements for controlling navigation. The elements will vary by browser.",
     *   "key": "minimal_ui",
     *   "label": "Minimal UI"
     * }
        */
        ['minimal_ui']?: SingleToggleElement;
        /**
         * {
     *   "elementType": "toggle",
     *   "helpText": "The application opens in a conventional browser tab or new window, depending on the browser and platform. This is the default.",
     *   "key": "browser",
     *   "label": "Browser"
     * }
        */
        ['browser']?: SingleToggleElement;
    };

    text: {
        /**
         * {
     *   "elementType": "text",
     *   "key": "context_root",
     *   "label": "Context Root",
     *   "required": false
     * }
        */
        ['context_root']?: string;
        /**
         * {
     *   "elementType": "text",
     *   "key": "short_name",
     *   "label": "Short Name",
     *   "minLength": 1,
     *   "required": true
     * }
        */
        ['short_name']: string;
        /**
         * {
     *   "elementType": "text",
     *   "key": "name",
     *   "label": "Name",
     *   "minLength": 1,
     *   "required": true
     * }
        */
        ['name']: string;
        /**
         * {
     *   "elementType": "text",
     *   "helpText": "Defines the expected background color for the web application. This value repeats what is already available in the application stylesheet, but can be used by browsers to draw the background color of a web application when the manifest is available before the style sheet has loaded. This creates a smooth transition between launching the web application and loading the application's content.",
     *   "key": "background_color",
     *   "label": "Background Color",
     *   "maxLength": 7,
     *   "required": false
     * }
        */
        ['background_color']?: string;
        /**
         * {
     *   "elementType": "text",
     *   "helpText": "Defines the default theme color for an application. This sometimes affects how the application is displayed by the OS (e.g., on Android's task switcher, the theme color surrounds the application).",
     *   "key": "theme_color",
     *   "label": "Theme Color",
     *   "maxLength": 7
     * }
        */
        ['theme_color']?: string;
    };

    image: {
        /**
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
        ['icon']: SingleImageElement;
    };

    toggle: {
        /**
         * {
     *   "elementType": "toggle",
     *   "helpText": "All of the available display area is used and no user agent chrome is shown.",
     *   "key": "fullscreen",
     *   "label": "Fullscreen"
     * }
        */
        ['fullscreen']?: boolean;
        /**
         * {
     *   "elementType": "toggle",
     *   "helpText": "The application will look and feel like a standalone application. This can include the application having a different window, its own icon in the application launcher, etc. In this mode, the user agent will exclude UI elements for controlling navigation, but can include other UI elements such as a status bar.",
     *   "key": "standalone",
     *   "label": "Standalone"
     * }
        */
        ['standalone']?: boolean;
        /**
         * {
     *   "elementType": "toggle",
     *   "helpText": "The application will look and feel like a standalone application, but will have a minimal set of UI elements for controlling navigation. The elements will vary by browser.",
     *   "key": "minimal_ui",
     *   "label": "Minimal UI"
     * }
        */
        ['minimal_ui']?: boolean;
        /**
         * {
     *   "elementType": "toggle",
     *   "helpText": "The application opens in a conventional browser tab or new window, depending on the browser and platform. This is the default.",
     *   "key": "browser",
     *   "label": "Browser"
     * }
        */
        ['browser']?: boolean;
    };

}