function validateNumber() {

    let phone = document.getElementById('phone');

    let regExp = /\d{5}/;

    let result = regExp.exec(phone.value);

    if(result){
        alert('Numer jet poprawny! :)')
    }else {
        alert('Numer jest zły! ): ')
    }

}

// /\d{3}([-])\d{3}\1\d{4}/
// /\d,\d{3},\d{3}/