document.getElementById('submit-btn').addEventListener('click', function (){
    const userEmail = document.getElementById('user-email');
    const UserPassword = document.getElementById('user-password');

    if(userEmail.value === 'user@email.com' && UserPassword.value == '12345678'){
        window.location.href = "bank.html";
    }else{
        const warning = document.getElementById('login-section').appendChild(document.createElement('p'));
        warning.innerText = 'You are not a valid User. Please Sing-up';
    }
})