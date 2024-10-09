$(document).ready(function () {

    //show the chatroom screen
    $('#chatbot-button').click(function () {
        $('#chatbot-dialog').toggle();
    });

    //close the chatroom screen
    $('#chatbot-close').click(function () {
        $('#chatbot-dialog').hide();
    });

    //process the chat input
    $('#chatbot-input').keypress(function (e) {
        if (e.which == 13) {    //press Enter key
            var message = $(this).val();
            if (message.trim() !== '') {
                //show user input message
                $('#chatbot-messages!').append('<div class="chatbot-message user-message">' + message + '</div>');

                //clear the input field
                $(this).val('');
            }
        }
    });
});