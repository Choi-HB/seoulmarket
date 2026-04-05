// transform.js
document.addEventListener("DOMContentLoaded", () => {
    const uploadInput = document.getElementById("image-upload");
    const uploadTrigger = document.getElementById("btn-upload-trigger");
    const toggleBtn = document.getElementById("btn-toggle");
    const downloadBtn = document.getElementById("btn-download");
    const canvas = document.getElementById("image-canvas");
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    const dropZone = document.getElementById("drop-zone");
    const placeholder = document.getElementById("preview-placeholder");

    let originalImage = null;
    let isGrayscale = false;

    // Translation updates for this page
    const updatePageTranslations = () => {
        const lang = localStorage.getItem("lang") || "ko";
        // translations is globally available from main.js
        if (typeof translations === 'undefined') return;
        
        const t = translations[lang];
        
        document.getElementById("transform-title").textContent = t.transformTitle;
        document.getElementById("transform-subtitle").textContent = t.transformSubtitle;
        document.getElementById("nav-transform").textContent = t.navTransform;
        document.getElementById("btn-upload-text").textContent = t.btnUpload;
        document.getElementById("btn-toggle-text").textContent = t.btnToggle;
        document.getElementById("btn-download-text").textContent = t.btnDownload;
        document.getElementById("label-upload").textContent = lang === 'ko' ? "사진을 업로드하려면 클릭하세요" : 
                                                            lang === 'en' ? "Click to upload a photo" :
                                                            lang === 'ja' ? "クリックして写真をアップロード" : "点击上传照片";
        
        // Update Guide using translations from main.js
        document.getElementById("guide-how-title").textContent = t.transformHowTitle;
        document.getElementById("guide-how-1").textContent = t.transformHow1;
        document.getElementById("guide-how-2").textContent = t.transformHow2;
        document.getElementById("guide-how-3").textContent = t.transformHow3;
        document.getElementById("guide-how-4").textContent = t.transformHow4;
    };

    // Listen for language changes from main.js
    const langBtns = document.querySelectorAll(".lang-btn");
    langBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            setTimeout(updatePageTranslations, 10);
        });
    });

    updatePageTranslations();

    // Trigger file input
    uploadTrigger.addEventListener("click", () => uploadInput.click());
    dropZone.addEventListener("click", () => uploadInput.click());

    // Handle File Upload
    uploadInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            handleFile(file);
        }
    });

    // Drag and Drop
    dropZone.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZone.style.borderColor = "var(--accent-color)";
    });

    dropZone.addEventListener("dragleave", () => {
        dropZone.style.borderColor = "rgba(255, 255, 255, 0.2)";
    });

    dropZone.addEventListener("drop", (e) => {
        e.preventDefault();
        dropZone.style.borderColor = "rgba(255, 255, 255, 0.2)";
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith("image/")) {
            handleFile(file);
        }
    });

    function handleFile(file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                originalImage = img;
                isGrayscale = false;
                renderImage(img);
                
                // Enable buttons
                toggleBtn.disabled = false;
                downloadBtn.disabled = false;
                
                // UI updates
                placeholder.style.display = "none";
                canvas.style.display = "block";
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    }

    function renderImage(img) {
        // Limit max size while maintaining aspect ratio
        const maxWidth = 1200;
        const maxHeight = 1200;
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
        }
        if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
    }

    // Toggle Grayscale Logic
    toggleBtn.addEventListener("click", () => {
        if (!originalImage) return;

        if (!isGrayscale) {
            applyGrayscale();
            isGrayscale = true;
        } else {
            renderImage(originalImage);
            isGrayscale = false;
        }
    });

    function applyGrayscale() {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
            // Standard luminance formula
            const avg = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
            data[i]     = avg; // R
            data[i + 1] = avg; // G
            data[i + 2] = avg; // B
        }

        ctx.putImageData(imageData, 0, 0);
    }

    // Download Logic
    downloadBtn.addEventListener("click", () => {
        const link = document.createElement("a");
        link.download = `transformed-image-${Date.now()}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
});
