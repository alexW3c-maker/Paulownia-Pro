function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function() {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function(support) {
    if (support === true) {
        document.querySelector('html').classList.add('_webp');
    } else {
        document.querySelector('html').classList.add('_no-webp');
    }
});
/////Close-Open Scroll
const mainScroll = document.querySelector('.main__scroll_box'),
    closeScroll = document.querySelector('.main__scroll_close');

    closeScroll.addEventListener('click', () => {
    mainScroll.classList.toggle('active');
});

// Menu & hamburger
const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.main__nav_mobile'),
    closeElem = document.querySelector('.mobile__menu_close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

//Sliders
new Swiper('.main__slider', {
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 4000,
    },
    speed: 800,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    preloadImages: false,
    lazy: {
        loadOnTransitionStart: true,
        loadPrevNext: true,
    },
});

//Sliders
new Swiper('.booklet__slider', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 3000,
    },
    speed: 1000,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    preloadImages: false,
    lazy: {
        loadOnTransitionStart: true,
        loadPrevNext: true,
    },
});

new Swiper('.plant__slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    loop: true,
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
    },
    speed: 1000,
    centeredSlides: true,
    initialSlide: 1,
    observer: true,
    observeParents: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 20,
        stretch: 50,
        slideShadows: true,
    },
    breakpoints: {
        1000: {
            slidesPerView: 4,
        },
        650: {
            slidesPerView: 3,
        },
        320: {
            slidesPerView: 2,
        },
    },
});

new Swiper('.plant__wood_slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    loop: true,
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
    },
    speed: 1000,
    centeredSlides: true,
    initialSlide: 1,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 20,
        stretch: 50,
        slideShadows: true,
    },
    breakpoints: {
        1000: {
            slidesPerView: 4,
        },
        650: {
            slidesPerView: 3,
        },
        320: {
            slidesPerView: 2,
        },
    },
});

new Swiper('.differ__slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    freeMode: true,
    loop: true,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
    },
    speed: 2000,
    centeredSlides: true,
    initialSlide: 1,
});

new Swiper('.differ__slider_other', {
    slidesPerView: 4,
    spaceBetween: 40,
    freeMode: true,
    loop: true,
    autoplay: {
        delay: 1,
        stopOnLastSlide: false,
    },
    speed: 3000,
});

new Swiper('.news__slider', {
    slidesPerView: 1,
    freeMode: true,
    spaceBetween: -400,
    loop: true,
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
    },
    speed: 2000,
    centeredSlides: true,
    initialSlide: 1,
    observer: true,
    observeParents: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 30,
        stretch: 1,
    },
    breakpoints: {
        
        630: {
            spaceBetween: -200,
        },
        320: {
            spaceBetween: 40,
        },
    },
});

new Swiper('.partners__slider', {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    loop: true,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
    },
    speed: 2000,
    initialSlide: 1,
});

new Swiper('.card-single__slider', {
    spaceBetween: -10,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    speed: 2000,
    initialSlide: 1,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    preloadImages: false,
    lazy: {
        loadOnTransitionStart: true,
        loadPrevNext: true,
    },
    thumbs: {
        swiper: {
            el: '.card-single__mslider',
            slidesPerView: 5,
            spaceBetween: 5,
            freeMode: true,
            loop: true,
            autoplay: {
                delay: 1000,
                stopOnLastSlide: false,
            },
            speed: 2000,
            initialSlide: 1,
            mousewheel: {
                sensitivity: 1,
                eventsTarget: ".card-single__mslider",
            },
            breakpoints: {
        
                1160: {
                    slidesPerView: 5,
                },
                650: {
                    slidesPerView: 4,
                },
                320: {
                    slidesPerView: 3,
                    spaceBetween: 5,
                },
            },
        },
    },
});

