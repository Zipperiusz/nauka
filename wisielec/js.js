var haslo = "Bez pracy nie ma kołaczy";
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;

var haslo_ukryte = "";

for(i=0;i<dlugosc;i++)
{
    if(haslo.charAt(i)==" ")haslo_ukryte += " ";
    else haslo_ukryte += "-";
}

function wypisz_haslo()
{
    document.getElementById("plansza").innerHTML = haslo_ukryte;

}
window.onload = start;
var alphabet = "aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż";
alphabet = alphabet.toUpperCase();
function start()
{
    var tresc_diva = "";
    
    for(i=0;i<=34;i++)
    {
        tresc_diva += '<div onclick="sprawdz('+i+')" id="lit'+i+'" class="litera">'+alphabet.charAt(i)+'</div>';
        if((i+1)%7==0) tresc_diva += '<div style="clear:both;"></div>';
    }

    document.getElementById("alfabet").innerHTML = tresc_diva;
    wypisz_haslo();
}
String.prototype.zamien = function(miejsce,znak)
{
    if(miejsce > this.length-1) return this.toString();
    else return this.substr(0,miejsce) + znak + this.substr(miejsce+1); 
}
var bledy = 0;
function sprawdz(nr)
{
    var trafiona = false;
    for(i = 0; i < dlugosc; i++)
	{
		if (haslo.charAt(i) == alphabet.charAt(nr))
		{
            haslo_ukryte = haslo_ukryte.zamien(i,alphabet.charAt(nr));
            trafiona = true;
		}
    }
    if(trafiona==true)
    {
        var element = "lit" + nr;
        document.getElementById(element).style.background ="#003300";
        document.getElementById(element).style.color ="#00c000";
        document.getElementById(element).style.border ="3px solid #00c000";
        document.getElementById(element).style.cursor ="default";
        wypisz_haslo();
    }
    else
    {
        var element = "lit" + nr;
        document.getElementById(element).style.background ="#dd1e08";
        document.getElementById(element).style.color ="#7c3931";
        document.getElementById(element).style.border ="3px solid #7c3931";
        document.getElementById(element).style.cursor ="default";
        document.getElementById(element).setAttribute("onclick",";")


        bledy++;
        document.getElementById("szubienica").innerHTML = '<img src="img/s'+bledy+'.jpg" alt=""></img>';
        

    }
    //Win
    if(haslo == haslo_ukryte)
    {
        document.getElementById("alfabet").innerHTML= "Tak, To jest prawodłowe hasło. <br>"+haslo+'<br><br> <span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
    }
    //death
    if(bledy>=9)
    {
        document.getElementById("alfabet").innerHTML= "Umarłeś. <br>"+haslo+'<br><br> <span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
    }
}