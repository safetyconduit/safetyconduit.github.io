var debug=false;
var globallyTrackedStyleNum=10;
document.onkeydown = TrapKey;
$(document).ready(function() {
    $(window).load(function() {
         $('#loader').hide();
         $('#pagecontent').show();
    });
});
function TrapKey(e){
	var key = (e) ? e.which : event.keyCode;
	if(debug)alert(key);
	if(key==37){changeIconColors();}
	else if(key==38){
		changeNavbar();
	}
	else if(key==39){
		changeStyle();
		//alert("styleNum: "+globallyTrackedStyleNum);
		//alert("indexOF: "+document.getElementById("navbar").className.indexOf("navbar-inverse"));
		if(globallyTrackedStyleNum==11&&document.getElementById("navbar").className.indexOf("navbar-inverse")!=-1)
		{
			//alert("tada");
			changeNavbar();
		}
	}
	else if(key==40){changeInnerStyles();showMain();}
	showInput(key);
	return true;
}
window.onload(Build());
function Build(){
	BuildNav();
	//document.getElementById(signInButton).click;
	BuildSignInDropdown();
	BuildFooter();
	if(debug){Debug();}
	else{
		showStyle();
		showMain();
		showInput();
	}
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
	//$("<div>",{class:"hero-unit hide",id:"signInDropdown",html:
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
   	//})
}
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

function Debug(){
	debug=true;
	if(debug){
	showStyle();
	showMain();
	showInput(null);
	}
}
function showStyle(){
	document.getElementById("styleLabel").innerHTML="Css Theme: "+document.getElementById("bootmin").href.substr(document.getElementById("bootmin").href.length-19,11);
}
function showMain(){
	document.getElementById("mainLabel").innerHTML="Main Theme: "+document.getElementById("main").className;
}
function showInput(input){
	if(debug)alert("made it to show input");
	if(input!=null){
		document.getElementById("inputLabel").innerHTML="Last Input: "+input;
	}
	else{
		document.getElementById("inputLabel").innerHTML="Last Input: Null";
	}
}
function showAbout(){
	//debug=true;
	if(debug){alert("made it to show about");}
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
	if(debug)alert("made it to changeNavbar");
	var navbar = document.getElementById("navbar");
	if(debug)alert(navbar);
		if (navbar.className.indexOf("navbar-inverse") == -1) {
			var currentReportedCssFileUriString = document.getElementById('bootmin').href;
			var currentReportedStyleNum = currentReportedCssFileUriString.substring(currentReportedCssFileUriString.length - 10, currentReportedCssFileUriString.length - 8);
		    
			//alert("navbar-inverse.indexOf did equal -1");
		    if(currentReportedStyleNum!=11){
		    	//alert("currentlyReportedStyleNum did not equal 11");
		    	//alert(navbar.className);
				navbar.className = navbar.className + " navbar-inverse";//		document.getElementById("helloUsernamePullRight").className=document.getElementById("helloUsernamePullRight").className+" navbar-inverse";	
		    	//alert(navbar.className);
		    }else{
		    	
		    	//alert("currentlyReportedStyleNum did equal 11");
		    	//alert(navbar.className);
		    	if(navbar.className.indexOf("navbar-inverse")==-1)
		    	{
		    		//navbar.className = navbar.className + " navbar-inverse";
		    		
		    		//alert(document.getElementById("helloUsernamePullRight").className);
		    		//document.getElementById("helloUsernamePullRight").className=document.getElementById("helloUsernamePullRight").className + " navbar-inverse";
		    	    //alert(document.getElementById("helloUsernamePullRight").className);
		    		
		    	}else{
		    		//alert("here");
		    		//navbar.className = navbar.className.substr(0, navbar.className.length - 14);
		    	}
		    	//alert(navbar.className);
		    }
		} 
		else {
			//alert("navbar-inverse.indexOf did not equal -1");
			navbar.className = navbar.className.substr(0, navbar.className.length - 14);
		}
}
function changeStyle() {
	if(debug)alert("made it to changeStyle");
	var currentReportedCssFileUriString = document.getElementById('bootmin').href;
	if(debug)alert(document.getElementById('bootmin').href);
	var currentReportedStyleNum = currentReportedCssFileUriString.substring(currentReportedCssFileUriString.length - 10, currentReportedCssFileUriString.length - 8);
    if(debug)alert(currentReportedStyleNum);
    var oldBootstrapStringHolder = "bootstrap"+currentReportedStyleNum;
   if(debug) alert(oldBootstrapStringHolder);
	if (!(globallyTrackedStyleNum == currentReportedStyleNum)) {
		currentReportedStyleNum = globallyTrackedStyleNum;
	}
	var oldStyleNum = currentReportedStyleNum;
	if(debug)alert(oldStyleNum);
	if (currentReportedStyleNum == 22) {
		currentReportedStyleNum = 9;
		globallyTrackedStyleNum = 9;
	}
	currentReportedStyleNum++;
	globallyTrackedStyleNum++;
	//var theme11 = 	
	//if (currentReportedStyleNum==11){
		//alert("currentReportedStyleNum indeed = 11");
	   // if($("navbar").className.indexOf("navbar-inverse")!=-1){
		//alert($("navbar").className);
		//$("navbar").className = $("navbar").className.substr(0, $("navbar").className.length - 14);
		//alert($("navbar").className);
		//}
		//}
	//}
	
	var newBootstrapStringHolder = "bootstrap"+currentReportedStyleNum;
	var newCssFileUriString = currentReportedCssFileUriString.replace(oldBootstrapStringHolder,newBootstrapStringHolder);
	document.getElementById('bootmin').href = newCssFileUriString;
	if(debug)alert(document.getElementById('bootmin').href);
}


