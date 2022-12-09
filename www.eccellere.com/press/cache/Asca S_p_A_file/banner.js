addr=new Array();
addr[0]="http://www.telekurs-financial.com";
addr[1]="http://www.marketnews.com";
addr[2]="http://www.moneyline.com";
addr[3]="http://www.yahoo.it";
addr[4]="http://www.afp.fr";
addr[5]="http://www.assintel.it";
addr[6]="http://www.quotidianoimmobiliare.info";
bnr=new Array();
bnr[0]="interna1.jpg";
bnr[1]="interna2.jpg";
bnr[2]="interna3.jpg";
bnr[3]="interna4.jpg";
bnr[4]="interna5.jpg";
bnr[5]="interna6.jpg";
bnr[6]="interna7.gif";
tout=2000;
bn=-1;
totbann=6
function cambia() {
bn=bn+1;
if (bn>totbann) {bn=0};
document.images["banner"].src='banner/'+bnr[bn];
window.setTimeout("cambia()", tout);
}
function banner(){  
	popup = window.open(addr[bn],"link")  
}
function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
function MM_openBrWindow(theURL,winName,features){
 //new versione - ab&c 2001
var nw = window.open(theURL,winName,features);
nw.own = self;
nw.focus();
}
//-->
function on(colore) {
event.srcElement.style.backgroundColor=colore
}