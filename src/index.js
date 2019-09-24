module.exports = function zeros(expression) {

    // подсчет количества повторений числа 5 в факториале number!
    function findCount(number, k) {
        count = 0;
        n = 1;
        while (number >= Math.pow(k, n)) {
            count += Math.floor(number / Math.pow(k, n))
            n++;
        };
        return count;
    };

    let str = expression;
    //получим массив
    let arr = str.split("*"); // [90!!, 10!!]
    //создадим массив факториалов и массив из четный и нечетных факториалов
    let arrFactorial = [];
    let arrFC = [];
    let arrFN = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf('!!') > 0) {
            arr[i] = +arr[i].replace("!!", "");
            if (arr[i] % 2 == 0) { arrFC.push(arr[i]) } else { arrFN.push(arr[i]) }
        } else {
            arrFactorial.push(+arr[i].replace("!", ""));
        }
    };





    // посчитаем нули по кол-ву вхождений 5 и 2
    let zerofc2 = 0;
    //фактороиал по кол-ву вхождений 5
    let zeroFactorial = 0;
    arrFactorial.forEach(function(number) {
        zeroFactorial += findCount(number, 5);
        zerofc2 += findCount(number, 2);
    });
    //четный факториал по кол-ву вхождений 5 и 2

    arrFC.forEach(function(number) {
        zeroFactorial += findCount(number / 2, 5);
        zerofc2 += findCount(number, 2) - zeroFactorial;
    });
    // нечетный факториал по кол-ву вхождений 5 и 2 
    let zeroFN5 = 0;
    arrFN.forEach(function(number) {
        zeroFN5 += findCount(number, 5) - findCount((number - 1) / 2, 5);
    });



    return zeroFactorial + Math.floor(Math.min(zeroFN5, zerofc2));
}
