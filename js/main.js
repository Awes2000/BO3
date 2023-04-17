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
      "c° " +
      "Voelt als" +
      " " +
      data.main.feels_like +
      "c°";
    zonsopkomst.innerHTML = "Zonsopkomst " + convertTimestamp(data.sys.sunrise);
    zonsondergang.innerHTML =
      "Zonsondergang " + convertTimestamp(data.sys.sunset);
  });

const labels = [
  "Apr 1",
  "Apr 2",
  "Apr 3",
  "Apr 4",
  "Apr 5",
  "Apr 6",
  "Apr 7",
  "Apr 8",
  "Apr 9",
  "Apr 10",
  "Apr 11",
  "Apr 12",
  "Apr 13",
  "Apr 14",
  "Apr 15",
  "Apr 16",
  "Apr 17",
  "Apr 18",
  "Apr 19",
  "Apr 20",
  "Apr 21",
  "Apr 22",
  "Apr 23",
  "Apr 24",
  "Apr 25",
  "Apr 26",
  "Apr 27",
  "Apr 28",
  "Apr 29",
  "Apr 30",
];

const data = {
  labels: labels,

  datasets: [
    {
      label: "Energie verbruik April in kWh",
      data: [
        8.079777, 8.137023, 7.342858, 7.053496, 7.270503, 7.100186, 7.303998,
        8.019138, 7.758457, 7.375831, 6.963016, 6.946663, 6.647699, 6.722635,
        7.416199, 7.035284, 6.676003, 6.303382, 6.223864, 6.255561, 6.188339,
        6.830834, 6.592309, 6.253589, 5.979423, 5.981221, 6.702422, 6.401808,
        6.810389, 6.827731,
      ],
      backgroundColor: "rgba(0, 128, 0, 0.8)",
      borderWidth: 2,
    },
    {
      label: "Gasverbruik April in m3",
      data: [
        3.374062, 3.136162, 3.429503, 3.86349, 4.171296, 4.004873, 3.564026,
        3.479907, 3.101041, 3.122048, 3.290156, 3.431471, 3.688468, 3.329331,
        3.061048, 2.812641, 2.962447, 2.938335, 2.897852, 2.517502, 2.172746,
        2.006428, 1.867925, 1.836565, 1.866475, 1.955183, 1.918317, 2.092094,
        2.016714, 1.818586,
      ],
      backgroundColor: "rgba(175, 15, 32, 1)",
      borderWidth: 2,
    },
  ],
};

const config = {
  type: "line",
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

setInterval(function () {
  //Link maken met HTML
  const Tijd = document.getElementById("js--time");
  const Datum = document.getElementById("js--date");
  //Ophalen van Datum(jaar, maand, dag)
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  //Ophalen van Tijd(uren, minuten, seconden)
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = data + " " + time;
  //Text invoegen in HTML
  Tijd.innerText = time;
  Datum.innerText = date;

  var uren = today.getHours();
  //id ophalen uit HTML
  var nacht = document.getElementById("js--nacht");
  var dag = document.getElementById("js--dag");

  //alles tussen 6 uur sochtends en 6 uur savonds is zonnig
  if (
    uren === 6 ||
    uren === 7 ||
    uren === 8 ||
    uren === 9 ||
    uren === 10 ||
    uren === 11 ||
    uren === 12 ||
    uren === 13 ||
    uren === 14 ||
    uren === 15 ||
    uren === 16 ||
    uren === 17
  ) {
    nacht.style.display = "none";
    dag.style.display = "show";
  }
  //anders is het nacht: (6 uur s'avonds tot 6 uur s'ochtends)
  else if (
    uren === 18 ||
    uren === 19 ||
    uren === 20 ||
    uren === 21 ||
    uren === 22 ||
    uren === 23 ||
    uren === 0 ||
    uren === 1 ||
    uren === 2 ||
    uren === 3 ||
    uren === 4 ||
    uren === 5
  ) {
    dag.style.display = "none";
    nacht.style.display = "show";
  } else {
    dag.style.display = "none";
    nacht.style.display = "none";
  }
}, 1000);
