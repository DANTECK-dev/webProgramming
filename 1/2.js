function f(num){
	if(isNaN(num))
	{
		return "Error!";
	}
	else if(num==0|| num==1)
	{
		return 1;
	}
	else
	{
		var fact=1;
		for(let i=1;i<=num;i++)
		{
			fact*=i;
		}
		return fact;
	}
}

console.log(f(process.argv[2]));