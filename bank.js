function myFunction() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

function signUp(){
    account = {
        user:user.value,
        acc:acc.value,
        pass:pass.value
    }
    if (account.acc==null || account.acc=="" ){  
        alert("Account number can't be blank");  
    }
    else  if (isNaN(account.acc)==true) {
        alert("Account number should not contain letters");  
    }
    else if(account.acc.length<5){  
        alert("Account Number must be at least 5 characters long.");  
        return false;  
    }
    else if (account.user==null || account.user=="" ){  
        alert("Username can't be blank");  
    }
    else if (account.pass==null || account.pass==""){  
        alert("Password can't be blank");  
    }
    else if(account.pass.length<6){  
        alert("Password must be at least 6 characters long.");  
        return false;  

    }  
    
    else if(account.acc in localStorage){
        alert("Account already exist")
        window.location="index.html";
    }
    else{
        localStorage.setItem(account.acc, JSON.stringify(account))
        alert("Account successfully created")
        window.location="index.html";
    }
}

function logIn(){
    account1 = {
        acc:acc.value,
        pass:pass.value
    }
    if (account1.acc==null || account1.acc=="" ){  
        alert("Account number can't be blank");  
    }
    else if (account1.pass==null || account1.pass==""){  
        alert("Password can't be blank");  
    }
    else if(account1.acc in localStorage){
        
        account=JSON.parse(localStorage.getItem(account1.acc))
        console.log(account['pass'])
        if(account1.pass==account.pass){
            alert("Login Success")
            window.location="#";
        }
        else{
            alert("Wrong Password")
        }
    }
    else{
        alert("Wrong Details")
    }
}


//validators
