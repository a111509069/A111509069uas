$(document).ready(function(){
	$("input").focus(function(){
		$(this).css("background-color","#7FFFD4");
	});
	$("input").blur(function(){
		$(this).css("background-color","#F0F8FF");
	});
});

function loadXMLDoc()
				{
				var xmlhttp;
				if (window.XMLHttpRequest)
				{// code for IE7+, Firefox, Chrome, Opera, Safari
				xmlhttp=new XMLHttpRequest();
				}
				else
				{// code for IE6, IE5
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
				}
				xmlhttp.onreadystatechange=function()
				{
				if (xmlhttp.readyState==4 && xmlhttp.status==200)
				{
				document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
				}
				}
				xmlhttp.open("GET","isiberita.xml",true);
				xmlhttp.send();
				}