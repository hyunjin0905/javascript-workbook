import './index';
/*
문제. 21
* 다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.

1)  var x = {1, 2, 3, 5, 6, 7};
2)  var x = {};
3)  var x = new Set('javascript');
4)  var x = new Set(range(5));
5)  var x = new Set();
* */
var y = new Set("javascript");
var x = new Set();
console.log(y);

/*
문제. 22
* 다음 중 변수 i가 6의 배수인지 확인하는 방법으로 올바른 것은?

1)  i / 6 == 0
2)  i % 6 == 0
3)  i & 6 == 0
4)  i | 6 == 0
5)  i // 6 == 0
* */


const sixMultiple = (num) => {
    const isSixMultiple = num % 6 === 0;
    if (isSixMultiple) console.log("6의 배수입니다.");
    else console.log("6의 배수가 아니다.");
}
//const num = prompt ("6의배수냐?");
//sixMultiple(num);


/*
* 문제 23
* num
* `console.log(10/3)`의 출력 결과는 3이다.
*  --> x
* */

console.log(Math.floor(10/3));

/*
* 문제 24
* 민지는 국제 포럼에서 아르바이트를 하게 되었습니다.
* 민지는 각 국에서 온 참가자들의 명단을 엑셀로 정리하고 있는데 참가자들 이름이 어떤 이는 전부 소문자,
* 어떤 이는 전부 대문자로 써져 있는 등 형식이 제각각이었습니다.
* 민지를 위해 이름이 입력되면 전부 대문자로 출력되는 프로그램을 만들어주세요.
*
* */
var minji  = "minji"
console.log(minji.toUpperCase());

/*
* 문제 25
* 원의 넓이는 `반지름의 길이 x 반지름의 길이 x 3.14`로 구할 수 있습니다.
* 함수를 사용하여 원의 넓이를 구하는 코드를 작성해봅시다.
* 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수**를 만들어 주세요.
* */

//var num = prompt("반지름길이 적어주세염");

const circle = (n) => {
    return console.log(n * n * 3.14);
}
//circle(num);

/*
* 문제 26
* 우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
* 이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.
* 행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램**을 만들어 주세요.
*/

const planets = {
    '수성' : 'Mercury',
    '금성' : 'Venus',
    '지구' : 'Earth',
    '화성' : 'Mars',
    '목성' : 'Jupiter',
    '토성' : 'Saturn',
    '천왕성' : 'Uranus',
    '해왕성' : 'Neptune',
};

//const name = prompt("행성의 이름을 입력하세요.");

//console.log(planets[name]);
/*
* 문제 27
* 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.
* 두 개를 합쳐 **학생의 이름이 key**고 **value가 수학 점수**인 객체를 출력해주세요.
* 입력
* Yujin Hyewon
* 70 100
* 출력
* {'Yujin': 70, 'Hyewon': 100}
*
* */

//const key = prompt("이름 입력해주세욤").split(' ');
//const value = prompt("수학점수 입력후해주세욤").split(' ');
const makeObj = (key, value) => {
    const obj = {}
    if ( key.length !== value.length) {
        alert("이름 갯수와 수학점수 갯수가 같아야합니다");
        return;
    }
    key.forEach((data, index) => {
        obj[data] = value[index];
    });
    console.log(obj);
}
//makeObj(key, value);


// 답안

//const keys = prompt('이름을 입력하세요').split(' ');
// const values = prompt('점수를 입력하세요').split(' ');split
// const obj = {};
//
// for (let i=0; i<keys.length; i++) {
//     obj[keys[i]] = parseInt(values[i], 10);
// }
//
// console.log(obj);

/*
* 문제 28
* 2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다.
*
* 를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.
**입력**
Javascript

**출력**
J a
a v
v a
a s
s c
c r
r i
i p
p t

*/

/**
 * 문제 29
 * 진구는 영어 학원 아르바이트를 하고 있습니다. 반 아이들은 알파벳을 공부하는 학생들인데 오늘은 대문자 쓰기 시험을 봤습니다.
 * 알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램을 만들어 주세요.
 *
 */

//var data = prompt("data?");
function upperCase(data) {
   if ( data.toUpperCase() === data) console.log("YES");
   else console.log("NO")
}
//upperCase(data);
/*
* 문제 30
* 문자 pineapple에는 apple이라는 문자가 숨어 있습니다. 원범이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려고 합니다.
* 첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
* 그 문자가 시작하는 index를 반환하는 프로그램**을 만들어 주세요
* 입력
pineapple is yummy
apple

* 출력
4
*
* *
 * */

const inputString= prompt("입력해주세요");
const findString = prompt("찾을 문자");

const findStringIndex = (a,b) => {
    console.log(a.indexOf(b));
}
findStringIndex(inputString, findString);



