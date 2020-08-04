var url = location.href;
var path = location.pathname;
var search = location.search;
var exclusion = "&emi=AN1VRQENFRJN5"; 
var result = path + search + exclusion;

if (!url.match("rh=")) {
  if(window.confirm( "信頼のある商品だけを表示しますか？" )){
    history.pushState("","",result);
    location.reload(true);
  }
}   

