        const cartButton = document.querySelector("#cart-button");
        const modal = document.querySelector(".modal");
        const close = document.querySelector(".close");

        cartButton.addEventListener('click', toggleModal);
        close.addEventListener("click", toggleModal);

        function toggleModal() {
            var modal = document.querySelector(".modal");
            if (modal.style.display === 'none') {
                modal.style.display = 'flex';
            } else {
                modal.style.display = 'none';
            }
        };

        new WOW().init();