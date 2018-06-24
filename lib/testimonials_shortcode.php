<?php

function vt_testimonials( $atts , $content) {
	$testimonials = '';

	$title = $atts['title'];
	$number = array_key_exists( 'number', $atts ) ? intval( $atts['number'] ) : 10;
	$random = $atts['random'] == 'yes' ? 'true' : 'false' ;

	$testimonials .= '<div id="testimonials-body"'  . 'data-random="' . $random . '" data-number="' . $number . '">';
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