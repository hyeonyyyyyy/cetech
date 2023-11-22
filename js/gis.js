$(document).ready(function () {

	/*지도on off*/
	$('.map_type li').click(function(){
	  $('.map_type li').removeClass("on");
	  $(this).addClass("on");
	});	
	
	/*탭*/
	/*left_tab*/
    $(".tab_cont").hide();
    $(".tab_cont:first").show();

    $("ul.tablist li").click(function () {
        $("ul.tablist li").removeClass("active");
        $(this).addClass("active");
        $(".tab_cont").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).show()
    });
	
	// 팝업 닫기
	$(".close").click(function () {
        $(this).parent().parent().parent().hide();
    });
	
	// 툴팁 닫기
	$(".btn_tooltip_close").click(function () {
        $(this).parent().parent().hide();
    });
	
	/* left 주소,지역및상호 */
    $(".address_cont").hide();
    $(".address_cont:first").show();

    $(".add_list li").click(function () {
        $(".add_list li").removeClass("active");
        $(this).addClass("active");
        $(".address_cont").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).show()
    });		
	
	// 구역 TAB
	$(".area_tab_cont").hide();
    $(".area_tab_cont:first").show();
	
	$(".area_tab li").click(function(e) {
		$(".area_tab li").removeClass("on");
		$(this).addClass("on");
		var index = $(".area_tab li").index(this);
		$(".area_tab_cont").hide();
		$("#area_tab" + (index + 1)).show()		
		return false;
	});
	
	
	
	/* 팝업탭 */
    //$(".popup_tab_cont").hide();
    $(".popup_tab_cont:first").show();

    $(".popup_tab li").click(function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $(this).parent().siblings().children(".popup_tab_cont").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).show()
    });		
	
	/* 팝업 그래프탭 */
    $(".graph_tab_cont").hide();
    $(".graph_tab_cont:first").show();

    $(".graph_tab li").click(function () {
        $(".graph_tab li").removeClass("active");
        $(this).addClass("active");
        $(".graph_tab_cont").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).show()
    });		

	/*폴더접기*/
	$(".checklist ul").show();
	$(".checklist div span").click(function() {
		$(this).next(".checklist ul").slideToggle("fast")
		$(this).toggleClass("active")
	});
	
	$(".list_b").hide();
	$(".open").click(function() {
		$(this).parents("li").children(".list_b").slideToggle("fast")
		$(this).toggleClass("active")
	});


	/* left 버튼제어*/
	$(".left_switch_on").click(function () {
		$("#cont_left").animate({left: -301},"slow");
		$(this).animate({left: 0},"slow");
			
		$("#map").animate({left:0},"slow");
		$("#conts").css('width', '98%');

		$(".left_switch_off").animate({left:0},"slow");
		$(".left_switch_off").fadeIn("fast");
		
		var ww = $(window).width();
		$('.detail_info').width(ww - 10);
	});
	
	$(".left_switch_off").click(function () {
		$("#cont_left").animate({left:0},"slow");
		$(this).animate({left:301},"slow");
			
		$("#map").animate({left: 301},"slow");
		$("#conts").css('width', '');
			
		$(".left_switch_on").animate({left:301},"slow");
		$(".left_switch_off").fadeOut("fast");
		
		var ww = $(window).width();
		$('.detail_info').width(ww - 315);
	});


	/* right 버튼제어*/
	$(".right_switch_on").click(function () {
		$("#cont_right").animate({right: -449},"slow");
		$(this).animate({right: 0},"slow");
			
		$("#map").animate({right:0},"slow");
		$("#conts").css('width', '98%');

		$(".right_switch_off").animate({right:0},"slow");
		$(".right_switch_off").fadeIn("fast");
		
		$('.map_btn').css('right','20px');
	});
	
	$(".right_switch_off").click(function () {
		$("#cont_right").animate({right:0},"slow");
		$(this).animate({right:449},"slow");
			
		$("#map").animate({right: 449},"slow");
		$("#conts").css('width', '');
			
		$(".right_switch_on").animate({right:449},"slow");
		$(".right_switch_off").fadeOut("fast");
		
		$('.map_btn').css('right','470px');
	});
	

	/*map resize*/
	$(window).on('resize', function(evt, obj) {
		var ww = $(window).width();
		$('#map').width(ww);
		
		if($('#cont_right')){
			if($('#cont_right').css('right') == '0px'){
				$('.map_btn').css('right','470px');
			}else{
				$('.map_btn').css('right','20px');
			}
		}else{
			$('.map_btn').css('right','20px');
		}
		
		
		if($('#cont_left').css('left') == '0px'){
			$('.detail_info').width(ww - 316);
		}else{
			$('.detail_info').width(ww);
		}
		
	});
		
	$(window).trigger('resize');
	
	$('.time_bar').find('img').on('click',function(evt, obj){
		
		if(!obj){
			if(timeObj){
				clearInterval(timeObj);
			}
		}
		
		var imgArr = $('.time_bar').find('img');
		var idx = parseInt($(this).attr('src').split('_')[1]) - 1;
		for(var i = 0; i<imgArr.length; i++){
			if(i <= idx){
				$(imgArr[i]).parent().parent().addClass('on');
				if(i == idx){
					$(imgArr[i]).attr('src','images/time_' + (i+1) + '_on.png');
					$(imgArr[i]).parent().parent().find('span').addClass('on');
				}else{
					$(imgArr[i]).attr('src','images/time_' + (i+1) + '_off.png');
					$(imgArr[i]).parent().parent().find('span').removeClass('on');
				}
			}else{
				$(imgArr[i]).attr('src','images/time_' + (i+1) + '_off.png');
				$(imgArr[i]).parent().parent().removeClass('on');
				$(imgArr[i]).parent().parent().find('span').removeClass('on');
			}
		}
	});
	
	var timeObj = null;
	$('#playBtn').on('click',function(){
		if($(this).attr('src').indexOf('ov') == -1){
			return;	
		}
		
		$(this).attr('src','images/play_off.png');
		$('#stopBtn').attr('src','images/stop_ov.png');
		
		var idx = 0;
		var imgArr = $('.time_bar').find('img');
		for(var i = 0; i<imgArr.length; i++){
			if($(imgArr[i]).attr('src').indexOf('_on') > -1){
				idx = i;
			}
		}
		
		$($('.time_bar').find('img')[idx]).trigger('click',{isTime:true});
		timeObj = setInterval(function(){
			idx++;
			$($('.time_bar').find('img')[idx]).trigger('click',{isTime:true});
			if((imgArr.length-1) == idx){
				clearInterval(timeObj);
			}
		},1000)
		

	});
	
	$('#').on('click',function(){
		if($(this).attr('src').indexOf('ov') == -1){
			return;
		}
		
		$(this).attr('src','images/stop_off.png');
		$('#playBtn').attr('src','images/play_ov.png');
		if(timeObj){
			clearInterval(timeObj);
		}
	});
	
	$(".min").on('click',function(){
		  $(this).toggleClass("on");
		  $(this).parent().parent().parent().find('.popup_cont').slideToggle();
		  
	});

	
	/*스크롤테이블*/
	var slider = document.querySelector('.chart_table_scroll');
	slider.each(function () {
	  var isDown = false;
	  var startX;
	  var scrollLeft;
	  // 마우스 버튼을 누를때
	  slider1.addEventListener('mousedown', function(e){
		  isDown = true;
		  slider1.classList.add('active');
		  startX = e.pageX - slider1.offsetLeft;
		  scrollLeft = slider1.scrollLeft;
	  });
	  // 마우스가 영역 밖으로 나갔을때
	  slider1.addEventListener('mouseleave', function() {
		  isDown = false;
		  slider1.classList.remove('active');
	  });
	  // 마우스 버튼을 땠을때
	  slider1.addEventListener('mouseup', function(){
		  isDown = false;
		  slider1.classList.remove('active');
	  });
	  // 마우스가 움직일때
	  slider1.addEventListener('mousemove', function(e) {
		  console.log(!isDown);

		  if (!isDown) return; 
		  e.preventDefault();
		  var x = e.pageX - slider1.offsetLeft;
		  var walk = (x - startX) * 3; //scroll-fast
		  slider1.scrollLeft = scrollLeft - walk;
		  console.log(walk);
	  });
	  
	  })
	  
	  
	
});