// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {
	//koden some bægrænser værdien må komme under nul eller over 10 er næsten ens.
	//samtidig kan det give god mening at samle den logik som kontrollerer værdien i en funktion.
	//opret en funktion der kan kontrollere om værdien er under minimum eller over maksimum.
	//kald funktionen fra dine eventlisteners.
	// skriv din kode her...
	const buttonUp = document.querySelector("#btn-count-increase");
	const buttonDown = document.querySelector("#btn-count-decrease");
	const texFinder = document.querySelector("#text-count");
	//let findOut;
	let countUp = 5;
	let maxValue = 15;
	let minValue = 0;
	texFinder.textContent = countUp + "🕺";
	buttonUp.addEventListener("click", (event) => {
		findOut = true;
		check(event);
		updateNumber();
	});
	buttonDown.addEventListener("click", (event) => {
		findOut = false;
		check(event);
		updateNumber();
	});
	function updateNumber() {
		texFinder.textContent = countUp;
	}

	function check(event) {
		console.log(event);
		if (findOut == true) {
			if (countUp < maxValue) {
				countUp += 1;
			}
		} else {
			if (findOut == false) {
				if (countUp > minValue) {
					countUp -= 1;
				}
			}
		}
	}
}); // Afslutter: DOMContentLoaded
