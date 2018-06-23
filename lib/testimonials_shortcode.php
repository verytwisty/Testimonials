<?php

function vt_testimonials( $atts , $content) {
	$testimonials = '';

	$title = $atts['title'];

	$testimonials .= '<div id="testimonials-body">';
	$testimonials .= '<div class="testimonials-circle">';
	$testimonials .= '</div>';
	$testimonials .= '<div class="testimonials-text">';
	$testimonials .= '<h2>' . $title . '</h2>';
	$testimonials .= '<div class="testimonials-desc">' . $content . '</div>';
	$testimonials .= '</div>';
	$testimonials .= '</div>';

	return $testimonials;

}
add_shortcode( 'testimonials', 'vt_testimonials' );