import { 
    getFirestore,
    collection, addDoc,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js"
import { TicTacToeGame } from "../model/tictactoe_game";

const db = getFirestore();

const TicTacToeGameCollection = 'tictactoe_game';

export async function addTicTacToeGameHistory(gamePlay) {
    //gamePlay = {email, winner, moves, timestamp}
    await addDoc(collection(db, TicTacToeGameCollection), gamePlay);
}
