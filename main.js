
$(document).ready(function(){
	
	var username = $('#username'); 
	var password = $('#password'); 
	var usernameError = $('#error-username'); 
	var passwordError = $('#error-password'); 
	
	// toggle password visibility using checkbox 
	$('#toggle-password-visibility').on('click', function() {
		if ($(this).is(':checked')) {
			password.attr('type', 'text');
		} else {
			password.attr('type', 'password');
		}
	});
	
	$('#submit').on('click', function (e) {
		e.preventDefault();
		console.log("'submit' button clicked");
		
		carryOn = true; 
		
		// check username format 
		usernameVal = username.val().trim(); 
		if ( empty(usernameVal) ) {
			carryOn = false; 
			usernameError.html('username cannot be empty'); 
		} else if (usernameVal.length < 4) {
			carryOn = false; 
			usernameError.html('username has to be at least 4 characters'); 
		} else if ( usernameVal.match(/^(?=.*[a-zA-Z])[a-zA-Z-_\d]{4,}$/) == null ) {
			carryOn = false; 
			usernameError.html('please create username conforming to requirements'); 
		}
		
		// check password format 
		passwordVal = password.val().trim(); 
		if (empty(passwordVal)) {
			carryOn = false; 
			passwordError.html('password cannot be empty'); 
		} else if (passwordVal.length < 8) {
			carryOn = false; 
			passwordError.html('password has to be at least 8 characters'); 
		} else if ( passwordVal.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/) == null ) {
			carryOn = false; 
			passwordError.html('please create password conforming to requirements'); 
		}

		if (carryOn) {
			alert("success!"); 
		}
		
		
	});
	
	function empty(input) {
		return (input == ''); 
	}
	
	
	// once cursor in input field, remove error prompt 
	$('input').on('focus', function (e) {
		$(this).siblings('.display-error').html('');
	});
	
	
});