function clockAngle(hour,minute)
{
    let minAngle = 360*(minute/60);
    let hrAngle = (360*(hour/12))+((360/12)*(minute/60));

    console.log("Minute Angle: "+minAngle);
    console.log("Hour Angle: "+ hrAngle);

    if(minAngle>hrAngle)
        return minAngle-hrAngle;
    
    else
        return hrAngle-minAngle;
}

console.log(clockAngle(6,30));