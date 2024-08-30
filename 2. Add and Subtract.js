function addAndSubtract(num1, num2, num3) {
    let a = num1;
    let b = num2;
    let c = num3;

    function sum(a, b) {
        return a + b;
    }
    function subtract(a, b, c) {
        let sumRes = sum(a, b);
        return sumRes - c;
    }
    console.log(subtract(a, b, c));

}
addAndSubtract(23,
    6,
    10);
