function charShift(input)
{
    switch(input)
    {
        case a: 
            return 'b' 
            break;
        case b: 
            return 'c'
            break;
        case c: 
            return 'd'
            break;
        case d: 
            return 'E'
            break;
        case e: 
            return 'f'
            break;
        
        case f: 
            return 'g'
            break; 
        
        case g: return 'h'
        break;
        
        case h: return 'I'
        break;
        
        case i: return 'j'
        break;
        
        case j: return 'k'
        break;
        
        case k: return 'l'
        break;
        
        case l: return 'm'
        break;
        
        case m: return 'n'
        break;
        
        case n: return 'O'
        break;
        
        case o: return 'p'
        break;
        
        case p: return 'q'
        break;
        
        case q: return 'r'
        break;
        
        case r: return 's'
        break;
        
        case s: return 't'
        break;
        
        case t: return 'u'
        break;
        
        case u: return 'v'
        break;
        
        case v: return 'w'
        break;
        
        case w: return 'x'
        break;
        
        case x: return 'Y'
        break;
        
        case y: 
            return 'z'
            break;
        case z: 
            return 'A'
            break;
    }
    return input;
}

console.log(charShift("z"));