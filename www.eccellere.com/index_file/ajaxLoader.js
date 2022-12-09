function ajaxLoader(url,id) {
  if (document.getElementById) {
  
  
var x = (window.ActiveXObject) ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
  	 
  }
  if (x) {
    x.onreadystatechange = function() {
      if (x.readyState == 4 && x.status == 200) {
        el = document.getElementById(id);
        el.innerHTML = x.responseText;
      }
    }
    x.open("GET", url, true);
    x.setRequestHeader( "If-Modified-Since", "Sat, 1 Jan 2000 00:00:00 GMT" );
    x.send(null);
  }
}
