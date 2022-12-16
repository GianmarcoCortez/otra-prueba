var n,acum,i,dato,prom;
n=Number(prompt("Ingrese la cantidad de datos:"));
acum=0
for(i=1; i<=n; i++)
{
  dato=Number(prompt("Ingrese el dato:"));
  document.write("El dato es: ",dato,"<br>")
  acum=acum+dato;
}
prom=acum/n;
document.write("El promedio es: ",prom);
