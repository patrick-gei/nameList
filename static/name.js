$(document).ready(() => {
    console.log('actions.js is ready!');
    function loadNames(){
      $.get("/api/v1/names", function(res) {
        res.forEach(function(val){
          $("#nameList").append(`<tr><td>${val.name}</td></tr>`)
        })
      })
    } loadNames();

    $(`#submitButton`).click(function(){
      if ($("#nameInput").val()){
        let submittedName = {
          name: $("#nameInput").val()
        }
        $.post("/api/v1/names", submittedName, function(res) {
          console.log(res);
          $("#nameList").append(`<tr><td>${res.name}</td></tr>`)
          $("#nameInput").val("")
        })
        $(`#namesForm`).submit(false)
      }
    })
})
