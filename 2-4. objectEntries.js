/*
    Object 의 메소드들
*/

// 4. Object.entries()       객체 프로퍼티의 key, value 값들을 배열로 반환

const user = {
    name : 'Jane',
    age : 30,
    gender : 'female'
}
const resultArr = Object.entries(user);  // 파라미터로 객체를 던져주면 그 객체의 key, value 값들을 배열로 반환
console.log(resultArr);
/*
    배열 안에 여러 프로퍼티 배열이 있는 형태
    [
        ['name', 'Jane'],
        ['age', 30],
        ['gender', 'female']
    ]
*/