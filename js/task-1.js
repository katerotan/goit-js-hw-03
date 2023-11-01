console.log("Задача 1. Генератор slug");


// Перш, ніж розв’язувати задачу, давай визначимося із новим терміном!
// Термін slug — це зрозумілий людині унікальний ідентифікатор, який використовується у веб розробці для створення читабельних URL-адрес.
// Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com/posts/1q8fh74tx, можна зробити slug із назви статті. У результаті адреса буде приємнішою для сприйняття: mysite.com/posts/arrays-for-begginers.
// Slug — це завжди рядок у нижньому регістрі, слова якого розділені тире.
// З цим розібралися? А тепер давай нарешті виконувати задачу!


// 1)Напиши функцію slugify(title), яка приймає заголовок статті, параметр title і повертає slug, створений із цього рядка.
// 2) Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
// 3) Усі символи slug повинні бути в нижньому регістрі.
// 4) Усі слова slug повинні бути розділені тире.


// ----------ПОКРОКОВО------------------------------------------------------------


function slugify(title) {
    
// Спочатку робимо із рядка масив із слів за допомогою метода .split(" "):
    const massiveOfTitle = title.split(" ");
    console.log(massiveOfTitle); // ['Arrays', 'for', 'begginers']

// Тепер перетворюємо на слаг: знову поєжнуємо всі елементи масива у рядок через розділювач "-", для цього потрібні два методи:
// .toLowerCase()
// .join("-")
    const slug = massiveOfTitle.join("-").toLowerCase();
// повертаємо результат
    return slug;
}


console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

// ----------В ОДНУ ДІЮ---------------

console.log("\n");
console.log("Так само все працює і якщо записати весь вираз в один рядок");

function slugify1(title) {
    
    const slug = title.split(" ").join("-").toLowerCase();
    return slug;
}

console.log(slugify1("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify1("English for developer")); // "english-for-developer"
console.log(slugify1("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify1("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
