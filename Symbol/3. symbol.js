// Symbol 형은 유일성이 보장된다.

const a = Symbol();
const b = Symbol();

console.log(a);         // Symbol()
console.log(b);         // Symbol()
console.log(a == b)     // false
console.log(a === b)    // false


const id1 = Symbol('id');
const id2 = Symbol('id');

console.log(id1);               // Symbol(id)
console.log(id2);               // Symbol(id)
console.log(id1 == id2);        // false
console.log(id1 === id2);       // false


const id = Symbol('id');
const user = {
    name : 'testName',
    age : 30,
    [id] : 'myId'
}
console.log(user); // {name: 'testName', age: 30, Symbol(id): 'myId'}
console.log(user[id]);  // myId


// 그런데 Object.keys(user); 를 출력해보면
// ['name', 'age'] 만 나온다.
// 마찬가지로 Object.values(), entries(), for ~ in 구문도 Symbol 형의 프로퍼티값은 출력하지 않는다.
// 숨겨진 [id] Symbol을 보려면
console.log(Object.getOwnPropertySymbols(user));    // [Symbol(id)]


// 일반 프로퍼티와 Symbol까지 같이 보려면
console.log(Reflect.ownKeys(user));     // ['name', 'age', Symbol(id)]


// Symbol 은 원본 객체값을 건드리지 않고 속성을 추가할 수 있다.
const commonUser = {
    name : 'testNaming',
    age : 24
}
// 다른 사람이 만들어놓은 객체에 자신만의 속성 id 를 추가하고 싶은 경우
// commonUser.name = 'myName'; 이라고 쓰게되면 객체 프로퍼티값이 바뀌어 다른 사람의 코드에 영향이 갈 수 있음
// 그렇다고 그 상황을 피하기 위해 commonuser.a_key_no_one_used = 'myName'; 이렇게 쓰면 ...
// 이럴 때 Symbol 을 활용해 이렇게 쓸 수 있음
const myId = Symbol('id');
commonUser[myId] = 'haahhahh';



// 다른 사람이 만들어 놓은 객체
const human = {
    name : 'illy',
    age : 11
}

// 내가 해당 객체에 추가로 작업한 함수
human.height = 145;

// 원래 공통적으로 보여야 할 메시지
for(let key in human) {
    console.log(`His ${key} is ${human[key]}.`);
    /*
        His name is illy.
        His age is 11.
    */
}
// 근데 내가 작업한 내용까지 합해져서
/*
    His name is illy.
    His age is 11.
    His height is 145.
    
    이러면 다른 사람의 결과에도 영향을 줌
*/
// 그래서 Symbol 을 사용해서 프로퍼티 함수 추가
const showName = Symbol('show name');
human[showName] = function() {
    console.log(this.name);
}
human[showName]();      // illy

/*
    
    전역 Symbol
    Symbol.for()



    이렇게 기본적으로 Symbol 은 이름이 같더라도 모두 다른 존재이지만,
    가끔 전역변수처럼 같은 이름으로 한 대상을 가리키고 싶을 때

    Symbol() 은 매번 다른 Symbol 을 생성하지만,
    Symbol.for() 는 key 값을 통해 같은 Symbol 을 공유
*/
const id_1 = Symbol.for('id');
const id_2 = Symbol.for('id');
console.log(id_1);              // Symbol(id)
console.log(id_2);              // Symbol(id)
console.log(id_1 == id_2);      // true
console.log(id_1 === id_2);     // true


/*
    전역Symbol의 key 값을 얻고 싶다면
    (전역Symbol이 아닌 Symbol은 사용 X)
    Symbol.keyFor()
*/
const globalSymbol = Symbol.for('happy');
const one = Symbol.keyFor(globalSymbol);
console.log(one);       // nono

/*
    전역Symbol이 아닌 Symbol의 key 값을 얻고 싶다면
    .description
*/
const ss = Symbol('test');
console.log(ss.description);    // test

