<?php

/*
 * Add custom metabox to add in the job title
 * Taken from a tutorial by Justin Tadlock
 * https://www.smashingmagazine.com/2011/10/create-custom-post-meta-boxes-wordpress/
 */




/* Fire our meta box setup function on the post editor screen. */
add_action( 'load-post.php', 'vt_testimonials_titles_setup' );
add_action( 'load-post-new.php', 'vt_testimonials_titles_setup' );

/* Meta box setup function. */
function vt_testimonials_titles_setup() {

  /* Add meta boxes on the 'add_meta_boxes' hook. */
  add_action( 'add_meta_boxes', 'vt_testimonials_titles' );

  /* Save post meta on the 'save_post' hook. */
  add_action( 'save_post', 'vt_testimonials_save_meta', 10, 2 );
}

/* Create one or more meta boxes to be displayed on the post editor screen. */
function vt_testimonials_titles() {

  add_meta_box(
    'vt-testimonials-jobtitle',      // Unique ID
    esc_html__( 'Job Title', 'example' ),    // Title
    'vt_testimonials_meta_box',   // Callback function
    'vt_testimonials',         // Admin page (or post type)
    'advanced',         // Context
    'high'         // Priority
  );
}

/* Display the post meta box. */
function vt_testimonials_meta_box( $post ) { ?>

  <?php wp_nonce_field( basename( __FILE__ ), 'vt_testimonial_job_nonce' ); ?>

  <p>
    <label for="vt-testimonials-jobtitle"><?php _e( "Add a job title", 'example' ); ?></label>
    <br />
    <input class="widefat" type="text" name="vt-testimonials-jobtitle" id="vt-testimonials-jobtitle" value="<?php echo esc_attr( get_post_meta( $post->ID, 'vt_testimonials_jobtitle', true ) ); ?>" size="30" />
  </p>
<?php }


/* Save the meta box's post metadata. */
function vt_testimonials_save_meta( $post_id, $post ) {

  /* Verify the nonce before proceeding. */
  if ( !isset( $_POST['vt_testimonial_job_nonce'] ) || !wp_verify_nonce( $_POST['vt_testimonial_job_nonce'], basename( __FILE__ ) ) )
    return $post_id;

  /* Get the post type object. */
  $post_type = get_post_type_object( $post->post_type );

  /* Check if the current user has permission to edit the post. */
  if ( !current_user_can( $post_type->cap->edit_post, $post_id ) )
    return $post_id;

  /* Get the posted data and sanitize it for use as an HTML class. */
  $new_meta_value = ( isset( $_POST['vt-testimonials-jobtitle'] ) ? sanitize_html_class( $_POST['vt-testimonials-jobtitle'] ) : '' );

  /* Get the meta key. */
  $meta_key = 'vt_testimonials_jobtitle';

  /* Get the meta value of the custom field key. */
  $meta_value = get_post_meta( $post_id, $meta_key, true );

  /* If a new meta value was added and there was no previous value, add it. */
  if ( $new_meta_value && '' == $meta_value )
    add_post_meta( $post_id, $meta_key, $new_meta_value, true );

  /* If the new meta value does not match the old value, update it. */
  elseif ( $new_meta_value && $new_meta_value != $meta_value )
    update_post_meta( $post_id, $meta_key, $new_meta_value );

  /* If there is no new meta value but an old value exists, delete it. */
  elseif ( '' == $new_meta_value && $meta_value )
    delete_post_meta( $post_id, $meta_key, $meta_value );
}


// Register MetaData in rest api
// https://torquemag.io/2015/07/working-with-post-meta-data-using-the-wordpress-rest-api/
// https://wordpress.stackexchange.com/questions/270154/getting-user-meta-data-from-wp-rest-api
// https://developer.wordpress.org/reference/functions/register_rest_field/


function slug_get_post_meta_cb( $object, $field_name, $request ) {
    return get_post_meta( $object[ 'id' ], $field_name );
}

add_action( 'rest_api_init', 'add_testimonial_rest' );

function add_testimonial_rest(){
 register_rest_field( 'vt_testimonials',
    'vt_testimonials_jobtitle',
    array(
       'get_callback'    => 'slug_get_post_meta_cb',
       'update_callback' => null,
       'schema'          => null,
    )
 );

};


