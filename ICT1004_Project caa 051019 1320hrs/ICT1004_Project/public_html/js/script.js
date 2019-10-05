jQuery(document).ready(function(){
    
    var filterOffset = jQuery(".card").offset().top;
    
    jQuery(".card").wrap('<div class="card-placeholder"></div>');
    jQuery(".card-placeholder").height(jQuery(".card").outerHeight());
    
    jQuery(".card").wrapInner('<div class="filter-inner"></div>')
    
    jQuery(window).scroll(function(){ 
        var scrollPos = jQuery(window).scrollTop();
        
        if(scrollPos >= filterOffset){
            jQuery(".card").addClass("fixed");
        } else {
            jQuery(".card").removeClass("fixed");
        }
    })
    
    
});