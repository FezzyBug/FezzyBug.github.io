document.addEventListener("DOMContentLoaded", function() {
    const introForm = document.getElementById("introForm");
    const resultContainer = document.getElementById("resultContainer");

    // Helper function to capitalize field names
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1).replace(/([A-Z])/g, ' $1');
    };

    // Validate form fields
    const validateForm = () => {
        const requiredFields = ["name", "mascot", "caption", "personalBackground", "professionalBackground", "academicBackground", "webDevBackground", "computerPlatform", "agreement"];
        return requiredFields.every((id) => document.getElementById(id).value.trim());
    };

    // Display the results
    const displayResults = () => {
        const formData = new FormData(introForm);
        let content = `<h2>Your Introduction</h2><ul>`;

        formData.forEach((value, key) => {
            if (key === "course") {
                content += `<li><strong>Course:</strong> ${value}</li>`;
            } else if (key !== "agreement" && key !== "image") {
                content += `<li><strong>${capitalizeFirstLetter(key)}:</strong> ${value}</li>`;
            }
        });

        // Display uploaded image and caption
        const imageFile = formData.get("image");
        if (imageFile && (imageFile.type === "image/jpeg" || imageFile.type === "image/png")) {
            const imageUrl = URL.createObjectURL(imageFile);
            content += `<li><img src="${imageUrl}" alt="${formData.get("caption")}" style="max-width: 300px;"></li>`;
        }

        content += `</ul>`;
        resultContainer.innerHTML = content;
        resultContainer.style.display = "block";
        introForm.style.display = "none";
    };

    // Add new course text box
    window.addCourseField = () => {
        const courseField = document.createElement("div");
        courseField.classList.add("course-field");
        courseField.innerHTML = `
      <input type="text" name="course" placeholder="Enter course name" required>
      <button type="button" onclick="removeCourseField(this)">Delete</button>
    `;
        document.getElementById("coursesContainer").appendChild(courseField);
    };

    // Remove course text box
    window.removeCourseField = (button) => {
        button.parentElement.remove();
    };

    // Prevent form submission without necessary information
    introForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if (validateForm()) {
            displayResults();
        } else {
            alert("Please fill out all required fields.");
        }
    });

    // Reset form and hide results
    introForm.addEventListener("reset", () => {
        resultContainer.style.display = "none";
        introForm.style.display = "block";
    });
});
