$(document).ready(function(){
    $(document).ready(function() {

        $('form').on('submit', function(e){
            e.preventDefault();
    
            const addTarefa = $('#tarefa').val();
            const novaTarefa = $('<li><a href=""></a></li>')
    
            $(`<li><a href="">${addTarefa}</a></li>`).appendTo(novaTarefa);
            $(novaTarefa).appendTo('ul');
    
            $('#tarefa').val('');
            
            $(novaTarefa).click(function(e){
                e.preventDefault();
            })
        })

        $('ul').on('click', 'li', function(){
            $(this).css('text-decoration', 'line-through');
        })
    })

})