//Modal
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function(e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function(e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function(e) {
            if (!e.target.closest('.popup__body')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.page').offsetWidth + 'px';
    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function() {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function(e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('popup.open');
        popupClose(popupActive);
    }
});

///Scroll To Top
var sttElem = document.querySelector('.pageUp');
var screanHeight = window.innerHeight;

var sttScroll = function sttScroll() {
  document.addEventListener('scroll', function (e) {
    if (screanHeight <= window.scrollY) {
      sttElem.classList.add('pageUp__active');
    } else if (e.target.scrollingElement.scrollTop <= screanHeight) {
      sttElem.classList.remove('pageUp__active');
      sttElem.style.pointerEvents = 'auto';
    }
  });
};

var sttClick = function sttClick() {
  sttElem.addEventListener('click', function () {
    var docHeight = window.scrollY;
    var progress = 0;
    var position = docHeight;
    var speed = 4; // When increasing this value. The scrolling speed will increase

    sttElem.style.pointerEvents = 'none';

    var sttAnim = function sttAnim() {
      progress += 1;
      position -= progress * speed;
      window.scrollTo(0, position);

      if (position > 0) {
        requestAnimationFrame(sttAnim);
      }
    };

    requestAnimationFrame(sttAnim);
  });
};

var sttFunc = function sttFunc() {
  sttScroll();
  sttClick();
};

document.addEventListener('DOMContentLoaded', sttFunc);

///Counter
const btns = document.querySelectorAll('.counter__btn');

btns.forEach( btn => {
    btn.addEventListener( 'click', function () {
        const direction = this.dataset.direction;
        const inp = this.parentElement.querySelector('.counter__value');
        const currentValue = +inp.value;
        let newValue;

        if (direction === 'plus') {
            newValue = currentValue + 1;
        } else {
            newValue = currentValue - 1 > 0 ? currentValue -1 : 0;
        }
        inp.value = newValue;
    });
});

/// Search form
window.onload = function () {
    document.addEventListener("click", documentActions);

    function documentActions(e) {
        const targetElement = e.target;
        if (targetElement.classList.contains('search_icon')) {
            document.querySelector('.search-box').classList.toggle('search-box_active');
        } else if (!targetElement.closest('.search-box') && document.querySelector('.search-box.search-box_active')) {
            document.querySelector('.search-box').classList.remove('search-box_active');
        }
        const closeForm = document.querySelector('.close-form');
        const popupActive = document.querySelector('.search-box.search-box_active');
        if (targetElement.classList.contains('close-form')) {
            document.querySelector('.search-box').classList.remove('search-box_active');
        }
    };
};

/// User Basket
const totalPriceWrapper = document.getElementById('total-price');

const ACTION = {
    PLUS: 'plus',
    MINUS: 'minus'
};

const getItemSubTotalPrice = (input) => Number(input.value) * Number(input.dataset.price);

const setTotalPrice = (value) => {
    totalPriceWrapper.textContent = value;
    totalPriceWrapper.dataset.value = value;
};

const init = () => {
    let totalCost = 0;

    [...document.querySelectorAll('.user-basket__item')].forEach((basketItem) => {
        totalCost += getItemSubTotalPrice(basketItem.querySelector('.input'));
    });

    setTotalPrice(totalCost);
};

const calculateSeparateItem = (basketItem, action) => {
    const input = basketItem.querySelector('.input');

    switch (action) {
        case ACTION.PLUS:
            input.value++;
            setTotalPrice(Number(totalPriceWrapper.dataset.value) + Number(input.dataset.price));
            break;
        case ACTION.MINUS:
            input.value--;
            setTotalPrice(Number(totalPriceWrapper.dataset.value) - Number(input.dataset.price));
            break;
    }

    basketItem.querySelector('.subtotal').textContent = `${getItemSubTotalPrice(input)} €`;
};
document.getElementById('basket').addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-minus')) {
        const input = event.target.closest('.user-basket__item').querySelector('.input');

        if (Number(input.value) !== 0) {
            calculateSeparateItem(
                event.target.closest('.user-basket__item'),
                ACTION.MINUS
            );
        }
    }

    if (event.target.classList.contains('btn-plus')) {
        calculateSeparateItem(
            event.target.closest('.user-basket__item'),
            ACTION.PLUS
        );
    }
});
init();

/// User cabinet ==================================================================================
///Delete Item From Basket

function deleteItem() {
    const basketBox = document.getElementById('basket');
    const parent = event.target.parentNode;
    const count = Number(parent.querySelector('input').value);
    const price = Number(document.querySelector('.price').textContent.replace(/\s[$]/g, ''));
    basketBox.removeChild(parent);
    
};

///Delete Item From Favor
function deleteFavor() {
    const favorBox = document.getElementById('userFav');
    favorBox.removeChild(event.target.parentNode);
};

///Delete Item From Plantation
function deletePlant() {
    const planBox = document.getElementById('userPlan');
    planBox.removeChild(event.target.parentNode);
};
