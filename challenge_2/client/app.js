$(document).on ('submit', 'form', function() {
  var file = new FormData(document.getElementById("form"));
  if (file) {
        $.ajax({
          url: "/csvgenerate",
          type: "POST",
          data: file,
          processData: false,
          contentType: false,
          success: function (res) {
            document.getElementById("csv-text").innerHTML = res;
          }
        });
  }
  return false
});

var download = document.getElementById("download")

$(download).on ('click', function() {
  console.log('clicked')
  window.open('/download');
  return false
});
