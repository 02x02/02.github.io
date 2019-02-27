$(function(){
    $('#content > div').hide();
    $('#divTab1').show();
    
    $('#img2').on('click',function(){

        $('#content > div').css('display','none');//모든 탭 내용 숨겨지게 처리
        $('#divTab1').hide();
        $('#divTab2').css('display','block');//두번째 내용탭만 보여라
        return false;
    });
    //.hide();-->.css('display','none');
    //.show();-->.css('display','block');
    $('#img3').on('click',function(){
     
        $('#content > div').css('display','none');
        $('#divTab1').hide();
        $('#divTab3').css('display','block');
         return false;
    });
    $('#img4').on('click',function(){
       
        $('#content > div').css('display','none');
        $('#divTab1').hide();
        $('#divTab4').css('display','block');
         return false;
    });
    $('#img1').on('click',function(){
     
        $('#content > div').css('display','none');
        $('#divTab1').hide();
        $('#divTab1').css('display','block');
        return false;
    });
});

$(function(){
    $('#content2 > div').hide();
    $('#newsTab2').show();
    
   $('#n2').on('click',function(){
        $('#content2 > div').css('display','none');//모든 탭 내용 숨겨지게 처리
          $('#newsTab1').hide();
        $('#newsTab2').css('display','block');//두번째 내용탭만 보여라
        return false;
    });
    //.hide();-->.css('display','none');
    //.show();-->.css('display','block');
    $('#n3').on('click',function(){
     
        $('#content2 > div').css('display','none');
        $('#newsTab1').hide();
        $('#newsTab3').css('display','block');
         return false;
    });
    $('#n1').on('click',function(){
       
        $('#content2 > div').css('display','none');
        $('#newsTab1').hide();
        $('#newsTab1').css('display','block');
         return false;
    });
});

