

  function klikomNaPolje(tekst) {
    tekst.style.backgroundColor = "pink";
}

function malaSlova(mejl){
  document.getElementById("email").value = mejl.value.toLowerCase();
}


function vreme() {
  var danas=new Date()
  var dan=danas.getDate();
  var mesec=(danas.getMonth()+1);
  var godina=danas.getFullYear();


  document.getElementById('datumZak').innerHTML=dan+"."+mesec+"."+godina+".";
  t=setTimeout('vreme()',500)
}


$(document).ready(function(){
    $("#forma1").validate({
      rules: {
        imePrezime: "required",
        brojTelefona: {
          required: true,
          digits: true
        },
        email: {
          required: true,
          email: true
        },
        grad: "required",
        tretman: "required",

      },
      messages: {
        imePrezime: "Molimo Vas unesite Vase ime i prezime!",
        brojTelefona: "Molimo Vas unesite Vas broj telefona!",
        grad: "Molimo Vas izaberite grad!",
        tretman: "Molimo Vas popunite ovo polje!",
        email: "Molimo Vas unesite odgovarajuću e-mail adresu!",
      }
    })



})