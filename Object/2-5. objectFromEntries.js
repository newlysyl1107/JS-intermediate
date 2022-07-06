/*
    Object 의 메소드들
*/

// 5. Object.fromEntries()       key, value 배열을 객체로 반환

const arr = [
    ['name', 'Jane'],
    ['age', 30],
    ['gender', 'female']
]
const resultObj = Object.fromEntries(user);  // 파라미터로 key, value 배열을 던져주면 객체로 반환
console.log(resultObj);
/*
    {
        name : 'Jane',
        age : 30,
        gender : 'female'
    }
*/