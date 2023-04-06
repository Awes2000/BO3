const weerbericht = document.getElementById("weer-info");
const zonsopkomst = document.getElementById("js--zonsopkomst");
const zonsondergang = document.getElementById("js--zonsondergang");

function convertTimestamp(timestamp) {
  var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
    hh = d.getHours(),
    h = hh,
    min = ("0" + d.getMinutes()).slice(-2), // Add leading 0.
    ampm = "AM",
    time;

  if (hh > 12) {
    h = hh - 12;
    ampm = "PM";
  } else if (hh === 12) {
    h = 12;
    ampm = "PM";
  } else if (hh == 0) {
    h = 12;
  }

  // ie: 2014-03-24, 3:00 PM
  time = h + ":" + min + " " + ampm;
  return time;
}

fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=071b1a41b498f6af136ed1fadb5eefc2&units=metric"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.coord.lon);
    weerbericht.innerHTML =
      data.weather[0].description +
      " " +
      data.main.temp +
      "c°" +
      "Voelt als" +
      " " +
      data.main.feels_like +
      "c°";
    zonsopkomst.innerHTML = "Zonsopkomst " + convertTimestamp(data.sys.sunrise);
    zonsondergang.innerHTML =
      "Zonsondergang " + convertTimestamp(data.sys.sunset);
  });

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
