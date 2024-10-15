const form = {
    email: () => document.getElementById(("i.email")),
    emailInvalidError: () => document.getElementById(("email-invalid-error")),
    emailRequiredError: () => document.getElementById(("email-required-error")),
    password: () => document.getElementById(("i.senha")),
    passwordInvalidError: () => document.getElementById(("password-invalid-error")),
    passwordRequiredError: () => document.getElementById(("password-required-error")),
    recoveryButton: () => document.getElementById(("recovery-button")),
    loginButton: () => document.getElementById(("login-button"))
}

function onInputEmail(){
    toggleButtonsDisable();
    toggleEmailErrors();
}

function onInputPassword(){
    togglePasswordErrors();
    toggleButtonsDisable();
}

    function toggleEmailErrors(){
        const email = form.email().value;
        
        form.emailRequiredError().style.display = email ? "none" : "block";
        
        form.emailInvalidError().style.display = (email && isEmailValid()) ? "none" : "block";
    }

    function togglePasswordErrors(){
        const password = form.password().value;

        form.passwordRequiredError().style.display = password ? "none" : "block";
        
        form.passwordInvalidError().style.display = password ? "none" : "block";
    }

    function toggleButtonsDisable(){

    const emailValid = isEmailValid();
    form.recoveryButton().disabled = !emailValid;

    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !emailValid || !passwordValid;
}

    function isEmailValid(){
        const email = form.email().value;
        if (!email) {
            return false;
        }
        return validateEmail((email));
    }
    
    function isPasswordValid (){
        const password = form.password().value;
        if (!password){
            return false;
        }
        return true;
        }

    function validateEmail(email){
        return  /\S+@\S+\.\S+/.test(email);
    }