/* Nav Scroll*/
var fixed = false;

$(document).scroll(function() {
    if( $(this).scrollTop() > 150 ) {
        if( !fixed ) {
            fixed = true;
			$('#navscroll').animate({top:'43px'});
        }
    } else {
        if( fixed ) {
            fixed = false;
            $('#navscroll').animate({top:'-80px'});
        }
    }
});
