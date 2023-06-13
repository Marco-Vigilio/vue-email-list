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
        }
    },
    methods:{
        newEmail(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then( risposta =>{
                let email = risposta.data.response;
                this.emailList.push(email);
            });
        },
        
        fillArrayEmail(){
            for (let index = 0; index < 10; index++) {
                this.newEmail();
            }
            return this.emailList;
        },
    },
    created(){
        this.newEmail();
        this.fillArrayEmail();
    },

}).mount("#app");
