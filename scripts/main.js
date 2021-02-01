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

// main scripts
$(document).ready(function() {
    // choose category
    let categoryLinks = $(".main-container_best-offers_items_options_menu ul a");
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
    })
})