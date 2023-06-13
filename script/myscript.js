/**
 * 
 * Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail 
generare 10 indirizzi email e stamparli in pagina all'interno di una lista usando Vue 
e Axios come visto a lezione.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
NOTA BENE:
Le mail posso anche essere uguali tra di loro, non è necessario verificare che siano diverse.
 * 
 */

let {createApp} = Vue;

createApp ({
    data(){
        return {
            emailList: [],
            emeil: "",
        }
    },
    methods:{
        newEmail(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then( risposta =>{
                this.email = risposta.data.response;
                this.emailList.push(this.email);
            });
        },
        
        fillArrayEmail(){
            for (let index = 0; index < 10; index++) {
                this.newEmail();
            }
            return this.emailList;
        },

        clickEmail(elementEmail){
            alert("Hai cliccato la email: " + elementEmail);
        },
    },
    created(){
        this.fillArrayEmail();
    },

}).mount("#app");
