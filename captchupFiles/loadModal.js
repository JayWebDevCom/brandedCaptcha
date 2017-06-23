$( function() {
  $( "#dialog-message" ).dialog({
    modal: true,

    width: 'auto',
    closeOnEscape: false,
    resizable: false,
    maxHeight: 800,
    position: {my: "center", at: "top", of: window }

  });
} );
