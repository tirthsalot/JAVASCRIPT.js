document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();

  let n = Number(number.value),
      r = result;

  if (n <= 1) return r.textContent = " Not Prime";

  for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0) return r.textContent = " Not Prime";

  r.textContent = " Prime";
});