document.addEventListener("DOMContentLoaded", function () {
    let celsiusInput = document.querySelector('#celsius > input');
    let fahrenheitInput = document.querySelector('#fahrenheit > input');

    let btn = document.querySelector('.button button');

    function roundNumber(number) {
        return Math.round(number * 100) / 100;
    }

    function updateConversions() {
        let cTemp = parseFloat(celsiusInput.value);
        let fTemp = (cTemp * (9 / 5)) + 32;
        let kTemp = cTemp + 273.15;

        fahrenheitInput.value = roundNumber(fTemp);
        
    }

    celsiusInput.addEventListener('input', updateConversions);

    function updateConversionsFromFahrenheit() {
        let fTemp = parseFloat(fahrenheitInput.value);
        let cTemp = (fTemp - 32) * (5 / 9);
        let kTemp = (fTemp - 32) * (5 / 9) + 273.15;

        celsiusInput.value = roundNumber(cTemp);
        
    }

    fahrenheitInput.addEventListener('input', updateConversionsFromFahrenheit);

    btn.addEventListener('click', () => {
        celsiusInput.value = "";
        fahrenheitInput.value = "";
    });
});
