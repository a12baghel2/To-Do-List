$('#submittask').click(()=>{
    let newTask = {
        name: $('#inpTaskName').val(),
        desc: $('#inpTaskDesc').val()
    }

    $.post('/task', newTask ,(data) => {
        refreshTask();
    })
})

function refreshTask(){
    $("#tasklist").empty()
    $.get('/task',(data) => {
        data.forEach((task) => {
            $('#tasklist').append(
              $('<li class="list-group-item"></li>')
                .append($(`<div> <b>${task.name}</b> </div>`))
                .append($(`<div> <small>${task.description}</small>  </div>`))
            );

        });
    })
}

refreshTask();