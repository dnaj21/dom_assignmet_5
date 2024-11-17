const carContainer = document.getElementById("cars-container");
const filters = {
  minYear: document.getElementById("minYear"),
  maxYear: document.getElementById("maxYear"),
  make: document.getElementById("make"),
  maxMileage: document.getElementById("maxMileage"),
  minPrice: document.getElementById("minPrice"),
  maxPrice: document.getElementById("maxPrice"),
  color: document.getElementById("color"),
};

function renderCars(cars) {
  carContainer.innerHTML = "";
  if (cars.length === 0) {
    carContainer.innerHTML =
      "<p>No cars match your filters. Please try again.</p>";
    return;
  }
  cars.forEach((car) => {
    const carCard = document.createElement("div");
    carCard.className = "car-card";
    carCard.innerHTML = `
            <h3>${car.year} ${car.make} ${car.model}</h3>
            <p>Price: $${car.price}</p>
            <p>Mileage: ${car.mileage} miles</p>
            <p>Color: ${car.color}</p>
            <p>Gas Mileage: ${car.gasMileage}</p>
        `;
    carContainer.appendChild(carCard);
  });
}

function filterCars() {
  let filteredCars = usedCars.filter((car) => {
    const minYear = filters.minYear.value ? parseInt(filters.minYear.value) : 0;
    const maxYear = filters.maxYear.value
      ? parseInt(filters.maxYear.value)
      : Infinity;
    const makes = Array.from(filters.make.selectedOptions).map(
      (option) => option.value
    );
    const maxMileage = filters.maxMileage.value
      ? parseInt(filters.maxMileage.value)
      : Infinity;
    const minPrice = filters.minPrice.value
      ? parseInt(filters.minPrice.value)
      : 0;
    const maxPrice = filters.maxPrice.value
      ? parseInt(filters.maxPrice.value)
      : Infinity;
    const colors = Array.from(filters.color.selectedOptions).map(
      (option) => option.value
    );

    return (
      car.year >= minYear &&
      car.year <= maxYear &&
      (makes.length === 0 || makes.includes(car.make)) &&
      car.mileage <= maxMileage &&
      car.price >= minPrice &&
      car.price <= maxPrice &&
      (colors.length === 0 || colors.includes(car.color))
    );
  });

  renderCars(filteredCars);
}

document.getElementById("applyFilters").addEventListener("click", filterCars);

window.onload = () => renderCars(usedCars);
