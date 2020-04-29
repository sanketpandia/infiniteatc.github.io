const Http2 = new XMLHttpRequest();
const add2 = 'https://atcegserverside4--webpage.repl.co/flights';
Http2.open("GET", add2);
Http2.send();
Http2.onreadystatechange = (e) => {
  var response2 = Http2.responseText
  response2 = JSON.parse(response2)
  var i, item, bava, asva, tfc, qrv, nsv, vgva, pos, afklm, sva, dlva, aava, acva, eyv
  bava = 0
  asva = 0
  qrv = 0
  nsv = 0
  vgva = 0
  afklm = 0
  sva = 0
  dlva = 0
  acva = 0
  aava = 0
  eyv = 0
  var len = response2.length
  for (i = 0; i < len; i++) {
    item = response2[i].CallSign
    item = JSON.stringify(item)
    pos = item.indexOf("BAVA")
    if (pos != -1) {
      bava = bava + 1
    }
    pos = item.indexOf("ASVA")
    if (pos != -1) {
      asva = asva + 1
    }
    pos = item.indexOf("QRV")
    if (pos != -1) {
      qrv = qrv + 1
    }
    pos = item.indexOf("NSV")
    if (pos != -1) {
      nsv = nsv + 1
    }
    pos = item.indexOf("VGVA")
    if (pos != -1) {
      vgva = vgva + 1
    }
    pos = item.indexOf("AFKLM")
    if (pos != -1) {
      afklm = afklm + 1
    }
    pos = item.indexOf("SVA")
    if (pos != -1) {
      sva = sva + 1
    }
    pos = item.indexOf("DLVA")
    if (pos != -1) {
      dlva = dlva + 1
    }
    pos = item.indexOf("AAVA")
    if (pos != -1) {
      aava = aava + 1
    }
    pos = item.indexOf("ACVA")
    if (pos != -1) {
      acva = acva + 1
    }
    pos = item.indexOf("EYV")
    if (pos != -1) {
      eyv = eyv + 1
    }
  }    

  var data = '<b>Air Canada Virtual: </b>' + acva + '<br /><b>AF-KLM VA: </b>' + afklm + '<br /><b>Alaskan Virtual: </b>' + asva + '<br /><b>British Airways Virtual: </b>' + bava + '<br /><b>Delta Virtual: </b>' + dlva + '<br /><b>American Virtual: </b>' + aava + '<br /><b>NonStop Virtual: </b>' + nsv + '<br /><b>Qatar Virtual: </b>' + qrv + '<br /><b>Singapore Virtual: </b>' + sva + '<br /><b>Virgin Virtual Group: </b>' + vgva + '<br /><b>Etihad Airways Virtual: </b>' + eyv + '<br />'
  document.getElementById('vaFlights').innerHTML = data
}
