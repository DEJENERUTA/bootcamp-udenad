// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {
	//functioner kan indeholde parametre, som er en slags variabler i funktionen.
	//når man eksekvere funktionen, kan man medsende argumenter, som erstatter parametret.
	//tilføj et parametret, navn, til funktionen fra opgave2a. tilret din console.log så
	//den udskriver "hej med dig", og navnet fra parametret
	//kald funktionen et par gange med forskellige navne som argumenter
	//tilret din console.log så den udskriver et mellemrum efter kommet
	// skriv din kode her...
	function hils(navn) {
		console.log(`Hej med dig, " ${navn}`);
	}
	hils("Rita");
	hils("Lea");
	hils("Betty");
}); // Afslutter: DOMContentLoaded
