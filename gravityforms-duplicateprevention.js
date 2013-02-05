/**
 * Client-side scripting for the Gravity Forms Duplicate Prevention plugin
 * @package Gravity Forms
 * @subpackage Gravity Forms Duplicate Prevention
 * @author Buckeye Interactive
 * @version 0.1
 * @see https://github.com/buckii/gravityforms-duplicateprevention
 */
/*global jQuery: true */
/*jslint white: true */
/*jshint browser: true */

jQuery ( function ( $ ) {
  "use strict";

  /** Intercept form submissions and disable the submit button */
  $('form').on( 'submit', function () {
    $(this).find( 'input[type="submit"], button[type="submit"]' ).attr( 'disabled', 'disabled' ).addClass( 'gravityforms-duplicateprevention-loading' );
  });

});