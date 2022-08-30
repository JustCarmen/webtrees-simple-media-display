/**
  * Laravel mix - jc-media-display
 *
 * Output:
 * 		- dist
 *        - resources
 *          - views
 *        module.php
 *        LICENSE.md
 *        README.md
 *
 */

let mix = require('laravel-mix');
require('laravel-mix-clean');

const dist_dir = 'dist/jc-simple-media-display';

mix
  .setPublicPath('./dist')
  .copyDirectory('resources/views', dist_dir + '/resources/views')
  .copy('SimpleMediaDisplayModule.php', dist_dir)
  .copy('module.php', dist_dir)
  .copy('LICENSE.md', dist_dir)
  .copy('README.md', dist_dir)
  .clean();
