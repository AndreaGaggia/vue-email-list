/*
Bonus (facolativo):
Generate una Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
Il numero ottenuto appare al centro del quadrato
*/

const app = new Vue({
    el: '#app',
    data: {
        numbers: []
    },
    methods: {
        getNumber(index) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/int')
            .then(response => {
                const num = response.data.response
                this.numbers.splice(index, 1, num);
            })
        },
        greenOrYellow(number) {
            if (number && number > 5) {
                return 'background-color: green';
            } else if (number && number <= 5) {
                return 'background-color: yellow';
            }
        }
    },
    created() {
        for (let i = 1; i <= 36; i++) {
            this.numbers.push(0);
        }
    }
});