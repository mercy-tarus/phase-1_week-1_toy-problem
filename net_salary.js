//net_salary code
function calculateNetSalary(basicSalary, benefits)
{
    const nssfrate=0.040   //0.4% nssf rates
    const nhifrate=0.0245   // 2.45% nhif rates
    const krarate=0.1    //10% tax rate
//calculate grossSalary
    const grossSalary=basicSalary+benefits; //number
    //calculate nhifDeduction
    const nhifDeduction=grossSalary*nhifrate;
   // calculate nssfDeduction
    const nssfDeduction=grosssalary*nssfrate;
    //calculate netSalary
    const netSalary=grossSalary-tax-nhifDeduction-nssfDeduction;
   // calculate tax
    const tax=krarate*grossSalary;
    //return 
    return{
        grossSalary:grossSalary,
        netSalary:netSalary,
        nhifDeduction:nhifDeduction,
        nssfDeduction:nssfDeduction,
        tax:tax,
       
    }
}
//compute
function main(){
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
});
const basicSalary=parseFloat((prompt)`Enter basicSalary`);
const benefits=parseFloat((prompt)`Enter benefits`);
}
//
console.log("grossSalary", grossSalary);
console.log('netSalary',netSalary);
console.log('nhifDeduction',nhifDeduction);
console.log('nssfDeduction',nssfDeduction);
console.log('tax',tax);
