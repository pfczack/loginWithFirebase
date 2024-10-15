// function onChangeEmail(){
//     validarEmail();
//     habilitaBotao();
// }

// function onChangePassword(){
//     validarSenha();
//     habilitaBotao();
// }

// function validarSenha(){
//     const password = form.password().value;
//     const confirmpass = form.confirm().value;
//         form.passwordError().style.display = password ? "none" : "block";

//         form.senhaCurtaError().style.display = password.length >= 6 ? "none" : "block";

//         form.senhaNaoConfere().style.display = password === confirmpass ? "none" : "block";
// }

// function validarEmail(){
//     const email = form.email().value;
//     form.emailError().style.display = email ? "none" : "block";

//     form.emailInvalidErr().style.display = validateEmail(email) ?"none" : "block";

// }

// function habilitaBotao(){
//     form.botaoRegistro().disabled = !isFormValid();
// }

// function isFormValid(){
//     const email = form.email().value;
//     if (!email || !validateEmail(email)){
//         return false;
//     }
//     const password = form.password().value;
//     if (!password || password.length < 6){
//         return false;
//     }
//     const confirmpass = form.confirm().value;
//     if(password !== confirmpass){
//         return false;
//     }
//     return true;
// }

// function isEmailValid(){
//     const email = form.email().value;
//     if (!email) {
//         return false;
//     }
//     return validateEmail((email));
// }

// function validateEmail(email) {
//     return /\S+@\S+\.\S+/.test(email); 
// }

// function registrar(){
   
//     if (!isFormValid()) {
//         alert("Verifique se todos os campos estão corretos.");
//         return;
//     }

//     showLoading();

//     const email = form.email().value;  
//     const password = form.password().value;
//     createUserWithEmailAndPassword(auth, email, password).then(() => {
//         hideLoading();
//         window.location.href = "index.html";
//     }).catch(error => {
//             hideLoading();
//             alert(getErrorMessage(error));
//     })
// }

// document.getElementById("botao-registro").addEventListener("click", registrar);

// function getErrorMessage(error){
//     return error.message;
// }