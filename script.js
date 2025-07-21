// Testimonial carousel
let testimonials = document.querySelectorAll('.testimonial');
let index = 0;
setInterval(() => {
  testimonials[index].classList.remove('active');
  index = (index + 1) % testimonials.length;
  testimonials[index].classList.add('active');
}, 4000);

// Toggle pricing (monthly/yearly)
const monthlyPrices = [49, 99, 199];
const yearlyPrices = [490, 990, 1990];
const buttons = document.querySelectorAll(".pricing-toggle button");
const prices = document.querySelectorAll(".price-card .price");

buttons.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    prices.forEach((price, i) => {
      price.innerHTML = (idx === 0)
        ? `$${monthlyPrices[i]}<span>/mo</span>`
        : `$${yearlyPrices[i]}<span>/yr</span>`;
    });
  });
});
