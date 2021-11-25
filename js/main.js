// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

/**
 * FUNZIONI
 */
function generaNumeroRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}
/**
 * VARIABILI DI PROGETTO
 */
const timer = 3;

// 1. creo un array con 5 numeri casuali
const numeriCasuali = [];

for(let i = 0; i < 5; i++) {
	const num = generaNumeroRandom(1, 100);
	numeriCasuali.push(num);
}

// 2. li stampo in pagina
const numeriCasualiElm = document.getElementById("numeri-casuali");
numeriCasualiElm.innerHTML = numeriCasuali;

// 30 secondi...

// 2.b nascondo i numeri
setTimeout(function(){
	numeriCasualiElm.innerHTML = '';
}, (timer - 1) * 1000 );

setTimeout(function(){
	// 3. chiedo all'utente per 5 volte di inserire un numero
	const numeriUtente = [];

	for(let i = 0; i < 5; i++) {
		const num = parseInt(prompt("Inserisci un numero"));
		numeriUtente.push(num);
	}
	
	// 4. confronto dei due array
	const numeriValidi = [];
	for(let i = 0; i < numeriUtente.length; i++) {
		// 5. verifico se il numero su cui sto iterando è presente nell'array dei numeri casuali
		if(numeriCasuali.includes(numeriUtente[i]) == true) {
			numeriValidi.push(numeriUtente[i]);
		}
	}
	// 5. stampo sei scarso se l'utente non ha indovinato nemmeno un numero!
	if(numeriValidi.length == 0) {
		alert("sei scarso!! ritenta");
	} else {
		alert(`Hai indovinato ${numeriValidi.length}, i numeri indovinati sono: ${numeriValidi}`);
	}

}, timer * 1000);