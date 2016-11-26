goog.provide('audion.entryPoints.ExtensionTag');


/**
 * The value of the tag field for every relevant message posted by the tracing
 * code. Messages from the page that lack a tag property of this value are not
 * relevant to this extension, and we may ignore them. This is a number randomly
 * generated from 0 to the largest signed int. It is a number to allow for fast
 * comparison.
 * @const {number}
 */
audion.entryPoints.ExtensionTag = 823710097;