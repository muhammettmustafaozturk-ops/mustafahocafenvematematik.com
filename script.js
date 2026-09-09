const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
if (menuBtn) menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

const form = document.getElementById("applicationForm");

// BURAYA KENDİ WHATSAPP NUMARANI ÜLKE KODUYLA YAZ.
// Örnek: 905xxxxxxxxx  (başında + veya 0 kullanma)
const WHATSAPP_NUMBER = "905551234567";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const text =
`Merhaba Mustafa Hocam, ders başvurusu yapmak istiyorum.

Ad Soyad: ${data.get("name")}
Sınıf / Seviye: ${data.get("level")}
Ders: ${data.get("course")}
Ders Türü: ${data.get("type")}
Telefon: ${data.get("phone")}
Mesaj: ${data.get("message") || "-"}`;

  if (WHATSAPP_NUMBER === "905551234567") {
    alert("Önce script.js dosyasındaki WHATSAPP_NUMBER bölümüne kendi WhatsApp numaranı yazmalısın.");
    return;
  }
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
});
