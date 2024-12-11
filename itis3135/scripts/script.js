document.addEventListener("DOMContentLoaded", function () {
    // Function to load content into containers
    function loadContent(containerSelector, htmlFile, callback) {
        const container = document.querySelector(containerSelector);
        if (container) {
            fetch(htmlFile)
                .then((response) => response.text()) // Parentheses added around arrow function parameter
                .then((html) => {
                    container.innerHTML = html;
                    if (typeof callback === 'function') { // Fixed typo 'jsstring' to 'function'
                        callback();
                    }
                })
                .catch((error) => console.error(`Error loading ${htmlFile}:`, error)); // Parentheses added
        }
    }

    // Function to populate menu items from JSON
    function populateMenu(containerId, jsonFile) {
        fetch(jsonFile)
            .then((response) => response.json()) // Parentheses added
            .then((data) => {
                const container = document.getElementById(containerId);
                if (container) {
                    data.forEach((item) => {
                        const link = document.createElement('a'); // Fixed 'jsstring' to 'a'
                        link.textContent = item.name;
                        link.href = item.url;
                        const listItem = document.createElement('li');
                        listItem.appendChild(link);
                        container.appendChild(listItem);
                    });
                }
            })
            .catch((error) => console.error(`Error loading ${jsonFile}:`, error)); // Parentheses added
    }

    function includeAdditionalFooterElements(footerContainer) {
        // Add footer menu container
        const footerMenuContainer = document.createElement('ul');
        footerMenuContainer.id = 'footer-menu-container';
        footerContainer.appendChild(footerMenuContainer);

        // Add design credit
        const designParagraph = document.createElement('p');
        designParagraph.classList.add('design');
        designParagraph.innerHTML = '<a href="zefvargasdesigns.co/index.html">Designed by Zef Vargas\'s Designs &copy; 2024</a>, <a href="https://www.freecodecamp.org/certification/zef01/javascript-algorithms-and-data-structures-v8">Certified in JS</a>';
        footerContainer.appendChild(designParagraph);

        // Add HTML validation link
        const htmlValidationLink = document.createElement('a');
        htmlValidationLink.href = 'https://validator.w3.org/check?uri=referer';
        htmlValidationLink.id = 'validation_link_html';
        const htmlValidationImg = document.createElement('img');
        htmlValidationImg.style.border = '0';
        htmlValidationImg.style.width = '88px';
        htmlValidationImg.style.height = '31px';
        htmlValidationImg.src = 'https://mytienhoang.github.io/itis3135/z_archives/html_validation.png';
        htmlValidationImg.alt = 'Valid HTML!';
        htmlValidationLink.appendChild(htmlValidationImg);
        footerContainer.appendChild(htmlValidationLink);

        // Add CSS validation link
        const cssValidationLink = document.createElement('a');
        cssValidationLink.href = 'https://jigsaw.w3.org/css-validator/check/referer';
        cssValidationLink.id = 'validation_link_css';
        const cssValidationImg = document.createElement('img');
        cssValidationImg.style.border = '0';
        cssValidationImg.style.width = '88px';
        cssValidationImg.style.height = '31px';
        cssValidationImg.src = 'https://jigsaw.w3.org/css-validator/images/vcss';
        cssValidationImg.alt = 'Valid CSS!';
        cssValidationLink.appendChild(cssValidationImg);
        footerContainer.appendChild(cssValidationLink);

        // Add lint script
        const lintScript = document.createElement('script');
        lintScript.src = 'https://lint.page/kit/4d0fe3.js';
        lintScript.crossOrigin = 'anonymous';
        footerContainer.appendChild(lintScript);
    }


    function loadHeaderAndFooter() {
        const headerContainer = document.querySelector('header');
        const footerContainer = document.querySelector('footer');

        fetch('components/header.html')
            .then((response) => response.text())
            .then((data) => {
                headerContainer.innerHTML = data;
            })
            .catch((error) => console.error('Error loading header:', error));

        fetch('components/footer.html')
            .then((response) => response.text())
            .then((data) => {
                footerContainer.innerHTML = data;
                includeAdditionalFooterElements(footerContainer);
            })
            .catch((error) => console.error('Error loading footer:', error));
    }




    // Load header and then populate main menu
    loadContent('header div[data-include="components/header.html"]', 'components/header.html', function () {
        populateMenu('main-menu-container', 'json_components/mainMenu.json');
    });

    // Load footer and then populate footer menu
    loadContent('footer div[data-include="components/footer.html"]', 'components/footer.html', function () {
        populateMenu('footer-menu-container', 'json_components/footerMenu.json');
    });

    // Call the functions on page load
    window.addEventListener('DOMContentLoaded', () => {
        loadHeaderAndFooter();
        loadFooterMenu();
    });







});


