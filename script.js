// JavaScript for any additional interactions or animations
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');

    // Add hover effect for buttons
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            button.style.backgroundColor = '#218838'; // Darker green on hover
        });
        button.addEventListener('mouseout', function() {
            button.style.backgroundColor = '#28a745'; // Original green
        });
    });
});
