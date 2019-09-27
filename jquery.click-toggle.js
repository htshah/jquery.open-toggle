/**
 * jQuery click-toggle
 * A very lightweight jQuery plugin to toggle open state
 * via toggling '.open' or other user-defined class
 * 
 * Licensed under the MIT license.
 * Copyright 2019 Het Shah
 * https://github.com/htshah
 */
;(function($){

    $.fn.clickToggle = function(className = 'open'){
        var lastEle = null;
        var wasClicked = false;
        this.click(function(e){
            wasClicked = true;
            
            if(lastEle !== null){
                if(lastEle.is(e.target) || $.contains(lastEle[0],e.target)){
                    return false;
                }
                lastEle.removeClass(className);
            }
            lastEle = $(this);
            lastEle.addClass(className);
        });

        $(document).click(function(e){
            e.stopPropagation();
            if(!wasClicked && lastEle !== null){
                lastEle.removeClass('open');
                lastEle = null;
            }
            wasClicked = false;
        });
    }
}(window.jQuery || window.Zepto));