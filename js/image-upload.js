function previewImage(input, previewId) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById(previewId);
            preview.style.backgroundImage = `url(${e.target.result})`;
            preview.style.backgroundSize = "cover";
            preview.textContent = "";
            preview.classList.add("clickable");
        };
        reader.readAsDataURL(file);
    }
}

function setupImageUpload(inputId, previewId) {
    document.getElementById(inputId).addEventListener("change", function() {
        previewImage(this, previewId);
    });

    document.getElementById(previewId).addEventListener("click", function() {
        if (this.classList.contains("clickable")) {
            document.querySelectorAll(".upload-preview").forEach(el => {
                el.classList.remove("selected");
            });

            this.classList.add("selected");
            document.getElementById("try-on-preview").style.backgroundImage = this.style.backgroundImage;
            document.getElementById("try-on-preview").style.backgroundSize = "cover";
            document.getElementById("try-on-preview").textContent = "";
        }
    });
}

// Initialize uploads
setupImageUpload("upload-front", "front-preview");
setupImageUpload("upload-left", "left-preview");
setupImageUpload("upload-right", "right-preview");