let contactList={

}

contactList["Quick_Jack"]={
        "FirstName":"Jack",
        "LastName":"Quick",
        "email":"jack.b.quick@gmail.com"
};

console.log(contactList);

contactList.Quick_Jack.email="jack.b.quick@codeslo.com";

console.log(contactList);

delete contactList.Quick_Jack;

console.log(contactList);