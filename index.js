function convertTo24HourFormat(time) {
  return new Date(time).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
  });
}



function sumOrNegative(str1, str2) {
  const num1 = parseFloat(str1);
  const num2 = parseFloat(str2);

  if (!isNaN(num1) && !isNaN(num2)) {
      // إذا كانت القيمتين تحتويان على أعداد، قم بجمعهما وإرجاع النتيجة كنص
      return (num1 + num2).toString();
  } else {
      // إذا كانت أحد المدخلات تحتوي على أحرف، قم بإرجاع -1 كنص
      return "-1";
  }
}

function addStrNums(num1, num2) {
  // write your code here
  const num11 = parseFloat(num1);
  const num12 = parseFloat(num2);
  if(!isNaN(num11) && !isNaN(num12)){
    return (num11 + num12).toString();
  }
  return "-1"
}

console.log(addStrNums("4", "6"))
console.log(sumOrNegative("4", "6"))


function cone_volume(radius, height) {
  // write your code here
    return (1 / 3) * 3.14 * Math.pow(radius, 2) * height;

}
console.log(cone_volume(8.7, 7.8))