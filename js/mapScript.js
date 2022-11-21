function mapsSelector() {
  if /* if we're on iOS, open in Apple Maps */
    ((navigator.platform.indexOf("iPhone") != -1) || 
     (navigator.platform.indexOf("iPad") != -1) || 
     (navigator.platform.indexOf("iPod") != -1))
    window.open("maps://maps.google.com/maps?daddr=42.72427684258648,-73.69311929250506&amp;ll=");else /* else use Google */
    window.open("https://maps.google.com/maps?daddr=42.72427684258648,-73.69311929250506&amp;ll=");
}