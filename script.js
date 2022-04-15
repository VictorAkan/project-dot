const app = Vue.createApp({
    data() {
        return {
            count: 0
        }
    },
    methods: {
        incrementCount() {
            this.count++
        },
        decrement() {
            this.count--
        }
    },
    // mounted() {
    //     this.incrementCount();
    // } 
})
app.mount("#app");