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