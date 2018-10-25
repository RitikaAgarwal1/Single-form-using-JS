
"use strict";

// code for displaying security form

var overlay = document.getElementsByClassName('overlay');
var popup = document.getElementsByClassName('popup');
var imagediv = document.getElementsByClassName('security-image');
var content = document.getElementsByClassName('security-content');

function showDiv(elements, display) {
  var i = 0, l = elements.length;
  for( ; i < l; i++) {
    elements[i].style.display = display;
  }
}

document.getElementById('security-btn').addEventListener('click', function (e) {
  showDiv(overlay, 'block');
  showDiv(popup, 'block');
  showDiv(imagediv, 'block');
  showDiv(content, 'block');
}, false);

// code for displaying courses form

var coursesimagediv = document.getElementsByClassName('courses-image');
var coursescontent = document.getElementsByClassName('courses-content');

function showDiv(elements, display) {
  var i = 0, l = elements.length;
  for( ; i < l; i++) {
    elements[i].style.display = display;
  }
}

document.getElementById('courses-btn').addEventListener('click', function (e) {
  showDiv(overlay, 'block');
  showDiv(popup, 'block');
  showDiv(coursesimagediv, 'block');
  showDiv(coursescontent, 'block');
}, false);

// code for displaying college form

var collegeimagediv = document.getElementsByClassName('college-image');
var collegecontent = document.getElementsByClassName('college-content');

function showDiv(elements, display) {
  var i = 0, l = elements.length;
  for( ; i < l; i++) {
    elements[i].style.display = display;
  }
}

document.getElementById('college-btn').addEventListener('click', function (e) {
  showDiv(overlay, 'block');
  showDiv(popup, 'block');
  showDiv(collegeimagediv, 'block');
  showDiv(collegecontent, 'block');
}, false);

// code for displaying opportunities form

var opportunitiesimagediv = document.getElementsByClassName('opportunities-image');
var opportunitiescontent = document.getElementsByClassName('opportunities-content');

function showDiv(elements, display) {
  var i = 0, l = elements.length;
  for( ; i < l; i++) {
    elements[i].style.display = display;
  }
}

document.getElementById('opportunities-btn').addEventListener('click', function (e) {
  showDiv(overlay, 'block');
  showDiv(popup, 'block');
  showDiv(opportunitiesimagediv, 'block');
  showDiv(opportunitiescontent, 'block');
}, false);

// code for why us form

var whyimagediv = document.getElementsByClassName('why-image');
var whycontent = document.getElementsByClassName('why-content');

function showDiv(elements, display) {
  var i = 0, l = elements.length;
  for( ; i < l; i++) {
    elements[i].style.display = display;
  }
}

document.getElementById('why-btn').addEventListener('click', function (e) {
  showDiv(overlay, 'block');
  showDiv(popup, 'block');
  showDiv(whyimagediv, 'block');
  showDiv(whycontent, 'block');
}, false);

// code for closing popup

var overlay = document.getElementsByClassName('overlay');
var popup = document.getElementsByClassName('popup');
var imagediv = document.getElementsByClassName('security-image');
var imagediv2 = document.getElementsByClassName('courses-image');
var imagediv3 = document.getElementsByClassName('college-image');
var imagediv4 = document.getElementsByClassName('opportunities-image');
var imagediv5 = document.getElementsByClassName('why-image');
var content = document.getElementsByClassName('security-content');
var content2 = document.getElementsByClassName('courses-content');
var content3 = document.getElementsByClassName('college-content');
var content4 = document.getElementsByClassName('opportunities-content');
var content5 = document.getElementsByClassName('why-content');

function hideDiv(elements, display) {
  var i = 0, l = elements.length;
  for( ; i < l; i++) {
    elements[i].style.display = display;
  }
}

function closeDiv(){
  hideDiv(overlay, 'none');
  hideDiv(popup, 'none');
  hideDiv(imagediv, 'none');
  hideDiv(content, 'none');
  hideDiv(imagediv2, 'none');
  hideDiv(imagediv3, 'none');
  hideDiv(imagediv4, 'none');
  hideDiv(imagediv5, 'none');
  hideDiv(content2, 'none');
  hideDiv(content3, 'none');
  hideDiv(content4, 'none');
  hideDiv(content5, 'none');
};


// code for getting data


function send(){

		var current_subject = document.getElementById("security_subject").value;
		var school_name = document.getElementById("security_school").value;
		var ambition = document.getElementById("security_ambition").value;
		var pursue = document.getElementById("security_pursue").value;
		var fullname = document.getElementById("security_fullname").value;
		var city = document.getElementById("security_city").value;

	// Since it is a static page I have GET method instead of POST
	
var xhr = new XMLHttpRequest();
var url = "assets/js/data.json";
xhr.open("GET", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
    }
};
xhr.send(data);


}
