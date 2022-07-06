/*
    생성자 함수
    함수이름의 첫 글자는 대문자로. (User, School, Company...)

    비슷한 객체를 여러개 만들어야 할 때 쓸 수 있음

    참고로 생성자 함수는 arrow function 모양으로 쓸 수 없음!
    생성자 함수는 prototype 이라는 프로퍼티를 가지며 이 녀석이 가리키는 프로토타입 객체의 constructor를 사용
    화살표 함수는 그에 반해 prototype 프로퍼티를 가지고 있지 않음
*/
function User(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = () => {
        console.log(this.name);
    }
}

let user1 = new User('Mike', 30);
let user2 = new User('Jane', 22);
let user3 = new User('Tom', 17);

user1.sayName();    // Mike


/*
    이 안의 주석 두 줄은
    new Item(~) 을 호출할 때 실행된다.
*/
function Item(title, price) {
    // this = {};
    this.title = title;
    this.price = price;
    this.showPrice = () => {
        console.log(`${title}는 ${price}원 입니다.`);
    }
    //return this;
}

let soap = new Item('비누', 2000);
let clock = new Item('시계', 10000);

console.log(soap, clock);   // Item {title: '비누', price: 2000, showPrice: ƒ} Item {title: '시계', price: 10000, showPrice: ƒ}

soap.showPrice();       // 비누는 2000원 입니다.
clock.showPrice();      // 시계는 10000원 입니다.