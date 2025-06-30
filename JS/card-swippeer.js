function getCardWidth(cards,marge) {
    return cards[0].offsetWidth + marge;
}

function initSlider(trackSelector, cardSelector, nextBtnId, prevBtnId ,count ,marge) {
    let track = document.querySelector(trackSelector);
    let cards = document.querySelectorAll(cardSelector);
    let index = 0;

    for (let i = 0; i < count; i++) {
        track.appendChild(cards[i].cloneNode(true));
    }

    const updateSlide = () => {
        track.style.transition = 'transform 0.4s ease-in-out';
        track.style.transform = `translateX(-${index * getCardWidth(cards,marge)}px)`;

        if (index === cards.length) {
            setTimeout(() => {
                track.style.transition = 'none';
                track.style.transform = 'translateX(0)';
                index = 0;
            }, 400);
        }

        if (index < 0) {
            track.style.transition = 'none';
            index = cards.length - 1;
            track.style.transform = `translateX(-${index * getCardWidth(cards,marge)}px)`;
        }
    };

    let autoSlide = setInterval(() => {
        index++;
        updateSlide();
    }, 2000);

    document.getElementById(nextBtnId).addEventListener('click', () => {
        clearInterval(autoSlide);
        index--;
        updateSlide();
        autoSlide = setInterval(() => { index++; updateSlide(); }, 2500);
    });

    document.getElementById(prevBtnId).addEventListener('click', () => {
        clearInterval(autoSlide);
        index++;
        updateSlide();
        autoSlide = setInterval(() => { index++; updateSlide(); }, 2500);
    });

    cards.forEach(card => {
        card.onmouseover = function () {
            clearInterval(autoSlide);
            card.style.transform = 'scale(1.04)';
            card.style.boxShadow = 'rgba(0, 0, 0, 0.4) 0px 0px 10px 4px';
        };
    
        card.onmouseout = function () {
            card.style.transform = '';
            card.style.boxShadow = '';
            
            autoSlide = setInterval(() => {
                index++;
                updateSlide();
            }, 2000);
        };
    });
    
}

initSlider('.service-cards-track', '.services-card', 'serv-next-btn', 'serv-prev-btn',3,20);
initSlider('.packages-cards-track', '.package-card', 'packg-next-btn', 'packg-prev-btn',2,20);