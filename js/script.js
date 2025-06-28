
const usernameInput = document.getElementById("usernameInput"); 
const userEmailInput = document.getElementById("userEmailInput"); 
const userPasswordInput = document.getElementById("userPasswordInput"); 
const userAgeInput = document.getElementById("userAgeInput"); 
const userPhoneInput = document.getElementById("userPhoneInput"); 
const userAddressInput = document.getElementById("userAddressInput"); 
const userMaleInput = document.getElementById("male"); 
const userFemaleInput = document.getElementById("female"); 
const signupBtn = document.getElementById("signupBtn"); 
let usersinfo;

if(localStorage.getItem("users") == null)
{
    usersinfo = [];
}
else
{
    usersinfo = JSON.parse(localStorage.getItem("users"));
}

function signUp()
{

    userInputsValidation();
    isExist();

    if(userInputsValidation() == true && isExist() == false)
    {
        let user = 
        {
            name:usernameInput.value,
            email:userEmailInput.value,
            password:userPasswordInput.value,
            age:userAgeInput.value,
            phone:userPhoneInput.value,
            address:userAddressInput.value,
        }
        usersinfo.push(user)
        localStorage.setItem("users", JSON.stringify(usersinfo));
        const confirmMsg = document.getElementById("confirmMsg");
        confirmMsg.classList.replace("d-none", "d-block");
        const signin = document.getElementById("signin")
        signin.classList.replace("d-none", "d-block");
        tryAgainMsg.classList.replace("d-block", "d-none");

    }
    else
    {
        const tryAgainMsg = document.getElementById("tryAgainMsg");
        tryAgainMsg.classList.replace("d-none", "d-block");
        confirmMsg.classList.replace("d-block", "d-none");

    }

    let gender;
            if (userMaleInput.checked) {
                gender = userMaleInput.value;
            } else if (userFemaleInput.checked) {
                gender = userFemaleInput.value;
            }
        
        const data = {
            userName: usernameInput.value,
            email: userEmailInput.value,
            password: userPasswordInput.value,
            age: userAgeInput.value,
            phone: userPhoneInput.value,
            addresses: userAddressInput.value,
            gender: gender
        };

        axios.post('https://test-2-lbcq.onrender.com/user/signUp', data)
            .then(response => {
                console.log('Success:', response.data);
            })
            .catch(error => {
                console.error('Error:', error.response ? error.response.data : error.message);
            });
}

function usernameValidation() {
    const usernameAlert = document.getElementById("usernameAlert");
    let regex = /^[\p{L}\s]{2,}$/u;
    if (regex.test(usernameInput.value) && usernameInput.value !== "") {
        usernameInput.classList.add("is-valid");
        usernameInput.classList.remove("is-invalid");
        usernameAlert.classList.replace("d-block", "d-none");
        return true;
    } else {
        usernameInput.classList.add("is-invalid");
        usernameInput.classList.remove("is-valid");
        usernameAlert.classList.replace("d-none", "d-block");
        return false;
    }
}


function userPasswordValidation()
{
    let regex = /^.{6,}$/;
    const userPasswordAlert = document.getElementById("userPasswordAlert");
    if( regex.test(userPasswordInput.value) == true && userPasswordInput.value != "")
    {
        userPasswordInput.classList.add("is-valid");
        userPasswordInput.classList.remove("is-invalid");
        userPasswordAlert.classList.replace("d-block", "d-none");
        return true
    }
    else
    {
        userPasswordInput.classList.add("is-invalid");
        userPasswordInput.classList.remove("is-valid");
        userPasswordAlert.classList.replace("d-none", "d-block");
        return false
    }
}

function userEmailValidation()
{
    const userEmailAlert = document.getElementById("userEmailAlert");
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if( regex.test(userEmailInput.value) == true && userEmailInput.value != "")
    {
        userEmailInput.classList.add("is-valid");
        userEmailInput.classList.remove("is-invalid");
        userEmailAlert.classList.replace("d-block", "d-none");
        return true
    }
    else
    {
        userEmailInput.classList.add("is-invalid");
        userEmailInput.classList.remove("is-valid");
        userEmailAlert.classList.replace("d-none", "d-block");
        return false
    }
}

function userAgeValidation()
{
    const userAgeAlert = document.getElementById("userAgeAlert");
    let regex = /^(1[5-9]|[2-8][0-9]|90)$/;
    if( regex.test(userAgeInput.value) == true && userAgeInput.value != "")
    {
        userAgeInput.classList.add("is-valid");
        userAgeInput.classList.remove("is-invalid");
        userAgeAlert.classList.replace("d-block", "d-none");
        return true
    }
    else
    {
        userAgeInput.classList.add("is-invalid");
        userAgeInput.classList.remove("is-valid");
        userAgeAlert.classList.replace("d-none", "d-block");
        return false
    }
}

function userPhoneValidation()
{
    const userPhoneAlert = document.getElementById("userPhoneAlert");
    let regex = /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/;
    if( regex.test(userPhoneInput.value) == true && userPhoneInput.value != "")
    {
        userPhoneInput.classList.add("is-valid");
        userPhoneInput.classList.remove("is-invalid");
        userPhoneAlert.classList.replace("d-block", "d-none");
        return true
    }
    else
    {
        userPhoneInput.classList.add("is-invalid");
        userPhoneInput.classList.remove("is-valid");
        userPhoneAlert.classList.replace("d-none", "d-block");
        return false
    }
}

