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