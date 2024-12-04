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

  // Menghitung Rumus BMI
  const heightMeter = height / 100;
  const bmi = (weight / (heightMeter * heightMeter)).toFixed(1);

  // Menentukan kategori BMI
  let category = "";
  let description = "";
  let descricptionResult = "";
  let healthRisks = "";

  if (bmi < 18.5) {
    category = "Kekurangan Berat Badan";
    description = "Anda memiliki berat badan kurang.";
    descricptionResult =
      "Hasil BMI < 18.5.<br>Anda berada dalam kategori kekurangan berat badan.<br>Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.";
    healthRisks =
      "<strong>Beberapa penyakit yang muncul dari kekurangan berat badan</strong><br>" +
      "- Mengalami kekurangan nutrisi<br>" +
      "- Membuat tubuh lebih rentan sakit<br>" +
      "- Meningkatkan risiko osteoporosis<br>" +
      "- Mengganggu siklus menstruasi";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Berat Badan Normal";
    description = "Anda memiliki berat badan normal.\nGood Job!";
    descricptionResult =
      "BMI Anda antara 18.5 dan 22.9.<br>Anda berada dalam kategori berat badan yang normal.<br>Tetap pertahankan pola hidup sehat dengan olahraga teratur dan makan bergizi.";
    healthRisks = ""; // Tidak menampilkan container risiko
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Berat Badan Lebih";
    description = "Anda memiliki berat badan berlebih.";
    descricptionResult =
      "Hasil BMI diantara 23 dan 25.<br>Anda berada dalam kategori overweight atau berat badan berlebih. <br>Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.";
    healthRisks = ""; // Tidak menampilkan container risiko
  } else {
    category = "Obesitas";
    description = "Anda memiliki obesitas.";
    descricptionResult =
      "Hasil BMI lebih dari 25.<br>Anda berada dalam kategori obesitas.<br>Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik.";
    healthRisks =
      "<strong>Beberapa penyakit yang muncul dari kegemukan:</strong><br>" +
      "- Serangan jantung<br>" +
      "- Kencing manis<br>" +
      "- Demensia<br>" +
      "- Sindrom ovarian polikistik<br>";
  }

  // Menampilkan hasil
  const resultSection = document.getElementById("bmi-result");
  resultSection.classList.remove("hidden"); // Tampilkan hasil

  document.querySelector("#bmi-result .category").innerText = category;
  document.querySelector("#bmi-result .bmi-value").innerText = bmi;
  document.querySelector("#bmi-result .description").innerText = description;

  // Menampilkan deskripsi berdasarkan hasil kategori BMI
  const descricptionResultElement = document.querySelector(
    "#description-result"
  );
  descricptionResultElement.innerHTML = descricptionResult;
  descricptionResultElement.classList.remove("hidden");

  // // Menampilkan risiko kesehatan
  // const riskSection = document.getElementById("health-risks");
  // riskSection.classList.remove("hidden");
  // riskSection.innerHTML = healthRisks;

  // Menampilkan atau menyembunyikan risiko kesehatan
  const riskSection = document.getElementById("health-risks");
  if (healthRisks) {
    riskSection.classList.remove("hidden");
    riskSection.innerHTML = healthRisks;
  } else {
    riskSection.classList.add("hidden");
  }
});

// Referensi Penyakit
// Obesitas Sebabkan 4 Penyakit Ini- https://dinkes.semarangkota.go.id/content/post/67
// Hati-hati, Ini 5 Risiko Kesehatan Bila Terlalu Kurus - https://www.alodokter.com/hati-hati-ini-5-risiko-kesehatan-bila-terlalu-kurus
