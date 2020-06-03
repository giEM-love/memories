$(document).ready(function() {
    window.app.init()
});

$(window).on('load', function() {
    console.log('load')
    // if(window.outerWidth < 767){
        
    //     var goFS = document.getElementById("goFS");
    //     goFS.addEventListener("click", function() {
    //         document.body.requestFullscreen();
    //     }, false); 
        
    //     setTimeout(function(){
           
    //     },150)
        
    // }
    window.scrollTo(0, 1);
    window.app.load();
});

// scroll to top when page loads
window.onbeforeunload = function () {
    $('body').hide();
    window.scrollTo(0, 1);
};