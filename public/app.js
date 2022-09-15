import * as Auth from'./controller/firebase_auth.js';
import * as About from './viewpage/about_page.js';
import * as TicTacToe from './viewpage/tictactoe_page.js';

Auth.addEventListeners();
About.addEventListeners();
TicTacToe.addEventListeners();

