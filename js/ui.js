/*******************************
 * FileName : ui.js
 * info : 농업용저수지 통합수질관리시스템
 * update - 2023.07.24.
********************************/

$(document).ready(function () {
	
	//상단 SubMenu
	$("#GNB > li").on('mouseenter' ,function(){
		$(this).children(".submenu").show();		
		$(this).children('a').addClass('current');
		//$(this).children('a').css({"background":"#e9ecf4","color" :"#0a0a0a" });
	}).on('mouseleave' ,function(){ 
		$(this).children(".submenu").stop().hide();
		$(".submenuBg").hide();
        $(this).children('a').removeClass('current');
        //$(this).children('a').css({"background":"","color" :"" });
	});
	
	//상단 tab키
	$("#GNB > li").on('focusin' ,function(){
		$(".submenu").hide();
		$(this).children(".submenu").show();		
		$(".submenuBg").show();
		$(this).children('a').addClass('current');
		$(this).siblings().children('a').removeClass('current');
	});
	
	// LNB 닫기
	$(".left_switch_on").click(function () {		
		$(".left_menu_warp").animate({left: -270},"fast");
		//$('#sub_wrap').animate({left:0},"slow") ;
		$(this).animate({left: 0},"fast");				
		$(".left_switch_off").animate({left:0},"fast");
		$(".left_switch_off").fadeIn("fast");
		$(".g_location_warp").css({'padding-left':'40px'});
		$("#sub_wrap").css({'padding-left':'0px'});
		$("#sub_wrap").css({'width':'100%'});
	});
	
	// LNB 열기
	$(".left_switch_off").click(function () {
		$('.left_menu_warp').animate({left: -0});
		$('#sub_wrap').animate({left:260}) ;		
		$(this).hide();		
		$('.left_switch_on').show();
		$('.left_switch_on').animate({left: 220});
		$(".g_location_warp").css({'padding-left':'0'});
		$("#sub_wrap").css({'width':'calc(100% - 240px)'});
		$("#sub_wrap").css({'padding-left':'20px'});
	});
	
	//LNB 2Depth Toggle
	$("#LNB > li a").click(function () {
		var ulLen = $(this).parent().children("ul").length;
		if(ulLen == 0 ) return true;
		$(this).parent().children("ul").slideToggle();	
		$(this).parent().toggleClass("on");
	});
	
	// 검색 open/close
	$(".btn_search_view").click(function () {	
		$(".search_area").slideToggle();
		$(this).toggleClass("open");
	});
	
	// 입력/조회 선택 버튼
	$(".btn_swich em").click(function () {
		$(this).toggleClass("on");
		$(".btn_swich").toggleClass("on2");
	});
	
	$(".btn_swich li:first-child").click(function () {
		$(".btn_swich em").removeClass("on");
		$(".btn_swich").removeClass("on2");
	});
	
	$(".btn_swich li:last-child").click(function () {
		$(".btn_swich em").addClass("on");
		$(".btn_swich").addClass("on2");
	});
	
	//$("#LNB > li").addClass("on");
	//$("#LNB > li.noBg").removeClass("on");
	// LNB 전체 활성화
	$(".lnb_dep2_view.on").click(function () {		
		//$(this).children("sub_dep2").slideToggle();
		//$("#LNB li ul").css({'display':'block'});
		$("#LNB li ul").slideDown();
		$("#LNB > li").addClass("on");
	});
	
	// LNB 전체 닫기
	$(".lnb_dep2_view.off").click(function () {
		$("#LNB li ul").slideUp();
		$("#LNB > li").removeClass("on");
	});
	
	// page2 TAB 메뉴
	$(".page2_tab li").click(function(e) {
		$(".page2_tab li").removeClass("on");
		$(this).addClass("on");
		var index = $(".page2_tab li").index(this);
		$(".page2_tab_cont").hide();
		$("#page2_tab" + (index + 1)).show()		
		return false;
	});
	
	// 서브 TAB 메뉴
	$(".sub_tab li").click(function(e) {
		$(".sub_tab li").removeClass("on");
		$(this).addClass("on");
		var index = $(".sub_tab li").index(this);
		$(".sub_tab_cont").hide();
		$("#sub_tab" + (index + 1)).show()		
		return false;
	});
	
	// My Menu
	$(".btn_mymenu").click(function(e) {
		$(this).toggleClass("on");
		$(".my_menu_list").slideToggle();
		return false;
	});
	
	// 전체 메뉴 열기
	$(".btn_allmenu").click(function () {
		$(".all_menu_warp").show();
		$(".dim_bg").show();
		return false;
	});
	
	// 전체 메뉴 닫기
	$(".btn_all_menu_close").click(function () {
		$(".all_menu_warp").hide();
		$(".dim_bg").hide();
		return false;
	});
	
	// 메뉴 즐겨 찾기
	$(".btn_bookmark").click(function(e) {
		$(this).toggleClass("on");
		bookmarkCUD($(this).hasClass("on"));
		return false;
	});
	
	// 수질데이터 선별/확정 안내 탭
	$(".tab3 li").click(function() {
		var num = $(".tab3 li").index(this);
		$(".tabContent3").removeClass('active');
		$(".tabContent3").eq(num).addClass('active');
		$(".tab3 li").removeClass('active');
		$(this).addClass('active')
	});

	$('.hide> a').click(function() {
		$('.hide_cont').toggle();
	})
	
	//국화저수지 Toggle 220106
	$(".kuk_wrap .kh4").click(function () {
		$(this).siblings(".kh4_cont").slideToggle();
		$(this).toggleClass("on");
	});
	
	$(".kuk_wrap .kh5").click(function () {
		$(this).siblings(".kh5_cont").slideToggle();
		$(this).toggleClass("on");
	});
	
	//국화저수지 전체 열기
	$(".btn_kua_view.open").click(function () {
		$(".kh4_cont").slideDown();
		$(".kh5_cont").slideDown();
		$(".kh4").removeClass("on");
		$(".kh5").removeClass("on");
		
	});	
	//국화저수지 전체 닫기
	$(".btn_kua_view.close").click(function () {
		$(".kh4_cont").slideUp();
		$(".kh5_cont").slideUp();
		$(".kh4").addClass("on")
		$(".kh5").addClass("on")
	});
	
	// Multi Select
	$(".SlectBox").SumoSelect();
	
});	

/*마이메뉴 조회*/
function getBookmarkList(){
	var url = "/cms/bookmark";
	var params = {};
	var sucessFunc = function(data) { 
		var list = data.list;
		$(".my_menu_list").html("");
		for (var i = 0; i < list.length; i++) {
			if($($("input[name='cur_menu_no']")[0]).val() == list[i].MENU_NO)  $(".btn_bookmark").addClass("on");
			var liHtml = '<li><a href="/cms/link/?pMENU_NO='+list[i].MENU_NO+'">'+list[i].MENU_NM+'</a></li>'
			$(".my_menu_list").append(liHtml);
		}
		if(list.length == 0){
			$(".my_menu_list").append('<li>자료없음</li>');
		}
	};
	ajaxCallNoBlock(url, params, sucessFunc, "", true);
	
}

/*마이메뉴 등록및 삭제*/
function bookmarkCUD(pa){
	//write delete
	var mode;
	if(pa){
		mode ='write';
	}else{
		mode ='delete';
	}
	var url = "/cms/bookmark/cud";
	var params = {mode : mode,  MENU_NO : $($("input[name='cur_menu_no']")[0]).val()};
	var sucessFunc = function(data) {
		getBookmarkList();
	};
	ajaxCallNoBlock(url, params, sucessFunc, "", true);
}
	
	
		
