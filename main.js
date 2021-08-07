function checkPassword() {
    let password = document.getElementById("passwordBox");
    let passwordText = atob("RGFuaTAx");
    if(password.value == passwordText)
    {
       return true;
    }
    else{alert("Téves jelszó! Próbálja újra!")
    return false;
    }
 }