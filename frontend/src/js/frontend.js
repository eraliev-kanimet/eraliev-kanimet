import '../scss/index.scss'
import '../scss/frontend.scss'

import themeSwitcher from "./modules/themeSwitcher.js";
import ui from "./modules/frontend/ui.js";

document.addEventListener('DOMContentLoaded', () => {
    themeSwitcher()

    ui()
})