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
})