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

    // Load header and then populate main menu
    loadContent('header div[data-include="components/header.html"]', 'components/header.html', function () {
        populateMenu('main-menu-container', 'json_components/mainMenu.json');
    });

    // Load footer and then populate footer menu
    loadContent('footer div[data-include="components/footer.html"]', 'components/footer.html', function () {
        populateMenu('footer-menu-container', 'json_components/footerMenu.json');
    });
});
