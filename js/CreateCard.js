function CreateCard (resto) {

    const newCard = `<div class="cards">
    <div class="card-header">
       <div class="card-img" style="background-image:url(${resto.img}) "></div>
     </div>
    <div class="card-body">
     <h2 class="card-title">${resto.nom}</h2>
     <p class="card-adresse">${resto.adresse}</p>
     <p class="card-distance">${resto.distance}</p>
     <p class="card-description">${resto.desc}</p>
    </div>
    </div>`;

    return newCard;
    
}


export default CreateCard;