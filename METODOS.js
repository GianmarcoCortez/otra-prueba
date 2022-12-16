function Saludar()
{
   document.write("Hola mundo!","<br>")
}
    

function CalcularDoble(num)
{
   var res;
   res=num*2
   return res 
}

function Triplicar(num)
{
   res=num*3
   return res 
}

document.write("Llamada a la funcion Saludar:","<br>");
Saludar();

var x;
x=Number(prompt("Ingrese un valor numérico para x:"));

document.write("Llamada a la función CalcularDoble (pasaje por valor)","<br>")
document.write("El doble de ",x," es ", CalcularDoble(x),"<br>")
document.write("El valor original de x es ",x,"<br>")

document.write("Llamada a la función Triplicar (pasaje por referencia)","<br>")
document.write("El nuevo valor de x es ",Triplicar(x))

