export function addEventListeners() {

    Elements.menus.tictactoe.addEventListener('click', () => {
        tictactoe_page();
    });
}

function tictactoe_page() {
    let  html = 'TicTacToe Game Page';
    Elements.root.innerHTML = html;
}