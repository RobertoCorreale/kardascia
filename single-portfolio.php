<?php

$fields = get_fields();
get_header() ?>

<div class="row">
    <div class="column small-12">
        <h1 class="singlePortfolio__title"><?= $post->post_title ?></h1>
    </div>
    <div class="column small-12">
        <h2 class="singlePortfolio__subtitle"><?= $fields['subtitle'] ?></h2>
    </div>
    <div class="column small-1">back</div>
    <div class="column small-10">
        <div class="singlePortfolio__description">
            <?= apply_filters('the_content', $post->post_content) ?>
        </div>
        <div>
            <ul class="singlePortfolio__tags">
                <li>Art diree</li>
                <li>boh</li>
                <li>Quadratini</li>
                <li>Viola</li>
            </ul>
        </div>
    </div>
</div>

<div class="gallery">
    <div class="row">
        <?php if(isset($fields['gallery'])) : ?>
            <?php foreach ($fields['gallery'] as $item) : ?>
                <div class="column small-12 medium-<?= $item['column'] ?> medium-offset-<?= $item['column_offset_left'] ?>">
                    <img class="gallery__item" src="<?= $item['immagine']['url'] ?>" alt="">
                </div>
            <?php endforeach; ?>
        <?php endif ?>
    </div>
</div>


<div class="lightbox">
    <figure>
        <?= get_svg('close.svg') ?>
        <img src="" alt="" class="lightbox__image">
    </figure>
</div>

<?php get_footer() ?>
