function checkPassword() {
    var password = document.getElementById("passwordBox");
    let passwordText = atob("OTg2MzQy");
    if(password.value == passwordText)
    {
       return true;
    }
    else{alert("Téves jelszó! Próbálja újra!")
    return false;
    }
 }