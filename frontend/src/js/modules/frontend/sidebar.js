export default function () {
    const sidebar = document.getElementById('sidebar');
    const openSidebar = document.getElementById('openSidebar')
    const closeSidebar = document.getElementById('closeSidebar')

    openSidebar.addEventListener('click', () => {
        sidebar.classList.remove('left-[-100%]')
        sidebar.classList.add('left-0')
    })

    closeSidebar.addEventListener('click', () => {
        sidebar.classList.remove('left-0')
        sidebar.classList.add('left-[-100%]')
    })

    document
        .querySelectorAll('button[data-close-block="sidebar"]')
        .forEach(el => {
            el.addEventListener('click', () => {
                sidebar.classList.remove('left-0')
                sidebar.classList.add('left-[-100%]')
            })
        })
}