
fetch('data/vehicules.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('vehicules-container');
    data.forEach(v => {
      const div = document.createElement('div');
      div.innerHTML = `<h2>${v.marque} ${v.modele}</h2>
                       <p>Prix : ${v.prix} €</p>
                       <p>Année : ${v.annee}</p>`;
      container.appendChild(div);
    });
  });
