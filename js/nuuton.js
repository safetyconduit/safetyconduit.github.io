var debug=false; 

document.onkeydown = process;
function process(e){
	var key = (e) ? e.which : event.keyCode;
	if(key==37){changeIconColors();}
	if(key==38){changeNavbar();}
	if(key==39){changeStyle();if(globallyTrackedStyleNum==11&&document.getElementById("navbar").className.indexOf("navbar-inverse")!=-1){changeNavbar();}}
	if(key==40){changeInnerStyles();showMain();}
	return true;
}

//window.onload(Build());
function Build(){
	BuildNav();
	BuildSignInDropdown();
	BuildFooter();
	Debug();
	enableHardCodedLogin();
}
function BuildNav(){
	$("<div>",{class:"navbar nav",id:"navbar",html:
    	$("<div>",{class:"navbar-inner",html:	
           	$("<div>",{class:"container"}).append(
           		$("<a>",{class:"brand",href:"index.html",html:"ConnectWithContractors"}),
	           	$("<ul>",{class:"nav"}).append(
	           		$("<li>", {html:$("<a>",{html:"Home",href:"index.html"}).prepend($("<i>",{class:"icon-home"}))}),
            		$("<li>", {html:$("<a>",{html:"About",href:"javascript:showAbout()"}).prepend($("<i>",{class:"icon-file"}))}),
	           		$("<li>", {html:$("<a>",{html:"Blog",href:"http://hometract.blogspot.com"}).prepend($("<i>",{class:"icon-pencil"}))}),
	           		$("<li>", {html:$("<a>",{html:"Contact",href:"mailto:connectwithcontractors@gmail.com"}).prepend($("<i>",{class:"icon-envelope"}))})),
	           	$("<div>",{class:"pull-right",id:"signUpSignInPullRight",html:
	           		$("<ul>",{class:"nav pull-right"}).append(
	           			$("<li>",{class:"divider-vertical"}),
	           			$("<li>", {html:$("<a>",{html:"Sign Up",href:"signup.html"}).prepend($("<i>",{class:"icon-cog"}))}),
	           			$("<li>", {html:$("<a>",{html:"Sign In",id:"signInButton",href:"javascript:ToggleSignInDropdown();"}).prepend($("<i>",{class:"icon-user"}))}))
	           	}),
	           	$("<div>",{class:"pull-right hide",html:
	           		$("<ul>",{class:"pull-right navbar nav navbar-inverse",id:"helloUsernamePullRight"}).append(
	           			$("<li>",{class:"divider-vertical"}),
	           			$("<li>", {html:$("<a>",{html:"Hello ",class:"btn-link",href:"signup.html"}).append($("<a>",{class:"btn-link",href:"javascript:ToggleUserProfileDropdown()",id:"usernameButton"}))}))
	           	})
	        )  	
   		})
   	}).prependTo("body") 
}
function BuildSignInDropdown(){
	$("<div>",{class:"hero-unit hide",style:"padding:15px;padding-bottom:0px;position:absolute;top:0px;left:80%;z-index:20",id:"signInDropdown",html:	
       	$("<form>").append(
       		$("<a>",{html:"x", style:"position:absolute;top:-2%;left:96%",href:"javascript:ToggleSignInDropdown();"}),
       		$("<div>",{class:""}).append(
       			$("<input>",{style:"margin-bottom: 5px",class:"input-block-level",type:"text",placeholder:"Username",id:"username",name:"username"}),
       			$("<input>",{style:"margin-bottom: 5px",class:"input-block-level",type:"password",placeholder:"Password",id:"password",name:"password"})
       		),
       		$("<div>",{class:""}).append(
       			$("<input>",{style:"float: left; margin-right: 10px",type:"checkbox",checked:"true",id:"remember-me",name:"remember-me"}),
       			$("<label>",{class:"string optional",html:" Remember me"}),
       			$("<a>",{class:"btn btn-block btn-primary",type:"button",id:"login",html:"Sign In",href:"javascript:login()"})
       		) 
        )
	}).appendTo("body")
}

