import { getAuth, signInWithEmailAndPassword,
    onAuthStateChanged,
 } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js"

import * as Elements from '../viewpage/elements.js';
import { DEV } from "../model/constants.js";
import { info } from "../viewpage/util.js";

const auth = getAuth();

export let currentUser = null;

export function addEventListeners(){

    Elements.formSignin.addEventListener('submit',async e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        try{
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            Elements.modalSignin.hide();
        } catch (e) {
            if (DEV) console.log('Sign In Error', e);
            const errorCode = e.code;
            const errorMessage = e.message;
            info('Sign in Error', errorMessage, Elements.modalSignin);

        }

    });

    onAuthStateChanged(auth, authStateChangedObserver);

}

function authStateChangedObserver(user) {
    currentUser = user;
    if (user) {
        //sign in
        for (let i=0;  i <Elements.modalpreauthElements.length; i++) {
            Elements.modalpreauthElements[i].style.display = 'none';
        }
        for (let i=0;  i <Elements.modalpostauthElements.length; i++) {
            Elements.modalpostauthElements[i].style.display = 'block';  
        }  
    } else {
        //sign out
        for (let i=0;  i <Elements.modalpreauthElements.length; i++) {
            Elements.modalpreauthElements[i].style.display = 'block';
        }
        for (let i=0;  i <Elements.modalpostauthElements.length; i++) {
            Elements.modalpostauthElements[i].style.display = 'none';
        }
    }
}