new Vue({
    el: '#desafio',
    data: {
        name: 'Gustavo',
        age: 30,
        imgLink: 'https://miro.medium.com/max/2000/1*ACR0gj0wbx91V_xgURifWg.png'
    },
    methods: {
        getOlder() {
            return this.age*3
        },
        random() {
            return Math.random()
        }
    }
})