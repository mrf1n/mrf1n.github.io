jQuery(document).ready(function($) {

    $('.skill-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.skill-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
   
    

});