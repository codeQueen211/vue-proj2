Vue.createApp({
    data() {
        return {
            txt: '',
            confirmed: ''
        }
    },
    methods: {
        alerting() {
            alert("hello world!");
        },
        typing(event) {
            this.txt = event.target.value;
        },
        confirmTxt() {
            this.confirmed = this.txt;
        }
    }
}).mount('#assignment')