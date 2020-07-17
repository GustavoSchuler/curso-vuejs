new Vue({
    el: '#app',

    data: {
        playerHealth: 100,
        monsterHealth: 100,
        isPlaying: false,
        log: [],
    },

    computed: {
        won() {
            return this.monsterHealth === 0 && this.playerHealth > 0
        },
        lost() {
            return this.playerHealth === 0 && this.monsterHealth > 0
        },
        onCourse() {
            if (this.won || this.lost) this.stopGame(false)

            return this.isPlaying
        },
        hasLog() {
            return this.log.length > 0
        },
        actionsLog() {
            return this.log.reverse()
        }
    },
    
    methods: {
        startGame() {
            this.reset()
            this.isPlaying = true
        },

        stopGame(reset = true) {
            if (reset) this.reset()
            this.isPlaying = false
        },

        attack(isSpecial = false) {
            const playerAttack = Math.floor(Math.random() * 10)
            const monsterAttack = Math.floor(Math.random() * 10)

            this.log.push({ message: `Você atacou o monstro com ${playerAttack}.`, style: 'primary' })
            this.log.push({ message: `O monstro lhe atingiu com ${monsterAttack}.`, style: 'danger' })

            this.playerHealth -= monsterAttack
            this.monsterHealth -= playerAttack
        },

        heal() {
            // 
        },

        reset() {
            this.playerHealth = 100
            this.monsterHealth = 100
            this.log = []
        },

        getPgBarClass(value) {
            return value <= 20 ? 'is-danger' : 'is-success'
        },
    },
})