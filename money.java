Introducción
Lo esencial
Java es un lenguaje de tipado estático, lo que significa que el tipo de una variable se conoce en tiempo de compilación. Asignar un valor a un nombre se denomina definir una variable. Una variable se define especificando explícitamente su tipo.

int explicitVar = 10;
La actualización del valor de una variable se realiza mediante el =operador . En este caso, =no representa una igualdad matemática, sino que simplemente asigna un valor a una variable. Una vez definido, el tipo de una variable nunca puede cambiar.

int count = 1; // Assign initial value
count = 2;     // Update to new value

// Compiler error when assigning a different type
// count = false;
Java es un lenguaje orientado a objetos y requiere que todas las funciones se definan en una clase . La classpalabra clave se utiliza para definir una clase.

class Calculator {
    // ...
}
Una función dentro de una clase se denomina método . Cada método puede tener cero o más parámetros. Todos los parámetros deben tener un tipo explícito, no hay inferencia de tipo para los parámetros. De manera similar, el tipo de retorno también debe hacerse explícito. Los valores se devuelven desde los métodos utilizando la returnpalabra clave. Para permitir que otras clases llamen a un método, publicse debe agregar el modificador de acceso.

class Calculator {
    public int add(int x, int y) {
        return x + y;
    }
}
La invocación/llamada de un método se realiza especificando su clase y nombre de método y pasando argumentos para cada uno de los parámetros del método.

int sum = new Calculator().add(1, 2);  // here the  "add" method has been called to perform the task of addition
El alcance en Java se define entre los caracteres {y }.

Java admite dos tipos de comentarios. Los comentarios de una sola línea están precedidos por //y los comentarios de varias líneas se insertan entre /*y */.

Instrucciones
En este ejercicio, vas a escribir un código que te ayudará a cocinar una excelente lasaña basada en tu libro de cocina favorito.

Tienes cuatro tareas, todas relacionadas con el tiempo dedicado a cocinar la lasaña.

Define el expectedMinutesInOven()método que no toma ningún parámetro y devuelve cuántos minutos debe estar la lasaña en el horno. Según el libro de cocina, el tiempo de horno esperado en minutos es 40:

