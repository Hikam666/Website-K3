// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Memilih elemen tombol berdasarkan ID
    const tombol = document.getElementById("btnAksi");

    // Menambahkan event listener untuk interaksi klik
    tombol.addEventListener("click", () => {
        alert("Halo! File JavaScript berhasil dihubungkan ke proyek WEB-K3.");
        tombol.textContent = "Sudah Diklik!";
    });
});

// Konfigurasi Tailwind CSS (Diekstrak dari Semua File HTML)
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "on-surface-variant": "#43474f",
        "primary-fixed-dim": "#a7c8ff",
        "on-error": "#ffffff",
        "background": "#f7fafc",
        "secondary-fixed": "#d4e3ff",
        "on-tertiary-container": "#ea8000",
        "tertiary-fixed-dim": "#ffb77d",
        "on-error-container": "#93000a",
        "on-tertiary": "#ffffff",
        "surface-variant": "#e0e3e5",
        "secondary": "#476083",
        "inverse-surface": "#2d3133",
        "surface": "#f7fafc",
        "surface-container-lowest": "#ffffff",
        "primary-container": "#003366",
        "secondary-fixed-dim": "#afc8f0",
        "on-secondary-fixed-variant": "#2f486a",
        "on-primary": "#ffffff",
        "on-secondary-container": "#445d80",
        "on-background": "#181c1e",
        "on-surface": "#181c1e",
        "on-secondary-fixed": "#001c3a",
        "on-primary-container": "#799dd6",
        "inverse-primary": "#a7c8ff",
        "outline-variant": "#c3c6d1",
        "tertiary-fixed": "#ffdcc3",
        "on-tertiary-fixed": "#2f1500",
        "error-container": "#ffdad6",
        "surface-container": "#ebeef0",
        "on-tertiary-fixed-variant": "#6e3900",
        "primary": "#001e40",
        "surface-container-high": "#e5e9eb",
        "on-primary-fixed": "#001b3c",
        "surface-dim": "#d7dadc",
        "surface-container-low": "#f1f4f6",
        "tertiary-container": "#512900",
        "secondary-container": "#bdd6ff",
        "on-secondary": "#ffffff",
        "tertiary": "#331700",
        "surface-container-highest": "#e0e3e5",
        "error": "#ba1a1a",
        "primary-fixed": "#d5e3ff",
        "outline": "#737780",
        "surface-tint": "#3a5f94",
        "surface-bright": "#f7fafc",
        "on-primary-fixed-variant": "#1f477b",
        "inverse-on-surface": "#eef1f3"
      },
      "borderRadius": {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      "fontFamily": {
        "headline": ["Manrope"],
        "body": ["Inter"],
        "label": ["Inter"]
      }
    }
  }
};
