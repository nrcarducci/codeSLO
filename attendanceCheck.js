let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

function attendanceCheck(dayInput)
{
    let outputArr=[];

    for(let key in classRoom)
        for(let student in classRoom[key])
            for(let dayKey in classRoom[key][student])
                for(let day in classRoom[key][student][dayKey])
                    if(day===dayInput&&classRoom[key][student][dayKey][day]===true)
                        outputArr.push(student);
    return outputArr; 
}

console.log(attendanceCheck('Monday')); // => ['Marnie', 'Shoshanna']
console.log(attendanceCheck('Tuesday')); // => ['Marnie', 'Shoshanna']
console.log(attendanceCheck('Wednesday')); // => ['Marnie', 'Lena']
console.log(attendanceCheck('Thursday' )); // => ['Marnie', 'Shoshanna']
console.log(attendanceCheck('Friday')); //=>['Marnie', 'Lena', 'Jessa']

/*
attendanceCheck is a function
returns an array
returns the correct values for Monday
returns the correct values for Tuesday
returns the correct values for Wednesday
returns the correct values for Thursday
returns the correct values for Friday
*/