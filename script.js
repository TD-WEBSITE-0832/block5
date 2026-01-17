
  const cards = document.querySelectorAll('.card3');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });



  const toggle = document.getElementById("billingToggle");

const prices = document.querySelectorAll(".price");

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    // YEARLY
    prices[0].innerHTML = "Free";
    prices[1].innerHTML = "$150<span>/year</span>";
    prices[2].innerHTML = "$250<span>/year</span>";
  } else {
    // MONTHLY
    prices[0].innerHTML = "Free";
    prices[1].innerHTML = "$15<span>/month</span>";
    prices[2].innerHTML = "$25<span>/month</span>";
  }
});


  const burger = document.querySelector('.sec');
  const menu = document.querySelector('.id');

  burger.addEventListener('click', () => {
    menu.classList.toggle('active');
  });


