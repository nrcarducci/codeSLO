/*
contactCreator should return an object literal with the following properties:
    firstName
    lastName
    phoneNumber
*/
function contactCreator(fName,lName,pNum)
{
    let contact={
        firstName:fName,
        lastName:lName,
        phoneNumber:pNum
    };
    return contact;
}
console.log(contactCreator("Mary","Smith","805.286.2222"));//{firstName:"Mary",lastName:"Smith",phoneNumber:"805.286.2222"}
console.log(contactCreator("Jason","Ng","805.242.6666"));//{firstName:"Jason",lastName:"Ng",phoneNumber:"805.242.6666"}