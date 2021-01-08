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
                console.log(this.numbers[index]);
                this.numbers[index] = num;
                console.log(num, index, this.numbers[index]);
            })
        }
    },
    created() {
        for (let i = 1; i <= 36; i++) {
            this.numbers.push(0);
        }
    }
});