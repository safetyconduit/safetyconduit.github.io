function changeNav() {
	//alert("changeNav");
	var currentNavCssString = document.getElementById("navbar").className;
	//alert("gotHere");
	//alert(currentNavCssString);
	if(currentNavCssString=="navbar navbar-fixed-top")
	document.getElementById("navbar").className = "navbar navbar-fixed-top navbar-inverse";
	else if(currentNavCssString="navbar navbar-fixed-top navbar-inverse")
	document.getElementById("navbar").className = "navbar navbar-fixed-top";
}
	//var nav = document.getElementsByClassName('navbar');
	//alert(nav[0].innerHtml);
 //elem = document.getElementById('textid');
 //elem.innerHTML = text;
	
	//alert("value of current nav css string: " + currentNavCssString + nav);
	//svar currentReportedStyleNum = currentReportedCssFileUriString.substring(currentReportedCssFileUriString.length - 9, currentReportedCssFileUriString.length - 8);
	//alert("value of current reported style number PRIOR to check if matching globally tracked style number : " + currentReportedStyleNum);
	//alert("value of globally tracked style number PRIOR to check that current reported style number is consistent with it : " + globallyTrackedStyleNum);
	//var oldBootstrapStringHolder = "bootstrap"+currentReportedStyleNum;
	//if (!(globallyTrackedStyleNum == currentReportedStyleNum)) {
		//alert("Made it into block of if(!(globallyTrackedStyleNum==currentReportedStyleNum))");
		//currentReportedStyleNum = globallyTrackedStyleNum;
	//}
	//alert("value of current reported style number AFTER check if matching globally tracked style number : " + currentReportedStyleNum);
	//alert("value of globally tracked style number AFTER check that current reported style number is consistent with it : " + globallyTrackedStyleNum);
	//var oldStyleNum = currentReportedStyleNum;
	//if (currentReportedStyleNum == 6) {
		//alert("made it into block that resets style num when reached max of: "+currentReportedStyleNum);
		//currentReportedStyleNum = 0;
		//globallyTrackedStyleNum = 0;
	//}
	//currentReportedStyleNum++;
	//globallyTrackedStyleNum++;
	//alert("oldStyleNum= "+oldStyleNum+" : currentReportedStyleNum= "+currentReportedStyleNum);
	
	//var newBootstrapStringHolder = "bootstrap"+currentReportedStyleNum;
	//var newCssFileUriString = currentReportedCssFileUriString.replace(oldBootstrapStringHolder,newBootstrapStringHolder);
	//document.getElementById('stylesheet').href = newCssFileUriString;
//}