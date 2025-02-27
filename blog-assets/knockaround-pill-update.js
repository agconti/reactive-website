const controlReactivePill = () => {
    const mobileCart = document.querySelector('.minicart');
    const mobileAddToCartBar = document.querySelector('.fixed-atc-observer');
    const config = { attributes: true, attributeOldValue: true };
    console.log({mobileCart, mobileAddToCartBar})

    // Callback function to execute when mutations are observed
    const hideReactiveButtonOnCartOpen = function(mutationsList, observer) {
        const openReactiveButton = document.querySelector('.ViewContentPill__StyledButton-reactive__sc-gau3e4-1')
        console.log(`hideReactiveButtonOnCartOpen`, {openReactiveButton})
        for(const mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const classList = mobileCart.classList;
                if (classList.contains('minicart--visible')) {
                    openReactiveButton.style.visibility = 'hidden'
                } else {
                    openReactiveButton.style.visibility = 'visible'
                }
            }
        }
    };

    const hideReactiveButtonOnAddToCartBar = function(mutationsList, observer) {
        const openReactiveButton = document.querySelector('.ViewContentPill__StyledButton-reactive__sc-gau3e4-1')
        console.log(`hideReactiveButtonOnCartOpen`, {openReactiveButton})
        for(const mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const classList = mobileAddToCartBar.classList;
                if (classList.contains('visible')) {
                    openReactiveButton.style.visibility = 'hidden'
                } else {
                    openReactiveButton.style.visibility = 'visible'
                }
            }
        }
    };

    // Create an observer instance linked to the callback function
    const cartObserver = new MutationObserver(hideReactiveButtonOnCartOpen);
    const barObserver = new MutationObserver(hideReactiveButtonOnAddToCartBar);

    // Start observing the target node for configured mutations
    cartObserver.observe(mobileCart, config);
    barObserver.observe(mobileAddToCartBar, config);
}

controlReactivePill()