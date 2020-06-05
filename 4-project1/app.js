new Vue({
    el: '#app',

    data: {
        playerHealth: 100,
        monsterHealth: 100,
    },
    
    methods: {
        getPgBarClass(value) {
            return value <= 20 ? 'is-danger' : 'is-success'
        },
    },
})