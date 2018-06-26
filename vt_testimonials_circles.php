<?php
/**
 * Plugin's bootstrap file to launch the plugin.
 *
 * @package     VeryTwisty Testimonials Circles
 * @author      Belinda Mustoe (verytwisty)
 * @license     GPL2+
 *
 * @wordpress-plugin
 * Plugin Name: VeryTwisty Testimonials Circles
 * Plugin URI:  https://verytwisty.com
 * Description: Displays some testimonials in a cicle on your website
 * Version:     1
 * Author:      Very Twisty
 */


namespace Very_Twisty\Testimonials;

//  Exit if accessed directly.
defined('ABSPATH') || exit;


/**
 * Gets this plugin's absolute directory path.
 *
 * @since  2.1.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_directory() {
	return __DIR__;
}

/**
 * Gets this plugin's URL.
 *
 * @since  2.1.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_url() {
	static $plugin_url;

	if ( empty( $plugin_url ) ) {
		$plugin_url = plugins_url( null, __FILE__ );
	}

	return $plugin_url;
}

// Add Custom Post type
include __DIR__ . '/lib/testimonials_cpt.php';

// Add Shortcode
include __DIR__ . '/lib/testimonials_shortcode.php';

// Add Job Title Metabox
include __DIR__ . '/lib/testimonials_metabox.php';

// Enqueue JS & CSS
include __DIR__ . '/lib/scripts_styles.php';

