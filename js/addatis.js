function getRemarks() {
  var insec = document.getElementById('remarksInsec').checked
  var ptnwrk = document.getElementById('remarksPtnwrk').checked
  var flwctrl = document.getElementById('remarksFlwctrl').checked
  var lngtxi = document.getElementById('remarksLngtxi').checked
  var gthld = document.getElementById('remarksGthld').checked
  var rldep = document.getElementById('remarksRldep').checked
  var fpl = document.getElementById('remarksFpl').checked
  var srtdep = document.getElementById('remarksSrtdep').checked
  var forum = document.getElementById('remarksForum').checked
  if (insec == false) {
    insec = ''
  } else {
    insec = 'No Intersection Departures,'
  }
  if (ptnwrk == false) {
    ptnwrk = ''
  } else {
    ptnwrk = 'No Pattern Work Allowed,'
  }
  if (flwctrl == false) {
    flwctrl = ''
  } else {
    flwctrl = 'Flow Control in Effect,'
  }
  if (lngtxi == false) {
    lngtxi = ''
  } else {
    lngtxi = 'Expect Delays during Taxi,'
  }
  if (gthld == false) {
    gthld = ''
  } else {
    gthld = 'Gate Hold in Effect,'
  }
  if (rldep == false) {
    rldep = ''
  } else {
    rldep = 'Rolling Departures,'
  }
  if (fpl == false) {
    fpl = ''
  } else {
    fpl = 'Flight Plan Required,'
  }
  if (srtdep == false) {
    srtdep = ''
  } else {
    srtdep = 'Straight Out Departures Only,'
  }
  if (forum == false) {
    forum = ''
  } else {
    forum = 'See Forum for Details'
  }
  var result = insec + ' ' + ptnwrk + ' ' + flwctrl + ' ' + lngtxi + ' ' + gthld + ' ' + rldep + ' ' + fpl + ' ' + srtdep + ' ' + forum
  return result
}

function getNotams() {
  var evt = document.getElementById('notamsEvt').checked
  var szrtr = document.getElementById('notamsSzrtr').checked
  var svrwx = document.getElementById('notamsSvrwx').checked
  var lwvis = document.getElementById('notamsLwvis').checked
  if (evt == false) {
    evt = ''
  } else {
    evt = 'Event in Progress,'
  }
  if (szrtr == false) {
    szrtr = ''
  } else {
    szrtr = 'Size Restrictions in Effect,'
  }
  if (svrwx == false) {
    svrwx = ''
  } else {
    svrwx = 'Current Weather is Severe,'
  }
  if (lwvis == false) {
    lwvis = ''
  } else {
    lwvis = 'Current visibility is Low'
  }
  var result = evt + ' ' + szrtr + ' ' + svrwx + ' ' + lwvis
  return result
}

function addAtis() {
  // Get Params
  var aptName = document.getElementById('aptName').value
  var info = document.getElementById("info").options[document.getElementById("info").selectedIndex].text;
  var zuluTime = document.getElementById('zuluTime').value
  var windHdg = document.getElementById('windHdg').value
  var windSpeed = document.getElementById('windSpeed').value
  var visibility = document.getElementById('visibility').value
  var temp = document.getElementById('temp').value
  var dewPoint = document.getElementById('dewPoint').value
  var remarks = getRemarks()
  var notams = getNotams()
  var depRwys = document.getElementById('depRwys').value
  var arrRwys = document.getElementById('arrRwys').value

  // Check no values are blank
  if (aptName == ''  || info == '' || zuluTime == '' || windHdg == '' || visibility == '' || temp == '' || dewPoint == '' || depRwys == '' || arrRwys == '') {
    alert('Not all required fields were completed.')
    throw new Error('Not all required fields were completed.')
  }

  // Generate addAtis
  if (remarks != '        ' && notams != '   ') {
    var atis = aptName + ' Airport, ATIS information ' + info + ', time ' + zuluTime + ' ZULU. Wind ' + windHdg + ' at ' + windSpeed + ', visibility ' + visibility + ', temperature ' + temp + ', dew point ' + dewPoint + '. Remarks, ' + remarks + ' Landing Runway ' + arrRwys + ', Departing Runway ' + depRwys + '. Notams, ' + notams
  } else if (remarks =! '        ' && notams == '   ') {
    var atis = aptName + ' Airport, ATIS information ' + info + ', time ' + zuluTime + ' ZULU. Wind ' + windHdg + ' at ' + windSpeed + ', visibility ' + visibility + ', temperature ' + temp + ', dew point ' + dewPoint + '. Remarks, ' + remarks + ' Landing Runway ' + arrRwys + ', Departing Runway ' + depRwys + '.'
  } else if (remarks == '        ' && notams != '   ') {
    var atis = aptName + ' Airport, ATIS information ' + info + ', time ' + zuluTime + ' ZULU. Wind ' + windHdg + ' at ' + windSpeed + ', visibility ' + visibility + ', temperature ' + temp + ', dew point ' + dewPoint + '. Landing Runway ' + arrRwys + ', Departing Runway ' + depRwys + '. Notams, ' + notams
  } else if (remarks == '        ' && notams == '   ') {
    var atis = aptName + ' Airport, ATIS information ' + info + ', time ' + zuluTime + ' ZULU. Wind ' + windHdg + ' at ' + windSpeed + ', visibility ' + visibility + ', temperature ' + temp + ', dew point ' + dewPoint + '. Landing Runway ' + arrRwys + ', Departing Runway ' + depRwys + '.'
  }
  document.getElementById('result').innerHTML = '<h3>Generated ATIS</h3>' + atis
}