// JavaScript code for the risk profiling questionnaire

// Function to calculate the total score based on user responses
function calculateScore() {
    // Define the scores for each answer option
    const scores = {
        q1: {
            5: 5,
            20: 20,
            // Add scores for Question 1 options as needed
        },
        q2: {
            25: 25,
            10: 10,
            // Add scores for Question 2 options as needed
        },
        // Repeat for other questions
    };

    // Initialize the total score
    let totalScore = 0;

    // Loop through each question
    for (let i = 1; i <= 11; i++) {
        const questionName = 'q' + i;
        const selectedOption = document.querySelector(`input[name=${questionName}]:checked`);

        if (selectedOption) {
            const score = parseInt(selectedOption.value);
            totalScore += score;
        }
    }

    // Display the total score to the user
    document.getElementById('result').textContent = `Your total score is: ${totalScore}`;
}

// Event listener for form submission
const form = document.getElementById('questionnaire-form');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Call the function to calculate and display the score
    calculateScore();
});
