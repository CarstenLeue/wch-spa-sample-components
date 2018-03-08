/**
 * Do not modify this file, it is auto-generated.
 */
import {
    MultiReferenceElement,
    RenderingContext
} from 'ibm-wch-sdk-ng';

export const KEY_BANNER = 'banner';
export const KEY_SECTION_ONE = 'sectionOne';
export const KEY_SECTION_TWO = 'sectionTwo';

/*
 * @name Standard page
 * @id 2af1d22a-fecf-41e1-a808-7301cb37b79f
 * @description Standard page has a one column layout, a two blocks and Hero, and a 4 blocks and Hero layout which include multiple sections for greater flexibility.  In the Oslo site, it's used for the Home, Events, and About us pages.
 */
export interface StandardPageRenderingContext extends RenderingContext {

    /*
     * The ID of the content type this item belongs to.
     */
    typeId: '2af1d22a-fecf-41e1-a808-7301cb37b79f';

    /*
     * this is the link to the content type document this content is based on.
     */
    type: 'Standard page';

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
     *   "allowMultipleValues": true,
     *   "elementType": "reference",
     *   "fieldLabel": "Banner section",
     *   "helpText": "Add content, such as a hero banner, that you want to display at the top of your page.",
     *   "key": "banner",
     *   "label": "Banner section",
     *   "minimumValues": 0
     * }
        */
        ['banner']?: MultiReferenceElement;
        /**
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
        ['sectionOne']?: MultiReferenceElement;
        /**
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
        ['sectionTwo']?: MultiReferenceElement;
    };

    references: {
        /**
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
        ['banner']?: RenderingContext[];
        /**
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
        ['sectionOne']?: RenderingContext[];
        /**
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
        ['sectionTwo']?: RenderingContext[];
    };

}