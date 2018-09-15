/*
You take the first 3 letters from your first name 
and the first 2 from your last name to make your first name.

Then to make your last name you take the first 2 letters from your mother maiden name 
and the then the first 3 of the city you were born in.
*/

function swFirstName(rfName,rlName)
{
    let output1 ="";
    let output2 ="";
    for(let i=0; i<3;i++)
        output1+=rfName[i];
    for(let j=0; j<2;j++)
        output2+=rlName[j];
    return output1 + output2; 

}

function swLastName(mmName,bpName)
{
    let output1 ="";
    let output2 ="";
    for(let i=0; i<2;i++)
        output1+=mmName[i];
    for(let j=0; j<3;j++)
        output2+=bpName[j];
    return output1 + output2;
}

console.log(swFirstName("Neil","Carducci")+" " +swLastName("Washbish","San Luis Obispo"));
