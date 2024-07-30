import '../scss/index.scss'
import '../scss/admin.scss'

import themeSwitcher from "./modules/themeSwitcher.js";
import ui from "./modules/admin/ui.js";

document.addEventListener('DOMContentLoaded', () => {
    themeSwitcher()

    ui()
})