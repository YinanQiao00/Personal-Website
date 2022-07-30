new Vue({
    el: '#app',
    data: {
        counter: 0 // Initial Value
    },
    methods: {
        increaseCounter(increaseLimit) { // Increase
            if (this.counter < increaseLimit) this.counter++;
        },
        decreaseCounter(decreaseLimit) { // Decrease
            if (this.counter > decreaseLimit) this.counter--;
        },
        resetCounter() { // Reset
            this.counter = 0;
        }
    },
    computed: {
        output() { // Output for computed property!
            return this.counter >= 10 ? '10 or more' : 'Less than 10';
        }
    }
});
