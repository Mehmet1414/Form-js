

function validateForm(){
    var ad = document.forms["myForm"]["name"];
    var mail = document.forms["myForm"]["email"];
    var mesaj = document.forms["myForm"]["message"];

    if(ad.value == ""){
        document.getElementById('errorname').innerHTML = 'Lütfen Adinizi Giriniz';
        ad.focus();
        return false;
    }else{
        document.getElementById('errorname').innerHTML = '';
    }

    if(mail.value == ""){
        document.getElementById('erroremail').innerHTML = 'Lütfen Mail Adresinizi Giriniz';
        mail.focus();
        return false;
    }else{
        document.getElementById('erroremail').innerHTML = '';
    }

    if(mesaj.value == ""){
        document.getElementById('errormsg').innerHTML = 'Lütfen Mesajinizi Giriniz';
        mesaj.focus();
        return false;
    }else{
        document.getElementById('errormsg').innerHTML = '';
    }
}