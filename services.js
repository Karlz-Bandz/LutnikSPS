class Service {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
  }
}

const services = [
  new Service("Pelna regulacja (setup)", "Korekta siodełka, ustawienie akcji strun, krzywizny gryfu, menzury, konserwacja podstrunnicy, wymiana strun, dokręcenie luźnych elementów, czyszczenie, diagnoza problemów, korekta ustawień uwzględniająca indywidualne styl gry i potrzeby każdego klienta.", "200 – 300 PLN"),
  new Service("Szlif progow + setup", "", "500-600 PLN"),
  new Service("Wymiana progow + setup", "Dokładna wycena po oględzinach instrumentu oraz wyboru części.", "Od 900 PLN"),
  new Service("Wymiana przetwornikow", "", "od 50 PLN/sztuka"),
  new Service("Wymiana przelacznika", "+ cena przełącznika", "50-80 PLN"),
  new Service("Ekranowanie + wymiana przewodow", "", "150-250 PLN"),
  new Service("Wymiana gniazda jack", "+ cena gniazda", "50 PLN"),
  new Service("Wymiana siodelka", "Kość/Tusq/Mosiądz", "150-220 PLN")
];

function renderCards(services) {
  const container = document.getElementById("services-list");
  container.innerHTML = "";

  services.forEach(service => {
    const card = document.createElement("div");
    card.classList.add("service-card");
    card.innerHTML = `
      <h3>${service.name}</h3>
      <p>${service.description}</p>
      <p class="price">${service.price}</p>
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCards(services);
});