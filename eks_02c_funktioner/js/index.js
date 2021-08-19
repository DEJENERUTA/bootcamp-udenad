// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {
	//en funktion kan returnere værdier til derfra hvor funktionen bliver kaldt/eksekveret.
	//det kræver at der er en variable til at tage imod de data funktionen sender retur
	//kopier keden fra opgave 2b
	//i stedet for at kalde dit console.log i funktionen, skal der nu stå:
	//return "Hej med dig, " + navn;
	//der hvor du kalder din funktion skal du nu oprette en variable til at tage imod svaret
	//var hilsenFraOle = hilsen("Ole");
	//uskriv variabel i konsolen.
	// skriv din kode her...
	function hils(navn) {
		return "Hej med dig, " + navn;
	}
	let resultet = hils("Rita");
	console.log(resultet);
}); // Afslutter: DOMContentLoaded
