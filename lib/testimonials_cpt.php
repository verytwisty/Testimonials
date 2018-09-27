<?php

if ( ! function_exists('vt_testimonials_circles') ) {

// Register Custom Post Type
function vt_testimonials_circles() {

	$labels = array(
		'name'                  => _x( 'Testimonials', 'Post Type General Name', 'vt_testimonials' ),
		'singular_name'         => _x( 'Testimonial', 'Post Type Singular Name', 'vt_testimonials' ),
		'menu_name'             => __( 'Testimonials', 'vt_testimonials' ),
		'name_admin_bar'        => __( 'Testimonials', 'vt_testimonials' ),
		'archives'              => __( 'Testimonials', 'vt_testimonials' ),
		'attributes'            => __( 'Item Attributes', 'vt_testimonials' ),
		'parent_item_colon'     => __( 'Parent Item:', 'vt_testimonials' ),
		'all_items'             => __( 'All Testimonials', 'vt_testimonials' ),
		'add_new_item'          => __( 'Add New Item', 'vt_testimonials' ),
		'add_new'               => __( 'New Testimonial', 'vt_testimonials' ),
		'new_item'              => __( 'New Testimonial', 'vt_testimonials' ),
		'edit_item'             => __( 'Edit Item', 'vt_testimonials' ),
		'update_item'           => __( 'Update Item', 'vt_testimonials' ),
		'view_item'             => __( 'View Item', 'vt_testimonials' ),
		'view_items'            => __( 'View Items', 'vt_testimonials' ),
		'search_items'          => __( 'Search Item', 'vt_testimonials' ),
		'not_found'             => __( 'Not found', 'vt_testimonials' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'vt_testimonials' ),
		'featured_image'        => __( 'Featured Image', 'vt_testimonials' ),
		'set_featured_image'    => __( 'Set featured image', 'vt_testimonials' ),
		'remove_featured_image' => __( 'Remove featured image', 'vt_testimonials' ),
		'use_featured_image'    => __( 'Use as featured image', 'vt_testimonials' ),
		'insert_into_item'      => __( 'Insert into item', 'vt_testimonials' ),
		'uploaded_to_this_item' => __( 'Uploaded to this item', 'vt_testimonials' ),
		'items_list'            => __( 'Items list', 'vt_testimonials' ),
		'items_list_navigation' => __( 'Items list navigation', 'vt_testimonials' ),
		'filter_items_list'     => __( 'Filter items list', 'vt_testimonials' ),
	);
	$args = array(
		'label'                 => __( 'Testimonial', 'vt_testimonials' ),
		'description'           => __( 'A little plugin that displays testimonials on a page', 'vt_testimonials' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor', 'thumbnail' ),
		'taxonomies'            => array( ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'menu_icon'             => 'dashicons-awards',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => false,
		'exclude_from_search'   => false,
		'publicly_queryable'    => false,
		'capability_type'       => 'post',
		'show_in_rest'          => true,
	);
	register_post_type( 'vt_testimonials', $args );

}
add_action( 'init', 'vt_testimonials_circles', 0 );

/**
 * Disabling the Gutenberg editor on Testimonial Post Type.
 *
 * @param bool   $can_edit  Whether to use the Gutenberg editor.
 * @param string $post_type Name of WordPress post type.
 * @return bool  $can_edit
 */

// found from https://wordpress.org/support/topic/disable-gutenberg-on-pages-or-specific-post-type/

function gutenberg_cant_edit_this( $can_edit, $post_type ) {
	if ( 'vt_testimonials' === get_post_type() ) {
		$can_edit = false;
	}
	return $can_edit;
}
add_filter( 'gutenberg_can_edit_post_type', 'gutenberg_cant_edit_this', 10, 2 );


}
