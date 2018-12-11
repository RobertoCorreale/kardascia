<?php
/*
Template Name: About
*/

get_header(); ?>
<div class="about">
    <div>
        <div class="row">
            <div class="column small-10">
                <?= $post->post_title ?>
            </div>
            <div class="column small-2">
                X
            </div>
        </div>
        <div class="row">
            <div class="colum small-6 small-offset-1">
                <?= apply_filters('the_content', $post->post_content) ?>
            </div>
            <div class="column small-4">
                <img src="<?= get_the_post_thumbnail_url($post->ID) ?>" alt="">
            </div>
        </div>
    </div>
</div>

<?php get_footer();
