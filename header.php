
<!doctype html>
<html class="no-js" <?php language_attributes(); ?> >
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<?php wp_head(); ?>
	</head>
	<body <?php body_class(); ?>>

    <div id="barba-wrapper">
        <div class="barba-container" data-namespace="<?= get_page_type($wp_query); ?>">
            <header role="banner" class="header">
                <div class="row">
                    <div class="column small-6">
                        <a href="<?= home_url() ?>" class="header__logo">Francesco Cardascia</a>
                    </div>
                    <div class="column small-6 text-right">
                        <?php
                        $menu = wp_get_nav_menu_items(wp_get_nav_menu_object(get_nav_menu_locations()['main-menu']));
                        foreach ($menu as $m) : ?>
                            <a href="<?= $m->url ?>" class="header__about"><?= $m->title ?></a>
                        <?php endforeach; ?>
                    </div>
                </div>
            </header>
            <div class="mainContainer">
