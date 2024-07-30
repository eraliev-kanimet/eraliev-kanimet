import {tailwindcssApplyTheme} from "../../helpers/tailwindcss.js";

export default function () {
    const themeBtn = document.getElementById('themeBtn')
    const moonSvg = themeBtn.children[0]
    const sunSvg = themeBtn.children[1]

    const hiddenSvg = (theme) => {
        if (theme === 'dark') {
            moonSvg.classList.add('hidden')
            sunSvg.classList.remove('hidden')
        } else {
            sunSvg.classList.add('hidden')
            moonSvg.classList.remove('hidden')
        }
    }

    const setTheme = () => {
        if (localStorage.getItem('theme') === 'dark') {
            localStorage.setItem('theme', 'light')
        } else {
            localStorage.setItem('theme', 'dark')
        }
    }

    const theme = tailwindcssApplyTheme(localStorage.getItem('theme'))

    hiddenSvg(theme)

    localStorage.setItem('theme', theme)

    themeBtn.addEventListener('click', () => {
        setTheme()

        hiddenSvg(tailwindcssApplyTheme(localStorage.getItem('theme')))
    })
}

