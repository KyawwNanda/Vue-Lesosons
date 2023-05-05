const app = Vue.createApp({
    data(){
        return{
            title:"Do you know JS",
            author:"K N D",
            age:20,
        }
    },
    // methods: {
    //     changeAge(){
    //         this.age++;
    //     }
    // },
});

app.mount('#app');