document.querySelector("#btn").addEventListener("click",signIn);
    var regdUsers = JSON.parse(localStorage.getItem("personData"));
    console.log(regdUsers);

    function signIn(){
        var email = document.querySelector("#email").value
        var pass = document.querySelector("#pass").value

        if(email == "admin" && pass == "admin"){
            window.location.href = "admin.html"
        }else{
            for(var i=0;i<regdUsers.length;i++){
                if(regdUsers[i].EmailAddress == email && regdUsers[i].password == pass)
                {
                    window.location.href = "product.html"
                    
                }
            }
        
        }
    }