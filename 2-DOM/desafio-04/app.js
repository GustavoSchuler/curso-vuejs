new Vue({
	el: '#desafio',
	data: {
		class1: 'destaque',
		userClass: 'sample',
		userClass2: 'sample2',
		sample3: true,
		userStyle: 'background-color: red; width: 100px; height: 100px',
		progress: 0,
		pgBar: ''
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.class1 = this.class1 == 'destaque' ? 'encolher' : 'destaque'
			}, 2000)
		},
		iniciarProgresso() {
			this.pgBar = setInterval(() => {
				this.progress += 1
			}, 100)
		},
		setSample3 (e) {
			if (e.target.value == 'true') {
				this.sample3 = true
			} else if (e.target.value == 'false') {
				this.sample3 = false
			}
		}
	},
	watch: {
		progress (value) {
			if (value == 100) clearInterval(this.pgBar)
		}
	},
	computed: {
		pgBarProgress () {
			return {
				backgroundColor: 'grey',
				height: '20px',
				width: `${this.progress}%`,
			}
		}
	}
})
