import {tailwindcssApplyTheme} from "../../helpers/tailwindcss.js";

export default () => ({
    init() {
        this.theme = tailwindcssApplyTheme(localStorage.getItem('theme') ?? null)

        localStorage.setItem('theme', this.theme)

        document.querySelectorAll('main > section')
            .forEach(el => {
                el.classList.remove('!hidden')
            })
    },

    theme: '',

    setTheme() {
        if (this.theme === 'dark') {
            this.theme = 'light'
        } else {
            this.theme = 'dark'
        }

        localStorage.setItem('theme', tailwindcssApplyTheme(this.theme))
    },

    sidebar: false,

    setSidebar: function () {
        this.sidebar = !this.sidebar
    },

    section: 'home',

    setSection(section) {
        this.section = section
    }
})
