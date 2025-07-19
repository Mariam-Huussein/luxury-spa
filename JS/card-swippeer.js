// Function to calculate the width of a single card including the margin
function getCardWidth(cards,marge) {
    return cards[0].offsetWidth + marge;
}

// Function to initialize a custom slider
function initSlider(trackSelector, cardSelector, nextBtnId, prevBtnId ,count ,marge) {
    let track = document.querySelector(trackSelector);
    let cards = document.querySelectorAll(cardSelector);
    let index = 0;

    // Clone the first cards and append them to the end for infinite loop effect
    for (let i = 0; i < count; i++) {
        track.appendChild(cards[i].cloneNode(true));
    }

    // Function to update the slider position
    const updateSlide = () => {
        track.style.transition = 'transform 0.4s ease-in-out';
        track.style.transform = `translateX(-${index * getCardWidth(cards,marge)}px)`;

        // If the slider reaches the end, reset to the beginning instantly
        if (index === cards.length) {
            setTimeout(() => {
                track.style.transition = 'none';
                track.style.transform = 'translateX(0)';
                index = 0;
            }, 400);
        }

        // If the index goes below zero, move to the last card instantly
        if (index < 0) {
            track.style.transition = 'none';
            index = cards.length - 1;
            track.style.transform = `translateX(-${index * getCardWidth(cards,marge)}px)`;
        }
    };

    // Automatically slide every 2 seconds
    let autoSlide = setInterval(() => {
        index++;
        updateSlide();
    }, 2000);

    // Handle "next" button click: move to the previous card
    document.getElementById(nextBtnId).addEventListener('click', () => {
        clearInterval(autoSlide);
        index--;
        updateSlide();

        // Restart the auto slide with a delay
        autoSlide = setInterval(() => { index++; updateSlide(); }, 2500);
    });


    // Handle "previous" button click: move to the next card
    document.getElementById(prevBtnId).addEventListener('click', () => {
        clearInterval(autoSlide);
        index++;
        updateSlide();

        // Restart the auto slide with a delay
        autoSlide = setInterval(() => { index++; updateSlide(); }, 2500);
    });

    /*
        Function to Add/Remove hover effect
    */
    cards.forEach(card => {
        /*
        Function to Add hover effect:
            - Pause auto slide
            - Add zoom and shadow effect
        */
        card.onmouseover = function () {
            clearInterval(autoSlide);
            card.style.transform = 'scale(1.04)';
            card.style.boxShadow = 'rgba(0, 0, 0, 0.4) 0px 0px 10px 4px';
        };
        
        /*
        Function to Remove hover effect:
            - Restart auto slide
            - Remove Zoom and shadow effect
        */
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

// Initialize the service cards slider
initSlider('.service-cards-track', '.services-card', 'serv-next-btn', 'serv-prev-btn',3,20);

// Initialize the packages cards slider
initSlider('.packages-cards-track', '.package-card', 'packg-next-btn', 'packg-prev-btn',2,20);