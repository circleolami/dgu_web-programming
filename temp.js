document.getElementById("check-prime").addEventListener("click", function () {
  let number = parseInt(prompt("소수인지 판별할 숫자를 입력하세요: "), 10);
  let isPrime = true;

  if (number <= 1) {
    isPrime = false;
  } else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
  }

  if (isPrime) {
    alert(`${number}는 소수입니다.`);
  } else {
    alert(`${number}는 소수가 아닙니다.`);
  }
});
