document.onkeydown = TrapKey;
var globallyTrackedStyleNum = 10;
function TrapKey(e) {
	var key = (e) ? e.which : event.keyCode;
	if (key == 39)
		changeStyle();
	if (key == 38)
	    changeNav();	
	return true;
}
function changeNav() {
	var currentNavCssString = document.getElementById("navbar").className;
	if(currentNavCssString=="navbar navbar-fixed-top")
	document.getElementById("navbar").className = "navbar navbar-fixed-top navbar-inverse";
	else if(currentNavCssString="navbar navbar-fixed-top navbar-inverse")
	document.getElementById("navbar").className = "navbar navbar-fixed-top";
}
function changeStyle() {
	var currentReportedCssFileUriString = document.getElementById('bootmin').href;
	var currentReportedStyleNum = currentReportedCssFileUriString.substring(currentReportedCssFileUriString.length - 10, currentReportedCssFileUriString.length - 8);
    var oldBootstrapStringHolder = "bootstrap"+currentReportedStyleNum;
	if (currentReportedStyleNum == 13) {
		currentReportedStyleNum = 9;
	}
	var newStyleNum = currentReportedStyleNum;
	newStyleNum++;
	var newBootstrapStringHolder = "bootstrap"+newStyleNum;
	var newCssFileUriString = currentReportedCssFileUriString.replace(oldBootstrapStringHolder,newBootstrapStringHolder);
	document.getElementById('bootmin').href = newCssFileUriString;
}