function BuildCore(){
	/*
	 * 		<div class="pull-right" style="width:1080px; padding: 8px 0;">
		<ul class="nav nav-list"> 
		  <li class="nav-header" id>Messages</li>        
		  <div id="messages"></div>
		</ul>
		</div>
	 * 
	 */
	
}
function load(component){}

function BuildFooter(){
	$("<div>",{class:"footer",html:
   		$("<p>",{class:"parapgraph",html:	
           	$("<div>",{class:"row"}).append(
           		$("<div>",{class:"span4",html:"&nbsp;&copy;&nbsp;ConnectWithContractors 2012"}),
				$("<div>",{class:"span4",html:$("<label>",{id:"styleLabel"})}),
				$("<div>",{class:"span4",html:$("<label>",{id:"mainLabel"})}),
				$("<div>",{class:"span4",html:$("<label>",{id:"inputLabel"})})
	        )  	
    	})
   	}).appendTo("body")
}

function Debug(){debug=!debug;if(debug){showStyle();showMain();showInput(null);}}

function showStyle(){
	document.getElementById("styleLabel").innerHTML="Css Theme: "+document.getElementById("style").href.substr(document.getElementById("style").href.length-19,11);
}
function showMain(){
	document.getElementById("mainLabel").innerHTML="Main Theme: "+document.getElementById("main").className;
}
function showInput(input){
	if(input!=null){
		document.getElementById("inputLabel").innerHTML="Last Input: "+input;
	}
	else{
		document.getElementById("inputLabel").innerHTML="Last Input: Null";
	}
}
function showAbout(){
    ToggleToggables();
}



function changeIconColors() {
	var icons = document.getElementsByTagName("i");
	for (var i = 0; i < icons.length; ++i) {
		if (icons[i].className.indexOf("icon-white") == -1) {icons[i].className = icons[i].className + " icon-white";} 
		else {icons[i].className = icons[i].className.substr(0, icons[i].className.length - 10);}
	}
}
function changeNavs() {
	var navbars = document.getElementsByClassName("nav");
	for (var i = 0; i < navbars.length; ++i) {
		if (navbars[i].className.indexOf("navbar-inverse") == -1) {navbars[i].className = navbars[i].className + " navbar-inverse";} 
		else {navbars[i].className = navbars[i].className.substr(0, navbars[i].className.length - 14);}
	}
}
function changeNavbar() {
	var navbar = document.getElementById("navbar");
	if (navbar.className.indexOf("navbar-inverse") == -1) {
		var css = document.getElementById('style').href;
		var style = css.substring(css.length - 10, css.length - 8);
		if(style!=11){navbar.className = navbar.className + " navbar-inverse";}} 
	else {navbar.className = navbar.className.substr(0, navbar.className.length - 14);}
}
function changeStyle() {
	alert("made it");
	var css= document.getElementById('style').href;
	var style= css.substring(css.length - 10, css.length - 8);
	
    var oldString= "bootstrap"+style;
	if (style == 22) { style = 9; } style++;
	var newString= "bootstrap"+style;
	var newCss= css.replace(oldString,newString);
	alert(newCss);
	document.getElementById('style').href = newCss;
}
function changeIntraBodyElement(ElementID)
{
	if(document.getElementById(ElementID).className=="jumbotron masthead"){document.getElementById(ElementID).className="masthead"}
	else if(document.getElementById(ElementID).className=="masthead"){document.getElementById(ElementID).className="jumbotron"}
	else if(document.getElementById(ElementID).className=="jumbotron"){document.getElementById(ElementID).className="hero-unit"}
	else if(document.getElementById(ElementID).className=="hero-unit"){document.getElementById(ElementID).className="container"}
	else if(document.getElementById(ElementID).className=="container"){document.getElementById(ElementID).className="jumbotron masthead"}
}
function changeInnerStyles(){

	var intraBodyElements=document.getElementsByName("intraBodyElement");
	for(var i=0;i<intraBodyElements.length;++i)
	{
		changeIntraBodyElement(intraBodyElements[i].id);
	}
}



