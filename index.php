<?php

use Kirby\Cms\App as Kirby;
use Kirby\Sane\Html;
use Kirby\Toolkit\A;

Kirby::plugin('johannschopplich/footnote-mark', []);

/*
 * Add `article-footnote` to Kirby's Sane class allowed tags,
 * otherwise the writer field content parsed by the sanitizer would
 * strip `article-footnote` tags
 */
Html::$allowedTags = A::merge(
    Html::$allowedTags,
    [
        'article-footnote' => true
    ]
);
