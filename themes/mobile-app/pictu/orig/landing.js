$(document).ready(function(){var a=$(window),b=$("#main"),c=b.find("img.bg"),d={width:1280,height:793},e=d.width/d.height,f={top:50},g=1e3,h=function(){var h={width:Math.max(980,a.width()),height:Math.max(600,a.height())},i={top:h.height<g?60:120,bottom:-20};$("body").attr("class",h.height<g?"small-screen":"big-screen");var j=h.height-i.top,k=Math.min(d.height,j-i.bottom),l=Math.floor(e*k),m=(h.width-l)/2;k<d.height&&(m-=Math.floor(1/j*8e4)),b.height(j);var n={left:m,width:l,height:k};j>k+f.top?(n.top="50%",n["margin-top"]=-1*k/2):(n.top=f.top,n["margin-top"]="0px"),c.css(n)};h(),a.bind("resize orientationchange",h)});