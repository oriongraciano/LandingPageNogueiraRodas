setTimeout(function(){
    Toastify({
        text: "Olá, Seja Bem Vindo!",
        duration: 2000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00A8FF, #e7e710)",
        },
    }).showToast();
},400);

// Função de Abrir Modal
const openModalButton1 = document.querySelector("#open-modal");
const openModalButton2 = document.querySelector("#open-modal2");
const openModalButton3 = document.querySelector("#open-modal3");
const closeModal = document.querySelector("#close-modal");
const modal = document.querySelector(".modal");
const textomodal = document.querySelector("#textoModal")


openModalButton1.addEventListener("click", function() {
    textomodal.innerHTML = 'Somos uma empresa com mais de 40 anos no mercado especializada em Pneus Rodas e Acessorios';
    modal.style.display ="flex" 
 })

 openModalButton2.addEventListener("click", function() {
    textomodal.innerHTML = 'Oferecemos serviços de alinhamento, balanceamento, troca de pneus, manutenção e venda de acessórios.';
    modal.style.display ="flex" 
 })

 openModalButton3.addEventListener("click", function() {
    textomodal.innerHTML = 'Entre em contato conosco pelo WhatsApp (62) 99225-2825 ou nos visite em nossa loja física.';
    modal.style.display ="flex"
 })

 closeModal.addEventListener("click", function() {
    modal.style.display ="none"
 })