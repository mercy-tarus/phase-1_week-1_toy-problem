//function to calculate net_salary 
function calculateNetSalary(basicSalary, benefits)
{
    const nssfRate= 0.12  //0.4% nssf rates
    const nhifRate=0.0245   // 2.45% nhif rates
    const kraRate=0.1    //10% tax rate

//calculate grossSalary    
let grossSalary= basicSalary+benefits; 

// calculate tax
let tax=kraRate*grossSalary;
if (grossSalary <= 24000) 
{
    tax = grossSalary * 0.1;
} 
else if (grossSalary >= 24001 && grossSalary <= 32333)
 {
    tax = grossSalary * 0.25;
} 
else if(grossSalary>=32334 && grossSalary<=500000)
{
tax=grossSalary*0.3;

}
else if(grossSalary>=500001 && grossSalary<=800000)
{
    tax=grossSalary*0.325;
}
else if(grossSalary>800000){
    tax=grossSalary*0.35;
}

    //calculate nhifDeduction
    
    let nhifDeduction=grossSalary*nhifRate;

   // calculate nhifDeduction if (salary >= 1000) {
                if (grossSalary >= 1000 && grossSalary <= 5999) 
                {
                    nhifDeduction = 150;
                } 
                else if (grossSalary >= 6000 && grossSalary <= 7999) 
                {
                    nhifDeduction = 300;
                }
                 else if (grossSalary >= 8000 && grossSalary <= 11999)
                  {
                    nhifDeduction = 400;
                } 
                else if (grossSalary >= 12000 && grossSalary <= 14999) 
                {
                    nhifDeduction = 500;
                } 
                else if (grossSalary >= 15000 && grossSalary <= 19999) 
                {
                    nhifDeduction = 600;
                } 
                else if (grossSalary >= 20000 && grossSalary <= 24999) 
                {
                    nhifDeduction = 750;
                } 
                else if (grossSalary >= 25000 && grossSalary <= 29999)
                 {
                    nhifDeduction = 850;
                } 
                else if (grossSalary >= 30000 && grossSalary <= 34999) 
                {
                    nhifDeduction = 900;
                } 
                else if (grossSalary >= 35000 && grossSalary <= 39999) 
                {
                    nhifDeduction = 950;
                } 
                else if (grossSalary >= 40000 && grossSalary <= 44999)
                 {
                    nhifDeduction = 1000;
                } 
                else if (grossSalary >= 45000 && grossSalary <= 49999) 
                {
                    nhifDeduction = 1100;
                } 
                else if (grossSalary >= 50000 && grossSalary <= 59999) 
                {
                    nhifDeduction = 1200;
                } 
                else if (grossSalary >= 60000 && grossSalary <= 69999) 
                {
                    nhifDeduction = 1300;
                } 
                else if (grossSalary >= 70000 && grossSalary <= 79999) 
                {
                    nhifDeduction = 1400;
                }
                 else if (grossSalary >= 80000 && grossSalary <= 89999) 
                 {
                    nhifDeduction = 1500;
                } 
                else if (grossSalary >= 90000 && grossSalary <= 99999) 
                {
                    nhifDeduction = 1600;
                } 
                else if (grossSalary >= 100000)
                 {
                    nhifDeduction = 1700;
                }
                else{
                    nhifDeduction=grossSalary*0.0245; 
                }
                //calculate nssfDeduction
    let nssfDeduction=grossSalary*nssfRate
        if (grossSalary > 18000) 
        {
            nssfDeduction = 2160;
        } 
        else {
            nssfDeduction = grossSalary * 0.12;
        }
   
    //calculate netSalary
    const netSalary=grossSalary-tax-nhifDeduction-nssfDeduction;
   
    //return details
    return{
        grossSalary:grossSalary,
        netSalary:netSalary,
        nhifDeduction: nhifDeduction,
        nssfDeduction: nssfDeduction,
        tax: tax,
    }; 
        
}
//create interface to prompt the user
function main(){
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
});
readline.question("Enter the basic salary: ", (basicSalary) => 
{
    readline.question("Enter the benefits: ", (benefits) =>
     {
        const salaryDetails = calculateNetSalary(parseFloat(basicSalary), parseFloat(benefits));
    
        console.log('gross salary:', salaryDetails.grossSalary);
        console.log('Net salary:', salaryDetails.netSalary);
        console.log('NHIF deduction:', salaryDetails.nhifDeduction);
        console.log('NSSF deduction:', salaryDetails.nssfDeduction);
        console.log('Tax:', salaryDetails.tax);
        readline.close();
    });
});
}

main();