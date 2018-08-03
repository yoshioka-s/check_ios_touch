

// -------------------------------------------------------------------------------------------------
// DOMツリー構築後に処理
// -------------------------------------------------------------------------------------------------
jQuery(document).ready(function() {
	var current_page = $('#current_page').val(); //現在のページ取得

	var now_width = $(window).width(); //ウィンドウサイズ
	var now_height = $(window).height(); //ウィンドウサイズ
	var b_point = 768; //ブレークポイント

	$('.is-active').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {
			$(this).addClass('is-active-on');
		}
	});

	// Nav Toggle Button
	var $nav = $('.navigation');
	var $toggle = $('.nav-toggle');
	/*$('.nav-toggle').click(function(){
		$nav.toggleClass('open');
		$toggle.toggleClass('on');
	});*/
	var _touch = ('ontouchstart' in document) ? 'touchstart' : 'click';
	$('.nav-toggle').on(_touch,function() {
		$nav.toggleClass('open');
		$toggle.toggleClass('on')
		return false;
	});
	$('.nav-toggle').on('touchend', function(){
		$(this).blur();
		return false;
	});
	
	
	
	var ua = navigator.userAgent;
	if(/iPhone|iPad|iPod/.test(ua)) {
		$('body').addClass('ios');
	}
	
	
	
	
	
	
	
	$(' a[href^="#"]').click(function() {
		// スクロールの速度
		var speed = 400; // ミリ秒
		// アンカーの値取得
		var href= $(this).attr("href");
		// 移動先を取得
		var target = $(href == "#" || href == "" ? 'html' : href);
		// 移動先を数値で取得
		var position = target.offset().top;
		// スムーススクロール
		position = position - 105;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});

	// ====================================
	// Service
	// ====================================
	if(current_page == 'service'){
		$('.list li').matchHeight();
	}

	// ====================================
	// Introduce
	// ====================================
	if(current_page == 'introduce'){
		$('.list li.height').matchHeight();
	}
	
	
	// ====================================
	// iOS時のメニューホバーアニメーション削除クラス
	// ====================================
	//userAgent.jsで端末判定
	if ($('html').hasClass('ipad') || $('html').hasClass('iphone')) {
		$('.header .navigation .menu a').each(function() {
			$(this).addClass('non_hover');
		});
	}
	
	
	
	
	
	
	
	
	
	
	

// ------------------------------------------------------------------------------------------
});
// ------------------------------------------------------------------------------------------ end




// -------------------------------------------------------------------------------------------------
// 全てのリソースを読み込み後に処理
// -------------------------------------------------------------------------------------------------
jQuery(window).load(function(){

	
// ------------------------------------------------------------------------------------------
});
// ------------------------------------------------------------------------------------------ end




// -------------------------------------------------------------------------------------------------
// スクロール量を感知して処理
// -------------------------------------------------------------------------------------------------
jQuery(window).scroll(function(){
	
	var pageup = $('.pageup');
    if ($(this).scrollTop() > 700) {
      pageup.fadeIn();
    } else {
      pageup.fadeOut();
    }
	
// ------------------------------------------------------------------------------------------
});
// ------------------------------------------------------------------------------------------ end




