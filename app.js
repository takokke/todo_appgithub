$(function () {
    
    const btn = $("#addTodo")
    btn.click(function() {
        const todo_task = $("#input")
        $('#tasks').append("<li><input type='checkbox'>" + todo_task.val() +"</li>")
        todo_task.val("")
    })

})