// common functions
// let chooseRightTab(clickedElem, ) {
//     let links = $(path);
//     $()
// }

// empty links without reacting for click
let links = document.querySelectorAll("a");
for(const item of links) {
    item.addEventListener("click", function(event) {
        event.preventDefault();
    });
}

// main scripts
$(document).ready(function() {
    // choose category
    let categoryLinks = $(".main-container_best-offers_items_options_menu ul a");
    $(categoryLinks).click(function() {
        for(let item of categoryLinks) {
            $(item).removeClass("choosen-item");
        }
        $(this).toggleClass("choosen-item");
    });

    // change tab how-works
    let howWorkTabs = $(".main-container_how-works_buy-sell_buttons button");
    $(howWorkTabs).click(function() {
        for(let item of howWorkTabs) {
            $(item).removeClass("active-button");
        }
        $(this).toggleClass("active-button");
    });

    // change tab invest
    let investTabs = $(".main-container_invest_types_buttons button");
    $(investTabs).click(function() {
        for(let item of investTabs) {
            $(item).removeClass("active-button");
        }
        $(this).toggleClass("active-button");
    }); 

    // change tab help
    let helpTabs = $(".main-container_help_buyer-seller_buttons button");
    $(helpTabs).click(function() {
        for(let item of helpTabs) {
            $(item).removeClass("active-button");
        }
        $(this).toggleClass("active-button");
    });

    // select styles
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