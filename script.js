jQuery(document).ready(function($){
    $('.drawer-toggle').on('click',function(e){
        $(this).parent().toggleClass('active');
    })
});