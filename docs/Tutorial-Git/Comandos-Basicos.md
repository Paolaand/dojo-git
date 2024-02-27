---
sidebar_position: 2
sidebar_label: 'Comandos Básicos'
---

# Comandos Básicos de Git

Aprendamos los primeros comandos con git.

### Versión de git.

```git
git version
```
### Registrar nuevo usuario asociado a git.


:::caution[Atención]
No colocar información sensible como nombre de usuario,el correo de su cuenta, podría traer problemas a futuro.
:::


Para cambiar o agregar el nombre de usuario 👇🏽

```js
git config --global user.name "mi nombre"
```
Es recomendable utilizar el correo asociado a GitLab
```js
git config --global user.email "myemail@example.com"
```
Para dejar la rama develop como rama principal en lugar de master 👇🏽
```js
git config --global init.defaultBranch develop
```
Para activar los colores en la consola 👇🏽 (Opcional)

```git
git config --global color.ui true
```
Para verificar que se haya registrado correctamente:

```git
git config user.name
git config user.email
```

### Configuración de un canal seguro (SSH)

- [Generar llave SSH](https://docs.gitlab.com/ee/user/ssh.html)


```git
$ git config --global http.sslbackend schannel
```
Si no utilizas la bandera global, puedes configurar un autor diferente para cada proyecto. Verifica la configuración con:

```
$ git config --global --list
```

#### Generar una clave SSH.
Es posible que desees o debas utilizar una clave ssh, para generar un nuevo par de claves SSH debes:

- Abrir una terminal en Linux o utilizar Git Bash en Windows.
- Genera el par de claves utilizando el cifrado ED25519:

```js
$ ssh-keygen -t ed25519 -C "email@example.com"
```
O mediante el cifrado RSA:
```js
$ ssh-keygen -o -t rsa -b 4096 -C "email@example.com"
```
- Selecciona la ruta y el nombre donde guardar el par de claves SSH
- Indica una clave para asegurar tu par de claves SSH


### Init

Crea un repositorio de git vacío en una nueva carpeta. Las configuraciones, información almacenada y demás elementos del proyecto son almacenadas en el directorio **“.git”.**

```js
$ git init
```

### Help 

Otorga un acceso rápido a una guía extremadamente detallada de cada comando en git. O puede ser usada simplemente como un recordatorio de estos.

Una vista rápida de los comandos disponibles.

```js
$ git help
```
Verificar todos los comandos disponibles.
```js
$ git help -a
```
Obtener ayuda específica de un comando.
```js
$ git help init
```
### Status

Muestra las diferencias entre el archivo índice y el commit al cual apunta el HEAD actualmente, mostrará los archivos sin añadir al repositorio, cambios y otras diferencias.
```js
$ git status
```
Devuelve ayuda sobre el comando status.
```js
$ git help status
```
### Add

Permite añadir archivos al árbol (directorio, repositorio) de trabajo. Si no se utiliza git add, los nuevos archivos no se añadirán al árbol de trabajo, por lo que no se incluirán en las confirmaciones (commits).

Añade un archivo en el directorio de trabajo actual
```js
$ git add FooBar.java 
```

Añade un archivo que se encuentra bajo un directorio.
```
$ git add /directorio/del/archivo/Foo.c
```
Soporte para expresiones regulares!
```
$ git add ./*.txt
```

### Commit

Almacena el contenido actual del área de preparación en un nuevo **“commit”.** Este commit contiene los cambios hechos más un resumen proporcionado por el desarrollador.

Realiza un commit y añadele un mensaje.

```js
$ git commit -m "Initial Commit"
```

### Diff

Muestra las diferencias entre un archivo en el directorio de trabajo, el índice y los commits, muestra la diferencia entre un directorio de trabajo y el índice.
```js
$ git diff
```
Muestra la diferencia entre el índice y los commits más recientes.
```js
$ git diff --cached
```
Muestra la diferencia entre el directorio de trabajo y el commit más reciente.
```js
$ git diff HEAD
```
### Log

Muestra los commits (cambios) registrados en el repositorio, muestra todos los commits.
```js
$ git log
```
Muestra un número x de commits.
```js
$ git log -n 10 
```
Muestra solo los commits que se han combinado en el historial.
```js
$ git log --merges
```

### Ramas o Branch 

Hasta el momento solo hemos trabajado en la rama **"master"** o **"develop"** pero puede que necesitemos crear diferentes ramas para los seguimientos de git.

En un entorno de desarrollo de software en una empresa, las ramas que se crean pueden variar según las políticas de desarrollo específicas de cada empresa, así como también dependen del flujo de trabajo y las necesidades del proyecto en particular. Sin embargo, hay algunas ramas comunes que se suelen utilizar en muchos casos. Aquí hay algunas de las principales ramas que se pueden encontrar en un repositorio de Git en una empresa:

- **main:** Esta es la rama principal del proyecto. Contiene el código estable y funcional que está listo para ser desplegado en producción. Todos los cambios importantes y completados se fusionan en esta rama después de una revisión adecuada.

- **develop:** También conocida como rama de desarrollo, esta rama contiene el código en desarrollo para la próxima versión del software. Es donde se fusionan los cambios de las ramas de características y se prueban en conjunto antes de ser fusionados en la rama principal.

- **feature:** Se utilizan ramas de características para desarrollar nuevas funcionalidades o características. Cada vez que un desarrollador comienza a trabajar en una nueva característica, generalmente crea una rama de características a partir de la rama de desarrollo. Una vez que la característica está completa y ha sido revisada, se fusiona de nuevo en la rama de desarrollo.

- **hotfix:** Esta rama se utiliza para corregir problemas críticos en producción. Si se descubre un error que necesita ser solucionado de inmediato, se crea una rama de hotfix a partir de la rama principal (main o master), se realizan las correcciones necesarias y luego se fusiona tanto en la rama principal como en la rama de desarrollo.

- **release:** Se utiliza para preparar una nueva versión del software para su lanzamiento. Se crean ramas de lanzamiento a partir de la rama de desarrollo y se realizan las pruebas finales y los ajustes necesarios antes de fusionar en la rama principal y etiquetar la versión.

Estas son algunas de las ramas comunes que se pueden encontrar en un flujo de trabajo típico de Git en una empresa, pero es importante recordar que las prácticas de desarrollo pueden variar entre diferentes equipos y organizaciones. Adaptar el flujo de trabajo y las ramas específicas a las necesidades y requisitos del proyecto es clave para el éxito del desarrollo de software en cualquier empresa.

Para administrar las ramas del repositorio **(branches)**. Puedes ver, editar, crear y borrar ramas **(branches)**, usando este comando.
Lista todas las ramas (remotas y locales).

```js
$ git branch -a
```
Añade una nueva rama **(branch)**
```js
$ git branch myNewBranch
```
Elimina una rama
```js
$ git branch -d myBranch
```
Renombra una rama
```js
$ git branch -m myBrachName myNewBrachName
```
Nos muestra visualmente las ramas
```js
git log --oneline --graph --all
```
### Checkout

Actualiza todos los archivos en el directorio de trabajo para que sean igual que las versiones almacenadas en el índice, o en un árbol de trabajo especificado.

Actualiza los archivos de la rama principal
```js
$ git checkout
```
Actualiza los archivos de la rama especificada
```js
$ git checkout develop
```
Crea una nueva rama y se cambia hacia ella.
```js
$ git checkout -b new_feature
```
### Clone

Clona, o copia, un repositorio existente en un nuevo directorio, también añade el seguimiento hacia las ramas existentes del repositorio que ha sido clonado, lo que permite subir (push) los archivos hacia una rama remota.

Clonar el repositorio de jquery.
```js
$ git clone https://github.com/jquery/jquery.git
```

### Merge

Combina los cambios de commits realizados externamente dentro de la rama en la que se trabaja.

Combina la rama especificada en la rama actual
```js
$ git merge new_feature
```
Se asegura de generar un commit cuando se utiliza merge
```js
$ git merge --no-ff new_feature
```

### Pull

Trae los cambios de un repositorio y los combina en otra rama diferente.

Actualiza el repositorio local, combinando los nuevos cambios de las ramas remotas **"origin"** y **"master".**
```js
$ git pull origin master
```
### Push
Envía y combina los cambios de un repositorio local a un repositorio y rama remotos.

Envía y combina cambios de un repositorio local hacia un repositorio remoto llamados **"origin"** y **"master"**, respectivamente.
```js
$ git pull origin master
```

### Tag

Permite marcar puntos específicos de la historia del repositorio. 

Crea una etiqueta anotada.
```js
$ git tag -a v1.4.0 -m "Version 1.4.0"
```
Crea una etiqueta ligera.
```js
$ git tag v1.4.0-SNAPSHOT
```
### Rebase
Toma todos los cambios que fueron registrados en una rama, y los repite dentro de otra rama. No reescribe los commits que se han empujado antes a un repositorio público.

Integrar hot-fix dentro de la rama **"master"**
```js
$ git rebase master hot-fix
```

### Reset (Precaución)

Reinicia la referencia HEAD actual hacia un estado especificado. Esto permite deshacer combinaciones (merges), pulls, commits, adds y más.

Es un comando útil, pero también delicado si no se sabe lo que se está haciendo. Reinicia el área de preparación, con el último cambio registrado. (deja los directorios sin cambios).

```js
$ git reset
```
Reinicia el área de prepa de preparación, con el último cambio registrado, y reescribe el directorio de trabajo.

```js
$ git reset --hard
```
### Remove

Lo contrario de git add, git rm elimina los archivos del directorio de trabajo actual.

Elimina FooBar.c
```js
$ git rm FooBar.c
```
Elimina un archivo de un directorio
```js
$ git rm /directorio/del/archivo/FooBar.c
```

### Stash

Usamos git stash para almacenar nuestros cambios cuando no están listos para confirmarse y necesitamos cambiar a una rama diferente.
```js
$ git stash save "this is a message to display on the list"
```
Aplicar para continuar haciendo cambios:
```js
$ git stash apply
```
Cada vez que guardamos un stash este se va apilando por lo que podemos usar el comando list para ver todos los elementos:
```js
$ git stash list
```