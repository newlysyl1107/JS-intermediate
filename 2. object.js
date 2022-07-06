/*
    Computed property
    계산된 프로퍼티
*/
let a = 'age';

const user = {
    name : 'kelly',
    age : 30
}
const user1 = {
    name : 'kelly',
    [a] : 30            // [변수] 로 대체가능
}
const user2 = {
    [1+4] : 5,
    ["안녕"+"하세요"] : "Hello"
}
console.log(user2);     // {5: 5, 안녕하세요: "Hello"}


let prop1 = 'name';
let prop2 = 'price';

const newObj = {
    [prop1] : 'Cake',
    [prop2] : 20000
}
console.log(newObj);    // {name: 'Cake', price: 20000}



// 어떤게 key, value 로 들어올지 모를 때 쓸 수 있음
const makeObject = (key, value) => {
    return {
        [key] : value
    }
}
const maked = makeObject('나이', 30);
console.log(maked); // {나이: 30}