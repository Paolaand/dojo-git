---
sidebar_position: 4
sidebar_label: 'Práctica de Gitlab'
---

## Creando un Proyecto en Gitlab

### Actividad:

- Ingresa en tu cuenta de Gitlab en https://git.intelix.biz 
- Crea un nuevo proyecto con el nombre training-examples.
- Elige la pestaña de importar proyecto, y busca la opción de importar mediante una URL, utilizando: https://gitlab.com/gitlab-org/training-examples.git
- Ve a tu espacio de trabajo local y clona el proyecto.

## Commit

### Actividad:

- Edita el archivo **"edit_this_file.rb"** en **"training-examples.**
- Vea el archivo listado como modificado.
- Vea las diferencias del archivo.
- Almacene el archivo.
- Confirme el archivo.
- Empuje el cambio al repositorio remoto.
- Vealo el registro de cambios.

### Solución:

Modificación de **“edit_this_file.rb”**
```js
$ git status
```
```js
$ git diff
```
```js
$ git add edit_this_file.rb
```
```js
$ git commit -m "My Changes"
```
```js
$ git push origin master
```
```js
$ git log
```
## Branch por Funcionalidades.

- Flujo de trabajo más eficiente para equipos.
- Desarrollar cada funcionalidad / historia de usuario en una rama.
- Hace que sea fácil diseñar / desarrollar / probar / desplegar.
- Tratar de tener un enlace uno a uno a los problemas.
- Empuje la rama al repositorio remoto con frecuencia.

### Actividad:

- Crea una nueva rama llamada feature-squash-bugs.
- Edita el archivo **“bugs.rb”** y remueve todos los errores.
- Realiza un commit.
- Empuja los cambios al repositorio remoto.

### Solución:
```js
$ git checkout -b feature-squash-bugs
```
Modificación de **“bugs.rb”**
```js
$ git status
```
```js
$ git add bugs.rb
```
```js
$ git commit -m "Fix some bugs in code"
```
```js
$ git push origin feature-squash-bugs
```

## Solicitud de Unificación.

- Colaborar en ramas de funcionalidades.
- Cuando desee comentarios, cree una solicitud de unificación.
- Asignar a la persona que le gustaría revisar.
- Si no está listo para unirse y sólo desea comentarios, indíquelo en un comentario. Añade WIP en el título.
- Cuando se acepte siempre elimine la rama.
- Otras personas son libres de agregar comentarios.
- Empujar correcciones a la misma rama.

### Actividad:
- Crea una nueva solicitud de unificación.
- Utiliza el botón azul de la lista de actividades para crear una nueva solicitud a partir de la rama creada anteriormente.
- Verifica los cambios de la solicitud, adiciona una descripción y guarda la solicitud.
- Haz una nueva modificación y envía un nuevo commit a la misma rama de la solicitud.
- Ve los cambios en la solicitud y verifica que la misma está actualizada.


## Estartegias de Ramificación.


