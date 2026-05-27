function closer1() {

    let a = 0;

    function increment() {

        console.log(a);
        a++;

    }

    return increment;
}

const counter1 = closer1();

counter1();
counter1();
counter1();


function closer2() {

    let num = 10;

    function increaseNum() {

        console.log(num);
        num++;

    }

    return increaseNum;
}

const counter2 = closer2();

counter2();
counter2();
counter2();


function closer3() {

    let number = 20;

    function addNumber() {

        console.log(number);
        number++;

    }

    return addNumber;
}

const counter3 = closer3();

counter3();
counter3();
counter3();