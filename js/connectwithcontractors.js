//document.onload = alert("test");
//document.onload(alert("doc"));
//window.onload(alert("window"));
window.onload(BuildConnectWithContractors());
function BuildConnectWithContractors(){
	alert("made it");
	//BuildNavbarWithSignUpAndSignIn();
}
function BuildNavbarWithSignUpAndSignIn(){
	alert("further");
	//var oldHTML = document.getElementById('navbarWithSignUpAndSignIn').innerHTML;
	var newHTML = "<div class='navbar-inner'> \
				<div class='container-fluid'> \
					<a class='btn btn-navbar' data-toggle='collapse' data-target='.nav-collapse'> <span class='icon-bar'></span> <span class='icon-bar'></span> <span class='icon-bar'></span> </a><a class='brand' href='index.html'>ConnectWithContractors</a> \
					<div class='nav-collapse collapse'> \
						<ul class='nav'> \
							<li class='active'> \
								<a href='#'><i class='icon-home'></i>Home</a> \
							</li> \
							<li> \
								<a href='#about'><i class='icon-file'></i>About</a> \
							</li> \
							<li> \
								<a href='http://hometract.blogspot.com'><i class='icon-pencil'></i>Blog</a> \
							</li> \
							<li> \
								<a href='#contact'><i class='icon-envelope'></i>Contact</a> \
							</li> \
						</ul> \
						<ul class='nav pull-right'> \
							<li> \
								<a href='signup.html'>Sign Up</a> \
							</li> \
							<li class='divider-vertical'></li> \
							<li class='dropdown' id='dropdown'> \
								<a class='dropdown-toggle' href='#dropdown' data-toggle='dropdown'>Sign In <strong class='caret'></strong></a> \
								<div class='dropdown-menu' style='padding: 15px; padding-bottom: 0px;"> \
									<form method='post' action='login' accept-charset='UTF-8'> \
										<input style='margin-bottom: 15px;' type='text' placeholder='Username' id='username' name='username'> \
										<input style='margin-bottom: 15px;' type='password' placeholder='Password' id='password' name='password'> \
										<input style='float: left; margin-right: 10px;' type='checkbox' name='remember-me' id='remember-me' value='1'> \
										<label class='string optional' for='user_remember_me'> Remember me</label> \
										<input class='btn btn-primary btn-block' type='submit' id='sign-in' value='Sign In'> \
										<!--label style='text-align:center;margin-top:5px'>or</label> \
										<input class='btn btn-primary btn-block' type='button' id='sign-in-google' value='Sign In with Google'> \
										<input class='btn btn-primary btn-block' type='button' id='sign-in-twitter' value='Sign In with Twitter'--> \
									</form> \
								</div> \
							</li> \
						</ul> \
					</div> \
					<!--/.nav-collapse --> \
				</div> \
				<!--/.container-fluid --> \
			</div> \
			<!--/.navbar-inner --> \ ";
			

	document.getElementById('navbarWithSignUpAndSignIn').innerHTML = newHTML;	
	
	//var newHTML = "<span style='color:#ffffff'>" + oldHTML + "</span>";
}
//</script>
//<p id='para'>Welcome to the site <b id='boldStuff3'>dude</b> </p> 
//<input type='button' onclick='changeText3()' value='Change Text'/>