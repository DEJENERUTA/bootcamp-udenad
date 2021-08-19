// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {
	//løkke i opgave 3a kan bruges til det specifikke array. man kan bruge funktioner
	//til at gøre koden mere genbrugelig
	//kopier koden fra opgave 3a
	//poret en funktion som har et parameter som hedder "arry"
	//flyt løkken fra opgave 3a ind i funktioner, og brug funktions parametret i stedet for
	//det oprindelige array-navn i din løkke.
	//kald funktionen med dit array af navne some argument
	// skriv din kode her...
	const family = ["Lea", "Rita", "Betty"];
	const liste = document.querySelector("#liste");
	function myFunction(array) {
		for (let i = 0; i < array.length; i++) {
			let element = document.createElement("li");
			liste.append(element);
			element.append(array[i]);
		}
	}
	myFunction(family);
}); // Afslutter: DOMContentLoaded
