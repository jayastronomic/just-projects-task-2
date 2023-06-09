function buildTable() {
  const people = [
    { firstName: "Yvonne", lastName: "Johnson", age: 24 },
    { firstName: "Femi", lastName: "Eyiomo", age: 32 },
    { firstName: "Busayo", lastName: "Ajayi", age: 41 },
    { firstName: "Abiodun", lastName: "Abonde", age: 20 },
    { firstName: "Hakeem", lastName: "Bala", age: 56 },
    { firstName: "Taiwo", lastName: "Mohammed", age: 36 },
    { firstName: "Chijioke", lastName: "Epundu", age: 30 },
    { firstName: "Obinna", lastName: "Okoro", age: 28 },
    { firstName: "Kafayat", lastName: "Abdul", age: 66 },
    { firstName: "Nana", lastName: "Michael", age: 80 },
  ];
  const table = document.getElementById("table");
  const tbody = table.children[1];
  people.forEach((person) => {
    let tr = document.createElement("tr");
    let attrs = Object.keys(person);
    for (let attr of attrs) {
      let td = document.createElement("td");
      td.innerHTML = person[attr];
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  });
}

buildTable();
