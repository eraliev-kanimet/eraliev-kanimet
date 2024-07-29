import themeSwitcher from "./themeSwitcher.js";
import ui from "./ui.js";

const init = () => {
    themeSwitcher()

    ui()
}

export default function () {
    document.addEventListener('DOMContentLoaded', init)
}