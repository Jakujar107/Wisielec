const yes= new Audio("yes.wav");
const no= new Audio("no.wav");

const passwords =["machiny oblężnicze","malarstwo jaskiniowe",
'rachunek różniczkowy','rabuś kokosowy','rachunek prawdopodobieństwa','zaaklimatyzować się','złudzenie geometryczne','zżółknięty',' brzuchomówca'];
let count=0;
let w=Math.floor(Math.random()*(passwords.length));
let password=passwords[w];

password=password.toUpperCase();


let password1= "";

for(i=0;i<password.length;i++){
if(password.charAt(i)==" ")
	password1=password1+" ";

else password1=password1+"-";
}

function password_out(){
	document.getElementById("plansza").innerHTML= password1;
}

window.onload=start;

const litery =["A","Ą","B","C","Ć","D","E","Ę","F",
	"G","H","I","J","K","L","Ł","M","N","Ń","O","Ó","Q","P"
	,"R","S","Ś","T","U","V","W","X","Y","Z","Ż","Ź"];

function start(){
	let divtext="";
	for(i=0;i<=34;i++){
		let element="lit"+i;

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

function check(nr){
	let gool=false;
	
	for(i=0;i<password.length;i++){
		if(password.charAt(i)==litery[nr])
		{
			password1=password1.change(i,litery[nr]);
			gool=true;
		}
	}
			let element="lit"+nr;

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
	let pic="img/s"+count+".jpg";
	document.getElementById("wisielec").innerHTML='<img src="'+pic+'"alt=""/>';
	}
	
	//wygrana
	if(password==password1){
	document.getElementById("alpha").innerHTML="BRAWO, zgadłeś!!"+
	'<br/><br/><span class="reset" onclick="location.reload()">Jeszcze raz?</span>';
	}
	if(count>=9){
		document.getElementById("alpha").innerHTML="PRZEGRAŁEŚ!! Prawidłowe hasło: " +password+
	'<br/><br/><span class="reset" onclick="location.reload()">Jeszcze raz?</span>';
	}
}

