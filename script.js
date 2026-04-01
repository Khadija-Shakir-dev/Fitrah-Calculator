const fitrahRates = {
  Pakistan: {
    Wheat: 300,
    Barley: 750,
    Dates: 2250,
    Raisins: 5000,
    Rice: 2000,
    currency: "PKR",
  },
  USA: {
    Wheat: 6,
    Barley: 20,
    Dates: 70,
    Raisins: 80,
    Rice: 10,
    currency: "USD",
  },
  UK: { Wheat: 5, Barley: 6, Dates: 12, Raisins: 14, Rice: 7, currency: "GBP" },
  Canada: {
    Wheat: 11,
    Barley: 15,
    Dates: 18,
    Raisins: 20,
    Rice: 12,
    currency: "CAD",
  },
  Australia: {
    Wheat: 12,
    Barley: 16,
    Dates: 18,
    Raisins: 22,
    Rice: 14,
    currency: "AUD",
  },
  UAE: {
    Wheat: 24,
    Barley: 23,
    Dates: 26,
    Raisins: 30,
    Rice: 25,
    currency: "AED",
  },
  "Saudi Arabia": {
    Wheat: 23,
    Barley: 22,
    Dates: 27,
    Raisins: 29,
    Rice: 25,
    currency: "SAR",
  },
  Kuwait: {
    Wheat: 1.4,
    Barley: 1.3,
    Dates: 1.6,
    Raisins: 1.8,
    Rice: 1.5,
    currency: "KWD",
  },
  Qatar: {
    Wheat: 14,
    Barley: 13,
    Dates: 16,
    Raisins: 18,
    Rice: 15,
    currency: "QAR",
  },
  Bahrain: {
    Wheat: 1.4,
    Barley: 1.3,
    Dates: 1.6,
    Raisins: 1.8,
    Rice: 1.5,
    currency: "BHD",
  },
  Oman: {
    Wheat: 1.4,
    Barley: 1.3,
    Dates: 1.6,
    Raisins: 1.8,
    Rice: 1.5,
    currency: "OMR",
  },
  Egypt: {
    Wheat: 30,
    Barley: 28,
    Dates: 40,
    Raisins: 45,
    Rice: 35,
    currency: "EGP",
  },
  Jordan: {
    Wheat: 1.7,
    Barley: 1.6,
    Dates: 1.9,
    Raisins: 2.0,
    Rice: 1.8,
    currency: "JOD",
  },
  France: {
    Wheat: 8,
    Barley: 7,
    Dates: 10,
    Raisins: 12,
    Rice: 9,
    currency: "EUR",
  },
  Germany: {
    Wheat: 9,
    Barley: 8,
    Dates: 11,
    Raisins: 13,
    Rice: 10,
    currency: "EUR",
  },
  Turkey: {
    Wheat: 220,
    Barley: 210,
    Dates: 250,
    Raisins: 270,
    Rice: 230,
    currency: "TRY",
  },
  Indonesia: {
    Wheat: 48000,
    Barley: 47000,
    Dates: 52000,
    Raisins: 55000,
    Rice: 50000,
    currency: "IDR",
  },
  India: {
    Wheat: 130,
    Barley: 120,
    Dates: 170,
    Raisins: 200,
    Rice: 150,
    currency: "INR",
  },
  Bangladesh: {
    Wheat: 90,
    Barley: 85,
    Dates: 120,
    Raisins: 130,
    Rice: 100,
    currency: "BDT",
  },
  Morocco: {
    Wheat: 20,
    Barley: 18,
    Dates: 25,
    Raisins: 28,
    Rice: 23,
    currency: "MAD",
  },
  Tunisia: {
    Wheat: 1.8,
    Barley: 1.7,
    Dates: 2.2,
    Raisins: 2.5,
    Rice: 2.0,
    currency: "TND",
  },
  Sudan: {
    Wheat: 2800,
    Barley: 2600,
    Dates: 3200,
    Raisins: 3500,
    Rice: 3000,
    currency: "SDG",
  },
  Yemen: {
    Wheat: 450,
    Barley: 420,
    Dates: 600,
    Raisins: 700,
    Rice: 500,
    currency: "YER",
  },
  Palestine: {
    Wheat: 10,
    Barley: 9,
    Dates: 12,
    Raisins: 14,
    Rice: 11,
    currency: "ILS",
  },
  Lebanon: {
    Wheat: 400000,
    Barley: 380000,
    Dates: 500000,
    Raisins: 550000,
    Rice: 450000,
    currency: "LBP",
  },
  Syria: {
    Wheat: 23000,
    Barley: 22000,
    Dates: 25000,
    Raisins: 26000,
    Rice: 24000,
    currency: "SYP",
  },
  Iraq: {
    Wheat: 2600,
    Barley: 2400,
    Dates: 3000,
    Raisins: 3200,
    Rice: 2800,
    currency: "IQD",
  },
  Algeria: {
    Wheat: 2000,
    Barley: 1900,
    Dates: 2500,
    Raisins: 2800,
    Rice: 2300,
    currency: "DZD",
  },
  Libya: {
    Wheat: 8,
    Barley: 7,
    Dates: 10,
    Raisins: 12,
    Rice: 9,
    currency: "LYD",
  },
  Malaysia: {
    Wheat: 7,
    Barley: 6,
    Dates: 9,
    Raisins: 10,
    Rice: 8,
    currency: "MYR",
  },
  Brunei: {
    Wheat: 5,
    Barley: 4,
    Dates: 7,
    Raisins: 8,
    Rice: 6,
    currency: "BND",
  },
};

document.getElementById("calculate").addEventListener("click", function () {
  let types = document.getElementById("type").value;
  let numMembers = Number(document.getElementById("members").value);
  let country = document.getElementById("countrySelect").value;
  let errorMsg = document.getElementById("errorMsg");
  let outputBox = document.getElementById("output");

  /* validation */
  if (!numMembers || !country) {
    errorMsg.classList.add("visible");
    outputBox.classList.remove("visible");
    return;
  }

  errorMsg.classList.remove("visible");

  let fitrahInfo = fitrahRates[country];
  let totalFitrah = numMembers * fitrahRates[country][types];

  /* UI-only: populate the result card */
  document.getElementById("res-members").textContent = numMembers;
  document.getElementById("res-amount").textContent =
    totalFitrah.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
  document.getElementById("res-currency").textContent =
    fitrahInfo.currency + " total";

  /* Show result */
  outputBox.classList.remove("visible"); /* reset for re-animation */
  void outputBox.offsetWidth; /* reflow */
  outputBox.classList.add("visible");
});

/* ── Info accordion (replaces readmore button) ─── */
document.getElementById("infoToggle").addEventListener("click", function () {
  document.getElementById("infoCard").classList.toggle("open");
});
