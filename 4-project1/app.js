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
        playing() {
            if (this.won || this.lost) this.stopGame(false)

            return this.isPlaying
        },
        hasLog() {
            return this.log.length > 0
        },
        playerHealthIsFull() {
            return this.playerHealth === 100
        },
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
            this.generateDamage('monsterHealth', 5, 10, isSpecial)
            this.generateDamage('playerHealth', 7, 12, false)
        },

        generateDamage(prop, min, max, isSpecial) {
            const plus = isSpecial ? 5 : 0
            const damage = this.getRandomPoints(min + plus, max + plus)

            this.setLog(prop, damage)

            this[prop] = Math.max(this[prop] - damage, 0)
        },

        getRandomPoints(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },

        heal() {
            const heal = this.getRandomPoints(7, 15)
            this.setLog('heal', heal)
            this.playerHealth += heal

            this.generateDamage('playerHealth', 7, 12, false)
        },

        reset() {
            this.playerHealth = 100
            this.monsterHealth = 100
            this.log = []
        },

        setLog(type, value) {
            const messages = {
                playerHealth: 'O monstro lhe atingiu com ',
                monsterHealth: 'Você atingiu o monstro com ',
                heal: 'Você recebeu uma cura de ',
            }

            this.log.unshift({
                message: `${messages[type]} ${value}.`,
                style: type === 'playerHealth' ? 'danger' : 'primary'
            })
        },

        getPgBarClass(value) {
            return value <= 20 ? 'is-danger' : 'is-success'
        },
    },
})