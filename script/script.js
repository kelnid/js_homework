// 3. Создайте переменные first = 5 и second = 10. Выведите в console.log() их сумму, разность, произведение и частность (деление)
let num = 10;
console.log(num);
let first = 5;
let second = 10;
console.log(first+second);
console.log(first-second);
console.log(first*second);
console.log(first/second);
// 4. Создайте переменные a = 3 и b = 10, их сумму присвойте в переменную result
let a = 3;
let b = 10;
let result = a+b;
alert(result);
// 5. Создайте переменную bar = 20 и qwerty = 5. В переменную res присвойте разность bar - qwerty и отнимите 10.
// В переменную end присвойте разность значения res и переменной qwerty
let bar = 20;
let qwerty = 5;
let res = (bar - qwerty) - 10;
let end = res - qwerty;
alert(res);
alert(end);
// 6. Создайте переменную str и присвойте ей значение Hello, Palmo. Результат выведите в alert()
let str = "Hello,Palmo";
alert(str);
// 7. Создайте переменную name с вашим имененем и age с возрастом. В alert() выведите результат Я (имя), мне (возраст). (значения подставить из переменных)
let name = "Данил";
let age = "19 лет";
alert(" Я " + name +  " , " + " мне " + age);
// 8. Напишите скрипт, который считает количество секунд в часе, сутках и месяце. В console.log() выведите результат
let numberOfSecondsInAnHour = 60*60;
let numberOfSecondsInADay = 60*60*24;
let numberOfSecondsInAMonth = 60*60*24*30;
console.log(numberOfSecondsInAnHour);
console.log(numberOfSecondsInADay);
console.log(numberOfSecondsInAMonth);
//9. Создайте переменную с числом и возведите в квадрат
let number1 = 8;
console.log(Math.pow(number1, 2));
//10. Создайте переменную d и присвойте ей значение 8. В переменную n поместите квадрат значения переменной d, а в переменную x - куб значения переменной d
let d = 8;
let n = Math.pow(d, 2);
let x = Math.pow(d, 3);
console.log(n,x)


