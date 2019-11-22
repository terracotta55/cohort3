export const functions = {
  // 21-Nov-2019 Daily Exercises
  newCallBack: arr => {
    const myObj = { age: null, num: null, avg: null };
    const totalAges = arr.reduce((accum, person) => accum + person.age, 0);
    myObj["age"] = totalAges;
    const numberOfPeople = arr.length;
    myObj["num"] = numberOfPeople;
    const avgAge = totalAges / arr.length;
    myObj["avg"] = Number(avgAge.toFixed(2));
    return myObj;
  },
  // 08-Nov-2019 Daily Exercises
  twoWesternProvs: (peopleArr, callBackFn) => {
    //filter used, expecting different lenght arr
    const twoProvsResult = peopleArr.filter(
      elem =>
        elem.province.toLowerCase() === "ab" ||
        elem.province.toLowerCase() === "bc"
    );
    return callBackFn(twoProvsResult);
  },
  twoProvsCallback: newPeopleArr => {
    // map used, expecting same length arr
    return newPeopleArr.map(elem => `${elem.fname} ${elem.lname}`);
  },
  // 06-Nov-2019 Daily Exercises
  staffGreaterThanBalance: arr => {
    const greaterThanArr = arr.filter(elem => elem.balance > 1000);
    return greaterThanArr;
  },
  // 29-Oct-2019 Daily Exercises
  staffTotalBalance: arr => {
    const total = arr.reduce(
      (accumulator, staff) => accumulator + staff.balance,
      0
    );
    return total;
  },
  staffAvgBalance: arr => {
    const total = arr.reduce(
      (accumulator, staff) => accumulator + staff.balance,
      0
    );
    return total / arr.length;
  },
  // 25-Oct-2019 Daily Exercises
  loopStaffForEach: arr => {
    let staffEmail = [];
    arr.forEach(arrayElement =>
      staffEmail.push(functions.makeEmailObj(arrayElement))
    );
    return staffEmail;
  },

  loopStaffMap: arr => {
    let staffEmail = [];
    arr.map(element => staffEmail.push(functions.makeEmailObj(element)));
    return staffEmail;
  },
  // 24-Oct-2019 Daily Exercises
  loopStaffIn: arr => {
    let staffEmail = [];
    for (let i in arr) {
      let email = functions.makeEmailObj(arr[i]);
      staffEmail.push(email);
    }
    return staffEmail;
  },
  loopStaffOf: arr => {
    let staffEmail = [];
    for (let elem of arr) {
      let email = functions.makeEmailObj(elem);
      staffEmail.push(email);
    }
    return staffEmail;
  },
  // 21-Oct-2019 Daily Exercises
  loopStaff: arr => {
    let staffEmail = [];
    arr.forEach(function(arrayOfEmailObjs) {
      let email = functions.makeEmailObj(arrayOfEmailObjs);
      staffEmail.push(email);
    });
    return staffEmail;
  },
  //16-Oct-2019 Daily Exercises
  sortAscending: arr => {
    arr.sort((a, b) => a - b);
    return arr;
  },
  sortDescending: arr => {
    arr.sort((a, b) => b - a);
    return arr;
  },
  filterFunction: arr => {
    const newArr = arr.filter(currValue => currValue > 2);
    return newArr;
  },
  reduceFunction: arr => {
    const result = arr.reduce((acc, elem) => acc + elem);
    return result;
  },
  mapFunction: arr => {
    const newArr = arr.map(elem => elem * 10);
    return newArr;
  },
  sliceFunction: arr => {
    let newArr = arr.slice(1); //second elem to end
    return newArr;
  },
  spliceFunction: arr => {
    arr.splice(1, 0, "splice"); //replace second item
    return arr;
  },
  forEachFunction: arr => {
    let elemList = [];
    arr.forEach(function(arrElem) {
      elemList.push(arrElem);
    });
    return elemList;
  },
  forInLoop: obj => {
    let propList = [];
    for (let prop in obj) {
      propList.push(obj[prop]);
    }
    return propList;
  },
  forOfLoop: arr => {
    let elemList = [];
    for (const elem of arr) {
      elemList.push(elem);
    }
    return elemList;
  },

  doWhile: countUpTo => {
    let countArr = [];
    let i = 1;
    do {
      countArr.push(i);
      i++;
    } while (i <= countUpTo);
    // console.log(countArr);
    return countArr;
  },

  whileLoop: str => {
    let newStr = "",
      i = str.length;
    while (i > 0) {
      newStr += str.substring(i - 1, i);
      i--;
    }
    return newStr;
  },
  forLoop: (smallNum, largeNum) => {
    let sum = 0;
    for (let i = smallNum; i <= largeNum; i++) {
      sum += i;
    }
    return sum;
  },
  makeEmailObj: obj => {
    let first = obj.fname.toLowerCase();
    let last = obj.lname.toLowerCase();
    return `${first}.${last}@evolveu.ca`;
  },

  makeEmailArr: arr => {
    let first = arr[0].toLowerCase();
    let last = arr[1].toLowerCase();
    return `${first}.${last}@evolveu.ca`;
  },

  assertEquals: (a, b) => {
    if (a === b) {
      console.log(`*** the two values are the same`);
      return true;
    } else {
      console.log(`*** the two values are NOT the same
      p1--> ${a} (parameter 1)
      p2--> ${b} (parameter 2)`);
      return false;
    }
  }
};

const data = {
  staff: [
    { fname: "Jane", lname: "Smith", balance: 10 },
    { fname: "Liam", lname: "Henry", balance: 1000 },
    { fname: "Emma", lname: "Jones", balance: 1330 },
    { fname: "Olivia", lname: "Notly", balance: 310 },
    { fname: "Noah", lname: "Ho", balance: 503 },
    { fname: "William", lname: "Lee", balance: 520 },
    { fname: "Benjamin", lname: "Amis", balance: 150 }
  ],
  company: "EvolveU",
  city: "Calgary",
  prov: "Alberta"
};

// functions.loopStaffForEach(data.staff);
