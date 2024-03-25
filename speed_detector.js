//speed detector code 
function calculatedemeritPoint(speed){
    const speedLimit=70;
    const kmAboveSpeedLimit=5;
    const demeritPoints=Math.floor((speed-speedLimit)/kmAboveSpeedLimit);//checks if the points exceeds 12 points 
//if the speedlimit is below 70 its will output "ok"
        if(speed<70)
        {
            return `Ok`;
        }
         //if the points exceeds 12 license is suspended
      else if(demeritPoints>12)
        {
            return `License suspended`;
        }
    else
    {
        return demeritPoints;
    }
}
    
    //readline allow user to input and get output
function main() {
    const readline=require('readline').createInterface(
     {
        input: process.stdin,
        output: process.stdout
     });
    readline.question("Enter the speed to get your points mashallah:", (speed) => {speed =parseInt(speed);
        if (!isNaN(speed) && speed >= 0) {
            const points = calculatedemeritPoint(speed);
            console.log(`The demeritpoints is: ${points}`);
          
        } 
        else 
        {
            console.log("Please enter a valid speed:");
        }
        readline.close();
    });
}
main()