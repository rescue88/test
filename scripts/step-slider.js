const pipsSlider = document.getElementById("slider-pips");

if(pipsSlider) {
    noUiSlider.create(pipsSlider, {
        range: {
            'min': [50000],
            'max': [1000000],
        },
        start: [50000],
        pips: {
            mode: 'values',
            values: [50000, 100000, 300000, 500000, 1000000],
            density: 10,
            stepped: true,
        }
    });

    var pips = pipsSlider.querySelectorAll('.noUi-value');

    function clickOnPip() {
        var value = Number(this.getAttribute('data-value'));
        pipsSlider.noUiSlider.set(value);
    }

    for (var i = 0; i < pips.length; i++) {

        // For this example. Do this in CSS!
        pips[i].style.cursor = 'pointer';
        pips[i].addEventListener('click', clickOnPip);
    }
}