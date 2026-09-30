let password = +prompt('Enter a pin');
const correctpassword = 2026;
let attempts = 3;
while(attempts > 1){
    password = +prompt("Error. Enter your password:");
    if(password === correctpassword){
        alert("Password is correct!");
        break;
    }
    attempts--;
    if (password !== correctpassword){
        alert(`${attempts} attempts left`);
    }
    else{
        alert('Password is incorrect, blocked');
    }
}