function ToggleSignInDropdown(){
	if(document.getElementById("signInDropdown").className=="hero-unit hide")document.getElementById("signInDropdown").className = "hero-unit show";
	else if(document.getElementById("signInDropdown").className="hero-unit show")document.getElementById("signInDropdown").className = "hero-unit hide";
}
function ToggleToggables(){
	var hideables = document.getElementsByClassName("toggable");
	for (var i = 0; i < hideables.length; ++i) {
		
		if(hideables[i].className.indexOf("hide") == -1){
			hideables[i].className = hideables[i].className + " hide";
		}
		else if(hideables[i].className.indexOf("hide")>-1){
		hideables[i].className = hideables[i].className.substr(0, hideables[i].className.length - 4);}
	}
}
function ToggleTopNavPullRight(){
	document.getElementById("usernameButton").innerHTML=document.getElementById("username").value;
	var topNavPullRights=document.getElementsByClassName("pull-right");
	for(var i=0;i<topNavPullRights.length;++i)
	{
		if(topNavPullRights[i].className.indexOf("hide") == -1){
	    	topNavPullRights[i].className = topNavPullRights[i].className + " hide";
		}
		else if(topNavPullRights[i].className.indexOf("hide")>-1){
			topNavPullRights[i].className = topNavPullRights[i].className.substr(0, topNavPullRights[i].className.length - 4);}
	}
}
function ToggleElementsOfClassXOnPropertyY(x,y){
	for(var i=0;i<document.getElementsByClassName(x).length;++i)
	{
		if(document.getElementsByClassName(x)[i].className.indexOf(y) == -1){
	    	document.getElementsByClassName(x)[i].className = document.getElementsByClassName(x)[i].className + " "+y;
		}
		else if(document.getElementsByClassName(x)[i].className.indexOf(y)>-1){
			document.getElementsByClassName(x)[i].className = document.getElementsByClassName(x)[i].className.substr(0, document.getElementsByClassName(x)[i].className.length - 4);}
	}
}
function login(){
	if ((document.getElementById("username").value=="test"||document.getElementById("username").value=="Wayne"||document.getElementById("username").value=="wayne"||document.getElementById("username").value=="testHomeowner"||document.getElementById("username").value=="testContractor"||document.getElementById("username").value=="testManager") && (document.getElementById("password").value == "pass")) {
		ToggleSignInDropdown();
		ToggleTopNavPullRight();
		if(document.getElementById("username").value=="test"){}
		else if(document.getElementById("username").value=="Wayne"){}
		else if(document.getElementById("username").value=="wayne"){}
		else if(document.getElementById("username").value=="testHomeowner"){showHomeowner()}
		else if(document.getElementById("username").value=="testContractor"){showContractor()}
		else if(document.getElementById("username").value=="testManager"){showManager()}
	} else {
		alert('username or password not valid');
	}
}

function showMessages(){}
function enableHardCodedLogin(){}
/* Legend:billType     "idea"                     name         quantityType: quantity tierName tierPrice(,)
 * 
 * monthly             "Instant Products"         tinymvp.com         value: 200 lander 29, 1000 fledgling 249, 2500 flyer 999, 10000 enterprise 3249, 100000 flagship 19,690
 * on-demand           "Self-Service Consulting"  selfservemvp.com    hours: 0 spigot 99, 10 hydrant 749, 25 well 2749, 100 pipeline 8749, 1000 niagra 99,249
 * monthly             "Awesome Time Tracking"    clocktastic.com     users: 1 hacker 10, 6 team 199, 20 smallbiz 599, 100 enterprise 2579, 1000 conglomerate 10599 
 */