$( "#pageForm" ).submit(function( event ) {
  event.preventDefault()
    $.post("/modal", $("#pageForm").serialize(), function(data) {
        $( "#response" ).empty().append( data );
    });
});
