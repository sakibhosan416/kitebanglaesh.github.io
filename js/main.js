


// scrolling top	
	$('.top').click(function(){
		$("html, body").animate({
			scrollTop:0

		},1500);
	});
	$(window).scroll(function(){
		var ourwindow = $(this).scrollTop();
		if(ourwindow<800){
			$('.top').fadeOut();
		}else{
			$('.top').fadeIn();
		}
	});


// scrolling menu

	$('.navbar-nav a[href^="#"]').click(function(e) {
		e.preventDefault();
		var target = this.hash;
		$('html, body').animate({
			scrollTop: $(target).offset().top -50
		},500);
	});

	$('.up-down a[href^="#"]').click(function(e) {
		e.preventDefault();
		var target = this.hash;
		$('html, body').animate({
			scrollTop: $(target).offset().top -50
		},500);
	});

	$('.about-content a[href^="#"]').click(function(e) {
		e.preventDefault();
		var target = this.hash;
		$('html, body').animate({
			scrollTop: $(target).offset().top -50
		},500);
	});

	$('.btn a[href^="#"]').click(function(e) {
		e.preventDefault();
		var target = this.hash;
		$('html, body').animate({
			scrollTop: $(target).offset().top -50
		},500);
	});

// for change menu color

	$('.navbar-nav li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});