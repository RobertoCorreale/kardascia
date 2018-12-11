<?php
/*
Template Name: Homepage
*/

$portfolio = new WP_Query([
	'post_type' => 'portfolio',
	'post_status' => 'publish',
	'orderby' => 'menu_order'
]);

get_header(); ?>

<div class="row">
	<div class="column small-12">
		<ul class="projectList">
			<?php foreach ($portfolio->posts as $p) : ?>
				<li>
                    <img class="projectList__image" src="<?= get_the_post_thumbnail_url($p->ID) ?>" alt="<?= $p->post_title ?>">
					<a href="<?= get_permalink($p->ID) ?>"><?= $p->post_title ?></a>
				</li>
			<?php endforeach ?>
		</ul>
	</div>
</div>

<?php get_footer();
