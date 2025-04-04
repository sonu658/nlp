// Simulated email login for a professor
document.getElementById("user-email").textContent = "Professor@example.com";

// Function to show notifications
function uploadFile(type) {
    let fileInput = type === 'notes' ? document.getElementById("notes-upload") : document.getElementById("assignments-upload");

    if (fileInput.files.length > 0) {
        let fileName = fileInput.files[0].name;

        // Show notification
        let notificationBox = document.getElementById("notification-box");
        let notificationText = document.getElementById("notification-text");

        notificationText.textContent = `${fileName} uploaded in ${type}`;
        notificationBox.style.display = "block";

        // Auto-hide notification after 5 seconds
        setTimeout(() => {
            notificationBox.style.display = "none";
        }, 5000);

        // Update the updates section
        let updatesList = document.getElementById("updates-list");
        let newUpdate = document.createElement("li");
        newUpdate.textContent = `New ${type} uploaded: ${fileName}`;
        updatesList.prepend(newUpdate);
    } else {
        alert("Please select a file to upload.");
    }
}
