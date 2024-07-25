import themeSwitcher from "./themeSwitcher.js";

const init = () => {
    themeSwitcher()
}

export default function () {
    document.addEventListener('DOMContentLoaded', init)
}