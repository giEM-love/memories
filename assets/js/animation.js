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

        function inArray(arr, el) {
            for(var i = 0 ; i < arr.length; i++) 
                    if(arr[i] == el) return true;
            return false;
        }
        
        function getRandomIntNoDuplicates(min, max, DuplicateArr) {
            var RandomInt = Math.floor(Math.random() * (max - min + 1)) + min;
            if (DuplicateArr.length > (max-min) ) return false;  // break endless recursion
            if(!inArray(DuplicateArr, RandomInt)) {
               DuplicateArr.push(RandomInt); 
               return RandomInt;
            }
            return getRandomIntNoDuplicates(min, max, DuplicateArr); //recurse
        }      
        
        var duplicates  =[];
       

        $(".btn-play").on("click", function(){
            // var item = Math.floor((Math.random() * 22) + 0);
            console.log(duplicates)
            for (var i = 1; i <= 1 ; i++) { 
                var item = getRandomIntNoDuplicates(0,22,duplicates);
                console.log(item);
            } 

            if(item !== false){
                $(this).parent().siblings().find("source").attr("src", "https://www.mboxdrive.com/love-"+item+".mp3")
                setTimeout(function(){
                    $("#audio")[0].load();
                    $("#audio")[0].play();
                },300)
            }else {
                
                window.location.reload()
            }



            
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