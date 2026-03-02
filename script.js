let grades = [];

function addGrade() {
    const input = document.getElementById("gradeInput");
    const value = parseInt(input.value);

    if (!isNaN(value) && value >= 0 && value <= 100) {
        grades.push(value);
        input.value = "";
        alert("Grade added successfully!");
    } else {
        alert("Enter a valid grade between 0 and 100.");
    }
}

function analyzeGrades() {
    if (grades.length === 0) {
        alert("No grades entered.");
        return;
    }

    let a = 0, b = 0, c = 0, d = 0, f = 0;

    grades.forEach(function(g) {
        if (g >= 90) a++;
        else if (g >= 80) b++;
        else if (g >= 70) c++;
        else if (g >= 60) d++;
        else f++;
    });

    const total = grades.length;
    const average = (grades.reduce((sum, g) => sum + g, 0) / total).toFixed(2);
    const highest = Math.max(...grades);
    const lowest = Math.min(...grades);

    document.getElementById("results").innerHTML = `
        <p><strong>Total Students:</strong> ${total}</p>
        <p><strong>Average:</strong> ${average}</p>
        <p><strong>Highest:</strong> ${highest}</p>
        <p><strong>Lowest:</strong> ${lowest}</p>
        <hr>
        <p><strong>Grade Distribution:</strong></p>
        <p>A: ${a}</p>
        <p>B: ${b}</p>
        <p>C: ${c}</p>
        <p>D: ${d}</p>
        <p>F: ${f}</p>
    `;
}
