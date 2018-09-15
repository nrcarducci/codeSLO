function leetTranslator(str) 
{
    let translateStr="";

    var leetCodex = 
    {
		A: "@",
		B: '8',
		C: '(',
		D: '|)',
		E: '3',
		F: 'ph',
		G: 'g',
		H: '#',
		I: 'l',
		J: '_|',
		K: '|<',
		L: '1', 
		M: '|\'|\'|',
		N: '/|/',
		O: '0', 
		P: '|D',
		Q: '(,)',
		R: '|2',
		S: '5',
		T: '+',
		U: '|_|',
		V: '|/',
		W: '|/|/',
		X: '><',
		Y: 'j',
		Z: '2'
    }
    
    for(let i = 0 ; i<str.length ; i++)
    {
        translateStr += leetCodex[str.charAt(i).toUpperCase()];//calls leetcodex at the string at first index, and changes each character to uppercase or else its undefined 
    }

    return translateStr;
}


console.log(leetTranslator('Hopper'));

/*
leetTranslator is a function CHECK
returns a string
returns the leet translation of the inputted string
handles upper- and lower-case letters
*/
