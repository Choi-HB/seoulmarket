// Seoul Traditional Market Film Photo Lab
document.addEventListener("DOMContentLoaded", () => {
    const uploadInput = document.getElementById("image-upload");
    const uploadTrigger = document.getElementById("btn-upload-trigger");
    const downloadBtn = document.getElementById("btn-download");
    const canvas = document.getElementById("image-canvas");
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    const dropZone = document.getElementById("drop-zone");
    const placeholder = document.getElementById("preview-placeholder");
    const presetButtons = document.querySelectorAll(".preset-btn");
    const frameCheckbox = document.getElementById("toggle-frame");
    const sampleButtons = document.querySelectorAll(".sample-link-btn");

    let originalImage = null;
    let currentFilter = "original";

    if (uploadTrigger) {
        uploadTrigger.addEventListener("click", (e) => {
            e.stopPropagation();
            uploadInput.click();
        });
    }

    if (dropZone) {
        dropZone.addEventListener("click", () => uploadInput.click());
        dropZone.addEventListener("dragover", (e) => {
            e.preventDefault();
            dropZone.style.borderColor = "var(--accent-color)";
        });
        dropZone.addEventListener("dragleave", () => {
            dropZone.style.borderColor = "var(--border-color)";
        });
        dropZone.addEventListener("drop", (e) => {
            e.preventDefault();
            dropZone.style.borderColor = "var(--border-color)";
            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith("image/")) {
                handleFile(file);
            }
        });
    }

    if (uploadInput) {
        uploadInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) handleFile(file);
        });
    }

    sampleButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const src = btn.getAttribute("data-sample");
            if (!src) return;
            const img = new Image();
            img.onload = () => activateImage(img);
            img.src = src;
        });
    });

    presetButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            if (!originalImage) return;
            presetButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentFilter = btn.getAttribute("data-filter") || "original";
            renderProcessedImage();
        });
    });

    if (frameCheckbox) {
        frameCheckbox.addEventListener("change", () => {
            if (originalImage) renderProcessedImage();
        });
    }

    if (downloadBtn) {
        downloadBtn.addEventListener("click", () => {
            if (!originalImage) return;
            const link = document.createElement("a");
            link.download = `seoul-market-${currentFilter}-${Date.now()}.png`;
            link.href = canvas.toDataURL("image/png");
            link.click();
        });
    }

    function handleFile(file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => activateImage(img);
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    }

    function activateImage(img) {
        originalImage = img;
        presetButtons.forEach(btn => { btn.disabled = false; });
        downloadBtn.disabled = false;
        placeholder.style.display = "none";
        canvas.style.display = "block";
        renderProcessedImage();
    }

    function renderProcessedImage() {
        if (!originalImage) return;

        const maxDim = 1400;
        let width = originalImage.width;
        let height = originalImage.height;
        if (width > maxDim) {
            height = Math.round(height * (maxDim / width));
            width = maxDim;
        }
        if (height > maxDim) {
            width = Math.round(width * (maxDim / height));
            height = maxDim;
        }

        const addFrame = frameCheckbox && frameCheckbox.checked;
        const pad = addFrame ? Math.max(24, Math.round(width * 0.04)) : 0;
        const bottomPad = addFrame ? Math.max(64, Math.round(width * 0.095)) : 0;

        canvas.width = width + pad * 2;
        canvas.height = height + pad + bottomPad;

        if (addFrame) {
            ctx.fillStyle = "#FAF8F5";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        ctx.drawImage(originalImage, pad, pad, width, height);

        if (currentFilter !== "original") {
            const imageData = ctx.getImageData(pad, pad, width, height);
            const data = imageData.data;

            for (let i = 0; i < data.length; i += 4) {
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];

                if (currentFilter === "bw1970") {
                    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
                    const contrasted = Math.min(255, Math.max(0, (lum - 128) * 1.18 + 128));
                    data[i] = contrasted;
                    data[i + 1] = contrasted;
                    data[i + 2] = contrasted;
                } else if (currentFilter === "sepia") {
                    data[i] = Math.min(255, r * 0.393 + g * 0.769 + b * 0.189);
                    data[i + 1] = Math.min(255, r * 0.349 + g * 0.686 + b * 0.168);
                    data[i + 2] = Math.min(255, r * 0.272 + g * 0.534 + b * 0.131);
                } else if (currentFilter === "night") {
                    data[i] = Math.min(255, Math.max(0, (r - 118) * 1.25 + 132));
                    data[i + 1] = Math.min(255, Math.max(0, (g - 128) * 1.15 + 124));
                    data[i + 2] = Math.min(255, Math.max(0, (b - 132) * 1.2 + 128));
                }
            }
            ctx.putImageData(imageData, pad, pad);
        }

        if (addFrame) {
            const fontSize = Math.max(15, Math.round(width * 0.024));
            ctx.fillStyle = "#1C1917";
            ctx.font = `700 ${fontSize}px Pretendard, sans-serif`;
            ctx.textBaseline = "middle";
            ctx.textAlign = "left";
            ctx.fillText("SEOUL TRADITIONAL MARKET ARCHIVE", pad, pad + height + bottomPad / 2);

            const today = new Date().toISOString().slice(0, 10);
            ctx.fillStyle = "#C2410C";
            ctx.textAlign = "right";
            ctx.fillText(today, pad + width, pad + height + bottomPad / 2);
        }
    }
});
