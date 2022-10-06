function signUp(){
    account = {
        user:user.value,
        acc:acc.value,
        pass:pass.value
    }

    if(account.acc in localStorage){
        alert("Already Exist")
        window.location="index.html";
    }
    else{
        localStorage.setItem(account.acc, JSON.stringify(account))
        alert("Successfully added")
        window.location="index.html";
    }
}