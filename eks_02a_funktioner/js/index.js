// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {
	//opret en funktion som du kalder 'hils' og lad den udskrive et 'Hej med dig!' i konsolen.
	//kald funktionen. husk paranteser.
	//har det betydning om du kalder funktionen før eller efter den er oprettet?
	// skriv din kode her...

	function hils() {
		console.log("Hej med dig!");
	}
	hils();
}); // Afslutter: DOMContentLoaded
