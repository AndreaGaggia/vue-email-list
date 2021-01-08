const app = new Vue({
    el: '#app',
    data: {
        mailList: []
    },
    methods: {},
    mounted() {
        for (let i = 1; i <= 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                let mail = response.data.response;
                this.mailList.push(mail);
            })
        }
    }
});