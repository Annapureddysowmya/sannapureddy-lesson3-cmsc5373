export function addEventListeners() {

    Elements.menus.about.addEventListener('click', () => {
        about_page();
    })
}

function about_page() {
    let html = 'About Page';

    Elements.root.innerHTML = html;
}