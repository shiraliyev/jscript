let Username;
let Password;
let count;
function login(){
    username = prompt("İstifadəçi Adınızı Daxil edin");
    password = prompt("Şifrənizi Daxil edin");
    count = 0;
    while
        (
        username != "Shiraliyev"
        &&
        password != "1234"
        &&
        count != 3
    ) {
        username = prompt
            (
                "İstifadəçi Adınızı Yenidən Daxil edin "
            );
        password = prompt
            (
                "Şifrənizi Yenidən Daxil edin "
            );
        count++;
    }
}
login();
let isQuit = true;
if (count === 3) {
    alert("Hesabınız Bloklandı");
} else {
    let choose;
    while(isQuit){
        choose = prompt(
            "1. Şifrəni Dəyiş \n" +
            "2. İstifadəçi Adını Dəyiş \n" +
            
            "3. Hesabdan çıx"
        );
        if (choose == 1) {
            changePassword();
        }else if (choose == 2) {
            changeUsername();
        } 
       else if(choose == 3){
           isQuit = !confirm("adinizin Çıxılsınmı");
           if(!isQuit)
                login();
        }
    }
}

function changePassword(){
    let tempPassword = prompt("Köhnə Parolunuzu daxil edin");
    while(
        tempPassword != password
    ){
        tempPassword = prompt("Köhnə Parolunuzu yenidən daxil edin"); 
    }

    let newPassword = prompt("Yeni Parolunuzu daxil edin");
    let newPasswordRepeat = prompt('Yeni Parolunuzu daxil edin');
    while
    (
        newPasswordRepeat != newPassword
    ){
        newPasswordRepeat = prompt('Yeni Parolunuzu yenidən daxil edin');
    }

    password = newPassword;
    alert("Parolunuz dəyişdi");
}
function changeUsername(){
    let tempPassword = prompt("Parolunuzu daxil edin");
    while(
        tempPassword != password
    ){
        tempPassword = prompt("Parolunuzu yenidən daxil edin"); 
    }

    let newUsername = prompt("Yeni İstifadəçi adınızı daxil edin");

    username = newUsername;
    alert("İstifadəçi adınız dəyişdi");
}