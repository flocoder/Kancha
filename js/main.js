//Page scroll down animate script
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

//jQuery form validation script
$('#registerForm').validate({
    rules: {
        name: {
            minlength: 3,
            required: true
        },		
        email: {
            required: true,
            email: true
        },
		phone:{
			minlength: 2,
			required:true
			
		},
		country:{
			required:true
		}     
    },		
    highlight: function (element) {
        $(element).closest('.control-group').removeClass('success').addClass('error');
    }		

});

/* 
jQuery Form Plugin 
http://malsup.com/jquery/form/#html
*/
$(document).ready(function() { 
 $('#registerForm').ajaxForm({ 
        // target identifies the element(s) to update with the server response 
        target: '#result', 
 
        // success identifies the function to invoke when the server response 
        // has been received; here we apply a fade-in effect to the new content 
        success: function() { 
            $('#result').fadeIn('slow'); 
        } 
});
});