function changeIntraBodyElement(ElementID)
{
	if(document.getElementById(ElementID).className=="jumbotron masthead"){document.getElementById(ElementID).className="masthead"}
	else if(document.getElementById(ElementID).className=="masthead"){document.getElementById(ElementID).className="jumbotron"}
	else if(document.getElementById(ElementID).className=="jumbotron"){document.getElementById(ElementID).className="hero-unit"}
	else if(document.getElementById(ElementID).className=="hero-unit"){document.getElementById(ElementID).className="container"}
	else if(document.getElementById(ElementID).className=="container"){document.getElementById(ElementID).className="jumbotron masthead"}
}
function ToggleSignInDropdown(){
	if(document.getElementById("signInDropdown").className=="hero-unit hide")document.getElementById("signInDropdown").className = "hero-unit show";
	else if(document.getElementById("signInDropdown").className="hero-unit show")document.getElementById("signInDropdown").className = "hero-unit hide";
}
function ToggleToggables(){
	var hideables = document.getElementsByClassName("toggable");
	for (var i = 0; i < hideables.length; ++i) {
		//alert(hideables[i].className);
		
		if(hideables[i].className.indexOf("hide") == -1){
			hideables[i].className = hideables[i].className + " hide";
		}
		else if(hideables[i].className.indexOf("hide")>-1){
		hideables[i].className = hideables[i].className.substr(0, hideables[i].className.length - 4);}
		//alert(hideables[i].className);
	}
}
function enableHardCodedLogin(){
	//alert("made it to hcl");

}

function login(){
	//debug=true;
	if (debug)alert(document.getElementById("username").value);
	if (debug)alert(document.getElementById("password").value);
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
function changeInnerStyles(){
	var intraBodyElements=document.getElementsByName("intraBodyElement");
	//alert(intraBodyElements.length);
	
	for(var i=0;i<intraBodyElements.length;++i)
	{
		changeIntraBodyElement(intraBodyElements[i].id);
		/*
		if(intraBodyElements[i].className.indexOf("hide") == -1){
	    	intraBodyElements[i].className = intraBodyElements[i].className + " hide";
		}
		else if(topNavintraBodyElementsPullRights[i].className.indexOf("hide")>-1){
			intraBodyElements[i].className = topNavPullRights[i].className.substr(0, topNavPullRights[i].className.length - 4);}*/
	}
}

//document.getElementById("login").onclick(alert("yes!"));

//$('#login').bind('click',function()
//{
	//alert("made it!");
   //if(($('username').val()== 'test') && ($('#password').val()== 'pass')){
  // 	  alert("finally!");
  // }
   //else{
     // alert('username or password not valid');
  // }
//});