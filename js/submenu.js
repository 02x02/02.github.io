$(function(){
    $('.drop_menu').hide();
    /*$('.menu li').on('mouseover',function(){
       $('.sub',this).slideDown('slow');//아래로 내려오는 동작. 즉 보이는 동작
    })
        .on('mouseout',function(){
        $('.sub',this).slideUp('fast');//위로 올라가서 안보이게
    });*/
    $('.menu li').hover(function(){
        $('ul',this).slideDown('slow');//내가 지금 오버한 ul 밑에 있는 li
    },function(){
        $('ul',this).slideUp('fast')
    });
});