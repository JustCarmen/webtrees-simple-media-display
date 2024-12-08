<?php

declare(strict_types=1);

namespace JustCarmen\Webtrees\Module\SimpleMediaDisplay;

use Fisharebest\Webtrees\Registry;
use JustCarmen\Webtrees\Module\SimpleMediaDisplay\SimpleMediaDisplayModule;

require __DIR__ . '/SimpleMediaDisplayModule.php';

return Registry::container()->get(SimpleMediaDisplayModule::class);
