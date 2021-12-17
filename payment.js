var btn = document.querySelector(".btn").addEventListener("click",function(){
    window.location.href = "order.html"
})





function popup(mylink, windowname) { 
    if (! window.focus)return true; 
    var href; 
    if (typeof(mylink) == 'string') href=mylink;
     else href=mylink.href; w
     indow.open(href, windowname, 'width=400,height=200,scrollbars=yes'); return false;

}

