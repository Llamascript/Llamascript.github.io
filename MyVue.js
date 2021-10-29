const app = new Vue(
    {
        el: '#app',
        data: {
            is2a: false,
            is2b: false,
            is2c: false,
            is2d: false,
        },
        methods: {
            toggleSection2a(){
                this.is2a = !this.is2a;
            },
            toggleSection2b(){
                this.is2b = !this.is2b;
            },
            toggleSection2c(){
                this.is2c = !this.is2c;
            },
            toggleSection2d(){
                this.is2d = !this.is2d;
            }
        }
    }
)