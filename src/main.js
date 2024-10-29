document.addEventListener('DOMContentLoaded' , function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabsConstainer = document.querySelectorAll('[data-tab-id]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;// Pega a altura do elemento com clientHeight

    //Responsavel por ocultar e exibir os elementos do header na pagina quando o scroll passar por uma determinada altura
    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero ){
            ocultaElementosHeader ();
        } else {
            exibeElementosHeader();
        }

        })

    // Seçao de atrações, programação das abas
    for (let i = 0; i < buttons.length; i++ ) {
        buttons[i].addEventListener('click',  function (botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active')
        })
    }


    // Seção FAQ, Accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }

    
})

//classe --is-hidden está sendo adicionada no header
function ocultaElementosHeader () {
    const header = document.querySelector ('header');
    header.classList.add('header--is-hidden');
}

// classe --is-hidden está sendo removida do header
function exibeElementosHeader () {
    const header = document.querySelector ('header');
    header.classList.remove('header--is-hidden'); 
}

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function removeBotaoAtivo () {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++ ) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }

}

function escondeTodasAbas() {
    const tabsConstainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsConstainer.length; i++) {
        tabsConstainer[i].classList.remove('shows__list--is-active')
    }
}