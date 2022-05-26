import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

/**
 * Test if string is valid URL
 * @param string
 * @returns {boolean}
 */

export function isValidUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

/**
 * Convert rating text to number
 * @param string
 * @returns {integer}
 */

export function convertRating(string) {
  switch(string) {
    case "zero" : return 0;
    case "one" : return 1;
    case "two" : return 2;
    case "three" : return 3;
    case "four" : return 4;
    case "five" : return 5;
    case "six" : return 6;
    default: break;
  }
  return 0;
}

/**
 * Convert language to proper format
 * @param string
 * @returns {string}
 */

export function convertLanguage(string) {
  switch(string) {
    case "bash" : return "Shell Examples";
    case "css" : return "CSS3 Examples";
    case "html" : return "HTML5 Examples";
    case "java" : return "Java Examples";
    case "javascript" : return "JavaScript Examples";
    case "php" : return "PHP Examples";
    case "python" : return "Python Examples";
    case "ruby" : return "Ruby Examples";
    case "sql" : return "MySQL Examples";
    default: break;
  }
  return "";
}

/**
 * Get Gatsby image
 * @param object
 * @returns object
 */
export function getGatsbyImage(obj, classNames='') {
  const image = getImage(obj.localFile)
  return (<GatsbyImage image={ image } alt={ obj.alternativeText } className={ classNames } />)
}
