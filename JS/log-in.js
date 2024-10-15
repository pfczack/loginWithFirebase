
    import {initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
    import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

    const firebaseConfig = {
        apiKey: "AIzaSyCtIxe-nx_ADMYumjxjIFQRpxFJ_FvVtVA",
        authDomain: "login-senai-exercicio.firebaseapp.com",
        projectId: "login-senai-exercicio",
        storageBucket: "login-senai-exercicio.appspot.com",
        messagingSenderId: "921138755577",
        appId: "1:921138755577:web:527844fcb9730256e3ef28"
        };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const form = {
        email: () => document.getElementById(("iemail")),
        emailInvalidError: () => document.getElementById(("email-invalid-error")),
        emailRequiredError: () => document.getElementById(("email-required-error")),
        emailError: () => document.getElementById(("email-error")),
        emailInvalidErr: () => document.getElementById(("email-invalid-err")),
        password: () => document.getElementById(("isenha")),
        passwordInvalidError: () => document.getElementById(("password-invalid-error")),
        passwordRequiredError: () => document.getElementById(("password-required-error")),
        passwordError: () => document.getElementById(("password-error")),
        senhaCurtaError: () => document.getElementById(("senha-curta-error")),
        senhaNaoConfere: () => document.getElementById(("senha-nao-confere")),
        confirm: () => document.getElementById(("iconfirm")),
        recoveryButton: () => document.getElementById(("recovery-button")),
        loginButton: () => document.getElementById(("login-button")),
        botaoRegistro: () => document.getElementById(("botao-registro"))
    }

    export function login(){

        showLoading();
        const email = form.email().value; 
        const senha = form.password().value; 
        
        function isEmailValid(){
            const email = form.email().value;
            if (!email) {
                hideLoading();
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

            signInWithEmailAndPassword(auth, email, senha).then(response =>{
                window.location.href = "index.html";
            }).catch(error => {
                hideLoading();
                alert("Usuário ou senha não cadastrados ! ");
                alert("Registre-se para continuar ou verifique email e senha digitados");
            });
    }

        // document.getElementById("login-button").addEventListener("click", login);

        export function getErrorMessage(error){
            if(error.code === "auth/user-not-found"){
                return "Usuário não encontrado";
            } else {
                return error.message;
            }
        }

        export function recoveryPassword(){
        showLoading();
        
        const email = form.email().value;
        const auth = getAuth(app);  
        
            if (!email) {
                hideLoading();
                alert("Por favor, insira um email válido");
                return false;
            }

            sendPasswordResetEmail(auth, email).then(response =>{
                hideLoading();
                alert("Email de recuperação de senha enviado com sucesso!");
            }).catch(error => {
                hideLoading();
                alert(getErrorMessage(error));
            });
    }

    // document.getElementById("recovery-button").addEventListener("click", recoveryPassword);

        export function validateEmail(email) {
            return /\S+@\S+\.\S+/.test(email); 
        }


        export function onChangeEmail(){
            validarEmail();
            habilitaBotao();
        }
        
        export function onChangePassword(){
            validarSenha();
            habilitaBotao();
        }
        
        export function validarSenha(){
            const password = form.password().value;
            const confirmpass = form.confirm().value;

                form.passwordError().style.display = password ? "none" : "block";
        
                form.senhaCurtaError().style.display = password.length >= 6 ? "none" : "block";
        
                form.senhaNaoConfere().style.display = password === confirmpass ? "none" : "block";
        }
        
        export function validarEmail(){
            const email = form.email().value;
            form.emailError().style.display = email ? "none" : "block";
        
            form.emailInvalidErr().style.display = validateEmail(email) ?"none" : "block";
        
        }
        
        export function habilitaBotao(){
            form.botaoRegistro().disabled = !isFormValid();
        }
        
        export function isFormValid(){
            const email = form.email().value;
            if (!email || !validateEmail(email)){
                return false;
            }
            const password = form.password().value;
            if (!password || password.length < 6){
                return false;
            }
            const confirmpass = form.confirm().value;
            if(password !== confirmpass){
                return false;
            }
            return true;
        }
        
        export function isEmailValid(){
            const email = form.email().value;
            if (!email) {
                return false;
            }
            return validateEmail((email));
        }
        
        export function registrar(){
           
            if (!isFormValid()) {
                alert("Verifique se todos os campos estão corretos.");
                return;
            }
        
            showLoading();
        
            const email = form.email().value;  
            const password = form.password().value;
            createUserWithEmailAndPassword(auth, email, password).then(() => {
                hideLoading();
                window.location.href = "index.html";
            }).catch(error => {
                    hideLoading();
                    alert(getErrorMessage(error));
            })
        }
        
        document.getElementById("botao-registro").addEventListener("click", registrar);

        // Exponha as funções ao escopo global
        window.onChangeEmail = onChangeEmail;
        window.onChangePassword = onChangePassword;