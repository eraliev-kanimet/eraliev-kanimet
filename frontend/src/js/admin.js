import '../scss/index.scss'
import '../scss/admin.scss'

import Alpine from "alpinejs";

import common from "./modules/admin/common.js";

Alpine.data('common', common)

Alpine.start()