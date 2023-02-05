fetch("data.php")
  .then(response => response.json())
  .then(data => {
    const cafes = data;
    const table = document.querySelector("#cafes");

    cafes.forEach(cafe => {
      const row = document.createElement("tr");

      const name = document.createElement("td");
      name.innerHTML = cafe.name;

      const location = document.createElement("td");
      location.innerHTML = cafe.location;

      const wifi = document.createElement("td");
      wifi.innerHTML = cafe.wifi ? "Yes" : "No";

      const power = document.createElement("td");
      power.innerHTML = cafe.power ? "Yes" : "No";

      row.appendChild(name);
      row.appendChild(location);
      row.appendChild(wifi);
      row.appendChild(power);

      table.appendChild(row);
    });
  });