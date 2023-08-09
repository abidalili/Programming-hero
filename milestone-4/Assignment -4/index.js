// p-1
function cubeNumber(input) {
  if (typeof input !== "number") {
    return "Invalid input. Please provide a valid number.";
  }

  return input ** 3;
}
cubeNumber(3);

// p-2
function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Both inputs should be valid strings.";
  }
  if (string1.includes(string2)) {
    return true;
  } else {
    return false;
  }
}
matchFinder("John Doe", "ohn");

// p-3
function sortMaker(arr) {
  if (
    !Array.isArray(arr) ||
    arr.length !== 2 ||
    typeof arr[0] !== "number" ||
    typeof arr[1] !== "number" ||
    arr[0] < 0 ||
    arr[1] < 0
  ) {
    return "Invalid Input";
  }

  if (arr[0] === arr[1]) {
    return "equal";
  }

  if (arr[0] > arr[1]) {
    return [arr[1], arr[0]];
  }
  return arr;
}
sortMaker([3, 4]);

// p-4

function findAddress(obj) {
  if (typeof obj !== "object" || obj === null) {
    return "Invalid Input";
  }
  let street = obj.street || "__";
  let house = obj.house || "__";
  let society = obj.society || "__";

  return street + "," + house + "," + society;
}

findAddress({ street: 10, house: "15A", society: "Earth Perfect" });

// p-5
function canPay(changeArray, totalDue) {
  if (
    !Array.isArray(changeArray) ||
    changeArray.length === 0 ||
    typeof totalDue !== "number"
  ) {
    return "Invalid Input";
  }
  let sumChange = 0;
  for (let i = 0; i < changeArray.length; i++) {
    sumChange += changeArray[i];
  }

  return sumChange >= totalDue;
}
canPay([5, 5], 10);
