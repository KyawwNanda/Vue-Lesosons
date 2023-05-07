const app = Vue.createApp({
    data(){
        return{
            books:[
                {
                    title:"Do you know JS",
                    author:"K N D",
                    age:20,
                    img:"BookPhoto/h1.jpg",
                    isFav:true,
                },
                {
                    title:"Do you know Php",
                    author:"K S KK",
                    age:20,
                    img:"BookPhoto/h2.jpg",
                    isFav:false,


                },
                {
                    title:"Do you know Vue",
                    author:"K K N",
                    age:20,
                    img:"BookPhoto/h1.jpg",
                    isFav:true,


                }
            ],
            showBook:true,
            link:'http://www.google.com',
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