function sprawdz()
{
var liczba = document.getElementById("pole").value;
var przypisz = document.getElementById("wynik");
    if(liczba > 0)
    przypisz.innerHTML = "Liczba jest parzysta";    
    else if(liczba < 0)
    przypisz.innerHTML = "Liczba jest nieparzysta";     
    else if(liczba == "0")
    przypisz.innerHTML = "Liczba to 0";
    else przypisz.innerHTML = "Wpisz liczbę!";
    document.getElementById("test").innerHTML = liczba;
    alert(przypisz);
        
}
function wypisz()
{
    var lp = document.getElementById("l1").value;
    var ld = document.getElementById("l2").value;

        for(i=lp,napis = "";i<=ld;i++)
        {
            napis = napis+i+" ";
        }
    document.getElementById("pomiedzy").innerHTML = napis; 
         
}
function compare()
{
    var pole = document.getElementById("ddd").value;
    pole = parseInt(pole,10);
    alert(typeof pole);

}
