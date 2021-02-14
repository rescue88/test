// left/right chevrons to put them as html using JS (slider button icons)
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
// let links = $("a");
// for(let item of links) {
//     $(item).click(function(event) {
//         event.preventDefault();
//     })
// }

// scroll logics
$(document).scroll(function() {
    let scrollTop = $(window).scrollTop();
    let fixedHeader = $('.main-container_hat');
    let wrapper = $('.main-container_hat_wrapper');
    if (scrollTop >= fixedHeader.height()) {
        fixedHeader.css({
            'position': 'fixed',
            'left': 0,
            'right': 0,
            'z-index': 1000,
            'margin': '0 auto',
            'background': 'rgba(255, 255, 255, .95)',
        });
        wrapper.css({
            'padding': '.7rem 0',
        });
    }
    else {
        fixedHeader.css({
            'position': 'static',
            'background': 'none',
        });
        wrapper.css({
            'padding': '1.5rem 0',
        });
    }
});

// burger menu button
function toggleMenu() {
    $('.burger-nav').toggleClass('active-nav');
    // scroll is not available
    $('body').toggleClass('lock-scroll');
}

$(document).ready(function() {
    // menu for small devices
    $('.burger').click(function(e) {
        e.preventDefault();
        // changes button
        $(this).toggleClass('burger_active');
        // opens menu
        toggleMenu();
    });
    // active-menu overlay click logic
    $('.burger-nav_overlay').click(function() {
        $('.burger').toggleClass('burger_active');
        toggleMenu();
    });

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
})