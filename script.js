document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling; // Get the corresponding answer
        const toggleSign = question.querySelector('.toggle-sign'); // Get the toggle image

        answer.classList.toggle('hidden'); // Toggle the visibility of the answer

        // Change the image based on the visibility of the answer
        if (answer.classList.contains('hidden')) {
            toggleSign.src = 'assets/images/icon-plus.svg'; // Show plus icon
        } else {
            toggleSign.src = 'assets/images/icon-minus.svg'; // Show minus icon
        }
    });
});