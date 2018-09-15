function LetterChanges(str) 
{
    let translateStr="";

    var codex = 
    {
		A: "b",
		B: 'c',
		C: 'd',
		D: 'E)',
		E: 'f',
		F: 'g',
		G: 'h',
		H: 'I',
		I: 'j',
		J: 'k',
		K: 'l',
		L: 'm', 
		M: 'n',
		N: 'O',
		O: 'p', 
		P: 'q',
		Q: 'r',
		R: 's',
		S: 't',
		T: 'U',
		U: 'v',
		V: 'w',
		W: 'x',
		X: 'y',
		Y: 'z',
		Z: 'A'
    }
    
    for(let i = 0 ; i<str.length ; i++)
    {
       
        if(codex[str.charAt(i).toUpperCase()]===undefined)
        {
            translateStr+=str[i];
        }
        else
        {
            translateStr += codex[str.charAt(i).toUpperCase()];
        }
    }

    return translateStr;
}


console.log(LetterChanges('fun times!'));
console.log(LetterChanges('hello*3'));
console.log(LetterChanges('hello world'));
//Ifmmp xpsmE.
