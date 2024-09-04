//1
/*let num = prompt("Введите первое число")
let num2 = prompt("Введите второе число")
alert("Произведение этих чисел: " + num*num2)*/

//2
/*let name = prompt("Введите ваше имя")
let fullname = prompt("Введите вашу фамилию")
let age = prompt("Введите ваш возраст")
alert("Привет " + name +" " + fullname + " с возрастом " + age + " лет")*/

//3
/*let pol = prompt('Введите ваш пол М или F')
if(pol == 'M'){
    console.log('Ваш пол мужской')
}
else if(pol == 'F'){
    console.log('Ваш пол женский')
}
else{
    console.log('Ваш пол не определен')
}*/


//4

/*let num = prompt("Введите номер порядка дня недели: ")
switch(num){
    case '1': 
    console.log("Понедельник")
    break
    case '2':
        console.log("Вторник")
        break
    case '3':
        console.log("Среда")
        break
    case '4':
        console.log("Четверг")
        break
    case '5': 
    console.log("Пятница")
    break
    case '6':
        console.log("Суббота")
        break
    case '7':
        console.log("Воскресенье")
        break
}
*/


//5
/*for(i=0; i<101; i++){
    if(i>0 && i<17){
        console.log("Ребенок")
    }
    else if(i>17 && i<31){
        console.log("Молодой")
    }
    else if(i>29 && i<56){
        console.log("Зрелый")
    }
    else if(i>55){
        console.log("Старый")
    }
    console.log(i)
}
*/ 
/*function getAge(age) {
   if (age >= 1 && age <= 17) {
         return "ребенок";
     } else if (age >= 18 && age <= 30) {
         return "молодой";
     } else if (age > 30 && age <= 55) {
         return "зрелый";
     } else {
         return "старый";
     }
 }
 for (let i = 1; i <= 100; i++) {
     let category = getAge(i);
     console.log(i + " – " + category);
}*/


//6
/*let name = prompt("Введите своё имя")
let age = prompt("Введите свой возраст")
let text
    if(age>0 && age<17){
        text = "Ребенок"
    }
    else if(age>17 && age<31){
        text = "Молодой"
    }
    else if(age>29 && age<56){
        text = "Зрелый"
    }
    else if(age>55){
        text = "Старый"
    }
console.log(name+" имеет возраст " + age + " и он " + text)
*/

//7

/*let input= document.querySelector('input')
function echo(){
    console.log("Привет Мир!")
}*/


//8
/*document.getElementById('button').addEventListener('click', function(){
    document.getElementById('email').value='test@email'
})*/

//9
/*document.getElementById('button').addEventListener('click', function(){
    let input =document.getElementById('text').value
    if(input){
        alert("Вы ввели: " + input)
    }
    else{
        alert("Вы ничего не ввели")
    }
})*/


//10
/*let text = document.getElementById('text')
let block = document.getElementById('block')
let unblock = document.getElementById('unblock')

block.addEventListener('click', function(){
    text.disabled = true
})
unblock.addEventListener('click', function(){
    text.disabled = false
}) */