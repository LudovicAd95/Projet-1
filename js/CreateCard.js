function CreateCardItem (resto) {

    const newCard = `<div class="cards-container">
    <div class="card-header">
       <div class="card-img" style="background-image:url(${resto.img}) "></div>
     </div>
    <div class="card-body"></div>
     <h2 class="card-title">${resto.nom}</h2>
     <p class="card-adresse">${resto.adresse}</p>
     <p class="card-distance">${resto.distance}</p>
     <p class="card-description">${resto.desc}</p>
    </div>
    </div>`;

    return newCard;
    
}


 function CreateCard(restaurant) {
  const card = document.createElement('div');
  card.className = 'restaurant-card';

  const name = document.createElement('h2');
  name.textContent = restaurant.nom;
  card.appendChild(name);

  const address = document.createElement('p');
  address.textContent = `${restaurant.adresse}`;
  card.appendChild(address);
  

  const distance = document.createElement('p');
  distance.textContent = `À ${restaurant.distance}`;
  card.appendChild(distance);

  const description = document.createElement('p');
  description.textContent = restaurant.description;
  card.appendChild(description);

  const price = document.createElement('p');
  price.textContent = restaurant.prix;
  card.appendChild(price);

  const telephone = document.createElement('p');
  telephone.textContent = restaurant.telephone;
  card.appendChild(telephone);

  const rating = document.createElement('p');
  rating.textContent = `${restaurant.note}/5⭐️`;
  card.appendChild(rating);
  console.log(card);
  return card;
}