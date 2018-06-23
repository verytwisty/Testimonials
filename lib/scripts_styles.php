<?php

namespace Very_Twisty\Testimonials;

add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\vt_testimonials_scripts' );

	function vt_testimonials_scripts(){

	$block_path = '/dist/js/bundle.min.js';
	$style_path = '/dist/css/style.css';

	wp_enqueue_script( 'vt-testimonials-script', _get_plugin_url() . $block_path,  array(), filemtime( _get_plugin_directory() . $block_path ), true );
	wp_enqueue_style( 'vt-testimonials-style', _get_plugin_url() . $style_path,  array(), filemtime( _get_plugin_directory() . $style_path ) );
}