// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {
	// et array er en variabel som indholde en række data.
	//opret en variabel som indholde et array med tre navne, fx "Anders", "Fedtmule" og "Micky"
	//brug en løkke til at udskrive variabel i det <ul> tag som findes in index.html
	//husk, at det er en liste, så de enkelte navne skal omkranses af <li> tag.
	// skriv din kode her...
	const family = ["Lea", "Rita", "Betty"];
	const liste = document.querySelector("#liste");

	for (let i = 0; i < family.length; i++) {
		let element = document.createElement("li");
		liste.append(element);
		element.append(family[i]);
		console.log(i);
	}
}); // Afslutter: DOMContentLoaded
//the same solution in foreach method
let nanve = ["Dejene", "Daba", "Jebessa"];
let ulElement = document.querySelector("#liste");
nanve.forEach((navne) => {
	ulElement.innerHTML += `<li> ${navne}</li>`;
});
