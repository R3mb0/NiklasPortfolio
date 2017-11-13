var imageDir = "src/images/";
var fileextention = ".png";

$(document).ready(function() {
  $.ajax({
    url: imageDir,
    success: function(data) {
      $(data).find("a:contains(" + fileextention + ")").each(function() {
        var filename = this.href.replace(window.location, "").replace("http://", "");
        $("#gallery").append("<img src='" + filename + "'>");
      });
    }
  });
});
