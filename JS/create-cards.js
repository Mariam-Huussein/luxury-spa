let ServicesTrack = document.querySelector('.service-cards-track');
let PackageTrack = document.querySelector('.packages-cards-track') ;

/*
function to create cards for services and packages
*/
function createCards(card , continer) {
    const cardEl = document.createElement('div');
    cardEl.className = 'card';
    cardEl.innerHTML = `
        <!--<div class="services-card-image-continer" style="background-image: url('${card.img}')"></div>-->
        <div class="services-card-image-continer">
            <img src="${card.img}" alt="${card.name}">
        </div>
        <div class="services-card-name">
            <h3>${card.name}</h3>
        </div>
        <div class="services-card-title">
            <p>${card.title}</p>
        </div>
        <div class="services-card-price">
            <p>${card.price} EGP</p>
        </div>
        <div class="continer-btn">
            <!--<button class="btn-submit services-btn-book Button" onclick="service.value = ${card.value}; smoothScrollTo('#book-section'); setSelect(${card.value})"> Book Now</button>-->
            <button class="services-btn-book Button" onclick="service.value = ${card.value}; smoothScrollTo('#book-section'); setSelect(${card.value})"> Book Now</button>
        </div>
    `;
    if(continer===document.querySelector('.packages-cards-track')){
        cardEl.classList.add('package-card');
    }
    else if(continer===document.querySelector('.service-cards-track')){
        cardEl.classList.add('services-card');
    }
    continer.appendChild(cardEl);
};


//Cards Services details
let cardServ1={ name: 'Body Massage', title: 'Relax your muscles with a soothing full-body massage.', price: 850, img: 'assets/images/services/massage.jpg', value:1};
let cardServ2={ name: 'Body Treatment', title: 'Nourish your skin with deep cleansing and exfoliation.', price: 950, img: 'assets/images/services/Body-Scrub&Polish.jpg',value:2};
let cardServ3={ name: 'Facial Treatment', title: 'Refresh and hydrate your skin with a customized facial.', price: 700, img: 'assets/images/services/facial-treatment.jpg',value:3 };
let cardServ4={ name: 'Hot Stone', title: 'Relieve tension with warm basalt stones and gentle pressure.', price: 1000, img: 'assets/images/services/hot-stone.jpg',value:4 };
let cardServ5={ name: 'Sauna Room', title: 'Detox and relax in our aromatic steam sauna experience.', price: 600, img: 'assets/images/services/Sauna-Room.jpg',value:5 };
let cardServ6={ name: 'Foot Massage', title: 'Rejuvenate tired feet with a soothing reflexology massage.', price: 750, img: 'assets/images/services/foot-massage.jpg',value:6 }

//Creating an array has the Cards Services
let cardsServices = [cardServ1,cardServ2,cardServ3,cardServ4,cardServ5,cardServ6];
//Calling the createCards function for each Cards Service in the ServicesTrack
cardsServices.forEach(cardElement => createCards(cardElement,ServicesTrack));

//Cards Services Packages
let cardPack1 = { name: 'Special Package', title: 'Includes Facial Treatment + Body Scrub + Sauna Session for a complete skin glow.', price: 1350, img: 'assets/images/services/Special-package.jpg',value: 7};
let cardPack2 = {name: 'Couple Package', title: 'Enjoy a relaxing Full Body Massage + Hot Stone Therapy for two people.',price: 2200, img: 'assets/images/services/couple-package.jpg',value: 8};
let cardPack3 = {name: 'Friends Package',title: 'Get Body Scrub + Facial + Foot Massage for two guests. Perfect for a spa day with a friend!',price: 2600,img: 'assets/images/services/friends-pakcage.jpg',value: 9};
let cardPack4 = {name: 'Luxury Day Package',title: 'Full Body Massage + Facial Treatment + Hot Stone + Sauna + Refreshments. Ultimate relaxation in one package.',price: 3200,img: 'assets/images/services/spa-still-life_118631-64.jpg',value: 10  };
//Creating an array has the Cards Packages
let cardsPackages = [cardPack1,cardPack2,cardPack3,cardPack4];
//Calling the createCards function for each Cards Packages in the PackageTrack
cardsPackages.forEach(cardElement=>createCards(cardElement,PackageTrack));

