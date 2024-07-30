import {tailwindcssApplyTheme} from "../../helpers/tailwindcss.js";

export default () => ({
    init() {
        this.theme = tailwindcssApplyTheme(localStorage.getItem('theme') ?? null)

        localStorage.setItem('theme', this.theme)
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
})
