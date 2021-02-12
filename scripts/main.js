// common functions

// template for making choosen link active
function chooseRightLink(elements, activeClass) {
    $(elements).click(function(){
        for(let item of elements) {
            $(item).removeClass(activeClass);
        }
        
        $(this).toggleClass(activeClass);
    })  
}
//template for tabs
function tabsLogic(parentClass, _this) {
    let triggerClass ='tabs_triggers_buttons_item';
    let contentClass = 'tabs_content_wrapper_item';
    // remove active classes
    $(`.${parentClass} .${triggerClass}`).removeClass(`${triggerClass}--active`);
    $(`.${parentClass} .${contentClass}`).removeClass(`${contentClass}--active`);
    // add needed class for choosen element
    $($(_this)).addClass(`${triggerClass}--active`);
    $($(_this).attr('href')).addClass(`${contentClass}--active`);
}

// empty links without reacting for click
let links = $("a");
for(let item of links) {
    $(item).click(function(event) {
        event.preventDefault();
    })
}

// scroll logics
$(document).scroll(function() {
    let scrollTop = $(window).scrollTop();
    let wrapper = $('.main-container_hat');
    if (scrollTop >= 100) {
        wrapper.css({
            'position': 'fixed',
            'z-index': 10,
            'margin': '0 auto',
            'left': 0,
            'right': 0,
            'background': 'rgba(255, 255, 255, .95)',
        });
    }
    else {
        wrapper.css({
            'position': 'static',
            'background': 'none',
        });
    }
});


function toggleMenu() {
    $('.burger-nav').toggleClass('active-nav');
    // scroll is not available
    $('body').toggleClass('lock-scroll');
}

// main scripts
$(document).ready(function() {
    // menu for small devices
    $('.burger').click(function(e) {
        e.preventDefault();
        // changes button
        $(this).toggleClass('burger_active');
        // opens menu
        toggleMenu();
    });
    // overlay logic
    $('.burger-nav_overlay').click(function() {
        $('.burger').toggleClass('burger_active');
        toggleMenu();
    });

    // choose category
    let categoryLinks = $(".main-container_best-offers_options_menu_nav ul a");
    chooseRightLink(categoryLinks, "choosen-item");
    
    // select logic
    $('.select').each(function() {
        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 450; // длительность анимации 
    
        _this.hide();
        _this.wrap('<div class="select"></div>');
        $('<div>', {
            class: 'new-select',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);
    
        const selectHead = _this.next('.new-select');
        $('<div>', {
            class: 'new-select__list'
        }).insertAfter(selectHead);
    
        const selectList = selectHead.next('.new-select__list');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                class: 'new-select__item',
                html: $('<span>', {
                    text: selectOption.eq(i).text()
                })
            })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
        }
    
        const selectItem = selectList.find('.new-select__item');
        selectList.slideUp(0);
        selectHead.on('click', function() {
            if ( !$(this).hasClass('on') ) {
                $(this).addClass('on');
                selectList.slideDown(duration);
    
                selectItem.on('click', function() {
                    let chooseItem = $(this).data('value');
    
                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectHead.text( $(this).find('span').text() );
    
                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                });
    
            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });
    });

    // invest-top block tabs
    $('.main-container_invest-top .tabs_triggers_buttons_item').click(function(){
        tabsLogic('main-container_invest-top', $(this));
    });
    // invest-bottom block tabs
    $('.main-container_invest-bottom .tabs_triggers_buttons_item').click(function(){
        tabsLogic('main-container_invest-bottom', $(this));
    });
    // how-works block tabs
    $('.main-container_how-works .tabs_triggers_buttons_item').click(function(){
        tabsLogic('main-container_how-works', $(this));
    });
    // help block tabs
    $('.main-container_help .tabs_triggers_buttons_item').click(function(){
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

    // left/right chevrons to put them as html using JS
    let chevronLeft = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 320 512">
                        <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 
                        33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z">
                        </path>
                    </svg>`;
    let chevronRight = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 320 512">
                            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 
                            101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
                            </path>
                        </svg>`;
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