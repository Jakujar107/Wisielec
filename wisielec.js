var yes= new Audio("yes.wav");
var no= new Audio("no.wav");

var password ="frajerem jesteś";
var count=0;
password=password.toUpperCase();
var length=password.length;

var password1= "";

for(i=0;i<length;i++){
if(password.charAt(i)==" ")
	password1=password1+" ";
else password1=password1+"-";
}

function password_out()

{
	document.getElementById("plansza").innerHTML= password1;
}

window.onload=start;

var litery =["A","Ą","B","C","Ć","D","E","Ę","F",
	"G","H","I","J","K","L","Ł","M","N","Ń","O","Ó","Q","P"
	,"R","S","Ś","T","U","V","W","X","Y","Z","Ż","Ź"];

function start()
{
	
	var divtext="";
	for(i=0;i<=34;i++)
	{
				var element="lit"+i;

		divtext=divtext+'<div class="litera"onclick="check('+i+')" id="'+element+'">'+litery[i]+'</div>';
		if((i+1)%7===0)divtext=divtext+'<div style="clear:both;"></div>';
	}
	document.getElementById("alpha").innerHTML=divtext;
	
	
	password_out();
}

String.prototype.change=function(place,znak){
if(place>this.length-1) return this.toString();
else {
return this.substr(0,place)+znak+this.substr(place+1);
}
}

function check(nr)
{
	
	var gool=false;
	
	for(i=0;i<length;i++){
		if(password.charAt(i)==litery[nr])
		{
			password1=password1.change(i,litery[nr]);
			gool=true;
		}
	}
			var element="lit"+nr;

	if(gool==true){
		yes.play();
		document.getElementById(element).style.background = "#002000";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";

			
			password_out();

	}
	else{
no.play();
		document.getElementById(element).style.background = "#200000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";
	count++;
	var pic="img/s"+count+".jpg";
	document.getElementById("wisielec").innerHTML='<img src="'+pic+'"alt=""/>';

	}
	
	//wygrana
	if(password==password1){
	document.getElementById("alpha").innerHTML="Prawidłowe hasło: " +password+
	'<br/><br/><span class="reset" onclick="location.reload()">Jeszcze raz?</span>';
	}
	if(count>=9){
		document.getElementById("alpha").innerHTML="PRZEGRAŁEŚ!! Prawidłowe hasło: " +password+
	'<br/><br/><span class="reset" onclick="location.reload()">Jeszcze raz?</span>';
	}
}

