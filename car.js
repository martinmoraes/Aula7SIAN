class Car {
    constructor(brand) {
        this.carname = brand;
    }

    get cnam() {
        return this.carname;
    }
    set cnam(x) {
        this.carname = x;
    }



    present() {
        return "I have a " + this.carname;
    }

    static hello() {
        return "Hello!!";
    }

}

module.exports = Car
