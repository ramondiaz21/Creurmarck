   /* global $ */
    $(document).ready(function(){
      $('#button').click(function(event){
        event.preventDefault();
         $.ajax({
            dataType: 'JSON',
            url: 'send.php',
            type: 'POST',
            data: $('#ajax-contact').serialize(),
            beforeSend: function(xhr){
              $('#button').html('SENDING...');
            },
            success: function(response){
              if(response){
                console.log(response);
                if(response['signal'] == 'ok'){
                 $('#msg').html('<div class="alert alert-success">'+ response['msg']  +'</div>');
                  $('input').val(function() {
                     return this.defaultValue;
                  });
                }
                else{
                  $('#msg').html('<div class="alert alert-danger">'+ response['msg'] +'</div>');
                }
              }
            },
            error: function(){
              $('#msg').html('<div class="alert alert-success">'+ 'Mensaje Enviado' +'</div>');
            },
            complete: function(){
              $('#button').html('SEND MESSAGE');
            }
          });
      });
    });