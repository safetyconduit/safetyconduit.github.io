document.onkeydown = TrapKey;
var globallyTrackedStyleNum = 1;

function TrapKey(e) {
	var key = (e) ? e.which : event.keyCode;
	if (key == 39)
		changeStyle();
	if (key == 38)
	    changeNav();	
	return true;
}

function changeStyle() {
	var currentReportedCssFileUriString = document.getElementById('stylesheet').href;
	//alert("value of current reported css file uri string on entering funcion changeStyle(): " + currentReportedCssFileUriString);
	var currentReportedStyleNum = currentReportedCssFileUriString.substring(currentReportedCssFileUriString.length - 9, currentReportedCssFileUriString.length - 8);
	//alert("value of current reported style number PRIOR to check if matching globally tracked style number : " + currentReportedStyleNum);
	//alert("value of globally tracked style number PRIOR to check that current reported style number is consistent with it : " + globallyTrackedStyleNum);
	var oldBootstrapStringHolder = "bootstrap"+currentReportedStyleNum;
	if (!(globallyTrackedStyleNum == currentReportedStyleNum)) {
		//alert("Made it into block of if(!(globallyTrackedStyleNum==currentReportedStyleNum))");
		currentReportedStyleNum = globallyTrackedStyleNum;
	}
	//alert("value of current reported style number AFTER check if matching globally tracked style number : " + currentReportedStyleNum);
	//alert("value of globally tracked style number AFTER check that current reported style number is consistent with it : " + globallyTrackedStyleNum);
	var oldStyleNum = currentReportedStyleNum;
	if (currentReportedStyleNum == 6) {
		//alert("made it into block that resets style num when reached max of: "+currentReportedStyleNum);
		currentReportedStyleNum = 0;
		globallyTrackedStyleNum = 0;
	}
	currentReportedStyleNum++;
	globallyTrackedStyleNum++;
	//alert("oldStyleNum= "+oldStyleNum+" : currentReportedStyleNum= "+currentReportedStyleNum);
	
	var newBootstrapStringHolder = "bootstrap"+currentReportedStyleNum;
	var newCssFileUriString = currentReportedCssFileUriString.replace(oldBootstrapStringHolder,newBootstrapStringHolder);
	document.getElementById('stylesheet').href = newCssFileUriString;
}