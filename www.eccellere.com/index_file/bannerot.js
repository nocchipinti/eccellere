function Banner() {
   var Immagini = new Array();
       Immagini[0]="http://www.eccellere.com/Partners/Monster/img/agente_120_60.gif";
       Immagini[1]="http://www.eccellere.com/Partners/Monster/img/omino_120x60-b.gif";
   var Url = new Array();
       Url[0]="http://my.monster.it/login.asp";
       Url[1]="http://selezione.monster.it/";
   var Banners = Math.floor(Math.random() * Immagini.length);
       document.write("<a href=" + Url[Banners] + " target='_blank'><img src=" + Immagini[Banners] + " border=0></a>");
}
Banner(); 
