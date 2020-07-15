//Chiedere all'utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma


//****** Solo con il ciclo for senza funzioni *****/

// var parolaUser = prompt('Inserisci una parola');
// var viceVersa = ''; 

// for (var i = parolaUser.length - 1; i >= 0; i--) {
//     viceVersa += parolaUser[i]; 
//     console.log('la parola al contrario si legge ' + viceVersa);
// }
// if (viceVersa == parolaUser) {
//     console.log('la parola inserita è palindroma');
// } else {
//     console.log('la parola inserita non è palindroma');
// }

//********* Funzione *******//

var parolaUser = prompt('Inserisci una parola'); //Chiedo all'utente di inserire la parola
palindroma(parolaUser);

function palindroma(parola) {
    var viceVersa = ''; //la variabile locale

    for (var i = parola.length - 1; i >= 0; i--) { //Con il ciclo for vado a leggere la parola inserita al contrario
        viceVersa += parola[i];
    }
    console.log('La parola al contrario si legge ' + viceVersa);
    

    if (viceVersa == parola) { // Controllo se la parola inserita e quella letta al contrario coincidono
        console.log('La parola inserita è palindroma');
    } else {
        console.log('La parola inserita non è palindroma');
    }
}
