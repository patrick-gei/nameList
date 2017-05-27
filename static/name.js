$(document).ready(() => {
    console.log('actions.js is ready!');

    function loadNames() {
        $.get("/api/v1/names", function(res) {
            res.forEach(function(val) {
                $("#nameList").append(buildNameRow(val))
            })
        })
    }
    loadNames();

    function buildNameRow(nameObj) {
        return `<tr id="${nameObj._id}"><td>${nameObj.name}</td><td>${new Date(nameObj.created).toLocaleDateString()}</td><td>
      <span class="glyphicon glyphicon-trash trash" aria-hidden="true"></span></td></tr>`
    }

    $(document).on('click', '.trash', function(e) {
        const row = $(this).parent().parent()
        const name_id = row.attr(`id`)
        console.log(name_id);
        return $.ajax({
            url: `/api/v1/names/${name_id}`,
            type: 'DELETE',
            success: (response) => {console.log('delete response',response);$(`#${name_id}`).remove()}
        });

    });

    $(`#submitButton`).click(function() {
        if ($("#nameInput").val()) {
            let submittedName = {
                name: $("#nameInput").val()
            }
            $.post("/api/v1/names", submittedName, function(res) {
                console.log(res);
                $("#nameList").append(buildNameRow(res))
                $("#nameInput").val("")
            })
            $(`#namesForm`).submit(false)
        }
    })
})
