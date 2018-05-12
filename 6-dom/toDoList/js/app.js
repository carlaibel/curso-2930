/* 

# Realizar un ToDoList, en el cual podremos agregar, borrar o ordenar tareas.

Cada tarea tendra las siguientes propiedades. 

1) Crear el módulo ToDoList.

2) Cargar contenido de prueba:
- El modulo tendra un array llamado "tareas".
- Dentro del array tendremos objetos tarea.  
- Cada objeto tarea tendrá las siguientes propiedades:
​	- id: numerico
	- titulo: Texto
	- imagen: Nombre de la imagen (nombre del archivo + extensión).
	- descripción: texto
	- completado: booleano.
- Cargar 4 objetos tarea en el array de "tareas".

3) Mostrar tareas en la pantalla (Renderizar)
- Renderizar el array de tareas en la pantalla.
- Cada una de las tareas deben estar encerradas en un li que tenga la clase "tarea".
- Luego, cada li deberá ser agregados a un ul en el html que tenga la clase "tareas".

4) Crear formulario para agregar Tareas: 

- Deberemos ser capaces de agregar una "tarea" mediante un formulario.
- El formulario tendrá 3 campos:
	- titulo: Se lo podrá ingresar por el formulario.
	- imagen: nombre del archivo + extensión. 
	- descripción: Se lo podrá ingresar por un textarea formulario.
- El ID de la tarea será generado aleatoriamente. 
- La tarea inicializará el estado completado en false.


5) Botón de "agregar".
- El formulario tendrá un botón de "Agregar Tareas".
	- Al apretar el botón agregaremos una tarea al array de tareas.
	- Ademas agragaremos la tarea a la pantalla.

3) Eliminar una tarea.
- Dentro de si misma en el html, cada tarea deberá tener un botón que se llame "Eliminar Tarea".
- Al presionarlo hara lo siguiente:
	- Pedir un mensaje de confirmación de la operación.
	- Eliminará la tarea del array de tareas.
	- Eliminará la tarea del html. 

4) Crear botones para ordenar las tareas.
- Crear botones para ordernar el array de tareas por A-Z y Z-A las tareas por titulo.
- Renderizar el array ordenado.

5) Marcar como completado.
- Agregar un botón que sea completar tarea.
- Al apretarlo, la tarea pasará a estar completada.
- Las tareas que estén completadas tendran el estado complatado en true;
- Si una tarea tiene el estado completado en true, se agregará al li la clase "completado"
- Esta clase le dará un estilo diferente a la tarea.
- Si la tarea ya esta completada, se esconderá el botón.

5) Botón para salvar.
- Las tareas deberan quedar persistidas mediante localstorage y poder mostrarse en caso de recargar el browser.
*/

