console.log('Main Js is running...');

import { printText, createCell, createBorder, longText, drawLine, checkbox ,radioButtonpdf } from './framework/jspdfFramework.js';
import { billFunction } from './certificates/demoBill.js'


billFunction(printText, createCell, createBorder, longText, drawLine, checkbox ,radioButtonpdf);
