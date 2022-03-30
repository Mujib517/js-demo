class AbstractMobile {
    call() {
        console.log('calling...');
    }
}


class Mobile extends AbstractMobile {

    constructor(param) {
        super();
        console.log('.........', param);
    }

    static m1() {
        console.log('...........');
    }

    width = 5;
    height = 10;
};

Mobile.m1();
var m6 = new Mobile('adkjfkadjf');
console.log(m6);
m6.call();