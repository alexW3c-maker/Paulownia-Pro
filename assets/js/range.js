const rangeSlider = document.getElementById ('filter-range');

if (rangeSlider) {

    noUiSlider.create(rangeSlider, {
        start: [10, 99999],
        connect: true,
        step: 1,
        range: {
            'min': [10],
            'max': [99999]
        }
    });

    const priceStart = document.getElementById ('price-start');
    const priceEnd = document.getElementById ('price-end');
    const inputs = [priceStart, priceEnd];

    rangeSlider.noUiSlider.on('update', function(values, handle) {
        inputs[handle].value = Math.round(values[handle]);
    });

    const setRangeSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value;

        rangeSlider.noUiSlider.set(arr);
    };

    inputs.forEach((el, index) => {
        el.addEventListener('change', (e) => {
            setRangeSlider(index, e.currentTarget.value);
        });
    });
}
/////
const rangeSliderMob = document.getElementById ('filter-rangeMob');

if (rangeSliderMob) {

    noUiSlider.create(rangeSliderMob, {
        start: [10, 99999],
        connect: true,
        step: 1,
        range: {
            'min': [10],
            'max': [99999]
        }
    });

    const priceStartMob = document.getElementById ('price-startMob');
    const priceEndMob = document.getElementById ('price-endMob');
    const inputsMob = [priceStartMob, priceEndMob];

    rangeSliderMob.noUiSlider.on('update', function(values, handle) {
        inputsMob[handle].value = Math.round(values[handle]);
    });

    const setRangeSliderMob = (i, value) => {
        let arr = [null, null];
        arr[i] = value;

        rangeSliderMob.noUiSlider.set(arr);
    };

    inputsMob.forEach((el, index) => {
        el.addEventListener('change', (e) => {
            setRangeSliderMob(index, e.currentTarget.value);
        });
    });
}

/////Close-Open Banner
const woodBanner = document.querySelector('.wood__banner'),
closeBanner = document.querySelector('.wood__banner_close');

closeBanner.addEventListener('click', () => {
    woodBanner.classList.toggle('active');
});

