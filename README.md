# Тестовое задание Creative

## Задание 1,4

Страница с использованием flexbox по БЭМ методологии. 

Имеется боковое меню (скрытие и открытие на кнопку "Меню"), а так же группа чек-боксов, отвечающих за определенные элементы на странице и чек-бокс вкл/откл всех элементов.

[Ссылка на GitHub Pages](https://daryalyutova.github.io/Creative/)

## Задание 2.

[Ссылка на песочницу](https://codepen.io/daryalyutova/pen/VwPGwEb?editors=1111)

``` function offset(arr, k) {
  console.log('Входной массив: arr=[' + arr + '], k=' + k);
  arr = arr.splice(-k).concat(arr);
    console.log('Выходной массив arr=[' + arr + ']');
};
offset([1,2,3,4,5], 2);

function offset1(arr, k) {
    console.log('Входной массив: arr=[' + arr + '], k=' + k);
  for(let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  };
  console.log('Выходной массив arr=[' + arr + ']');
};
offset1([1,2,3,4,5], 3);
```

## Задание 3.

[Ссылка на песочницу](https://codepen.io/daryalyutova/pen/poROoxB)

``` function findSame(str1, str2) {
  console.log('Входящие данные: ' + str1 + ', ' + str2);
   arr = [];
   str1.split('').reduce((item, combination)=>{
     if (str2.indexOf(item + combination) > -1) {
         arr.push(item + combination);
         return (item + combination);
     }
     else return combination;
   }, '');
  arr = arr.sort((a, b)=>b.length-a.length)
   console.log('Наибольшая общая последовательность: ' + arr[0]);
};
findSame('aababba', 'abbaabcd');
```

