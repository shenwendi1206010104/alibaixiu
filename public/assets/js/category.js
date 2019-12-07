// 当添加分类表单发生提交行为的时候
$('addCategory').on('submit' , function(){
    var formData = $(this).serialize();
    $.ajax({
        type:'post',
        url:'/categories',
        data
    })
})