function getMax(input1, input2, input3) 
{
    if(input1 > input2) 
    {
        if(input1 > input3)
        {
            return input1;
        } 
        return input3;
    } 
    else if(input2 > input3) 
    {
        return input2;
    }
    else 
    {
        return input3;
    }
}

