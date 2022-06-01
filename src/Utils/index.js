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
 * Convert language to proper format
 * @param string
 * @returns {string}
 */

export function convertLanguage(string) {
  switch(string) {
    case "bash" : return "Shell Examples"
    case "css" : return "CSS3 Examples"
    case "html" : return "HTML5 Examples"
    case "java" : return "Java Examples"
    case "javascript" : return "JavaScript Examples"
    case "php" : return "PHP Examples"
    case "python" : return "Python Examples"
    case "ruby" : return "Ruby Examples"
    case "scss" : return "SCSS Examples"
    case "sql" : return "MySQL Examples"
    default: break
  }
  return ""
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

/**
 * Get theme colors based on level
 * @param integer
 * @returns {string}
 */
export function getColor(level) {
  const colors = ['#850802', '#022820', '#051188']
  let pointer
  if (level < 50) {
    pointer = 0
  } else if (level >= 50 && level < 80) {
    pointer = 1
  } else if (level >= 80) {
    pointer = 2
  }
  return colors[pointer]
}
