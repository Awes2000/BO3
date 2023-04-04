const labels = [
  "01/04/2023",
  "01/04/2023",
  "02/04/2023",
  "02/04/2023",
  "02/04/2023",
  "02/04/2023",
  "02/04/2023",
  "02/04/2023",
  "02/04/2023",
  "02/04/2023",
  "02/04/2023",
  "02/04/2023",
  "02/04/2023",
  "02/04/2023",
  "02/04/2023",
  "02/04/2023",
  "02/04/2023",
  "02/04/2023",
  "02/04/2023",
  "02/04/2023",
  "02/04/2023",
];

const data = {
  labels: labels,

  datasets: [
    {
      label: "Energie verbruik April in kWh",
      data: [1000, 1500, 2000, 2500, 3000],
      backgroundColors: [
        "#FF6B6B",
        "#FFD93D",
        "#6BCB77",
        "#4D96FF",
        "#F473B9,",
      ],
    },
    {
      label: "Gasverbruik April in m3",
      data: [1000, 1500, 2000, 2500, 3000],
      backgroundColors: [
        "#FF6B6B",
        "#FFD93D",
        "#6BCB77",
        "#4D96FF",
        "#F473B9,",
      ],
    },
  ],
};

const config = {
  type: "pie",
  data: data,
  options: {},
};

const config2 = {
  type: "bar",
  data: data,
};

const config3 = {
  type: "line",
  data: data,
};

new Chart(document.getElementById("js--chart--2"), config2);
new Chart(document.getElementById("js--chart--3"), config3);
