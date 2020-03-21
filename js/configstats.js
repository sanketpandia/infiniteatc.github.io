// Main Server Stats

const Http = new XMLHttpRequest();
const add = 'https://atcegserverside2--webpage.repl.co/servers';
Http.open("GET", add);
Http.send();
Http.onreadystatechange = (e) => {
  var response = Http.responseText
  response = JSON.parse(response)
  var casual = response[2].UserCount
  var training = response[3].UserCount
  var expert = response[4].UserCount
  var liveFlights = casual + training + expert
  var stats = '<b>All Servers: </b>' + String(liveFlights) + '<br /><b>Casual Server: </b>' + String(casual) + '<br/ ><b>Training Server: </b>' + String(training) + '<br /><b>Expert Server: </b>' + String(expert)
  document.getElementById('output').innerHTML = stats
}

/**/