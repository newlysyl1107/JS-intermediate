/*
    Object 의 메소드들
*/

// 1. Object.assign()       객체복제
const saying = {
    "talk" : "yes"
}
const cloneSaying = saying; // 이렇게하면 될거같지만 안됨
                            // cloneObject 에는 object 내용이 들어가있을것 같지만
                            // 객체가 저장되어있는 메모리 주소인 객체에 대한 참조값이 들어감
                            // 즉 객체 값이 아닌 참조값만 복사되는 것


/*

즉 이런 상황
하나의 객체를 두 변수가 접근하고 있는 상황

ㅡㅡㅡㅡㅡㅡㅡㅡ
|   saying   |
|            |
ㅡㅡㅡㅡㅡㅡㅡㅡ
              \
               \
                \  
                     ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
                     |   {                    |
                     |      name : 'yes'      |
                     |  }                     |
                     |                        |
                     ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
                   /
                  /
                 /
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
|  cloneSaying |
|              |
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

만약 이 상황에서 cloneSaying.name = 'no' 라고 바꾼다면
saying.name 또한 'no' 가 된다.

*/

// 동일하게 객체를 복사하려면 Object.assign() 을 사용해야 한다.
const newSaying = Object.assign({ say : 'yes' }, saying);

/*
    파라미터 안에 써준 { say : 'yes' } 객체는 초기값에 해당함

    두번째 파라미터 saying 은 초기값에 병합됨
    즉 { say : 'yes' } + { talk : 'yes' } 는
    
    {
        say : 'yes'
        talk : 'yes'
    }
    가 되는것

*/
// 

console.log(newSaying);         // {say: 'yes', talk: 'yes'}


const duplicateSaying = Object.assign({ talk: 'no' }, saying);
/*
    만약 기존 saying 가 가지고 있던 talk key 값과 동일한 key 값으로 초기화 시킨다면
    새로 초기화 해주려는 값으로 덮어쓰게 된다.
*/
console.log(duplicateSaying); // {talk: 'yes'}


/*
    또한 여러 객체도 합칠 수 있다.
*/
const mix1 = {
    name : 'July'
}
const mix2 = {
    age : 30,
    gender: 'male'
}
const mix3 = {
    age : 25,
    gender : 'female'
}
const mixedOne = Object.assign(mix1, mix2, mix3);
console.log(mixedOne);  // {name: 'July', age: 25, gender: 'female'}