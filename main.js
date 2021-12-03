function validar(){
    var yourName = document.getElementById("yourName");
    var yourLastName = document.getElementById ("yourLastName");
    var yourGenre = document.getElementById ("yourGenre");
    var yourEmail = document.getElementById ("yourEmail");
    var password = document.getElementById ("yourPassword");

    //verificando se o nome está vazio
    if (yourName.value == "") {
        alert ("Name not entered");
        yourName.focus();
        return;
    }
    if (yourLastName.value == "") {
        alert ("Lastname not entered");
        yourLastName.focus();
        return;
    }
    if (yourGenre.value == "") {
        alert ("Genre not entered");
        yourGenre.focus();
        return;
    }
    if (yourEmail.value == "") {
        alert ("E-mail not entered");
        yourEmail.focus();
        return;
    }
    if (yourPassword.value == "") {
        alert ("Password not entered");
        yourPassword.focus();
        return;
    }
    alert ("FORM SENT =)")


}