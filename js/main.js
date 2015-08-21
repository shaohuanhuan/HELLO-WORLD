$(function(){
  //登录-教师登录+学员登录
  $('#ui-login-box').children('.ui-login-ckb').each(function(){
    $(this).click(function(){
      $(this).addClass('ui-org-bor').siblings('.ui-login-ckb').removeClass('ui-org-bor');
      $(this).siblings('#login-type').val($(this).attr('value'));
    });
  });
  //右边--热门课程
  $('#ui-hotclass-rank').find('.ui-hotclass-item').each(function(){
    $(this).hover(function(){
      $(this).addClass('ui-hotclass-item-curr').siblings('.ui-hotclass-item').removeClass('ui-hotclass-item-curr');
    },function(){
       
    });
  });
  //右边公告
  $('#ui-notice-tit').children('.ui-notice-tit-item').each(function(index){
  	$(this).click(function(){
  		$(this).addClass('ui-notice-tit-curr').siblings('.ui-notice-tit-item').removeClass('ui-notice-tit-curr');
  		$('#ui-notice-tit').siblings('.ui-notice-one:eq('+index+')').removeClass('fn-hide').siblings('.ui-notice-one').addClass('fn-hide');
  	});
  });
  //最佳教师
   $('#ui-best-tit').children('.ui-notice-tit-item').each(function(index){
  	$(this).click(function(){
  		$(this).addClass('ui-notice-tit-curr').siblings('.ui-notice-tit-item').removeClass('ui-notice-tit-curr');
  		$('#ui-best-tit').siblings('.ui-best-one:eq('+index+')').removeClass('fn-hide').siblings('.ui-best-one').addClass('fn-hide');
  	});
  });
   //方克币
   $('#ui-rank').children('.ui-notice-tit-item').each(function(index){
  	$(this).click(function(){
  		$(this).addClass('ui-notice-tit-curr').siblings('.ui-notice-tit-item').removeClass('ui-notice-tit-curr');
  		$('#ui-rank').siblings('.ui-rank-item:eq('+index+')').removeClass('fn-hide').siblings('.ui-rank-item').addClass('fn-hide');
  	});
  });
   //积分商城
   $('#score-shop').children('.ui-score-item').each(function(index){
    $(this).click(function(){
      $(this).addClass('ui-score-item-curr').siblings('.ui-score-item').removeClass('ui-score-item-curr');
      $('#score-shop').siblings('.ui-score-main:eq('+index+')').removeClass('fn-hide').siblings('.ui-score-main').addClass('fn-hide');
    });
  });
   //加盟指南
   $('#ui-guide-tita').find('.ui-guide-tit').each(function(index){
     $(this).click(function(){
        $(this).addClass('ui-guide-tit-curr').siblings('.ui-guide-tit').removeClass('ui-guide-tit-curr');
        $('#ui-guide-tita').siblings('.ui-guide-content:eq('+index+')').removeClass('fn-hide').siblings('.ui-guide-content').addClass('fn-hide');
      });
   });
   //关闭按钮
   $('.ui-search-condit').delegate('.ui-x','click',function(){
       $(this).parent('.ui-xwrap').remove();
   });
   //关闭弹框
   $('.ui-dialog-close').click(function(){
    var id=$(this).parents('.ui-dialog').attr('id');
     hideDialog(id);
   });
   //显示消失
   $('.ui-mvtab-one').find('.more-btn').click(function(){
      var p=$(this).parents('.ui-mvtab-one');
      var two=p.next('.ui-mvtab-two'),tds=p.find('td');
      if(two.is(':visible')){
        $(tds).css('border-bottom','1px solid #dbdbdb');
        two.hide();
      }else{
        $(tds).css('border-bottom','1px solid transparent');
        two.show();
      }
     
   });
   /*$('.ui-mvtab-two').hover(function(){
      var tds=$(this).prev('.ui-mvtab-one').find('td');
      $(tds).css('border-bottom','1px solid transparent');
      $(this).show();
   });*/
   //加盟商-钱包管理
   $('.ui-bank-list>li').click(function(){
    if($(this).find('input[type="radio"]')[0].checked==true){
      
      $(this).addClass('ui-bank-chkd').siblings('li').removeClass('ui-bank-chkd');
    }
   });
});
//打开子菜单
function openSub(obj){
  $(obj).next('.ui-leftmenu-sublist').toggle();
}
//弹框
function showDialog(id){
  var dlg=$('#'+id);
  var mask=dlg.siblings('.ui-mask');
  var maskW=parseInt(mask.css('width')),
      maskH=parseInt(mask.css('height')),
      dlgW=parseInt(dlg.css('width')),
      dlgH=parseInt(dlg.css('height')),
      /*dlgL=5*parseInt(dlg.css('left')),
      dlgT=1.25*parseInt(dlg.css('top'));*/
     dw=parseInt(document.body.clientWidth) ,
     dh=parseInt(document.body.clientHeight);
 // dlg.css('left',parseInt(maskW/2-dlgW/2)+'px');
 // dlg.css('top',parseInt(maskH/2-dlgH/2)+'px');
  dlg.css('left',parseInt(dw/2-dlgW/2)+'px');
  dlg.css('top',parseInt(dh/2-dlgH/2)+'px');
  dlg.show();
  mask.show();

}
function hideDialog(id){
  var dlg=$('#'+id);
  var mask=dlg.siblings('.ui-mask');
  dlg.hide();
  mask.hide();

}
//显示更多银行
function moreBk(obj){
  $(obj).next('.ui-bank-list').show();
  $(obj).hide();
}
//下拉框
function select_opt(obj){
  $(obj).parent('.ui-select').next('.ui-opts').toggle();
}
//综合教育
/*var isFirst=false,isLast=false;
function leftMove(){
  var b=-875;
  var orgLeft=parseInt($('#edu-box ul:eq(0)').css('left'));
  if(isFirst){
   $('#edu-box ul:eq(0)').animate({'left':'0px'},1000,function(){
         isFirst=false;
    });
  }else{
     $('#edu-box ul:eq(0)').animate({'left':parseInt(orgLeft-875)+'px'},1000,function(){
    if(orgLeft==b){
       isFirst=true;
    }
  });
  }
}
function rightMove(){
  var b=-875;
  var orgLeft=parseInt($('#edu-box ul:eq(0)').css('left'));
  if(orgLeft!=0){
    $('#edu-box ul:eq(0)').animate({'left':parseInt(orgLeft+875)+'px'},1000,function(){
        if(orgLeft==b){
           isLast=true;
        }
      });
  }else{
     
  }
  
}*/