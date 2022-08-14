let a = prompt("Введіть кількість чашок");
if ( a%2 == 0 ){
    a = a/2;
}
else{
    a = ((a/2) - 1);
    a = Math.ceil(a);
}
console.log(`Кількість бонусних чашок: ${a}`);