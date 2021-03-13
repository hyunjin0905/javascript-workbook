
/* 문제 1번  */
function reverse(str) {
    let strArr = [];
    for (let i = str.length - 1 ; i + 1 > 0; i--) {
        strArr.push(str[i]);
    }

    return console.log(strArr.join(""));

}

reverse("abcd");
reverse("    abcd     ");


/* 문제 2번  */
// 주어진 숫자를 뒤집는 함수를 구현하세요
function reverseInt(num) {
    let str = num.toString();
    let strArr = [];

    for (let i = str.length - 1 ;  i + 1 > 0; i--) {
        strArr.push(str[i]);
    }

    if (strArr[strArr.length - 1] === "-") {
        strArr.pop();
        strArr.unshift("-")
    }

    return console.log((parseInt(strArr.join(""))));

}
reverseInt(0)  // 0
reverseInt(5)  // 5
reverseInt(15)  // 51
reverseInt(90)  // 9
reverseInt(-2359)  // 9532
reverseInt(-5)  // -5
reverseInt(-15)  // -51
reverseInt(-90)  // -9
reverseInt(-2359)  // -9532


/* 문제 3번  */
// 주어진 스트링이 대칭형 스트링인지 아닌지 판별하는 함수를 구현하세요
function palindrome(str) {
    let strArr = [];
    for (let i = str.length - 1; i + 1 > 0; i--) {
        strArr.push(str[i]);
    }
    if (str === strArr.join("")) {
        return console.log(true);;
    } else {
        return console.log(false);;
    }
}

palindrome("aba")  // true
palindrome(" aba")  // false
palindrome("aba ")  // false
palindrome("greetings")  // false
palindrome("1000000001")  // true
palindrome("Fish hsif")  // false
palindrome("pennep")  // true