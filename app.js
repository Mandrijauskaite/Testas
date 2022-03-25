console.log('1.---------');

class Vaisius {
    constructor () {
        this.dydis = this.rand(5,25);
        this.id = this.rand(1000000, 9999999);
        this.prakastas = false;
    }

    prakasti() {
        const prakasti = !rand(0, 1);
    }

    rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}

class Krepsys { 

    static vaisiai = [];
    static pripildyti() {

        if (this.vaisiai.length === 0) {
            for (let i = 0; i < 20; i++) {
            this.vaisiai.push(new Vaisius)
            } 
            console.log(this.vaisiai);
            
        }

        else {
            const kiekPapildyti = 20 - this.vaisiai.length;

            for (let i = 0; i < kiekPapildyti; i++) {
                this.vaisiai.push(new Vaisius)
            } console.log(this.vaisiai);
        }

        this.vaisiai.sort((a, b) => {
            return b.dydis - a.dydis;
    }
)}

    static isimti() { 
        this.vaisiai -= this.vaisiai;
    }
}

    Krepsys.pripildyti();
    Krepsys.isimti ();



