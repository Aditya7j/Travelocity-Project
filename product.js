
document.getElementById("m1").addEventListener("click",function(){
    window.location.href = "rooms.html"


})

document.getElementById("m2").addEventListener("click",function(){
    window.location.href = "rooms1.html"

    
})
document.getElementById("m3").addEventListener("click",function(){
    window.location.href = "rooms2.html"

    
})
document.getElementById("m4").addEventListener("click",function(){
    window.location.href = "rooms1.html"

    
})
document.getElementById("m5").addEventListener("click",function(){
    window.location.href = "rooms.html"

    
})
document.getElementById("m6").addEventListener("click",function(){
    window.location.href = "rooms2.html"

    
})
document.getElementById("m7").addEventListener("click",function(){
    window.location.href = "rooms.html"

    
})
document.getElementById("m8").addEventListener("click",function(){
    window.location.href = "rooms1.html"

    
})



var data = [
    {
      name: "Taj Santacruz",
      rating: 4,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/kn22m4w0/mobile/a/q/8/galaxy-f12-sm-f127gzgiins-samsung-original-imagftmjw3xqg4yk.jpeg?q=70",
      price: $164,
    },
    {
      name: "Taj Santacruz",
      rating: 4.2,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/v/5/e/galaxy-f42-5g-sm-e426bzahins-samsung-original-imag7anfwxsgumgz.jpeg?q=70",
      price: $74,
    },
    {
      name: "Taj Santacruz",
      rating: 4.6,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/r/h/z/apple-iphone-12-dummyapplefsn-original-imafwg8dqgncgbcb.jpeg?q=70",
      price: $75,
    },
    {
      name: "Hotel Parle International",
      rating: 4.5,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/d/g/b/apple-iphone-12-mini-dummyapplefsn-original-imafwgbfhfevaajh.jpeg?q=70",
      price: $164,
    },
    {
      name: "Hotel Taj ",
      rating: 3.8,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/kb1470w0/mobile/q/g/g/oppo-a12-cph2083-original-imafsh2hfkyamqyt.jpeg?q=70",
      price: $84,
    },
    {
      name: "Hotel India",
      rating: 4.9,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/kcuug7k0/mobile/g/h/e/asus-rog-phone-3-zs661ks-6a006in-original-imaftwc6nmyuyekd.jpeg?q=70",
      price: $78,
    },
    {
      name: "hotel Internation parle",
      rating: 3.4,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/kqpj4i80/mobile/e/i/r/star-300-dh2001-dizo-original-imag4nmpv7zahzs2.jpeg?q=70",
      price: $56,
    },
    {
      name: "Hotel virle parle",
      rating: 4.4,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/ku5ufm80/mobile/v/t/1/in-note-1-e7746-micromax-original-imag7cdgz6tqychm.jpeg?q=70",
      price: $89,
    },
    {
      name: "Taj Santacruz",
      rating: 4,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/ksqeky80/mobile/x/7/1/galaxy-z-fold3-5g-sm-f926bzgdinu-samsung-original-imag68q6hpdwmngw.jpeg?q=70",
      price: $89,
    },
  ];

    var body = document.querySelector("body");
    var mainDiv = document.createElement("div")
    mainDiv.setAttribute("id","container");
    body.append(mainDiv);
    Showproduct();

    var cart = JSON.parse(localStorage.getItem("cartItem"))||[];

    function Showproduct(){
        data.map(function(item){
            var imagediv = document.createElement("div")
            var img = document.createElement("img");
            img.setAttribute("src",item.image_url);

            var h1 = document.createElement("h1");
            h1.textContent = item.name

            var h2 =document.createElement("h2");
            h2.textContent = item.rating

            var h3 = document.createElement("h3")
            h3.textContent = item.price

            var btn = document.createElement("button")
            btn.textContent = "Add To Cart"
            btn.addEventListener("click",function(){
                addTocart(item)
            })

            i
            mainDiv.append(imagediv)
        })
        function addTocart(){
            cart.push(data)
            localStorage.setItem("cartItem",JSON.stringify(cart))
        }
    }