// Javascript for login form validation

const login_form = document.querySelector('.login-form');
const username = document.getElementById('username');
const password = document.getElementById('password');


        function showValidation(type,input, msg){
        	var errUser = document.getElementById('errorUser');
        	var errPass = document.getElementById('errorPass');

        	if(input==='username'){
        		if(type=="error"){
        			errUser.innerText=msg;	
        			errUser.style.color="red";
        		}else{
        			errUser.innerText=msg;
        			errUser.style.color="lightgreen";
        		}
        		
        	}
        	if(input==='password'){
        		if(type=="error"){
        			errPass.innerText=msg;	
        			errPass.style.color="red";
        		}else{
        			errPass.innerText=msg;
        			errPass.style.color="lightgreen";
        		}
        	}
        	if((type=="success") && (input=='username') && (input='password')){
        		window.location.assign('./welcome.html')
        	}

        }

        login_form.addEventListener('submit', function(e){
        	e.preventDefault();
        	var user = username.value.trim();
       		 var pass = password.value.trim();
       		 var matchedPass="hello";
       		 var matchedUser="hello";

        	 function validateUser(){
	        	 if (user == "") {
	          		showValidation('error','username','*Please fill the username*');
		        }
		        else if (user.length <= 4 || user.length > 20) {
		          	showValidation('error','username','*username length in between  5 and 20*');
		        }
		        else if (!isNaN(user)) {
		          	showValidation('error','username','*username cannot be a number*');
		       	 }
		       	  else if (user != matchedUser) {
		         	 showValidation('error','username','*Enter correct username*');
		        }
		       	 else{
		  			showValidation('success','username','*correct username*');
		       	 }
	        }
	        function validatePass(){
	        	if (pass == "") {
		          showValidation('error','password','*Please fill the password*');
		        }
		        else if (pass.length <= 4 || pass.length > 20) {
		        	showValidation('error','password','*password length in between  5 and 20*');
		        }

		        else if (pass != matchedPass) {
		          showValidation('error','password','*Enter correct password*');
		        }
		        else{
		  			showValidation('success','password','*correct password*');
		       	 }
	        }


	        validateUser();
	        validatePass();

        });