function userAddressValidation()
{
    
    const userAddressAlert = document.getElementById("userAddressAlert");
    const addressRegex = /^[a-zA-Z0-9\u0600-\u06FF\s.,-]+$/;

    if( addressRegex.test(userAddressInput.value) == true && userAddressInput.value != "")
    {
        userAddressInput.classList.add("is-valid");
        userAddressInput.classList.remove("is-invalid");
        userAddressAlert.classList.replace("d-block", "d-none");
        return true
    }
    else
    {
        userAddressInput.classList.add("is-invalid");
        userAddressInput.classList.remove("is-valid");
        userAddressAlert.classList.replace("d-none", "d-block");
        return false
    }
}

function isExist()
{
    let accountExistMsg = document.getElementById("accountExistMsg");
    
    for(let i = 0; i < usersinfo.length; i++)
    {

        if( usersinfo[i].email.toLowerCase() == userEmailInput.value.toLowerCase())
        {
            accountExistMsg.classList.replace("d-none", "d-block");
            userEmailInput.classList.remove("is-valid");
            userPasswordInput.classList.remove("is-valid");
            return true
        }
    }
    return false
}

function userInputsValidation()
{
    usernameValidation();   
    userEmailValidation();
    userPasswordValidation();
    userAgeValidation();
    userPhoneValidation();
    userAddressValidation();

    if( (usernameValidation() == true && userEmailValidation() == true && userPasswordValidation() == true && userAgeValidation() == true && userPhoneValidation() == true && userAddressValidation() == true))
    {
        accountExistMsg.classList.replace("d-block", "d-none");

        return true
    }
    else
    {
        return false
    }
}


async function login() {
    let loginEmail = document.getElementById("loginEmail");
    let loginPassword = document.getElementById("loginPassword");
    let wrongMsg = document.getElementById("wrongMsg");

    const dataLogin = {
        email: loginEmail.value,
        password: loginPassword.value,
    };

    if (loginEmail.value === "" || loginPassword.value === "") {
        let fillMsg = document.getElementById("fillMsg");
        fillMsg.classList.replace("d-none", "d-block");
        return false;
    }

    try {
        let response = await axios.post('https://test-2-lbcq.onrender.com/user/signin', dataLogin);
        localStorage.setItem('usertoken', response.data.token);
        console.log('Success:', response.data);

        if (response.data.message === "you logged in successfully") {
            if (response.data.payload.role === "admin") {
                window.location.href = '../dashboard.html';
            } else {
                window.location.href = '../index.html';
            }
            wrongMsg.classList.replace("d-block", "d-none");
        } else {
            wrongMsg.classList.replace("d-none", "d-block");
        }
    } catch (error) {
        console.error('Error:', error);
        wrongMsg.classList.replace("d-none", "d-block");
    }
}



function updateLoginStatus() {
    let logoutNavItem = document.getElementById("navItem1");
    let loginNavItem = document.getElementById("navItem2");
    let userToken = localStorage.getItem('usertoken');

    if (userToken) {
        logoutNavItem.classList.remove("d-none");
        logoutNavItem.classList.add("d-block");

        loginNavItem.classList.remove("d-block");
        loginNavItem.classList.add("d-none");
    } else {
        logoutNavItem.classList.remove("d-block");
        logoutNavItem.classList.add("d-none");

        loginNavItem.classList.remove("d-none");
        loginNavItem.classList.add("d-block");
    }
}
document.addEventListener('DOMContentLoaded', (event) => {
    updateLoginStatus();
});

async function logOut() {
    try {
        const userToken = localStorage.getItem("usertoken");

        const response = await axios.put('https://test-2-lbcq.onrender.com/user/logout', null, {
            headers: {
                token: userToken,
            },
        });
        if(response.data.message=="logout Successfully" && localStorage.getItem('usertoken')!=null){
            localStorage.removeItem('usertoken')    
        }
        window.location.href = '../login.html';

        console.log(response.data);
    } catch (error) {
        console.error(error);
    }

}

async function forgetPassword() {
    let email = document.getElementById("forgetEmail").value;
        const forgetdata = {
        email: email,
    };
    let { data } = await axios.post(
        `https://test-2-lbcq.onrender.com/user/forget_code`,
        forgetdata
    );  
    window.location.href = '../reset.html';

    console.log(data);
}

async function resetPassword(){
    let email = document.getElementById("resetEmail").value;
    let code = document.getElementById("resetCode").value;
    let password = document.getElementById("resetPassword").value;
    const resetdata = {
        email: email,
        code: code,
        password: password
    };
    let { data } = await axios.post(
        `https://test-2-lbcq.onrender.com/user/reset_password`,
        resetdata
    );  
    if(data.success==true){
        document.getElementById('loginBtn').classList.replace("d-none", "d-block")
        document.getElementById('changePass').classList.replace("d-block", "d-none")
        document.getElementById('resetMes').classList.replace("d-block", "d-none")

    }
    else{
        document.getElementById('resetMes').classList.replace("d-none", "d-block")
    }
    console.log(data);
}

// contact us
async function messageUser() {
    try {
        let name = document.getElementById("Name").value;
        let email = document.getElementById("Email").value;
        let message = document.getElementById("Message").value;
        const userMessage = {
            name: name,
            email: email,
            description: message
        };
        console.log("Sending user message:", userMessage);
        const response = await axios.post(
            'https://test-2-lbcq.onrender.com/message/addMessage',
            userMessage
        );
        console.log('Response:', response.data);
        if (response.data.success === true) {
            console.log('Message sent successfully.'); 
            document.getElementById('messageAlert').classList.replace("d-none", "d-block")

        } else {
            console.error('Failed to send message.');
            document.getElementById('messageAlert').classList.replace("d-block", "d-none")
        }
    }catch (error) {
        console.error('Error:', error);
        alert('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.');
    }
}










