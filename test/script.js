document.addEventListener("DOMContentLoaded", function() {
    // Hide all solutions on page load
    var solutions = document.querySelectorAll('.solution');
    solutions.forEach(function(solution) {
        solution.style.display = 'none';
    });
});

function showSolution(exerciseNumber) {
    console.log("here");
    console.log(exerciseNumber);
    var solution = document.getElementById('solution' + exerciseNumber);
    console.log("here2");
    console.log(solution);
    solution.style.display = (solution.style.display === 'none' || solution.style.display === '') ? 'block' : 'none';
    console.log("here3");
}

function showExercise(exerciseNumber) {
    // Hide all solutions
    var solutions = document.querySelectorAll('.solution');
    solutions.forEach(function(solution) {
        solution.style.display = 'none';
    });

    // Show the selected exercise
    var selectedExercise = document.getElementById('solution' + exerciseNumber);
    selectedExercise.style.display = 'block';

    // Update the exercise title
    //document.getElementById('exerciseTitle').innerText = 'Exercise ' + exerciseNumber;
}
