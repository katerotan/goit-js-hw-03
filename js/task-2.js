console.log("\n");
console.log("Задача 2. Композиція масивів ");

// 1) Напиши функцію під назвою makeArray, яка приймає три параметри: firstArray(масив), secondArray(масив) і maxLength(число).

// 2) Функція повинна створювати новий масив, який містить усі елементи з firstArray, а потім усі елементи з secondArray.

// 3) Якщо кількість елементів у новому масиві перевищує maxLength, функція повинна повернути копію масиву з довжиною maxLength елементів.

// 4) В іншому випадку функція повинна повернути весь новий масив.

// ----------ПОКРОКОВО------------------------------------------------------------


function makeArray(firstArray, secondArray, maxLength) {
    
// Створюємо новий масив newMassive через метод .concat()
    
    let newMassive = firstArray.concat(secondArray);
   
// Задаємо умову "if" та вказуємо що повернути: зробити копію (значить взяти метод slice() і задати їй "від і до" ). Копію занесла в окрему змінну для наглядності copyNewMassive, бо це копія.

    if (newMassive.length > maxLength) {
        let copyNewMassive = newMassive.slice(0, maxLength)
        return copyNewMassive;
        
    } else {
// Тут сказано просто повернути весь новий рядок newMassive
        return newMassive;
    }

}


console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
