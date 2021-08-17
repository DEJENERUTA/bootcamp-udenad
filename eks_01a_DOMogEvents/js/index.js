// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {
	// operet en funktion som indsætter tallet 5, i p-tagget med id'et 'text_count'.
	// Nå man klikker på plusset skal værdien formindseks med en
	// værdien må ikke kommer over 10
	// værdien må ikke kommer over 0

	// skriv din kode her...
	const buttonUp = document.querySelector("#btn-count-increase");
	const buttonDown = document.querySelector("#btn-count-decrease");
	const tex = document.querySelector("#text-count");
	let countUp = 5;
	tex.textContent = countUp + "🕺";
	buttonUp.addEventListener("click", count);
	buttonDown.addEventListener("click", countNed);
	function count() {
		if (countUp < 10) {
			countUp += 1;
			tex.textContent = countUp;
		}
	}
	function countNed() {
		if (countUp > 0) {
			countUp -= 1;
			tex.textContent = countUp;
		}
	}
}); // Afslutter: DOMContentLoaded
