var data = [];

for(let i = 0;i <100;i++)
{
    data.push(i);//pushes i++ into data array

}

console.log(data);
console.log(data[2]);

for (let index = 0;index<10;index++)
    console.log("top ten deals numbmer"  +(index+ 1+":" + data[index]))