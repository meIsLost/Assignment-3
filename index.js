Vue.createApp({
    data() {
        return {
            message: null,
            number: null,
            result: ""
        
        }
    },
    methods: {
       
        looper(message, number) {
             this.result = "";
            if (number>0){
                for (let i = 0; i < number; i++)
                {
                   this.result= this.result + message ;
                }
            }
            else
            {
                    this.result = "be positive my friend." + this.number;
            }
            
        }
    }
}).mount("#app")
