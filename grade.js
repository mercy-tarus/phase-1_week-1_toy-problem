//function statement condition
function calculateGrade(marks){
    if(marks>79 && marks<=100){
        return `A`;
    }
    else if (marks>=60 && marks<=79)
    {
        return `B`;
    }

    else if (marks>49 && marks<=59)
{
    return `C`;

}
else if (marks>=40 && marks<=49){
    return `D`;

}
else{
    return `E`;
}
}
function main() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Enter the student's mark: ",
     (marks) => { marks = parseInt(marks);
        if (!isNaN(marks) && marks >= 0 && marks <= 100) {
            const grade = calculateGrade(marks);
            console.log(`The student's grade is: ${grade}`);
        } 
        else 
        {
            console.log("Please enter a valid marks:");
        }
        readline.close();
    });
}


main();


