// Get Data from API
  const Http = new XMLHttpRequest();
  const add = 'https://atcegserverside--webpage.repl.co/atc';
  Http.open("GET", add);
  Http.send();
  Http.onreadystatechange = (e) => {
    // Get Response
    let response = Http.responseText
    response = JSON.stringify(response)
    var len = response.length
    var n = len - 2
    response = response.substring(2, n)
    response = response.split(",")
    response = JSON.stringify(response)
    var elements
    if (response != '[""}]' && response != '[""""]') {
      response = JSON.parse(response)
      // Get amount of rows for table
      elements = response.length
      sum = elements / 8
      sum = sum + 1
    }
    // Create Empty Table with correct amount of rows
    var i
    var table
    for (i = 0; i < sum; i++) {
      if (i == 0) {
        // Create Header
        table = '<tr><th>Airport</th><th>Station</th><th>Controller</th></tr>'
      } else {
      // Create Main Table
      table = table + '<tr id="' + i + '"><td id="' + i + 'airport"></td><td id="' + i + 'station"></td><td id="' + i + 'controller"></td></tr>'
      }
    }
    document.getElementById('openAtc').innerHTML = table

    // Add Content to Table
    function addContent(elementId, newValue) {
      document.getElementById(elementId).innerHTML = newValue
    }
    var j, x, element, value, y, z
    for (j = 0; j < sum; j++) {
      if (j == 0) {
        // Do nothing
      } else {
        // Get Airport
        element = String(j) + 'airport'
        x = (j - 1) * 8 + 3
        value = response[x]
        value = value.slice(11, 15)
        addContent(element, value)

        // Get Station
        element2 = String(j) + 'station'
        x = (j - 1) * 8 + 5
        value2 = response[x]
        value2 = value2.slice(9)
        addContent(element2, value2)
        if (value2 == 0) {
          value2 = 'Ground'
          addContent(element2, value2)
        } else if (value2 == 1) {
          value2 = 'Tower'
          addContent(element2, value2)
        } else if (value2 == 4) {
          value2 = 'Approach'
          addContent(element2, value2)
        } else if (value2 == 5) {
          value2 = 'Departure'
          addContent(element2, value2)
        } else {
          alert('Exception')
        }

        // Get Controller
        element = String(j) + 'controller'
        x = (j - 1) * 8 + 7
        value = response[x]
        y = value.length - 3
        value = value.slice(15, y)
        addContent(element, value)
      }
    }
  }