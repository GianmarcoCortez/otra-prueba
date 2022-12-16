var A= new Array(10)
for(i=1; i<=10; i++)
{
    A[i]=Math.floor(Math.random()*100);
}   

document.write("Los elementos del arreglo son:","<br>");
for(i=1; i<=10; i++)
{
    document.write(A[i]," ");
}
document.write("<br>");
document.write("<br>");
document.write("En orden inverso:","<br>");
for(i=10; i>=1; i--)
{
    document.write(A[i]," ");
}
