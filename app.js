const app = Vue.createApp({
    data(){
        return{
            title:"Do you know JS",
            author:"K N D",
            age:20,
            showBook:true,
        }
    },
    // methods: {
    //     changeAge(){
    //         this.age++;
    //     }
    // },
    methods: {
        mouseOver(event,data){
            console.log('Mouse Over is working now!',event.type,data)
        },
        mouseLeave(event){
            console.log('Mouse Leave is working now!',event.type)
        },
        doubleClick(event){
            console.log(' Double Click is working now!',event.type)
        }
    },
});

app.mount('#app');