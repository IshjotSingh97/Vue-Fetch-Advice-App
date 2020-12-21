console.log("Script Started")

const API = 'https://api.adviceslip.com/advice'


const app = new Vue({
    el: "#app",
    data: {
        heading: "Fetch Advice App Using Vue",
        id: null,
        advice : null,
    },
    methods: {
        async fetchdata() {
            axios.get(API)
                .then((response) => {
                    this.id = response.data.slip.id
                    this.advice = response.data.slip.advice
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },
    mounted(){
    	this.fetchdata()
    }

})