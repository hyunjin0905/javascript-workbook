import { name, random } from "faker";

interface Student {
    name: string;
    age: number;
    jobType: string;
}
type StudentMap = {
    [jobType: string]: Student[];
}
const students: Student[] = [];
for (let i = 0; i < 50; i++) {
    students.push({
        name: `${name.firstName()} ${name.lastName()}`,
        age: random.number(),
        jobType: name.jobType()
    })
}
console.log(students);
const map: StudentMap = {};
students.forEach((student) => {
    const { jobType } = student;
    if (map[jobType]) {
        map[jobType].push(student);
    } else {
        map[jobType] = [ student ];
    }
});
console.log(map);
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
const dateList = [ "2021-06-10", "2021-05-01", "2021-04-23", "2021-04-01", "2021-03-15", "2021-02-15" ];
const getRandomDate = () => {
    const index = Math.floor(Math.random() * dateList.length);
    return dateList[index];
}



interface CardBill {
    billDate: string;
    name: string;
}
type CardBillMap = {
    [billDate: string]: CardBill[];
}
const bills: CardBill[] = [];
for (let i = 0; i < 100; i++) {
    bills.push({
        billDate: getRandomDate(),
        name: name.jobType()
    });
}
console.log(bills);
const billMap: CardBillMap = {};
bills.forEach((b) => {
    const { billDate } = b;
    if (billMap[billDate]) {
        billMap[billDate].push(b);
    } else {
        billMap[billDate] = [ b ];
    }
})
console.log(billMap);
const billDates = Object.keys(billMap).sort().reverse();
console.log(billDates);
const today = new Date();
const todayString = `${today.getFullYear()}-0${today.getMonth() + 1}-0${today.getDate()}`;
billDates.map((date) => {
    const bills: CardBill[] = billMap[date];
    if (date >= todayString) {
        console.log("예정")
    } else {
        console.log("안예정")
    }
    console.log(bills);
})



interface CompanyInfo {
    name: string;
    date: string;
    jobType: string;
}

type Company = {
    [date: string]: CompanyInfo[]
}


const companyList: CompanyInfo[]= [];

for (let i = 0; i < 30; i++) {
    companyList.push({
        name: name.lastName(),
        date: getRandomDate(),
        jobType: name.jobType()
    })
}
console.log(companyList);

const companies: Company = {}
companyList.forEach((data) => {
    const { date } = data;
    if (companies[date]) {
        companies[date].push(data)
    } else {
        companies[date] = [data]
    }
})
console.log(companies);









