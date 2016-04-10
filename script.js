jQuery(document).ready(function($){
    $('.popup-toggle').on('click',function(e){
        $('.popup').toggleClass('active');
        $('.toggle-open').toggleClass('hidden');
    })
});