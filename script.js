function createCalculator() {
  return {
    display: document.querySelector('.display'),

    littleResult() {
      let little = document.querySelector('.little');
      little.innerHTML = this.display.value;
      
    },

    clearDisplay() {
      this.display.value = '';
    },

    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    result() {
      
      let finalResult = this.display.value;

      try{
        finalResult = eval(finalResult);

        if(!finalResult) {
          alert('Conta invalida');
          return;
        }

        this.display.value = finalResult;
      } catch(e) {
        alert('Conta invalida'); 
      }
    },

    start() {
      this.clickButtons();
      
    },

    clickButtons() {
      document.addEventListener('click', (e) => {
        const el = e.target;

        

        if(el.classList.contains('btn-num')) {
          this.btnDisplay(el.innerText);
        };

        if(el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')) {
          this.deleteOne();
        }

        if(el.classList.contains('btn-eq')) {
          this.result();
          this.littleResult()
        }

       
      });
    },

    btnDisplay(valor) {
      this.display.value += valor;
    
      
    }

  };
}

const calculator = createCalculator();
calculator.start();