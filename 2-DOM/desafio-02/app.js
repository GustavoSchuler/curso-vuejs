new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        showAlert () {
            alert('Beles?')
        },
        saveValue (e) {
            this.valor = e.target.value
        }
    }
})