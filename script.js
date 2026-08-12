```javascript
// ==============================
// CONTROLE DO TAMANHO DA FONTE
// ==============================

const root = document.documentElement;

const aumentarFonte = document.getElementById("aumentarFonte");
const diminuirFonte = document.getElementById("diminuirFonte");
const altoContraste = document.getElementById("altoContraste");
const leitura = document.getElementById("leitura");
const pararLeitura = document.getElementById("pararLeitura");
const restaurar = document.getElementById("restaurar");

let tamanhoFonte = 1;

// Aumentar fonte
aumentarFonte.addEventListener("click", () => {
    if (tamanhoFonte < 1.8) {
        tamanhoFonte += 0.1;
        root.style.setProperty(
            "--tamanho-fonte",
            `${tamanhoFonte}rem`
        );
    }
});

// Diminuir fonte
diminuirFonte.addEventListener("click", () => {
    if (tamanhoFonte > 0.8) {
        tamanhoFonte -= 0.1;
        root.style.setProperty(
            "--tamanho-fonte",
            `${tamanhoFonte}rem`
        );
    }
});

// ==============================
// ALTO CONTRASTE
// ==============================

altoContraste.addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");

    const ativado =
        document.body.classList.contains("alto-contraste");

    altoContraste.setAttribute(
        "aria-pressed",
        ativado.toString()
    );
});

// ==============================
// LEITURA EM VOZ ALTA
// ==============================

leitura.addEventListener("click", () => {
    if (!("speechSynthesis" in window)) {
        alert(
            "Seu navegador não oferece suporte à leitura em voz alta."
        );
        return;
    }

    // Interrompe qualquer leitura anterior
    window.speechSynthesis.cancel();

    const texto = document.querySelector("main").innerText;

    const mensagem = new SpeechSynthesisUtterance(texto);

    mensagem.lang = "pt-BR";
    mensagem.rate = 0.9;
    mensagem.pitch = 1;
    mensagem.volume = 1;

    window.speechSynthesis.speak(mensagem);
});

// ==============================
// PARAR LEITURA
// ==============================

pararLeitura.addEventListener("click", () => {
    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }
});

// ==============================
// RESTAURAR CONFIGURAÇÕES
// ==============================

restaurar.addEventListener("click", () => {
    tamanhoFonte = 1;

    root.style.setProperty(
        "--tamanho-fonte",
        "1rem"
    );

    document.body.classList.remove("alto-contraste");

    altoContraste.setAttribute(
        "aria-pressed",
        "false"
    );

    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }
});
```
