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
    $('.increment').click(function(){
        var n = $(this).siblings('.itxt').val()
        n++
        $(this).siblings('.itxt').val(n)
        // 计算价格
        let p = $(this).parents('.p-num').siblings('.p-price').html()
         p = p.substr(1);
         let price = (p*n).toFixed(2)
       $(this).parents('.p-num').siblings('.p-sum').html(`￥${price}`);
     })
    $('.decrement').click(function(){
        let n = $(this).siblings('.itxt').val()
        if(n==1){
            return false
        }
        n--
        $(this).siblings('.itxt').val(n)
        // 得到当前的总价格
        let p = $(this).parents('.p-num').siblings('.p-price').html()
         // 商品单价
         p = p.substr(1)
    
         $(this).parents('.p-num').siblings('.p-sum').html((p * n).toFixed(2));

    })

$('.itxt').change(function(){
    var n = $(this).val()
    let p = $(this).parents('.p-num').siblings('.p-price').html()
    p = p.substr(1)
    $(this).parents(".p-num").siblings(".p-sum").html("￥" + (p * n).toFixed(2));
})
})