"use strict";(self.webpackChunkdojo_git=self.webpackChunkdojo_git||[]).push([[4386],{6263:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var a=n(4848),s=n(8453);const l={sidebar_position:4,sidebar_label:"Pr\xe1ctica de Gitlab"},c=void 0,r={id:"Tutorial-Git/Practica",title:"Practica",description:"Creando un Proyecto en Gitlab",source:"@site/docs/Tutorial-Git/Practica.md",sourceDirName:"Tutorial-Git",slug:"/Tutorial-Git/Practica",permalink:"/dojo-git/docs/Tutorial-Git/Practica",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Pr\xe1ctica de Gitlab"},sidebar:"tutorialSidebar",previous:{title:"GitLab",permalink:"/dojo-git/docs/Tutorial-Git/GitLab"}},d={},o=[{value:"Creando un Proyecto en Gitlab",id:"creando-un-proyecto-en-gitlab",level:2},{value:"Actividad:",id:"actividad",level:3},{value:"Commit",id:"commit",level:2},{value:"Actividad:",id:"actividad-1",level:3},{value:"Soluci\xf3n:",id:"soluci\xf3n",level:3},{value:"Branch por Funcionalidades.",id:"branch-por-funcionalidades",level:2},{value:"Actividad:",id:"actividad-2",level:3},{value:"Soluci\xf3n:",id:"soluci\xf3n-1",level:3},{value:"Solicitud de Unificaci\xf3n.",id:"solicitud-de-unificaci\xf3n",level:2},{value:"Actividad:",id:"actividad-3",level:3},{value:"Estartegias de Ramificaci\xf3n.",id:"estartegias-de-ramificaci\xf3n",level:2},{value:"Etiquetas",id:"etiquetas",level:2},{value:"Actividad:",id:"actividad-4",level:3},{value:"Soluci\xf3n:",id:"soluci\xf3n-2",level:3},{value:"Stash",id:"stash",level:2},{value:"Actividad:",id:"actividad-5",level:3},{value:"Soluci\xf3n:",id:"soluci\xf3n-3",level:3},{value:"Conflictos",id:"conflictos",level:2},{value:"Actividad:",id:"actividad-6",level:3},{value:"Soluci\xf3n:",id:"soluci\xf3n-4",level:3},{value:"Deshacer",id:"deshacer",level:3},{value:"Actividad:",id:"actividad-7",level:3},{value:"Soluci\xf3n:",id:"soluci\xf3n-5",level:3}];function t(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h2,{id:"creando-un-proyecto-en-gitlab",children:"Creando un Proyecto en Gitlab"}),"\n",(0,a.jsx)(i.h3,{id:"actividad",children:"Actividad:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Ingresa en tu cuenta de Gitlab en ",(0,a.jsx)(i.a,{href:"https://git.intelix.biz",children:"https://git.intelix.biz"})]}),"\n",(0,a.jsx)(i.li,{children:"Crea un nuevo proyecto con el nombre training-examples."}),"\n",(0,a.jsxs)(i.li,{children:["Elige la pesta\xf1a de importar proyecto, y busca la opci\xf3n de importar mediante una URL, utilizando: ",(0,a.jsx)(i.a,{href:"https://gitlab.com/gitlab-org/training-examples.git",children:"https://gitlab.com/gitlab-org/training-examples.git"})]}),"\n",(0,a.jsx)(i.li,{children:"Ve a tu espacio de trabajo local y clona el proyecto."}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"commit",children:"Commit"}),"\n",(0,a.jsx)(i.h3,{id:"actividad-1",children:"Actividad:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Edita el archivo ",(0,a.jsx)(i.strong,{children:'"edit_this_file.rb"'})," en ",(0,a.jsx)(i.strong,{children:'"training-examples.'})]}),"\n",(0,a.jsx)(i.li,{children:"Vea el archivo listado como modificado."}),"\n",(0,a.jsx)(i.li,{children:"Vea las diferencias del archivo."}),"\n",(0,a.jsx)(i.li,{children:"Almacene el archivo."}),"\n",(0,a.jsx)(i.li,{children:"Confirme el archivo."}),"\n",(0,a.jsx)(i.li,{children:"Empuje el cambio al repositorio remoto."}),"\n",(0,a.jsx)(i.li,{children:"Vealo el registro de cambios."}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"soluci\xf3n",children:"Soluci\xf3n:"}),"\n",(0,a.jsxs)(i.p,{children:["Modificaci\xf3n de ",(0,a.jsx)(i.strong,{children:"\u201cedit_this_file.rb\u201d"})]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"$ git status\n"})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"$ git diff\n"})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"$ git add edit_this_file.rb\n"})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:'$ git commit -m "My Changes"\n'})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"$ git push origin master\n"})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"$ git log\n"})}),"\n",(0,a.jsx)(i.h2,{id:"branch-por-funcionalidades",children:"Branch por Funcionalidades."}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Flujo de trabajo m\xe1s eficiente para equipos."}),"\n",(0,a.jsx)(i.li,{children:"Desarrollar cada funcionalidad / historia de usuario en una rama."}),"\n",(0,a.jsx)(i.li,{children:"Hace que sea f\xe1cil dise\xf1ar / desarrollar / probar / desplegar."}),"\n",(0,a.jsx)(i.li,{children:"Tratar de tener un enlace uno a uno a los problemas."}),"\n",(0,a.jsx)(i.li,{children:"Empuje la rama al repositorio remoto con frecuencia."}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"actividad-2",children:"Actividad:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Crea una nueva rama llamada feature-squash-bugs."}),"\n",(0,a.jsxs)(i.li,{children:["Edita el archivo ",(0,a.jsx)(i.strong,{children:"\u201cbugs.rb\u201d"})," y remueve todos los errores."]}),"\n",(0,a.jsx)(i.li,{children:"Realiza un commit."}),"\n",(0,a.jsx)(i.li,{children:"Empuja los cambios al repositorio remoto."}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"soluci\xf3n-1",children:"Soluci\xf3n:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"$ git checkout -b feature-squash-bugs\n"})}),"\n",(0,a.jsxs)(i.p,{children:["Modificaci\xf3n de ",(0,a.jsx)(i.strong,{children:"\u201cbugs.rb\u201d"})]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"$ git status\n"})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"$ git add bugs.rb\n"})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:'$ git commit -m "Fix some bugs in code"\n'})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"$ git push origin feature-squash-bugs\n"})}),"\n",(0,a.jsx)(i.h2,{id:"solicitud-de-unificaci\xf3n",children:"Solicitud de Unificaci\xf3n."}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Colaborar en ramas de funcionalidades."}),"\n",(0,a.jsx)(i.li,{children:"Cuando desee comentarios, cree una solicitud de unificaci\xf3n."}),"\n",(0,a.jsx)(i.li,{children:"Asignar a la persona que le gustar\xeda revisar."}),"\n",(0,a.jsx)(i.li,{children:"Si no est\xe1 listo para unirse y s\xf3lo desea comentarios, ind\xedquelo en un comentario. A\xf1ade WIP en el t\xedtulo."}),"\n",(0,a.jsx)(i.li,{children:"Cuando se acepte siempre elimine la rama."}),"\n",(0,a.jsx)(i.li,{children:"Otras personas son libres de agregar comentarios."}),"\n",(0,a.jsx)(i.li,{children:"Empujar correcciones a la misma rama."}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"actividad-3",children:"Actividad:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Crea una nueva solicitud de unificaci\xf3n."}),"\n",(0,a.jsx)(i.li,{children:"Utiliza el bot\xf3n azul de la lista de actividades para crear una nueva solicitud a partir de la rama creada anteriormente."}),"\n",(0,a.jsx)(i.li,{children:"Verifica los cambios de la solicitud, adiciona una descripci\xf3n y guarda la solicitud."}),"\n",(0,a.jsx)(i.li,{children:"Haz una nueva modificaci\xf3n y env\xeda un nuevo commit a la misma rama de la solicitud."}),"\n",(0,a.jsx)(i.li,{children:"Ve los cambios en la solicitud y verifica que la misma est\xe1 actualizada."}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"estartegias-de-ramificaci\xf3n",children:"Estartegias de Ramificaci\xf3n."}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Al manejar muchas ramas el mantenimiento de un proyecto se complica r\xe1pidamente."}),"\n",(0,a.jsx)(i.li,{children:"Todas las ramas de funcionalidades comienzan desde la rama de desarrollo y se van unificando hacia la rama principal."}),"\n",(0,a.jsx)(i.li,{children:"El modelo de ramificaci\xf3n Gitflow est\xe1 muy bien documentado y presenta una soluci\xf3n adecuada para el despliegue de software."}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"Flujo de los branch",src:n(9032).A+"",width:"1400",height:"860"})}),"\n",(0,a.jsx)(i.h2,{id:"etiquetas",children:"Etiquetas"}),"\n",(0,a.jsx)(i.p,{children:"Las etiquetas son \xfatiles para marcar despliegues y lanzamientos de nuevas versiones del producto."}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Las etiquetas anotadas son una parte inmutable de la historia como una confirmaci\xf3n."}),"\n",(0,a.jsx)(i.li,{children:"Las etiquetas blandas se pueden configurar y eliminar a voluntad."}),"\n",(0,a.jsx)(i.li,{children:"Muchos proyectos combinan una etiqueta de lanzamiento con una rama estable para esa versi\xf3n menor."}),"\n",(0,a.jsx)(i.li,{children:"Considere configurar etiquetas de despliegue autom\xe1ticamente."}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"actividad-4",children:"Actividad:"}),"\n",(0,a.jsx)(i.p,{children:"Establece una etiqueta suave y una etiqueta anotada en un repositorio dando un SHA1 de no m\xe1s de 8 caracteres y empuja las etiquetas al repositorio remoto."}),"\n",(0,a.jsx)(i.h3,{id:"soluci\xf3n-2",children:"Soluci\xf3n:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"$ git checkout master\n"})}),"\n",(0,a.jsx)(i.p,{children:"Establece una etiqueta suave"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"$ git tag ligth_tag\n"})}),"\n",(0,a.jsx)(i.p,{children:"Establece una etiqueta anotada"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:'$ git tag -a v1.0.0 -m "Version 1.0.0"\n'})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"$ git push origin --tags\n"})}),"\n",(0,a.jsx)(i.h2,{id:"stash",children:"Stash"}),"\n",(0,a.jsx)(i.p,{children:"Usamos git stash para almacenar nuestros cambios cuando no est\xe1n listos para confirmarse y necesitamos cambiar a una rama diferente."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:'$ git stash save "this is a message to display on the list"\n'})}),"\n",(0,a.jsx)(i.p,{children:"Aplicar para continuar haciendo cambios:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"$ git stash apply\n"})}),"\n",(0,a.jsx)(i.p,{children:"Cada vez que guardamos un stash este se va apilando por lo que podemos usar el comando list para ver todos los elementos:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"$ git stash list\n"})}),"\n",(0,a.jsx)(i.h3,{id:"actividad-5",children:"Actividad:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Modifica un archivo, prep\xe1ralo y esconde sus cambios."}),"\n",(0,a.jsx)(i.li,{children:"Ve la lista de elementos escondidos."}),"\n",(0,a.jsx)(i.li,{children:"Confirma que no existan cambios verificando el estado."}),"\n",(0,a.jsx)(i.li,{children:"Aplica los cambios escondidos mediante el comando apply."}),"\n",(0,a.jsx)(i.li,{children:"Ve nuevamente la lista de elementos escondidos y el estado."}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"soluci\xf3n-3",children:"Soluci\xf3n:"}),"\n",(0,a.jsx)(i.p,{children:"Modifica el archivo edit_this_file.rb"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"$ git add .\n"})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:'$ git stash save "Saving changes"\n'})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"$ git stash list\n"})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"$ git status\n"})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"$ git stash apply\n"})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"$ git stash list\n"})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"$ git status\n"})}),"\n",(0,a.jsx)(i.h2,{id:"conflictos",children:"Conflictos"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Son muy comunes en el mantenimiento de un proyecto."}),"\n",(0,a.jsx)(i.li,{children:"Se mitigan manteniendo una buena comunicaci\xf3n entre miembros del equipo."}),"\n",(0,a.jsx)(i.li,{children:"Se deben traer y sincronizar los cambios antes de enviar los locales."}),"\n",(0,a.jsx)(i.li,{children:"Estos conflictos deben resolverse uno por uno."}),"\n",(0,a.jsx)(i.li,{children:"Luego se confirman los cambios para la unificaci\xf3n del conflicto y se sincroniza con el repositorio remoto."}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"actividad-6",children:"Actividad:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Crea una nueva rama y edita el archivo ",(0,a.jsx)(i.strong,{children:"\u201cconflicts.rb\u201d"})," a\xf1adiendo ",(0,a.jsx)(i.strong,{children:'"Line4"'})," y ",(0,a.jsx)(i.strong,{children:'"Line5"'})," debajo de ",(0,a.jsx)(i.strong,{children:'"Line3'}),'"']}),"\n",(0,a.jsx)(i.li,{children:"Haz commit y push en la rama."}),"\n",(0,a.jsxs)(i.li,{children:["Cambia a la rama master y edita el archivo nuevamente a\xf1adiendo ",(0,a.jsx)(i.strong,{children:'"Line6"'})," y ",(0,a.jsx)(i.strong,{children:'"Line7"'})," debajo de ",(0,a.jsx)(i.strong,{children:'"Line3."'})]}),"\n",(0,a.jsx)(i.li,{children:"Haz commit y push a master."}),"\n",(0,a.jsx)(i.li,{children:"Crea una solicitud de unificaci\xf3n y observa como falla."}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"soluci\xf3n-4",children:"Soluci\xf3n:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"$ git checkout -b conflicts_branch\n"})}),"\n",(0,a.jsxs)(i.p,{children:["Edita ",(0,a.jsx)(i.strong,{children:"\u201cconflicts.rb\u201d"})," a\xf1adiendo ",(0,a.jsx)(i.strong,{children:'"Line4"'})," y ",(0,a.jsx)(i.strong,{children:'"Line5"'})]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:'$ git commit -am "add line4 and line5"\n'})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"$ git push origin conflicts_branch\n"})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"$ git checkout master\n"})}),"\n",(0,a.jsxs)(i.p,{children:["Edita \u201cconflicts.rb\u201d a\xf1adiendo ",(0,a.jsx)(i.strong,{children:'"Line6"'})," y ",(0,a.jsx)(i.strong,{children:'"Line7"'})]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:'$ git commit -am "add line6 and line7"\n'})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"$ git push origin master\n"})}),"\n",(0,a.jsx)(i.p,{children:"Crea una solicitud de mezcla."}),"\n",(0,a.jsx)(i.h3,{id:"deshacer",children:"Deshacer"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Corrige el comentario del commit anterior"}),"\n"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:'$ git commit --amend -m "New Message"\n'})}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Deshace el \xfaltimo commit llevando todo al \xe1rea de preparaci\xf3n"}),"\n"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"$ git reset --soft HEAD^\n"})}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Deshace el \xfaltimo commit y descarta los cambios"}),"\n"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"$ git reset --hard HEAD^\n"})}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Igual que el anterior pero deshace los dos \xfaltimos commits"}),"\n"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"$ git reset --hard HEAD^^\n"})}),"\n",(0,a.jsx)(i.h3,{id:"actividad-7",children:"Actividad:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Edita el archivo ",(0,a.jsx)(i.strong,{children:'"edit_this_file.rb"'})," y verifica el estado."]}),"\n",(0,a.jsx)(i.li,{children:"Haz commit con un comentario err\xf3neo y ve el mismo en el log."}),"\n",(0,a.jsx)(i.li,{children:"Corrige el comentario y ve el cambio en el log."}),"\n",(0,a.jsx)(i.li,{children:"Elimina el \xfaltimo commit llevando los cambios al area de preparacion y ve el cambio en el log."}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"soluci\xf3n-5",children:"Soluci\xf3n:"}),"\n",(0,a.jsx)(i.p,{children:"Edita el archivo \u201cedit_this_file.rb\u201d"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"$ git status\n"})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:'$ git commit -am "qwerty"\n'})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"$ git log\n"})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:'$ git commit --amend "New comment added"\n'})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"$ git log\n"})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"$ git reset --soft HEAD^\n"})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:"$ git log\n"})})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},9032:(e,i,n)=>{n.d(i,{A:()=>a});const a=n.p+"assets/images/git-flow-c1a536e4a26585b3a6fbb336acf764db.png"},8453:(e,i,n)=>{n.d(i,{R:()=>c,x:()=>r});var a=n(6540);const s={},l=a.createContext(s);function c(e){const i=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(l.Provider,{value:i},e.children)}}}]);