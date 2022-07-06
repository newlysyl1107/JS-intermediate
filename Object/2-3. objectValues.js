/*
    Object 의 메소드들
*/

// 3. Object.values()       객체 프로퍼티의 value 값들을 배열로 반환

const user = {
    name : 'Jane',
    age : 30,
    gender : 'female'
}
const resultArr = Object.values(user);  // 파라미터로 객체를 던져주면 그 객체의 value 값들을 배열로 반환
console.log(resultArr); // ['Jane', 30, 'female']