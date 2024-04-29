document.addEventListener('DOMContentLoaded', function() {
    // Add an event listener to the modal's show event
    $('#songRequestModal').on('show.bs.modal', function () {
        document.querySelector('main').style.position = 'static'; // Clear main's position when modal is shown
    });

    // Add an event listener to the modal's hide event
    $('#songRequestModal').on('hide.bs.modal', function () {
        document.querySelector('main').style.position = ''; // Reset main's position when modal is hidden
    });
});
       
       