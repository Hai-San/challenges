class WhatIsTheNumber {
    constructor() {
        this.body = document.body;
        this.form = document.getElementById('panelForm');
        this.panel = document.getElementById('panel');
        this.statusText = document.getElementById('statusText');
        this.defaultPanelNumberSvg = document.querySelector('.js_panelNumber');
        this.inputNumber = document.getElementById('inputNumber');
        this.submitButton = document.getElementById('submitButton');
        this.newGameButton = document.getElementById('newGameButton');

        this.gameStatus = {
            error: {
                text: "ERRO",
                class: "-error"
            },
            success: {
                text: "Você acertou",
                class: "-success"
            },
            lessValue: {
                text: "É menor"
            },
            bigValue: {
                text: "É maior"
            }
        }
    }

    /**
     * Inicia a aplicação
     */
    init() {
        this.getSecretNumber();
        this.addFormListener();
        this.addNewGameButtonListener();
    }

    /**
     * Pega o numero secreto e armazena em uma variável
     */
    getSecretNumber() {
        const randomNumberApi = this.apigetSecretNumber();

        randomNumberApi.then((response) => {
            this.currentSecretNumber = response.value;
        })
            .catch((error) => {
                this.setGameError();
                this.createSvgNumber(error.status);
            });
    }

    /**
     * Adiciona um listener no formulário para detectar quando é feito o submit de um novo valor pelo usuário
     */
    addFormListener() {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();

            this.inputNumber.focus();

            if (this.inputNumber.value) {
                this.setGameResult(parseInt(this.inputNumber.value));
                this.inputNumber.value = '';
            }
        });
    }

    /**
     * Apresenta o resultado do jogo para o usuário
     * @param {integer} value 
     */
    setGameResult(value) {
        this.resetGameStatus();
        this.createSvgNumber(value);

        if (value === this.currentSecretNumber) {
            this.setGameSuccess();
        } else if (value > this.currentSecretNumber) {
            this.setStatusText(this.gameStatus.lessValue.text);
        } else if (value < this.currentSecretNumber) {
            this.setStatusText(this.gameStatus.bigValue.text);
        }
    }

    /**
     * Adiciona um listener no botão de novo jogo para executar todas os métodos necessários.
     */
    addNewGameButtonListener() {
        this.newGameButton.addEventListener('click', event => {
            this.resetGameStatus();
            this.clearPanel();
            this.resetPanelValue();
            this.getSecretNumber();
            this.enableSubmit();
            this.newGameButton.disabled = true;
            this.inputNumber.focus();
        })
    }

    /**
     * Faz a requisição para a API externa
     * @returns Json
     */
    async apigetSecretNumber() {
        try {
            const response = await new Promise((resolve, reject) => {
                const apiRequest = new XMLHttpRequest();

                apiRequest.open('GET', 'https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300', true);

                apiRequest.onload = () => {
                    if (apiRequest.status >= 200 && apiRequest.status < 400) {
                        resolve(JSON.parse(apiRequest.responseText))
                    } else {
                        reject(apiRequest);
                    }
                }

                apiRequest.send();
            });

            return response;
        } catch (error) {
            throw error;
        }
    }

    /**
     * Cria um elemento SVG a partir do SVG padrão para cada número presente no valor inteiro.
     * @param {integer} number 
     */
    createSvgNumber(number) {
        this.clearPanel();

        /**
         * ex: 254 (duzentos e cinquenta e quatro) vira um array [2, 5, 4]
         */
        const numberParts = number.toString().split('');

        numberParts.forEach(numberPart => {
            let newSvgPanelNumber = this.defaultPanelNumberSvg.cloneNode(true);

            /**
             * O valor mostrado no elemento SVG muda de acordo com o valor no data atributo "number".
             * O controle para mostrar o valor correto é feito pelo CSS
             */
            newSvgPanelNumber.dataset.number = numberPart;
            this.appendSvgNumberToPanel(newSvgPanelNumber)
        });
    }

    /**
     * Insere o elemento SVG (Com o número ativo) no painel
     * @param {Node element} panelNumber 
     */
    appendSvgNumberToPanel(svgNumber) {
        panel.appendChild(svgNumber);
    }

    /**
     * Limpa todos os valores do painel
     */
    clearPanel() {
        this.panel.innerHTML = '';
    }

    /**
     * Reseta o valor do painel para zero (valor padrão)
     */
    resetPanelValue() {
        this.panel.appendChild(this.defaultPanelNumberSvg);
    }

    /**
     * Desativa o input e o botão de submit
     */
    disabledSubmit() {
        this.submitButton.disabled = true;
        this.inputNumber.disabled = true;
    }

    /**
     * Ativa o input e o botão de submit
     */
    enableSubmit() {
        this.submitButton.disabled = false;
        this.inputNumber.disabled = false;
    }

    /**
     * Mostra o botão de nova partida
     */
    showNewGameButton() {
        this.newGameButton.disabled = false;
        this.newGameButton.focus();
    }

    /**
     * Altera as cores e adiciona a mensagem de erro
     */
    setGameError() {
        this.body.classList.add(this.gameStatus.error.class);
        this.setStatusText(this.gameStatus.error.text);
        this.disabledSubmit();
        this.showNewGameButton();
    }

    /**
     * Altera as cores e adiciona a mensagem de sucesso
     */
    setGameSuccess() {
        this.body.classList.add(this.gameStatus.success.class);
        this.setStatusText(this.gameStatus.success.text);
        this.disabledSubmit();
        this.showNewGameButton();
    }

    /**
     * Remove as classes e textos que indicam algum status (erro, sucesso)
     */
    resetGameStatus() {
        this.body.classList.remove(this.gameStatus.success.class, this.gameStatus.error.class);
        this.setStatusText();
    }

    /**
     * Insere um texto no elemento que apresenta a mensagem de status para o usuário
     * @param {string} text 
     */
    setStatusText(text = '') {
        this.statusText.textContent = text;
    }
}

var whatIsTheNumber = new WhatIsTheNumber();
whatIsTheNumber.init();