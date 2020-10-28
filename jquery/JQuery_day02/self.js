$(function(){
    $('.checkall').change(function(){
         $('.j-checkbox').prop('checked',$(this).prop('checked'))

         if($(this).prop('checked')){
             $('.cart-item').addClass('check-cart-item')
         }else {
            $(".cart-item").removeClass("check-cart-item");
         }
         
    })
    $('.j-checkbox').change(function(){
        if($(this).prop('checked')){
            $(this).parents('.cart-item').addClass('check-cart-item')
        }else {
            $(this).parents('.cart-item').removeClass('check-cart-item')
        }

        if($('.j-checkbox:checked').length == $('.j-checkbox').length){
            $('.checkall').prop('checked',true)
        }else {
            $('.checkall').prop('checked',false)
        }
        if($('.j-checkbox:checked').length ===0){
            $('.cart-item').removeClass('check-cart-item')
        }
    })
})