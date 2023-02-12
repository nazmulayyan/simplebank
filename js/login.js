//step no 01 clicked on submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //step no 02 get the email address
    //always remember to use .value for get input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //step 03 get the password
    //set id on the html 
    //get the element
    //get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    //do not verify on client side it's very danger
    if(email === 'myself@gmail.com' && password === 'helloCard'){
        window.location.href = 'wallet.html';
    }
    else{
        alert('please enter valid information')
    }
})

