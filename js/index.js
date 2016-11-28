// 导航下拉框
$(function(){
	$(".anv li.pos").mouseover(function(){
		$(this).children(".yin").css("display","block");	//获取.val它的子元素有.val_down的，就把它显示
		$(this).css("background","#79BE0B")
		$(this).children("a").css("color","#fff");	
	})

	$(".anv li.pos").mouseout(function(){
		$(this).children(".yin").css("display","none");
		$(this).css("background","#fff")
		$(this).children("a").css("color","#000").eq("index").css("color","#fff");	
	})
	
	
// 第二个导航的选项卡
	
	$("li.pos ul.yin li.cang").mouseover(function(){
		$(this).children(".yin2").css("display","block");	//获取.val它的子元素有.val_down的，就把它显示
		$(this).children("a").css({"background":"#f7f7f7","color":"#79BE0B"});	
	})

	$("#header .pos ul.yin li.cang").mouseout(function(){
		$(this).children(".yin2").css("display","none");
		$(this).children("a").css({"background":"#fff","color":"#828282"});		
	})
	
	
	// Why Choose Us选项卡
	
	$(".down .daohang li").click(function(){
		var index=$(this).index();        
		$(".down .p .tab1").css("display","none").eq(index).css("display","block");		
		$(this).addClass("yi").siblings().removeClass("yi");
	})
	
	
	//banner轮播
$(document).ready(function(){
	var n=0;
	var next=0;
	var flag=true;
	var t=setInterval(move,3000);
	function move(){
		next=n+1;
		if(next>=$(".lunbo-one").length){
			next=0;
		}; 
		$(".lunbo-one").eq(n).animate({zLndex:11}).removeClass("img1").removeClass("bt").addClass("img1")
		$(".lunbo-one").eq(next).animate({zLndex:12}).removeClass("img22").removeClass("bt2").addClass("img22");
		n=next
	}
	
	$(".aleft").click(function(){
		next=n-1;
		if(next<0){
		next=$(".lunbo-one").length-1;
		}
		$(".lunbo-one").eq(n).animate({zLndex:11}).removeClass("img1").addClass("bt")
		$(".lunbo-one").eq(next).animate({zLndex:12}).removeClass("img22").addClass("bt2")
		n=next;
	})
	$(".aright").click(function(){

		move(t);
	})
	
})
	
	// Recent Works轮播
// 	$(document).ready(function(){
// 	var zuo=$(".zuo")
//  var you=$(".you");
//  var guess_main=$(".bigbox");
//  var imgBox=$(".lunbo");    
//  var width=$(".lunbo-lis").width(); 
//  var t=setInterval(move,2000); 
//	var flag=true;
//   function move(){
//   	if(!flag){
//   		return;
//   	}
//   	flag=false;
//		animate(imgBox,{left:-width},1000,function(){
// 			var imgfirst=$(".lunbo").children(".first");
// 			imgBox.append(imgfirst);
// 			imgBox.css("left","0")
// 		});
// 	}
//   zuo.click=function(){
//       move();
//   }
//
// })



