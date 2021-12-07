<?php

/*
 * Add `article-footnote` to Kirby's Sane class allowed tags, otherwise
 * the writer field content parsed by the sanitizer would strip it
 */
\Kirby\Sane\Html::$allowedTags['article-footnote'] = true;

\Kirby\Cms\App::plugin('johannschopplich/kirby-writer-marks', []);
