(function(app) { 
	'use strict'; 
	
	var Animation = function() {};
  
	Animation.prototype.init = function() {
        Animation.prototype.inView();
        Animation.prototype.playButtonClick();
	};

    Animation.prototype.inView = function() {
        $('.animated').one('inview', function(event, isInView) {
            var _this = $(this);
            var animatedChildren = _this.find('.animated-child');
            if(isInView){
                if(animatedChildren.length > 0) {
                    TweenMax.staggerTo(animatedChildren, 0.4, { y: 0, opacity: 1, delay: 0.1}, 0.2)
                }
            }
        });
    }

    Animation.prototype.playButtonClick = function(){

        $(".btn-play").on("click", function(){
            var item = Math.floor((Math.random() * 22) + 0);


            $(this).parent().siblings().find("source").attr("src", "https://www.mboxdrive.com/love-"+item+".mp3")
            setTimeout(function(){
                $("#audio")[0].load();
                $("#audio")[0].play();
            },300)


            
        })
    }

    app.Animation = Animation;

    app.ready(function () {
        console.log('Animation Ready');
        Animation.prototype.init()
    })

    app.onLoad(function(){
        console.log('Animation Load');
        
    })


})(window.app);