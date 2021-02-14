// main page scripts
$(document).ready(function() {
    // choose category
    let categoryLinks = $(".main-container_best-offers_options_menu_nav ul a");
    chooseRightLink(categoryLinks, "choosen-item");

    // invest-top block tabs
    $('.main-container_invest-top .tabs_triggers_buttons_item').click(function(e){
        e.preventDefault();
        tabsLogic('main-container_invest-top', $(this));
    });
    // invest-bottom block tabs
    $('.main-container_invest-bottom .tabs_triggers_buttons_item').click(function(e){
        e.preventDefault();
        tabsLogic('main-container_invest-bottom', $(this));
    });
    // how-works block tabs
    $('.main-container_how-works .tabs_triggers_buttons_item').click(function(e){
        e.preventDefault();
        tabsLogic('main-container_how-works', $(this));
    });
    // help block tabs
    $('.main-container_help .tabs_triggers_buttons_item').click(function(e){
        e.preventDefault();
        tabsLogic('main-container_help', $(this));
    })
    // first tab is active
    let activeTabs = $(".active-tab");
    for(let i = 0; i < activeTabs.length; i++) {
        $(activeTabs[i]).click();
    }

    // reset filter
    $('#reset-filter').click(function(){
        $('.main-container_filter_form')[0].reset();
    });

    // best-offers block slider
    $('.best-offers_slider').slick({
        arrows: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        infinite: false,
        draggable: false,
        appendArrows: $('.main-container_best-offers_hat .hat-carousel_buttons'),
        prevArrow: `<div class="hat-carousel_buttons_prev center-childs">${chevronLeft}</div>`,
        nextArrow: `<div class="hat-carousel_buttons_next center-childs">${chevronRight}</div>`,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 2.5,
                }
            },
            {
                breakpoint: 1450,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1.5,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.5,
                    arrows: true,
                    appendArrows: $('.main-container_best-offers .hat-carousel_buttons-bottom'),
                    prevArrow: `<div class="hat-carousel_buttons_prev center-childs">${chevronLeft}</div>`,
                    nextArrow: `<div class="hat-carousel_buttons_next center-childs">${chevronRight}</div>`,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    appendArrows: $('.main-container_best-offers .hat-carousel_buttons-bottom'),
                    prevArrow: `<div class="hat-carousel_buttons_prev center-childs">${chevronLeft}</div>`,
                    nextArrow: `<div class="hat-carousel_buttons_next center-childs">${chevronRight}</div>`,
                }
            },
        ],
    });
    // work-with block slider
    $('.work-with_slider').slick({
        arrows: true,
        adaptiveHeight: true,
        slidesToShow: 5,
        infinite: false,
        draggable: false,
        appendArrows: $('.main-container_work-with_hat .hat-carousel_buttons'),
        prevArrow: `<div class="hat-carousel_buttons_prev center-childs">${chevronLeft}</div>`,
        nextArrow: `<div class="hat-carousel_buttons_next center-childs">${chevronRight}</div>`,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                    appendArrows: $('.main-container_work-with .hat-carousel_buttons-bottom'),
                    prevArrow: `<div class="hat-carousel_buttons_prev center-childs">${chevronLeft}</div>`,
                    nextArrow: `<div class="hat-carousel_buttons_next center-childs">${chevronRight}</div>`,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                    appendArrows: $('.main-container_work-with .hat-carousel_buttons-bottom'),
                    prevArrow: `<div class="hat-carousel_buttons_prev center-childs">${chevronLeft}</div>`,
                    nextArrow: `<div class="hat-carousel_buttons_next center-childs">${chevronRight}</div>`,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1.5,
                    arrows: true,
                    appendArrows: $('.main-container_work-with .hat-carousel_buttons-bottom'),
                    prevArrow: `<div class="hat-carousel_buttons_prev center-childs">${chevronLeft}</div>`,
                    nextArrow: `<div class="hat-carousel_buttons_next center-childs">${chevronRight}</div>`,
                }
            },
        ],
    })
    // reviews block slider
    $('.reviews_slider').slick({
        arrows: true,
        adaptiveHeight: true,
        slidesToShow: 4,
        infinite: false,
        draggable: false,
        variableHeight: true,
        appendArrows: $('.main-container_reviews_hat .hat-carousel_buttons'),
        prevArrow: `<div class="hat-carousel_buttons_prev center-childs">${chevronLeft}</div>`,
        nextArrow: `<div class="hat-carousel_buttons_next center-childs">${chevronRight}</div>`,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                    appendArrows: $('.main-container_reviews .hat-carousel_buttons-bottom'),
                    prevArrow: `<div class="hat-carousel_buttons_prev center-childs">${chevronLeft}</div>`,
                    nextArrow: `<div class="hat-carousel_buttons_next center-childs">${chevronRight}</div>`,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    appendArrows: $('.main-container_reviews .hat-carousel_buttons-bottom'),
                    prevArrow: `<div class="hat-carousel_buttons_prev center-childs">${chevronLeft}</div>`,
                    nextArrow: `<div class="hat-carousel_buttons_next center-childs">${chevronRight}</div>`,
                }
            },
        ],
    });
    // news block slider(max-width: 767px)
    $('.main-container_news_container').slick({
        responsive: [
            {
                breakpoint: 9999,
                settings: 'unslick',
            },
            {
                breakpoint: 767,
                settings: {
                    infinite: false,
                    adaptiveHeight: true,
                    draggable: false,
                    slidesToShow: 2,
                    arrows: true,
                    appendArrows: $('.main-container_news .hat-carousel_buttons-bottom'),
                    prevArrow: `<div class="hat-carousel_buttons_prev center-childs">${chevronLeft}</div>`,
                    nextArrow: `<div class="hat-carousel_buttons_next center-childs">${chevronRight}</div>`,
                }
            },
            {
                breakpoint: 630,
                settings: {
                    infinite: false,
                    adaptiveHeight: true,
                    draggable: false,
                    slidesToShow: 1.5,
                    arrows: true,
                    appendArrows: $('.main-container_news .hat-carousel_buttons-bottom'),
                    prevArrow: `<div class="hat-carousel_buttons_prev center-childs">${chevronLeft}</div>`,
                    nextArrow: `<div class="hat-carousel_buttons_next center-childs">${chevronRight}</div>`,
                }
            },
            {
                breakpoint: 475,
                settings: {
                    infinite: false,
                    adaptiveHeight: true,
                    draggable: false,
                    slidesToShow: 1,
                    arrows: true,
                    appendArrows: $('.main-container_news .hat-carousel_buttons-bottom'),
                    prevArrow: `<div class="hat-carousel_buttons_prev center-childs">${chevronLeft}</div>`,
                    nextArrow: `<div class="hat-carousel_buttons_next center-childs">${chevronRight}</div>`,
                }
            }
        ]
    });

    // value sliders(crawlers)
    // sum slider
    function filterPipsSum(value, type) {
        let sumRange = [50000, 100000, 300000, 500000, 1000000, 2000000];
        if (type === 0) {
            return value < 2000 ? -1 : 0;
        }
        return sumRange.indexOf(value) !== -1 ? 2 : 1;
    }

    let sumCrawler = document.getElementById('sum-slider');

    noUiSlider.create(sumCrawler, {
        range: {
            'min': [50000, 50000],
            '19%': [100000, 200000],
            '35%': [300000, 200000],
            '51%': [500000, 500000],
            '69%': [1000000, 1000000],
            'max': [2000000],
        },
        start: [300000],
        connect: [true, false],
        pips: {
            mode: 'steps',
            filter: filterPipsSum,
            density: 10,
        }
    });

    // remaking sum pips
    sumPips = $('#sum-slider .noUi-pips .noUi-value-sub');
    for(let i = 0; i < sumPips.length; i++) {
        // making the end point like '>{number}' manually
        if(i === sumPips.length - 1) {
            $(sumPips[i]).html('>1 000 000');
            continue;
        }
        // making the number orders
        let htmlVal = parseInt($(sumPips[i]).html()).toLocaleString('ru');
        $(sumPips[i]).html(htmlVal);
    }

    sumCrawler.noUiSlider.on('update', (value, handle) => {
        // if we reach the last element, make its value different
        if(parseInt(value) === 2000000) {
            value = '>1 000 000';
        }
        else {
            value = (parseInt(value)).toLocaleString('ru');
        }
        $('#sum-change').val(value);
    });
    // time slider
    function filterPipsTime(value, type) {
        let timeRange = [3, 6, 12, 24];
        if (type === 0) {
            return value < 2000 ? -1 : 0;
        }
        return timeRange.indexOf(value) !== -1 ? 2 : 1;
    }

    let timeCrawler = document.getElementById('time-slider');

    noUiSlider.create(timeCrawler, {
        range: {
            'min': [3, 3],
            '31%': [6, 6],
            '62%': [12, 12],
            'max': [24],    
        },
        start: 6,
        connect: [true, false],
        pips: {
            mode: 'steps',
            filter: filterPipsTime,
            density: 10,
        }
    });

    // making the last element like '>{number}' manually
    $('#time-slider .noUi-pips .noUi-value-sub:last-child').html('>12');

    timeCrawler.noUiSlider.on('update', (value, handle) => {
        // if we reach the last element, make its value different
        if(parseInt(value) === 24) {
            value = '>12';
            $('#time-change').val(value);
        }
        else {
            $('#time-change').val(parseInt(value));
        }
    });
    // profit slider
    function filterPipsProfit(value, type) {
        let profitRange = [100000, 200000, 500000, 1000000, 2000000, 3000000];
        if (type === 0) {
            return value < 2000 ? -1 : 0;
        }
        return profitRange.indexOf(value) !== -1 ? 2 : 1;
    }

    let profitCrawler = document.getElementById('profit-slider');

    noUiSlider.create(profitCrawler, {
        range: {
            'min': [100000, 100000],
            '20%': [200000, 300000],
            '36%': [500000, 500000],
            '52%': [1000000, 1000000],
            '70%': [2000000, 1000000],
            'max': [3000000]
        },
        start: 500000,
        connect: [true, false],
        pips: {
            mode: 'steps',
            filter: filterPipsProfit,
            density: 10,
        }
    });

    // remaking profit pips
    profitPips = $('#profit-slider .noUi-pips .noUi-value-sub');
    for(let i = 0; i < profitPips.length; i++) {
        // making the number orders
        let htmlVal = parseInt($(profitPips[i]).html()).toLocaleString('ru');
        $(profitPips[i]).html(htmlVal);
    }


    profitCrawler.noUiSlider.on('update', (value, handle) => {
        value = (parseInt(value)).toLocaleString('ru');
        $('#profit-change').val(value);
    })
});