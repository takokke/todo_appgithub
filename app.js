$(function () {

    const btn = $("#addTodo")
    btn.click(function() {
        const todo_task = $("#input")
        $('#tasks').append("<li><input type='checkbox'>" + todo_task.val() +"</li>")
        todo_task.val("")
    })

    // $("input[type=checkbox]").on("change", function () {
    //     if($(this).is(":checked")) {
    //         $(this).parent().css("text-decoration", "line-through")
    //     }
    // })

    $(document).on("change", "input[type=checkbox]", function() {
        if ($(this).is(":checked")) {
            $(this).parent().css("text-decoration", "line-through")
        } else {
            $(this).parent().css("text-decoration", "none")
        }
    })
})