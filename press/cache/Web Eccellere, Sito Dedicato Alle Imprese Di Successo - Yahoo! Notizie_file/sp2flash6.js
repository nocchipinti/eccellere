
// global click container setup
if (tekoglobal == null) {
	var tekoglobal = new Array();
}
tekoglobal[bfss_arg] = bfss_linkArray;

//clickthrough handling
function bfss_click(command,args,id) {
	c = command.substring(0,6);
	if (c == "banner") {
		bfss_doClick(tekoglobal[id][0]);
	} else {
		return false;
	}
}

function bfss_doGetURL(x,id) {
 	bfss_doClick(tekoglobal[id][x]);
}

function bfss_doClick(x) {
 if (x.substring(0,4) !== "http"){
   tmp = bfss_clickthrough.substring(12,bfss_clickthrough.length-8);
   top.location=tmp;
 } else {
    top.location=x;
 }
} 

// flash writing

var plugin = (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0;
if ( plugin ) {
	plugin = parseInt(plugin.description.substring(plugin.description.indexOf(".")-1)) >= 6;
}
else if (navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0 && navigator.userAgent.indexOf("Windows")>=0) {
	var iewin = true;
	document.write('<SCRIPT LANGUAGE=VBScript\> \n');
	document.write('on error resume next \n');
	document.write('plugin = ( IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.6")))\n');
	document.write('</SCRIPT\> \n');
}

if ( plugin ) {
    document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="'+bfss_width+'" height="'+bfss_height+'" id=' + bfss_id + ' align="middle">');
    document.write('<param name="allowScriptAccess" value="always" />');
    document.write('<param name="movie" value="' + bfss_flashfile +'" />');
    document.write('<param name="quality" value="high" />');
    document.write('<param name="wmode" value="opaque" />');
    document.write('<param name="swLiveConnect" value="true" />');
    document.write('<embed src="'+bfss_flashfile+'" name="' + bfss_id + '" allowScriptAccess=always swLiveConnect=true width='+bfss_width+' height='+bfss_height+' quality=high wmode=opaque loop=true type="application/x-shockwave-flash"><noembed><a href="'+bfss_URL+'"><img src="'+bfss_altimg+'" width='+bfss_width+' height='+bfss_height+' border=0></a></noembed></embed>');
    document.write('</object>');
} else if (!(navigator.appName && navigator.appName.indexOf("Netscape")>=0 && navigator.appVersion.indexOf("2.")>=0)){
	document.write('<A HREF="'+ bfss_altURL +'"><IMG SRC="'+ bfss_altimg +'" WIDTH='+bfss_width+' HEIGHT='+bfss_height+' BORDER=0></A>');
}