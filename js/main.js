
$(document).ready(function () {
	// 메인용 로고 오른쪽 라인 삭제
	$("#header h1").css({"border-right":"none"});
	
	/* 메인 배너 롤링 */
	$('.banner_zone').bxSlider({
		/*
	  mode:'horizontal',
	  auto:true,
	  pause:3000,
	  infiniteLoop:true,
	  pagerType:'full',
	  autoControls: true,
	  */
		mode:'horizontal', //fade, horizontal, vertical
		infiniteLoop:true,
		pagerType: 'short',
		pagerShortSeparator:'/',
		auto: true,
		autoControls: true,	 //play, stop view	
		stopAutoOnClick: true,
		controls: false, //true
		pager: true,	//true	
		speed:500,	
		//autoControlsCombine: true,		
		responsive: true,		
		pause: 5000,
		touchEnabled:(navigator.maxTouchPoints>0),

		// 웹접근성 추가
		onSliderLoad: function(){	
			$(".bx-clone").find("a").prop("tabIndex","-1");	
		},
	
		onSlideAfter: function(){	
			$(".banner_zone").children("li").each(function(){	
				if($(this).attr("aria-hidden") == "false"){	
					$(this).find("a").attr("tabIndex","0");	
				}else{	
					$(this).find("a").attr("tabIndex","-1");	
					}	
				});	
			}	  
	});
	
	// 웹 접근성
	$('.banner_zone a').focusin(function () {
		mainSlider.stopAuto();
	});	
	
});

	
	
		
