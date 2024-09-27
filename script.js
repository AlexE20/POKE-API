//Funcion para buscar un pokemon por su nombre
document.getElementById('Search').addEventListener('click', () => {
  const pokemonName = document.getElementById('input').value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error("Pokemon not found");
      }
      return response.json();
    })
    .then((data) => {
      const pokemonInfo = document.getElementById("pokemon-info");
      pokemonInfo.innerHTML += `
  <div class = "pokemon"> <p>Nombre: ${data.name} -- Id: ${(data.id)}</p></div>
`;
    })
    .catch((error) => {
      const pokemonInfo = document.getElementById("pokemon-info");
      pokemonInfo.innerHTML += `<h2>${error}</h2>`;
    });
});



//Funcion para borrar el contenido del input y del div
document.getElementById('Delete').addEventListener('click', () => {
  let input=document.getElementById('input').value.toLowerCase();
  const pokemonInfo = document.getElementById("pokemon-info");
  let found=false;
  const pokemons=Array.from(pokemonInfo.getElementsByClassName('pokemon'));

  pokemons.forEach(element => {
    if(element.textContent.toLowerCase().includes(input)){
      pokemonInfo.removeChild(element);
      found=true;
      alert('Se ha eliminado correctamente');
    }
  });
  document.getElementById('input').value='';
  if(!found){
    alert('Pokemon not found');
  }
 
});



