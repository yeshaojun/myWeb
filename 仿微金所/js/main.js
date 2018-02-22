/**
 * 图片轮播大小图切换(减少手机端加载图片的流量)
 */
$(function(){
	mobileMove();
	$(window).on('resize', resize).trigger('resize');
	
	$(".news-menu > li").on('click',function(){
		var $this=$(this);
		var title=$this.children().data('title');
		$(".news-title").text(title);
	})
});


function resize(){
	$(".item-image").each(function(i,item){
		$item=$(item);
		
		var scre=$(window).width();

		var smallWidth= scre < 768;

		var imgUrl=$item.data(smallWidth ? 'small-img' : 'big-img');
		var imgAlt = $item.data('image-alt');
		console.log(imgUrl);

		$item.html('<img src="' + imgUrl + '" alt="' + imgAlt + '"/>');
	    
	   	$item.css('backgroundImage', 'url(' + imgUrl + ')');
	})

	var startWidrh=30;
	var $tabs = $('.nav-tabs');
	$(".touch-menu > ul > li").each(function(i,menu){		
		$menu=$(menu);
		startWidrh+=$menu.width();
	})

	if (startWidrh > $(".touch-menu").width()) {
        $tabs.css('width', startWidrh);
        $(".touch-menu").css('overflow-x', 'scroll');
	} else {
	    $tabs.css('width', 'auto');
	    $(".touch-menu").css('overflow-x', 'hidden');
	}
	
	// $('.touch-menu').css('width',startWidrh+'px');
}

function mobileMove(){
	var startX=0;
	var endX=0;
	$('.carousel').get(0).addEventListener('touchstart', function(e) {
	      startX = e.touches[0].clientX;
	      e.preventDefault();//阻止默认事件
    });

	$('.carousel').get(0).addEventListener('touchmove', function(e) {
	      endX = e.touches[0].clientX;
	      e.preventDefault();//阻止默认事件
    });

	$('.carousel').get(0).addEventListener('touchend', function(e) {
		if(endX-startX > 0){
			$('.carousel').carousel('next');
		}else{
			$('.carousel').carousel('prev');
		}
    });
}





