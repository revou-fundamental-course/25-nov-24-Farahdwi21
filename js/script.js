document.querySelector(".hitung").addEventListener("click", function (event) {
  event.preventDefault(); // Mencegah form submit

  // Ambil input dari pengguna (Jawaban dari form)
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const age = parseInt(document.getElementById("age").value);

  // Validasi input
  if (!weight || !height || !age) {
    alert("Silakan isi semua kolom dengan data yang valid dan benar");
    return;
  }

  // Hitung Rumus BMI
  const heightMeter = height / 100;
  const bmi = (weight / (heightMeter * heightMeter)).toFixed(1);

  // Menentukan kategori BMI
  let category = "";
  let description = "";

  if (bmi < 18.5) {
    category = "Kekurangan Berat Badan";
    description = "Anda memiliki berat badan kurang.";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Berat Badan Normal";
    description = "Anda memiliki berat badan normal.\n Good Job!";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Berat Badan Lebih";
    description = "Anda memiliki berat badan berlebih.";
  } else {
    category = "Obesitas";
    description = "Anda memiliki obesitas.";
  }

  // Menampilkan hasil
  const resultSection = document.getElementById("bmi-result");
  resultSection.classList.remove("hidden"); // Tampilkan hasil

  document.querySelector("#bmi-result .category").innerText = category;
  document.querySelector("#bmi-result .bmi-value").innerText = bmi;
  document.querySelector("#bmi-result .description").innerText = description;
});
