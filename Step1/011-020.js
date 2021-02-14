console.log("# 11");
// #11
// 1부터 100까지 모두 더하는 Code를 <pass> 부분에 완성하세요. for를 사용해야 합니다
let s= 0
for(var i = 0; i <= 100; i++) {
    s+=i;
}
console.log(s);
console.log("# 12");
// # 12
//데이터
// <여기에 class를 작성하세요.>
// 출력
// 545 210 10
// 파이어볼

class Wizard {

    constructor(health, mana, armor) {
        this.health = health;
        this.mana = mana
        this.armor = armor;
    }

    attack = function () {
        console.log("파이어볼");
    }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();

// 답안
const Wizard2 = class Wizard2 {
    constructor(health, mana, armor) {
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }
    attack () {
        console.log("파이어볼");
    }
}
console.log("# 13");
//# 13
// 우리 태양계를 이루고 있는 행성은 **수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성**으로 총 8개 입니다.
// 저희는 우리 태양계의 n번째 행성이 무엇인지 알고 싶습니다.
// 입력으로 행성의 순서를 나타내는 숫자 n이 입력됩니다.
// 출력으로 그 순서에 해당하는 행성의 이름을 출력해 주세요.
// 예를들어 1이 입력되면, 첫번째 행성인 수성이 출력됩니다.
let planet = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"];


const What_planet_is_it = function (number) {
    if  (number === 0) return;
    console.log(planet[number-1]);
}
What_planet_is_it(1);

// 답안
const stars = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"];
//const n = prompt("몇번째행성인가요?");
//console.log(n);
//console.log(stars[n-1]);
console.log("# 14");
// #14
// 영희는 친구와 게임을 하고 있습니다. 서로 돌아가며 랜덤으로 숫자를 하나 말하고 그게 3의 배수이면 박수를 치고 아니면 그 숫자를 그대로 말하는 게임입니다.
// 입력으로 랜덤한 숫자 n이 주어집니다.
// 만약 그 수가 **3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력**해 주세요.

// const number = prompt("3의 배수인가?");
// const n_3 = number%3 === 0 && number;
// if (n_3) alert(`입력값: ${number}는  3의 배수입니다.`);
// else alert(`입력값: ${number} 는  3의 배수가 아닙니다 `);

// 답안
// const n = prompt('숫자를 입력하세요.');
// if (n%3 == 0) { // 나머지 연산 %는 n을 3으로 나누었을때 몫이 아닌 나머지 값을 반환합니다.
//     console.log('짝');
// } else {
//     console.log(n);
// }
console.log("# 15");
// # 15
//신학기가 시작되고, 아이들이 돌아가면서 자기소개를 하기로 했습니다.
// 만약 입력으로 `김다정`이라는 이름이 주어지면 "안녕하세요. 저는 김다정입니다."라고 출력하게
// 해주세요.

const helloMyInfo = function (name) {
    console.log(`안녕하세요 ${name} 입니다`);
}

helloMyInfo("조현진");
console.log("# 16");

// 답안
// /*
// * es6부터는 backtick 문자열(``) 안에서 $와 중괄호로 표현식을 사용할 수 있습니다.
// * 이를 템플릿 리터럴(Template literals)이라 합니다.
// */

let name = "거꾸로";
console.log(name.split("").reverse().join());

/*
* split() 메서드는 문자열을 배열로 만들어 반환하고,
* reverse() 메서드는 배열의 순서를 반전하며,
* join() 메서드는 원소를 모두 붙여 문자열로 반환합니다.
*/
console.log("# 17");
// 유주는 놀이공원 아르바이트 중입니다. 그런데 놀이기구마다 키 제한이 있습니다.
// 유주가 담당하는 놀이기구는 키가 150cm 이상만 탈 수 있습니다.
// 입력으로 키가 주어지면
// 키가 150이 넘으면 YES를 틀리면 NO를 출력하는 프로그램을 작성하세요.


const value  = prompt("키 어떻게 되세욤?");
const keyLimit = function (value) {
    if (value >= 150) console.log("입장 할 수 있어요");
    else console.log("입장 못 해요");
}
// keyLimit(value);

console.log("# 18");
// 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.
// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요.
// 단, 소숫점 자리는 모두 버립니다.

const average = function (data) {

    var num = 0
    for (var i = 0; i < data.length; i++) {
        num += parseInt(data[i]);
    }
    return console.log(Math.floor(num/data.length));
}
//const score = prompt("세과목 입력하세요").split(' ');
//average(score);

console.log("# 19");
// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

const square = function (a) {
    const num1 = parseInt(a[0]);
    const num2 = parseInt(a[1]);
    console.log(parseInt(num1 ** num2));
}

//const squared = prompt("a의 b승").split(' ');
//square(squared)

// 답안
//const n = prompt('수를 입력하세요.').split(' ');
//console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));

console.log("# 20");
//공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.
// const n = prompt('수를 입력하세요.').split(' ');

// const result = Math.floor(parseInt(n[0], 10) / parseInt(n[1], 10));
// const left = parseInt(n[0], 10) % parseInt(n[1], 10);

// console.log(result, left);

