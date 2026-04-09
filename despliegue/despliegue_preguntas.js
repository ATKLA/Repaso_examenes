// ============================================================
// BANCO DE PREGUNTAS — Despliegue de Aplicaciones Web (0614)
// 40 preguntas por UF: 15 del cuestionario oficial + 25 del temario
// ============================================================

const BANCO = {

  // ══════════════════════════════════════════════════════════
  // UF1 — Servicios de red implicados en el despliegue
  // ══════════════════════════════════════════════════════════
  UF1: [
    // — Cuestionario oficial (15) ——————————————————————————
    {
      p: "¿Qué tecnología es fundamental para el despliegue de contenedores?",
      ops: ["Los balanceadores de carga.", "La virtualización.", "Los firewalls.", "Los protocolos de enrutamiento."],
      ok: 1,
      exp: "Los contenedores se basan en la virtualización a nivel de sistema operativo para proporcionar entornos aislados y portables."
    },
    {
      p: "En DNS, ¿qué es un dominio de nivel superior (TLD)?",
      ops: ["El último segmento de un nombre de dominio.", "El primer servidor DNS en la jerarquía.", "Un registro que apunta a un servidor de correo.", "El servidor raíz del sistema DNS."],
      ok: 0,
      exp: "El TLD (Top Level Domain) es el último segmento de un nombre de dominio, como .com, .es o .org."
    },
    {
      p: "¿Qué tipo de alojamiento web utiliza recursos de múltiples servidores para equilibrar la carga y maximizar la disponibilidad?",
      ops: ["El alojamiento en la nube.", "El alojamiento VPS (Virtual Private Server).", "El alojamiento dedicado.", "El alojamiento compartido."],
      ok: 0,
      exp: "El alojamiento en la nube distribuye la carga entre múltiples servidores, lo que maximiza la disponibilidad y permite escalar fácilmente."
    },
    {
      p: "¿Cómo afecta el alojamiento en la nube a la escalabilidad de una aplicación web?",
      ops: ["Reduce la capacidad de escalar.", "Facilita el escalado rápido y eficiente de recursos.", "No tiene impacto en la escalabilidad.", "Solo permite escalado vertical."],
      ok: 1,
      exp: "La nube permite añadir o reducir recursos bajo demanda, facilitando tanto el escalado vertical como el horizontal de forma rápida y eficiente."
    },
    {
      p: "¿Cuál de las siguientes es una ventaja principal del despliegue de contenedores?",
      ops: ["La consistencia entre los entornos de desarrollo y producción.", "El aumento de la seguridad cibernética.", "La reducción del ancho de banda necesario.", "La eliminación de la necesidad de un sistema operativo."],
      ok: 0,
      exp: "Los contenedores encapsulan la aplicación y sus dependencias, garantizando que funcione igual en desarrollo, pruebas y producción."
    },
    {
      p: "¿Qué es un contenedor en el contexto del despliegue de aplicaciones?",
      ops: ["Un dispositivo de almacenamiento físico.", "Un método de cifrado de datos.", "Un entorno de ejecución ligero y portátil para las aplicaciones.", "Un tipo de máquina virtual con kernel propio."],
      ok: 2,
      exp: "Un contenedor es un entorno de ejecución ligero y portátil que incluye la aplicación y sus dependencias, pero comparte el kernel del sistema operativo anfitrión."
    },
    {
      p: "¿Qué servicio de computación en la nube ofrece almacenamiento y potencia de cálculo a través de Internet?",
      ops: ["IaaS.", "PaaS.", "SaaS.", "FaaS."],
      ok: 0,
      exp: "IaaS (Infrastructure as a Service) proporciona infraestructura virtualizada —servidores, almacenamiento y red— a través de Internet."
    },
    {
      p: "¿Qué es LDAP en términos de gestión de red?",
      ops: ["Un protocolo de transferencia de archivos.", "Un protocolo de acceso a directorios.", "Un protocolo de enrutamiento.", "Un protocolo de cifrado."],
      ok: 1,
      exp: "LDAP (Lightweight Directory Access Protocol) es un protocolo estándar para acceder y gestionar servicios de directorio sobre una red TCP/IP."
    },
    {
      p: "¿Cuál de los siguientes es un ejemplo de SaaS en la computación en la nube?",
      ops: ["Microsoft Office 365.", "Amazon EC2.", "Docker.", "VMware vSphere."],
      ok: 0,
      exp: "Microsoft Office 365 es un ejemplo de SaaS: el proveedor gestiona toda la infraestructura y el usuario solo consume la aplicación."
    },
    {
      p: "¿Qué ventaja ofrece LDAP frente a los directorios tradicionales?",
      ops: ["Un acceso y una gestión eficientes de la información del directorio.", "Una mejor calidad de video en streaming.", "Una mayor velocidad de transferencia de los archivos.", "Una mayor capacidad de cifrado de datos."],
      ok: 0,
      exp: "LDAP permite acceder y gestionar de forma eficiente grandes volúmenes de información de directorio (usuarios, grupos, permisos) en entornos de red."
    },
    {
      p: "¿Cuál de las siguientes es una característica clave del alojamiento compartido?",
      ops: ["Compartir un servidor con múltiples clientes.", "El control total sobre el hardware.", "Los recursos dedicados.", "El acceso root al sistema operativo."],
      ok: 0,
      exp: "En el alojamiento compartido, múltiples clientes utilizan el mismo servidor físico, lo que reduce el coste pero también limita los recursos disponibles para cada uno."
    },
    {
      p: "¿Para qué se utiliza principalmente el protocolo LDAP?",
      ops: ["Para servir páginas web.", "Para enviar correos electrónicos.", "Para la autenticación y el acceso a la información de los directorios.", "Para la transferencia segura de archivos."],
      ok: 2,
      exp: "LDAP se usa principalmente para autenticación centralizada y para consultar información almacenada en servicios de directorio, como usuarios y grupos."
    },
    {
      p: "¿Qué tipo de alojamiento web permite el máximo control sobre el servidor físico?",
      ops: ["El alojamiento en la nube.", "El alojamiento dedicado.", "El alojamiento compartido.", "El alojamiento VPS."],
      ok: 1,
      exp: "El alojamiento dedicado asigna un servidor físico completo a un único cliente, lo que ofrece el máximo control sobre hardware y configuración."
    },
    {
      p: "En la computación en la nube, ¿qué modelo de servicio proporciona plataformas para desarrollar, probar e implementar las aplicaciones?",
      ops: ["PaaS (Platform as a Service).", "SaaS (Software as a Service).", "IaaS (Infrastructure as a Service).", "DaaS (Desktop as a Service)."],
      ok: 0,
      exp: "PaaS proporciona un entorno completo para que los desarrolladores construyan, prueben y desplieguen aplicaciones sin gestionar la infraestructura subyacente."
    },
    {
      p: "¿Qué representa un registro A en los sistemas de dominios DNS?",
      ops: ["La dirección IP de un servidor.", "La dirección de correo electrónico.", "El alias de un dominio.", "El servidor de nombres autoritativo."],
      ok: 0,
      exp: "El registro A (Address) mapea un nombre de dominio a su dirección IPv4 correspondiente, siendo uno de los registros DNS más fundamentales."
    },

    // — Temario (25) ———————————————————————————————————————
    {
      p: "¿Qué diferencia hay entre escalado vertical y escalado horizontal en el despliegue de aplicaciones web?",
      ops: ["El escalado vertical añade más servidores iguales; el horizontal aumenta los recursos de un único servidor.", "El escalado vertical aumenta los recursos (RAM/CPU/disco) de un servidor; el horizontal añade más servidores.", "Ambos términos significan lo mismo en el contexto de despliegue.", "El escalado vertical es más caro; el horizontal es gratuito en todos los proveedores cloud."],
      ok: 1,
      exp: "El escalado vertical aumenta los recursos de un único servidor (más RAM, CPU o disco), mientras que el horizontal añade más servidores para distribuir la carga."
    },
    {
      p: "¿Cuál fue la empresa que lanzó el primer servicio de IaaS a gran escala en 2006?",
      ops: ["Microsoft Azure.", "Google Cloud.", "Amazon Web Services (AWS).", "IBM Cloud."],
      ok: 2,
      exp: "En 2006, Amazon lanzó EC2 (Elastic Compute Cloud) y S3 (Simple Storage Service), pioneros del modelo IaaS que dio origen a la computación en la nube moderna."
    },
    {
      p: "En el modelo DevOps, ¿qué significa CI/CD?",
      ops: ["Control Interno / Control de Despliegue.", "Integración Continua / Distribución (o Despliegue) Continua.", "Código Integrado / Código Desplegado.", "Compilación Incremental / Compilación Distribuida."],
      ok: 1,
      exp: "CI (Continuous Integration) y CD (Continuous Delivery/Deployment) son prácticas DevOps que automatizan la integración, prueba y despliegue de cambios de código."
    },
    {
      p: "¿Qué es el alojamiento interno (in-house) en el despliegue de aplicaciones?",
      ops: ["Un modelo en el que los servidores y servicios están alojados en las instalaciones de la propia organización.", "Un servicio de nube pública gestionado por un proveedor externo.", "Un tipo de alojamiento compartido en el que varios clientes usan el mismo servidor.", "Un contenedor Docker ejecutándose en un servidor remoto."],
      ok: 0,
      exp: "El alojamiento in-house implica que la organización instala y mantiene toda la infraestructura (servidores, red, alimentación) dentro de sus propias instalaciones."
    },
    {
      p: "¿Qué es un registro MX en DNS?",
      ops: ["Un registro que almacena la dirección IPv6 de un servidor.", "Un registro que apunta al servidor de correo electrónico de un dominio.", "Un registro que define un alias para otro nombre de dominio.", "Un registro que almacena información de texto arbitraria."],
      ok: 1,
      exp: "El registro MX (Mail Exchanger) indica qué servidor de correo es responsable de recibir los mensajes de correo electrónico para un dominio."
    },
    {
      p: "¿Cuál es la diferencia entre una zona DNS primaria y una secundaria?",
      ops: ["La zona primaria solo tiene registros A; la secundaria tiene registros MX.", "La zona primaria es la fuente original de los datos; la secundaria obtiene los datos por transferencia de zona desde la primaria.", "La zona primaria es de acceso público; la secundaria es privada.", "No hay diferencia; son términos intercambiables."],
      ok: 1,
      exp: "La zona primaria contiene la copia maestra de los registros DNS. La zona secundaria obtiene una copia de esos datos mediante transferencia de zona, funcionando como respaldo."
    },
    {
      p: "¿Qué tipo de resolución DNS convierte una dirección IP en un nombre de dominio?",
      ops: ["Resolución directa.", "Resolución inversa.", "Resolución recursiva.", "Resolución iterativa."],
      ok: 1,
      exp: "La resolución inversa (reverse lookup) realiza el proceso contrario a la resolución directa: a partir de una IP obtiene el nombre de dominio asociado, usando zonas .in-addr.arpa."
    },
    {
      p: "¿Qué es Docker Compose?",
      ops: ["Un orquestador para definir y ejecutar aplicaciones Docker multicontenedor.", "Un registro de imágenes Docker privado.", "El motor de ejecución de contenedores de Docker.", "Una herramienta para crear imágenes Docker de forma automatizada."],
      ok: 0,
      exp: "Docker Compose permite definir aplicaciones formadas por múltiples contenedores en un archivo YAML y gestionarlos como una unidad con un solo comando."
    },
    {
      p: "¿Cuál es la diferencia entre una imagen Docker y un contenedor Docker?",
      ops: ["Son exactamente lo mismo, solo difieren en el nombre.", "La imagen es la plantilla inmutable; el contenedor es la instancia en ejecución de esa imagen.", "El contenedor es la plantilla; la imagen es la instancia en ejecución.", "Una imagen puede ejecutarse directamente; un contenedor necesita Docker Compose."],
      ok: 1,
      exp: "Una imagen Docker es una plantilla inmutable que define el entorno. Un contenedor es una instancia en ejecución de esa imagen, con su propia capa de escritura."
    },
    {
      p: "¿Qué formato de intercambio de datos utiliza LDAP para importar y exportar entradas de directorio?",
      ops: ["XML (Extensible Markup Language).", "JSON (JavaScript Object Notation).", "LDIF (LDAP Data Interchange Format).", "CSV (Comma-Separated Values)."],
      ok: 2,
      exp: "LDIF (LDAP Data Interchange Format) es el formato estándar de texto utilizado para representar e intercambiar entradas y cambios en un directorio LDAP."
    },
    {
      p: "En el contexto de LDAP, ¿qué es un objectClass?",
      ops: ["Una clase de Java utilizada para conectarse a un servidor LDAP.", "Un conjunto de atributos que define el tipo de objeto almacenado en el directorio.", "El nombre del servidor LDAP en la red.", "El certificado SSL usado para cifrar la conexión LDAP."],
      ok: 1,
      exp: "En LDAP, objectClass define el tipo de objeto (usuario, grupo, dispositivo…) y determina qué atributos son obligatorios u opcionales para esa entrada en el directorio."
    },
    {
      p: "¿Qué tipo de registro DNS se usa para crear un alias que apunta a otro nombre de dominio?",
      ops: ["Registro A.", "Registro CNAME.", "Registro MX.", "Registro NS."],
      ok: 1,
      exp: "El registro CNAME (Canonical Name) crea un alias que apunta a otro nombre de dominio (el nombre canónico), en lugar de a una dirección IP directamente."
    },
    {
      p: "¿Qué es LXC en el contexto de los contenedores?",
      ops: ["Un sistema de contenedores a nivel de sistema operativo de Linux, predecesor conceptual de Docker.", "Un hipervisor de tipo 1 para virtualización completa.", "Un protocolo de red para la comunicación entre contenedores.", "Una herramienta de orquestación similar a Kubernetes."],
      ok: 0,
      exp: "LXC (Linux Containers) es una tecnología de virtualización a nivel de SO que permite ejecutar múltiples sistemas Linux aislados en un mismo host, siendo precursor del enfoque de Docker."
    },
    {
      p: "¿Qué son los ccTLD en el sistema DNS?",
      ops: ["Dominios de nivel superior genéricos como .com o .org.", "Dominios de nivel superior de código de país, como .es, .fr o .uk.", "Subdominios creados por organizaciones privadas.", "Registros de recursos de tipo texto."],
      ok: 1,
      exp: "Los ccTLD (Country Code Top Level Domains) son TLD asignados a países y territorios, compuestos por dos letras según el estándar ISO 3166-1 (ej: .es para España)."
    },
    {
      p: "En el modelo de computación en la nube, ¿cuál es la principal diferencia entre IaaS y PaaS?",
      ops: ["En IaaS el cliente gestiona desde la virtualización hasta la aplicación; en PaaS solo gestiona la aplicación y los datos.", "En IaaS el proveedor gestiona todo; en PaaS el cliente gestiona todo.", "IaaS es para almacenamiento; PaaS es para procesamiento.", "No hay diferencia práctica entre ambos modelos."],
      ok: 0,
      exp: "En IaaS el cliente controla el SO, middleware y aplicación; el proveedor gestiona la infraestructura física. En PaaS el proveedor gestiona también el SO y middleware, dejando al cliente solo la aplicación y datos."
    },
    {
      p: "¿Qué comando de Docker se usa para listar los contenedores en ejecución?",
      ops: ["docker images", "docker ps", "docker run", "docker inspect"],
      ok: 1,
      exp: "El comando 'docker ps' lista los contenedores actualmente en ejecución. Con la opción '-a' también muestra los contenedores detenidos."
    },
    {
      p: "¿Qué es un servidor DNS raíz?",
      ops: ["El servidor DNS de mayor jerarquía que conoce la ubicación de todos los servidores TLD.", "El servidor DNS local de una red privada.", "El servidor que almacena todos los dominios de segundo nivel.", "El servidor encargado de la resolución inversa."],
      ok: 0,
      exp: "Los servidores DNS raíz son la cima de la jerarquía DNS. Conocen la ubicación de los servidores de nombres autoritativos de cada TLD y son el punto de partida de cualquier resolución DNS."
    },
    {
      p: "¿Qué ventaja ofrece la computación en la nube respecto al alojamiento in-house en términos de inversión inicial?",
      ops: ["La nube requiere mayor inversión inicial al necesitar contratos largos.", "La nube elimina la inversión inicial en hardware, operando bajo un modelo de pago por uso.", "Ambos modelos tienen la misma inversión inicial.", "El alojamiento in-house es siempre más económico a largo plazo."],
      ok: 1,
      exp: "La computación en la nube opera bajo modelo de pago por uso (pay-as-you-go), eliminando la necesidad de adquirir hardware y reduciendo drásticamente la inversión inicial."
    },
    {
      p: "¿Qué es OpenLDAP?",
      ops: ["Una implementación comercial de Active Directory de Microsoft.", "Una implementación de código abierto del protocolo LDAP.", "Un servidor DNS de código abierto.", "Un orquestador de contenedores basado en LDAP."],
      ok: 1,
      exp: "OpenLDAP es una implementación libre y de código abierto del protocolo LDAP, ampliamente utilizada en entornos Linux para gestión centralizada de identidades."
    },
    {
      p: "¿Qué representa un registro NS en DNS?",
      ops: ["La dirección IP del servidor de correo.", "El servidor de nombres autoritativo de una zona DNS.", "Un alias para otro nombre de dominio.", "La dirección IPv6 de un host."],
      ok: 1,
      exp: "El registro NS (Name Server) indica qué servidores DNS son autoritativos para una zona determinada, es decir, quién tiene la información oficial de ese dominio."
    },
    {
      p: "¿Qué son los subdominios en el sistema DNS?",
      ops: ["Dominios de primer nivel como .com o .net.", "Extensiones del nombre de dominio que permiten organizar servicios bajo un dominio principal.", "Servidores DNS secundarios de una zona.", "Registros DNS de tipo texto (TXT)."],
      ok: 1,
      exp: "Los subdominios son divisiones de un dominio principal que permiten organizar servicios (ej: mail.empresa.com, dev.empresa.com) bajo el mismo nombre de dominio."
    },
    {
      p: "En Docker, ¿qué es un registro (registry)?",
      ops: ["Un almacén centralizado donde se guardan y distribuyen imágenes Docker.", "El archivo de configuración principal de Docker.", "Un log de eventos generados por los contenedores.", "Una red virtual interna de Docker."],
      ok: 0,
      exp: "Un registry Docker es un repositorio centralizado para almacenar y distribuir imágenes. Docker Hub es el registry público por defecto; también existen registries privados."
    },
    {
      p: "¿Qué es el modelo DevOps y qué departamentos fusiona?",
      ops: ["Fusiona los departamentos de diseño y marketing para acelerar el lanzamiento de productos.", "Fusiona los departamentos de desarrollo (Dev) y operaciones/sistemas (Ops) para trabajar de forma ágil e integrada.", "Es un modelo exclusivo de empresas de software que fusiona ventas y soporte técnico.", "Fusiona los departamentos de seguridad y redes para mejorar la protección de la infraestructura."],
      ok: 1,
      exp: "DevOps fusiona desarrollo (Dev) y operaciones (Ops) para eliminar silos organizativos, permitiendo ciclos de entrega más rápidos mediante automatización, CI/CD y colaboración continua."
    },
    {
      p: "¿Cuál es el propósito del archivo Dockerfile?",
      ops: ["Definir los servicios de una aplicación multicontenedor con Docker Compose.", "Contener las instrucciones para construir una imagen Docker de forma automatizada.", "Almacenar las variables de entorno de un contenedor Docker en producción.", "Configurar la red interna entre contenedores Docker."],
      ok: 1,
      exp: "El Dockerfile es un archivo de texto con instrucciones que Docker ejecuta para construir una imagen de forma automatizada y reproducible (FROM, RUN, COPY, CMD, etc.)."
    },
    {
      p: "¿Qué es un clúster en el contexto del despliegue de aplicaciones web?",
      ops: ["Un tipo especial de contenedor Docker para aplicaciones de alto rendimiento.", "Un conjunto de servidores coordinados que trabajan juntos para distribuir la carga y aumentar la tolerancia a fallos.", "Un registro DNS que agrupa múltiples subdominios.", "Una arquitectura de base de datos distribuida exclusiva de la nube."],
      ok: 1,
      exp: "Un clúster es un conjunto de servidores que trabajan de forma coordinada, permitiendo distribuir la carga entre ellos (balanceo) y continuar funcionando si alguno falla (tolerancia a fallos)."
    }
  ],

  // ══════════════════════════════════════════════════════════
  // UF2 — Servidores web
  // ══════════════════════════════════════════════════════════
  UF2: [
    // — Cuestionario oficial (15) ——————————————————————————
    {
      p: "LAMP es el acrónimo de:",
      ops: ["Linux, Apache, MySQL, PHP.", "Linux, Android, MySQL, Pascal.", "LaTeX, Apache, MySQL, Pascal.", "Linux, Android, MySQL, PHP."],
      ok: 0,
      exp: "LAMP es la pila de software libre formada por Linux (SO), Apache (servidor web), MySQL (SGBD) y PHP (lenguaje de programación)."
    },
    {
      p: "¿Cuál es uno de los hitos más importantes en la evolución del protocolo HTTP según la línea de tiempo presentada?",
      ops: ["La publicación de HTTP/1.1 como la RFC 2068 en 1997.", "La definición de HTTP/2 en la RFC 7540 en 2015.", "La creación del primer correo electrónico a través de Internet en 1990.", "La creación del World Wide Web Consortium (W3C) en 1994."],
      ok: 1,
      exp: "En 2015 se publicó HTTP/2 en la RFC 7540, siendo una de las actualizaciones más importantes al protocolo, introduciendo multiplexación y compresión de cabeceras."
    },
    {
      p: "¿Cuál es el protocolo principal que se utiliza en la World Wide Web para acceder a la información?",
      ops: ["HTML.", "TCP/IP.", "FTP.", "HTTP."],
      ok: 3,
      exp: "HTTP (Hypertext Transfer Protocol) es el protocolo de la capa de aplicación que permite la transferencia de información en la Web entre clientes y servidores."
    },
    {
      p: "¿Cuál es la función principal de un servidor web en la arquitectura cliente-servidor?",
      ops: ["Hacer copias de seguridad de la información.", "Representar la información HTML.", "Consultar bases de datos.", "Estar siempre encendido a la espera de peticiones para buscar y servir información."],
      ok: 3,
      exp: "El servidor web está permanentemente en modo escucha esperando peticiones de clientes para localizar y entregar los recursos solicitados."
    },
    {
      p: "Por lo general, en las empresas de hosting...",
      ops: ["Existen varios planes de precios para adaptarse a las necesidades de los clientes.", "Ofrecen el servicio de hosting, pero no el del registro del dominio.", "Ofrecen el servicio del registro del dominio, pero no el de hosting.", "Solo ofrecen servicios a empresas."],
      ok: 0,
      exp: "Las empresas de hosting suelen ofrecer múltiples planes adaptados a distintas necesidades y presupuestos, y generalmente combinan servicios de hosting y registro de dominios."
    },
    {
      p: "Un certificado contiene la clave privada de su propietario firmada con la clave pública de una autoridad certificadora.",
      ops: ["Verdadero.", "Falso. El certificado no contiene la clave privada del propietario, ya que esta debe mantenerse en secreto.", "El certificado sí contiene la clave privada cifrada.", "Depende del tipo de certificado."],
      ok: 1,
      exp: "Falso. Un certificado digital contiene la clave PÚBLICA del propietario, no la privada. La clave privada nunca abandona el dispositivo del propietario y la firma la realiza la CA con su clave privada."
    },
    {
      p: "HTTP es un protocolo con estado que permite relacionar peticiones para implementar aplicaciones web.",
      ops: ["HTTP utiliza cookies para mantener el estado entre las peticiones.", "Falso. HTTP es un protocolo sin estado.", "Verdadero.", "Depende de la versión de HTTP utilizada."],
      ok: 1,
      exp: "HTTP es un protocolo sin estado (stateless): cada petición es independiente y el servidor no recuerda las peticiones anteriores. Las cookies y sesiones son mecanismos externos para simular estado."
    },
    {
      p: "¿Cuál de estas afirmaciones respecto al protocolo HTTP/2 es correcta?",
      ops: ["Se publicó en 2020.", "Aún es un borrador.", "Se publicó en la RFC 7540.", "Se publicó en 1997."],
      ok: 2,
      exp: "HTTP/2 se definió en la RFC 7540 en 2015. Introduce mejoras como la multiplexación, la compresión de cabeceras y el envío de datos en formato binario en vez de ASCII."
    },
    {
      p: "¿Cuál es la función del método HTTP \"HEAD\"?",
      ops: ["Transferir el recurso indicado del servidor al cliente.", "El servidor solo le envía al cliente la cabecera para obtener metadatos del recurso sin transferirlo.", "Borrar un recurso del servidor.", "Enviar información al servidor para su procesamiento."],
      ok: 1,
      exp: "HEAD es idéntico a GET pero el servidor solo devuelve los headers de respuesta, sin el cuerpo. Útil para obtener metadatos (tamaño, tipo, fecha) sin descargar el contenido."
    },
    {
      p: "¿Cuál de las siguientes afirmaciones respecto al protocolo TLS 1.3 es correcta?",
      ops: ["Se publicó el año 2018 en la RFC 9110.", "Se publicó el año 2018 en la RFC 8446.", "Se publicó el año 2022 en la RFC 8446.", "Aún se trata de un borrador."],
      ok: 1,
      exp: "TLS 1.3 se publicó en 2018 como RFC 8446. Simplifica el handshake, elimina algoritmos obsoletos y mejora significativamente la seguridad y el rendimiento respecto a TLS 1.2."
    },
    {
      p: "En el contexto del protocolo HTTP, ¿cuál de las siguientes es una característica de las conexiones persistentes a partir de HTTP/1.1?",
      ops: ["Permiten varias comunicaciones HTTP por cada conexión TCP.", "Incrementan el tráfico entre los equipos.", "Se introducen en la versión HTTP/3.", "Establecen una nueva conexión TCP para cada petición y respuesta."],
      ok: 0,
      exp: "A partir de HTTP/1.1, las conexiones persistentes (keep-alive) permiten reutilizar la misma conexión TCP para múltiples peticiones, reduciendo la latencia y el tráfico de red."
    },
    {
      p: "¿En qué consiste la arquitectura de tres niveles en comparación con la arquitectura cliente-servidor?",
      ops: ["El cliente solicita información directamente a la base de datos.", "El servidor de aplicaciones no consulta la base de datos.", "El servidor de las aplicaciones consulta la base de datos para completar la información solicitada por el cliente.", "El servidor de bases de datos y el servidor de aplicaciones están siempre en máquinas distintas."],
      ok: 2,
      exp: "En la arquitectura de tres niveles se añade un servidor de aplicaciones entre el cliente y la base de datos: el cliente pide al servidor de apps, este consulta la BD y devuelve la respuesta unificada."
    },
    {
      p: "Un ejemplo de sitio web que funciona con una arquitectura de tres niveles podrá ser:",
      ops: ["Un programa de edición de vídeo instalado de forma local en el ordenador cliente.", "Un sitio web realizado con un CMS como WordPress.", "Un sitio web realizado exclusivamente con páginas HTML estáticas.", "Un programa de procesador de textos instalado de forma local."],
      ok: 1,
      exp: "WordPress es un CMS que usa PHP (servidor de aplicaciones) para consultar MySQL (base de datos) y servir páginas dinámicas al navegador (cliente), siguiendo la arquitectura de tres niveles."
    },
    {
      p: "Las empresas de hosting ofrecen a sus clientes un panel de control para que puedan llevar a cabo algunas gestiones relacionadas con su sitio web.",
      ops: ["Las empresas de hosting no ofrecen paneles de control.", "Falso.", "Verdadero.", "Solo en los planes de mayor precio."],
      ok: 2,
      exp: "Verdadero. La mayoría de empresas de hosting proporcionan paneles de control (como cPanel o Plesk) que permiten al cliente gestionar dominios, correos, bases de datos, etc."
    },
    {
      p: "Aunque HTTP/2 mejora en muchos aspectos respecto a HTTP/1.1, los mensajes se siguen enviando en ASCII para facilitar la transferencia de información.",
      ops: ["Verdadero.", "Falso. HTTP/2 envía los mensajes en formato binario, no en ASCII.", "Depende de la implementación del servidor.", "Solo las cabeceras siguen siendo ASCII; el cuerpo es binario."],
      ok: 1,
      exp: "Falso. Una de las mejoras clave de HTTP/2 es que los mensajes se envían en formato binario (no en texto ASCII como HTTP/1.1), lo que mejora la eficiencia y velocidad de parsing."
    },

    // — Temario (25) ———————————————————————————————————————
    {
      p: "¿Cuál es el puerto de escucha por defecto de un servidor web HTTP?",
      ops: ["443/TCP", "22/TCP", "80/TCP", "8080/TCP"],
      ok: 2,
      exp: "El protocolo HTTP usa por defecto el puerto 80/TCP. HTTPS usa el puerto 443/TCP. El puerto 8080 es común en entornos de desarrollo y pruebas."
    },
    {
      p: "¿Qué son los tipos MIME en el contexto de HTTP?",
      ops: ["Métodos de cifrado utilizados por HTTPS.", "Estándares que identifican el tipo de contenido de los recursos transferidos (texto, imagen, vídeo, etc.).", "Cabeceras de autenticación del protocolo HTTP.", "Versiones antiguas del protocolo de correo electrónico."],
      ok: 1,
      exp: "Los tipos MIME (Multipurpose Internet Mail Extensions) identifican el formato del contenido, permitiendo al cliente saber cómo procesar la respuesta (ej: text/html, image/png, application/json)."
    },
    {
      p: "¿Qué es un proxy en una arquitectura web?",
      ops: ["Un servidor de base de datos que actúa como intermediario.", "Un dispositivo intermediario entre cliente y servidor que puede cachear, filtrar y balancear carga.", "Un tipo especial de servidor web que solo sirve contenido estático.", "Un protocolo de autenticación HTTP."],
      ok: 1,
      exp: "Un proxy actúa en la capa de aplicación como intermediario entre cliente y servidor. Sus funciones incluyen cacheo, filtrado de contenidos, control de acceso, balanceo de carga y anonimato."
    },
    {
      p: "¿Qué es un host virtual basado en nombres en Apache/Nginx?",
      ops: ["Una máquina virtual que ejecuta un servidor web.", "Una configuración que permite alojar múltiples sitios web con diferentes nombres de dominio en un mismo servidor e IP.", "Un servidor web que solo acepta conexiones de IPs específicas.", "Un alias DNS para el servidor web."],
      ok: 1,
      exp: "Los virtual hosts basados en nombres permiten servir múltiples sitios web desde una misma dirección IP, diferenciándolos por el nombre de dominio en la cabecera Host de la petición HTTP."
    },
    {
      p: "¿Cuál fue la primera versión del protocolo HTTP y quién lo creó?",
      ops: ["HTTP/1.0, creado por el IETF en 1996.", "HTTP/0.9, escrito por Tim Berners-Lee en 1991.", "HTTP/1.1, publicado como RFC 2068 en 1997.", "HTTP/2, definido en RFC 7540 en 2015."],
      ok: 1,
      exp: "Tim Berners-Lee escribió la primera aproximación al protocolo HTTP en 1989-1991. HTTP/0.9 fue la primera definición escrita en dominio público y solo soportaba el método GET."
    },
    {
      p: "¿Qué es la autenticación OAuth en HTTP?",
      ops: ["Un método de autenticación donde el usuario envía usuario y contraseña en base64.", "Un protocolo que permite a aplicaciones de terceros acceder a recursos de un usuario sin que este les facilite sus credenciales, usando tokens.", "Un sistema de autenticación basado en certificados digitales del cliente.", "El esquema de autenticación por defecto en HTTP/2."],
      ok: 1,
      exp: "OAuth permite que una aplicación de terceros acceda a recursos del usuario en otro servidor (ej: Google Drive) usando un token de acceso, sin que el usuario comparta su contraseña con la aplicación."
    },
    {
      p: "¿Cuál es la diferencia entre una URL y una URN?",
      ops: ["URL identifica recursos por nombre; URN los identifica por su localización.", "URL identifica un recurso por su localización; URN lo identifica por su nombre sin indicar dónde se encuentra.", "Son términos sinónimos que identifican exactamente lo mismo.", "URL es solo para HTTP; URN es para todos los demás protocolos."],
      ok: 1,
      exp: "URL (Uniform Resource Locator) identifica un recurso por su dirección/ubicación (ej: https://...). URN (Uniform Resource Name) lo identifica por nombre único pero sin especificar su localización."
    },
    {
      p: "¿Cómo funciona el cifrado asimétrico en HTTPS/TLS?",
      ops: ["Usa la misma clave para cifrar y descifrar los datos.", "Usa un par de claves: la pública para cifrar y la privada para descifrar.", "Usa dos claves simétricas intercambiadas al inicio de la sesión.", "El cliente y servidor generan claves idénticas usando el mismo algoritmo."],
      ok: 1,
      exp: "En cifrado asimétrico (clave pública), lo que se cifra con la clave pública solo puede descifrarse con la clave privada correspondiente. TLS usa este mecanismo en el handshake para intercambiar de forma segura la clave simétrica de sesión."
    },
    {
      p: "¿Qué código de estado HTTP indica que un recurso no ha sido encontrado?",
      ops: ["200 OK", "301 Moved Permanently", "404 Not Found", "500 Internal Server Error"],
      ok: 2,
      exp: "El código 404 Not Found indica que el servidor no ha podido localizar el recurso solicitado. Es uno de los códigos de error más conocidos del protocolo HTTP."
    },
    {
      p: "¿Qué es la PKI (Infraestructura de Clave Pública) en el contexto de HTTPS?",
      ops: ["Un protocolo de cifrado simétrico para las comunicaciones web.", "Un sistema de certificados y autoridades de certificación que permite verificar la autenticidad de los servidores web.", "El algoritmo de cifrado utilizado en TLS 1.3.", "Una extensión de HTTP para la autenticación de usuarios."],
      ok: 1,
      exp: "La PKI es el conjunto de roles, políticas y certificados digitales que permiten crear, gestionar y verificar identidades digitales. En HTTPS, las CAs (Autoridades de Certificación) emiten certificados que prueban la identidad del servidor."
    },
    {
      p: "¿Qué diferencia hay entre HTTP/1.1 con conexiones persistentes y HTTP/2 con multiplexación?",
      ops: ["No hay diferencia práctica entre ambos mecanismos.", "HTTP/1.1 permite varias peticiones por conexión TCP pero de forma secuencial; HTTP/2 permite múltiples peticiones simultáneas en la misma conexión TCP.", "HTTP/2 requiere una nueva conexión TCP por cada petición; HTTP/1.1 no.", "HTTP/1.1 es siempre más rápido que HTTP/2 en redes de alta velocidad."],
      ok: 1,
      exp: "HTTP/1.1 permite reutilizar la conexión TCP pero las peticiones se procesan secuencialmente (head-of-line blocking). HTTP/2 introduce multiplexación: múltiples streams de datos en paralelo sobre la misma conexión."
    },
    {
      p: "¿Para qué sirve el método HTTP PUT?",
      ops: ["Para solicitar un recurso al servidor.", "Para enviar datos a un servidor para que los procese (como un formulario).", "Para crear o reemplazar completamente un recurso en la URL especificada.", "Para eliminar un recurso del servidor."],
      ok: 2,
      exp: "PUT crea o reemplaza completamente el recurso identificado por la URL con el contenido del cuerpo de la petición. Es idempotente: aplicarlo varias veces produce el mismo resultado."
    },
    {
      p: "¿Qué característica define al hosting compartido frente al VPS?",
      ops: ["En hosting compartido cada cliente tiene su propia instancia virtualizada del SO; en VPS comparten el mismo SO.", "En hosting compartido múltiples clientes comparten el mismo servidor físico y SO; en VPS cada cliente tiene una instancia virtualizada aislada.", "El VPS es siempre más barato que el hosting compartido.", "No hay diferencia técnica relevante entre ambos modelos."],
      ok: 1,
      exp: "En hosting compartido todos los clientes comparten el mismo servidor físico y sistema operativo. En VPS cada cliente tiene una máquina virtual con su propio SO aislado, con más control y recursos garantizados."
    },
    {
      p: "¿Cuál es el propósito de las cookies en HTTP?",
      ops: ["Comprimir las peticiones HTTP para mejorar el rendimiento.", "Almacenar pequeños fragmentos de datos en el cliente para mantener información de sesión y estado entre peticiones.", "Cifrar las comunicaciones entre cliente y servidor.", "Autenticar al servidor ante el cliente mediante certificados."],
      ok: 1,
      exp: "Las cookies son pequeños archivos de texto almacenados en el navegador que permiten mantener estado entre peticiones HTTP, como datos de sesión, preferencias o información de autenticación."
    },
    {
      p: "¿Qué es WISA en el contexto de los servidores web?",
      ops: ["Una pila de software libre equivalente a LAMP para Linux.", "Una pila de software propietario formada por Windows, IIS, SQL Server y ASP.", "Un protocolo de seguridad para servidores web.", "Un estándar del W3C para servidores web."],
      ok: 1,
      exp: "WISA es la alternativa propietaria a LAMP: Windows (SO), IIS (servidor web), SQL Server (SGBD) y ASP (lenguaje de programación). Es el stack de Microsoft para aplicaciones web."
    },
    {
      p: "¿Qué es el handshake TLS y cuándo ocurre?",
      ops: ["Es el proceso de compresión de datos que ocurre durante toda la sesión HTTPS.", "Es la negociación inicial entre cliente y servidor para establecer parámetros criptográficos y autenticar el servidor antes de transmitir datos.", "Es el proceso de cierre de una conexión HTTPS.", "Es el intercambio de cookies de sesión al inicio de una conexión HTTP."],
      ok: 1,
      exp: "El handshake TLS ocurre al inicio de una conexión HTTPS. Durante él, cliente y servidor negocian la versión de TLS, los algoritmos criptográficos, el servidor se autentica con su certificado y se establece la clave de sesión."
    },
    {
      p: "¿Cuál es la estructura básica de una URL según la RFC 3986?",
      ops: ["protocolo://usuario:contraseña@servidor/recurso", "esquema://autoridad/camino?consulta", "http://host:puerto/path?params#fragment", "protocolo:servidor/ruta?parámetros"],
      ok: 1,
      exp: "La RFC 3986 define la estructura URL como: esquema://[autoridad]camino[?consulta][#fragmento]. El esquema indica el protocolo, la autoridad el servidor, el camino la ruta y la consulta los parámetros."
    },
    {
      p: "¿Qué ventaja ofrece el proxy caché en una red corporativa?",
      ops: ["Aumenta el ancho de banda contratado con el ISP.", "Reduce el tráfico a Internet y mejora los tiempos de respuesta al servir recursos frecuentes desde la caché local.", "Proporciona cifrado de extremo a extremo para todas las comunicaciones.", "Permite al servidor web manejar más conexiones simultáneas."],
      ok: 1,
      exp: "El proxy caché almacena temporalmente los recursos web más solicitados. Cuando múltiples clientes piden el mismo recurso, el proxy lo sirve desde su caché sin necesidad de contactar el servidor origen, ahorrando ancho de banda y tiempo."
    },
    {
      p: "¿Qué método HTTP se usa típicamente para enviar datos de un formulario web al servidor?",
      ops: ["GET", "POST", "PUT", "HEAD"],
      ok: 1,
      exp: "POST envía datos al servidor incluidos en el cuerpo de la petición, sin exponerlos en la URL. Es el método estándar para el envío de formularios, ya que no tiene límite de tamaño y los datos no quedan en el historial del navegador."
    },
    {
      p: "¿En qué versión de HTTP se introdujo el soporte de hosts virtuales basados en la cabecera Host?",
      ops: ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2"],
      ok: 2,
      exp: "HTTP/1.1 hizo obligatoria la cabecera 'Host' en todas las peticiones, lo que permitió los virtual hosts basados en nombre: el servidor puede alojar múltiples dominios en una misma IP."
    },
    {
      p: "¿Qué código de respuesta HTTP indica una redirección permanente?",
      ops: ["200 OK", "301 Moved Permanently", "302 Found", "404 Not Found"],
      ok: 1,
      exp: "El código 301 Moved Permanently indica al cliente (y a los motores de búsqueda) que el recurso se ha movido definitivamente a una nueva URL. Los navegadores guardan esta redirección en caché."
    },
    {
      p: "¿Cuál es la diferencia entre TLS y SSL?",
      ops: ["Son exactamente lo mismo; TLS y SSL son sinónimos.", "SSL es la versión moderna y segura; TLS es la versión antigua y deprecada.", "TLS es el sucesor y versión mejorada de SSL. SSL está considerado inseguro y deprecado.", "SSL cifra solo las cabeceras HTTP; TLS cifra todo el mensaje."],
      ok: 2,
      exp: "TLS (Transport Layer Security) es el sucesor de SSL (Secure Sockets Layer). SSL 2.0 y 3.0 están completamente deprecados por vulnerabilidades graves. TLS 1.2 y 1.3 son los estándares actuales de seguridad en la web."
    },
    {
      p: "¿Qué es un host virtual basado en puertos?",
      ops: ["Un servidor web que solo acepta conexiones en el puerto 443.", "Una configuración que permite servir diferentes sitios web según el puerto TCP al que llega la petición.", "Un proxy inverso que redirige el tráfico según el puerto de origen del cliente.", "Una técnica para equilibrar la carga entre servidores usando puertos distintos."],
      ok: 1,
      exp: "Los virtual hosts basados en puertos permiten alojar diferentes sitios en el mismo servidor distinguiéndolos por el puerto: puerto 80 para un sitio, puerto 8080 para otro, etc."
    },
    {
      p: "¿Qué significa que HTTP es un protocolo de capa de aplicación?",
      ops: ["Que gestiona directamente el hardware de red del servidor.", "Que opera en la capa más alta del modelo TCP/IP, encima de la capa de transporte (TCP), gestionando la comunicación entre aplicaciones.", "Que solo funciona en aplicaciones de escritorio, no en navegadores web.", "Que requiere una conexión de red dedicada para cada aplicación."],
      ok: 1,
      exp: "HTTP opera en la capa de aplicación del modelo TCP/IP, la capa más alta. Se apoya en TCP (capa de transporte) para el transporte fiable de datos y gestiona la comunicación semántica entre aplicaciones web."
    },
    {
      p: "¿Qué es la autenticación Digest en HTTP?",
      ops: ["El servidor envía las credenciales al cliente para su verificación.", "El cliente envía el resultado de aplicar la función hash MD5 al nombre de usuario y contraseña, en lugar de enviarlas en texto plano.", "Un sistema de autenticación basado en certificados de cliente.", "Un esquema de autenticación que usa tokens JWT firmados."],
      ok: 1,
      exp: "La autenticación Digest mejora Basic Auth enviando el hash MD5 de las credenciales en lugar del texto plano. Sin embargo, sigue siendo vulnerable a ataques de repetición y se recomienda usar HTTPS con cualquier esquema de autenticación."
    }
  ],

  // ══════════════════════════════════════════════════════════
  // UF3 — Servidores de aplicaciones (Tomcat & Java EE)
  // ══════════════════════════════════════════════════════════
  UF3: [
    // — Cuestionario oficial (15) ——————————————————————————
    {
      p: "¿Cuál de las siguientes es una desventaja del uso de servidores de aplicaciones?",
      ops: ["La implementación de soluciones de recuperación ante las caídas (failover).", "La menor necesidad de servidores potentes.", "El incremento de la superficie de ataque del sistema, ya que se transmite la información por la red.", "La facilidad en la administración de las actualizaciones."],
      ok: 2,
      exp: "Al centralizar la lógica en un servidor de aplicaciones, la información viaja por la red, lo que amplía la superficie de ataque y requiere medidas adicionales de seguridad."
    },
    {
      p: "¿Cuál es el propósito de las variables CATALINA_HOME y CATALINA_BASE en un servidor de Tomcat?",
      ops: ["Apuntan al directorio raíz de la instalación de Tomcat.", "Permiten ejecutar varias instancias de Tomcat en una máquina apuntando al mismo directorio.", "Son utilizadas para almacenar los archivos temporales de la JVM.", "Contienen los elementos comunes a todas las instancias de Tomcat."],
      ok: 1,
      exp: "CATALINA_HOME apunta a la instalación base de Tomcat (binarios compartidos). CATALINA_BASE apunta a la configuración de cada instancia, permitiendo ejecutar múltiples instancias desde la misma instalación."
    },
    {
      p: "¿Cuál de las siguientes no es una edición de la plataforma Java de Oracle?",
      ops: ["Java Enterprise Edition (Java EE).", "Java Micro Edition (Java ME).", "Java Microservice Edition (Java MSE).", "Java Standard Edition (Java SE)."],
      ok: 2,
      exp: "Las ediciones oficiales de Java son: Java SE (Standard), Java EE (Enterprise) y Java ME (Micro). 'Java Microservice Edition' no es una edición oficial de la plataforma Java."
    },
    {
      p: "¿Qué diferencia hay entre almacenar información a través de cookies o usar sesiones en Java?",
      ops: ["Las cookies permiten identificar y personalizar el contenido; las sesiones se usan solo para el funcionamiento interno.", "Las sesiones almacenan información en archivos de texto en el equipo del usuario; las cookies lo hacen en el servidor.", "Las cookies almacenan información en el lado del servidor; las sesiones lo hacen en el lado del cliente.", "Las sesiones almacenan información en el servidor; las cookies lo hacen en el cliente, mejorando la experiencia del usuario."],
      ok: 3,
      exp: "Las sesiones almacenan la información en el servidor (más seguro y sin límite de tamaño), mientras que las cookies almacenan datos directamente en el navegador del cliente (accesibles y persistentes entre sesiones)."
    },
    {
      p: "En cuanto a la seguridad en Tomcat, ¿cuál de las siguientes afirmaciones es correcta?",
      ops: ["Es recomendable eliminar toda referencia a la versión de Tomcat utilizada para dificultar el uso de exploits.", "Activar el security manager puede afectar negativamente al rendimiento y no se recomienda.", "No es necesario utilizar diferentes instancias de Tomcat si se ejecutan aplicaciones en las que no se confía.", "Deshabilitar las aplicaciones de ejemplo no es necesario, ya que la instalación por defecto es segura."],
      ok: 0,
      exp: "Ocultar la versión de Tomcat es una práctica de seguridad fundamental (security by obscurity básica): dificulta que atacantes usen exploits conocidos específicos de esa versión."
    },
    {
      p: "¿Qué ventajas ofrecen los servidores de aplicaciones frente a un modelo descentralizado?",
      ops: ["La disminución de la administración de los clientes.", "Una menor protección de la información en tránsito.", "Una mayor superficie de ataque del sistema.", "La necesidad de servidores menos potentes."],
      ok: 0,
      exp: "Al centralizar la lógica de negocio en el servidor de aplicaciones, los clientes son terminales ligeros, lo que reduce drásticamente el trabajo de administración y mantenimiento en cada equipo cliente."
    },
    {
      p: "¿Cuál es la función del archivo web.xml en la estructura de directorios de una aplicación en Tomcat?",
      ops: ["Describe los servlets y los componentes de la aplicación y puede contener parámetros de inicialización y restricciones de seguridad.", "Contiene las páginas HTML y los archivos JavaScript de la aplicación.", "Se utiliza para almacenar los archivos temporales utilizados por la aplicación.", "Define las librerías externas necesarias para la aplicación."],
      ok: 0,
      exp: "web.xml es el descriptor de despliegue de una aplicación web Java. Define los servlets, sus mapeos de URL, filtros, parámetros de inicialización y restricciones de seguridad."
    },
    {
      p: "En Java, ¿cómo se gestionan las cookies en un programa o servlet?",
      ops: ["Utilizando la clase Cookie del paquete javax.servlet.http, con constructor nombre/valor y métodos como setValue y setComment.", "Utilizando la clase SessionCookie del paquete javax.servlet.session.", "Mediante la interfaz HttpRequest con métodos addCookie y getCookie.", "A través de la clase ServletCookie del paquete jakarta.servlet."],
      ok: 0,
      exp: "En Java/servlets, las cookies se gestionan con la clase Cookie del paquete javax.servlet.http. Se crea con new Cookie(nombre, valor) y se añade a la respuesta con response.addCookie(cookie)."
    },
    {
      p: "¿Cuál es el nombre del contenedor de servlets de Apache Tomcat a partir de la versión 4.x?",
      ops: ["Catalina.", "JSP.", "Tomcat Engine.", "Jasper."],
      ok: 0,
      exp: "Catalina es el contenedor de servlets de Tomcat desde la versión 4.x. Jasper es el compilador de JSP. Ambos son componentes clave de la arquitectura de Tomcat."
    },
    {
      p: "En la arquitectura de las plataformas Java, la capa de datos...",
      ops: ["Contiene los servicios que proporcionan acceso a la información almacenada, normalmente en una base de datos.", "Normalmente funciona a través de un navegador web, aplicaciones de escritorio o móvil.", "Se ejecuta en el servidor de aplicaciones y su tarea principal es realizar las funciones principales de las aplicaciones.", "Se ejecuta en el servidor Java EE o en un servidor de aplicaciones para procesar las peticiones."],
      ok: 0,
      exp: "La capa de datos en la arquitectura Java EE proporciona acceso a la información almacenada en bases de datos relacionales o no relacionales, a través de tecnologías como JDBC o JPA."
    },
    {
      p: "¿Cuál de las siguientes es una implementación de código abierto de algunas especificaciones Jakarta EE, pero no cumple con todas las especificaciones para ser un servidor de aplicaciones completo?",
      ops: ["Apache TomEE.", "Apache Tomcat.", "Apache TomEE Plume.", "Apache TomEE MicroProfile."],
      ok: 1,
      exp: "Apache Tomcat implementa las especificaciones de Servlet y JSP, pero no todas las especificaciones de Jakarta EE (como EJB o JMS), por lo que no es un servidor de aplicaciones completo sino un contenedor de servlets."
    },
    {
      p: "El uso de las sesiones permite:",
      ops: ["Recibir información del usuario para almacenarla en una base de datos.", "Enviar información que el usuario ha pedido y que se almacena en una base de datos.", "Almacenar pequeñas cantidades de información en archivos de texto en el equipo del usuario.", "Identificar y almacenar información sobre los usuarios cuando realizan varias peticiones a un mismo servidor."],
      ok: 3,
      exp: "Las sesiones HTTP permiten identificar a un usuario a través de múltiples peticiones y almacenar información sobre su interacción (carrito de compra, estado de autenticación, etc.) en el servidor."
    },
    {
      p: "¿Qué función realiza la capa de presentación en la arquitectura de las plataformas Java?",
      ops: ["Procesar las peticiones de la capa de servicios de negocios.", "Ejecutar elementos en la máquina cliente.", "Proporcionar acceso a la información almacenada en una base de datos.", "Transformar la información a un formato legible para el cliente, generalmente HTML."],
      ok: 3,
      exp: "La capa de presentación en Java EE toma la información de la capa de negocio y la transforma en un formato que el cliente puede visualizar, típicamente HTML generado por JSP o tecnologías de frontend."
    },
    {
      p: "¿Cuál de las siguientes afirmaciones respecto a Tomcat es correcta?",
      ops: ["Es un servidor de aplicaciones libre.", "Es un contenedor de servlets propietario.", "Es un contenedor de servlets libre.", "Es un servidor de aplicaciones propietario."],
      ok: 2,
      exp: "Apache Tomcat es un contenedor de servlets libre (open source) desarrollado por la Apache Software Foundation. No es un servidor de aplicaciones completo, ya que no implementa todas las especificaciones Jakarta EE."
    },
    {
      p: "¿Qué comando se suele utilizar tras hacer cambios en un archivo .java y crear su correspondiente .class para liberar de caché la versión antigua en el gestor de aplicaciones de Tomcat?",
      ops: ["Arrancar.", "Recargar.", "Replegar.", "Parar."],
      ok: 1,
      exp: "El comando 'Recargar' (Reload) en el gestor de aplicaciones de Tomcat descarga la aplicación de la memoria y la vuelve a cargar, limpiando la caché de clases Java compiladas."
    },

    // — Temario (25) ———————————————————————————————————————
    {
      p: "¿Cuál es la estructura de directorios principal de una aplicación web desplegada en Tomcat?",
      ops: ["/src, /bin, /lib, /config", "/WEB-INF, /META-INF, y el directorio raíz para recursos públicos", "/app, /static, /templates, /config", "/classes, /resources, /webapp, /test"],
      ok: 1,
      exp: "Una aplicación web Java en Tomcat sigue la estructura estándar WAR: directorio raíz (HTML/CSS/JS públicos), /WEB-INF (web.xml, clases, librerías — no accesible desde el navegador) y /META-INF."
    },
    {
      p: "¿Qué es un servlet en Java EE?",
      ops: ["Un archivo JSP que genera HTML dinámico.", "Una clase Java que extiende las capacidades de un servidor web, procesando peticiones HTTP y generando respuestas dinámicas.", "Una librería de componentes visuales para interfaces de usuario web.", "Un archivo de configuración XML de la aplicación web."],
      ok: 1,
      exp: "Un servlet es una clase Java que implementa la interfaz Servlet (normalmente extiende HttpServlet) y procesa peticiones HTTP, generando respuestas dinámicas del lado del servidor."
    },
    {
      p: "¿Qué es JSP (JavaServer Pages)?",
      ops: ["Un framework de JavaScript para el desarrollo de SPAs.", "Una tecnología Java que permite crear páginas web dinámicas embebiendo código Java directamente en HTML.", "El servidor de base de datos integrado en Tomcat.", "Un protocolo de comunicación entre microservicios Java."],
      ok: 1,
      exp: "JSP permite mezclar código Java con HTML para generar contenido web dinámico. El compilador Jasper de Tomcat convierte los archivos .jsp en servlets Java antes de ejecutarlos."
    },
    {
      p: "¿Qué es JDBC en el contexto de Java EE?",
      ops: ["Un framework para la creación de interfaces de usuario en Java.", "La API estándar de Java para conectar aplicaciones con bases de datos relacionales.", "Un servidor de aplicaciones alternativo a Tomcat.", "Una especificación de seguridad para aplicaciones web Java."],
      ok: 1,
      exp: "JDBC (Java Database Connectivity) es la API estándar de Java que proporciona métodos para conectarse a bases de datos relacionales, ejecutar consultas SQL y procesar los resultados."
    },
    {
      p: "¿Cuál es la diferencia entre un servidor web y un servidor de aplicaciones?",
      ops: ["Son exactamente lo mismo; los términos se usan de forma intercambiable.", "Un servidor web sirve contenido estático (HTML, CSS, imágenes); un servidor de aplicaciones ejecuta lógica de negocio y procesa contenido dinámico.", "Un servidor de aplicaciones sirve solo archivos estáticos; un servidor web ejecuta la lógica de la aplicación.", "Un servidor web solo gestiona HTTP; un servidor de aplicaciones solo gestiona bases de datos."],
      ok: 1,
      exp: "Un servidor web (Apache, Nginx) está optimizado para servir contenido estático. Un servidor de aplicaciones (JBoss, WebLogic) ejecuta lógica de negocio compleja (EJBs, transacciones, etc.). Tomcat es un punto intermedio: contenedor de servlets."
    },
    {
      p: "¿Qué ediciones de la plataforma Java existen según Oracle?",
      ops: ["Java Desktop, Java Server y Java Mobile.", "Java SE (Standard Edition), Java EE (Enterprise Edition) y Java ME (Micro Edition).", "Java Community, Java Professional y Java Enterprise.", "Java Open, Java Commercial y Java Academic."],
      ok: 1,
      exp: "Oracle divide la plataforma Java en tres ediciones: SE para aplicaciones de escritorio y herramientas básicas, EE para aplicaciones empresariales y web, y ME para dispositivos con recursos limitados (IoT, móviles)."
    },
    {
      p: "¿Qué ventaja principal ofrece la centralización de aplicaciones en un servidor de aplicaciones?",
      ops: ["Elimina completamente la necesidad de actualizaciones de software.", "Facilita el mantenimiento y las actualizaciones, ya que los cambios se realizan en el servidor y afectan a todos los clientes simultáneamente.", "Reduce el coste de los servidores al no necesitar hardware potente.", "Elimina la necesidad de una red para el funcionamiento de las aplicaciones."],
      ok: 1,
      exp: "Al centralizar las aplicaciones en el servidor, las actualizaciones se despliegan una sola vez y están disponibles inmediatamente para todos los usuarios, sin necesidad de actualizar cada cliente individualmente."
    },
    {
      p: "¿Cuál es la diferencia entre Apache Tomcat y Apache TomEE?",
      ops: ["Son exactamente el mismo producto con diferente nombre.", "Tomcat es un contenedor de servlets básico; TomEE es Tomcat con especificaciones adicionales de Jakarta EE como EJB, CDI y JPA.", "TomEE es la versión comercial de Tomcat.", "Tomcat soporta Java EE; TomEE solo soporta servlet y JSP."],
      ok: 1,
      exp: "TomEE (Tomcat + Java EE) añade sobre Tomcat implementaciones de especificaciones empresariales como EJB, CDI, JPA y JMS, convirtiéndolo en un servidor de aplicaciones más completo manteniendo la simplicidad de Tomcat."
    },
    {
      p: "¿Qué es el patrón MVC en el desarrollo de aplicaciones web Java?",
      ops: ["Un framework de base de datos para Java.", "Una arquitectura que separa la aplicación en tres capas: Modelo (datos), Vista (presentación) y Controlador (lógica de negocio).", "Un protocolo de comunicación entre componentes Java EE.", "Un sistema de gestión de dependencias para proyectos Java."],
      ok: 1,
      exp: "MVC (Model-View-Controller) separa las responsabilidades: el Modelo gestiona los datos, la Vista presenta la información al usuario y el Controlador (servlets) procesa las peticiones y coordina Modelo y Vista."
    },
    {
      p: "¿Cómo se identifica una sesión HTTP en Java (Tomcat)?",
      ops: ["Mediante la dirección IP del cliente.", "Mediante un identificador único de sesión (session ID) transmitido típicamente en una cookie llamada JSESSIONID.", "Mediante el nombre de usuario autenticado.", "Mediante el puerto TCP de la conexión del cliente."],
      ok: 1,
      exp: "Tomcat identifica las sesiones mediante un JSESSIONID, un identificador único generado por el servidor que se transmite al cliente normalmente como una cookie o como parámetro en la URL."
    },
    {
      p: "¿Qué herramienta de Apache permite empaquetar una aplicación web Java en un archivo WAR?",
      ops: ["Maven o Gradle (con el plugin war).", "Git.", "Docker.", "JDBC."],
      ok: 0,
      exp: "Maven y Gradle son las herramientas de build más usadas en proyectos Java. Con el plugin war (Maven) o la tarea war (Gradle) se genera el archivo WAR que se despliega en Tomcat."
    },
    {
      p: "¿Cuál es el directorio de Tomcat donde se despliegan las aplicaciones web?",
      ops: ["/bin", "/conf", "/webapps", "/lib"],
      ok: 2,
      exp: "El directorio 'webapps' de Tomcat es donde se despliegan las aplicaciones web. Al copiar un archivo WAR en ese directorio, Tomcat lo descomprime y despliega automáticamente."
    },
    {
      p: "¿Qué es la interfaz HttpServletRequest en Java?",
      ops: ["La clase que gestiona las sesiones HTTP en Tomcat.", "La interfaz que proporciona acceso a todos los datos de la petición HTTP: parámetros, cabeceras, sesión, cookies, etc.", "El objeto que representa la respuesta que el servlet envía al cliente.", "Una clase de utilidad para generar HTML dinámico en JSP."],
      ok: 1,
      exp: "HttpServletRequest encapsula toda la información de la petición HTTP entrante: método, URL, parámetros del formulario o URL, cabeceras, cookies, sesión, dirección IP del cliente, etc."
    },
    {
      p: "¿Para qué se usa la anotación @WebServlet en Java EE/Jakarta EE?",
      ops: ["Para marcar un método como manejador de peticiones GET.", "Para registrar un servlet y mapear una URL a una clase servlet sin necesidad de configuración en web.xml.", "Para inyectar dependencias en un servlet.", "Para definir el timeout de sesión de un servlet."],
      ok: 1,
      exp: "@WebServlet permite declarar un servlet y su mapeo de URL directamente en la clase Java mediante anotaciones, eliminando la necesidad de configurar el descriptor web.xml para cada servlet."
    },
    {
      p: "¿Qué es Jakarta EE y cómo se relaciona con Java EE?",
      ops: ["Es una versión anterior a Java EE desarrollada por IBM.", "Es el sucesor de Java EE, gestionado por la Eclipse Foundation tras la transición de Oracle, que renombró los paquetes de javax.* a jakarta.*.", "Es una distribución de Java exclusiva para el sistema operativo Jakarta Linux.", "Es el nombre comercial de Java EE en la versión 11 y posteriores."],
      ok: 1,
      exp: "Cuando Oracle transfirió Java EE a la Eclipse Foundation, el proyecto se renombró Jakarta EE. El cambio más visible es el renombrado de los paquetes: javax.servlet.* pasó a jakarta.servlet.* en Jakarta EE 9."
    },
    {
      p: "¿Qué archivo de configuración principal de Tomcat controla los conectores, hosts virtuales y el engine?",
      ops: ["web.xml", "context.xml", "server.xml", "catalina.properties"],
      ok: 2,
      exp: "server.xml es el archivo de configuración principal de Tomcat. En él se configuran los conectores (puertos de escucha), el Engine, los Virtual Hosts y otros componentes del servidor."
    },
    {
      p: "¿Qué ventaja tiene usar un pool de conexiones JDBC en lugar de crear una conexión nueva en cada petición?",
      ops: ["El pool de conexiones elimina la necesidad de autenticación en la base de datos.", "El pool reutiliza conexiones ya establecidas, reduciendo la latencia y el consumo de recursos en peticiones repetidas.", "El pool permite usar múltiples bases de datos simultáneamente sin cambios de código.", "El pool cifra automáticamente todas las consultas SQL antes de enviarlas."],
      ok: 1,
      exp: "Crear una conexión JDBC por petición es costoso en tiempo y recursos. Un pool de conexiones mantiene un conjunto de conexiones abiertas y reutilizables, mejorando significativamente el rendimiento de la aplicación."
    },
    {
      p: "¿Cuál es la función del directorio WEB-INF en una aplicación web Java?",
      ops: ["Contiene los archivos HTML y CSS que el cliente puede descargar directamente.", "Es un directorio protegido (no accesible directamente desde el navegador) que contiene el descriptor web.xml, las clases compiladas y las librerías de la aplicación.", "Almacena los logs de la aplicación durante la ejecución.", "Contiene los archivos de imagen y multimedia de la aplicación."],
      ok: 1,
      exp: "WEB-INF es un directorio especial cuyo contenido no puede ser solicitado directamente por el cliente/navegador. Contiene web.xml, /classes (clases Java compiladas) y /lib (archivos JAR de dependencias)."
    },
    {
      p: "¿Qué método del servlet se invoca para procesar peticiones HTTP GET?",
      ops: ["processGet()", "handleRequest()", "doGet()", "service()"],
      ok: 2,
      exp: "En HttpServlet, el método doGet(HttpServletRequest req, HttpServletResponse resp) se invoca automáticamente para procesar peticiones GET. De forma similar, doPost() maneja POST, doPut() maneja PUT, etc."
    },
    {
      p: "¿Qué es un archivo WAR en Java?",
      ops: ["Un archivo de log de Tomcat.", "Un archivo ZIP con una estructura estándar que empaqueta una aplicación web Java (clases, JSPs, HTML, librerías y descriptor de despliegue) para desplegarla en un servidor.", "Un archivo de configuración de la JVM.", "Un script de arranque de Tomcat."],
      ok: 1,
      exp: "WAR (Web ARchive) es el formato estándar de empaquetado para aplicaciones web Java. Es un archivo ZIP que sigue la estructura definida en la especificación Servlet y contiene todo lo necesario para desplegar la aplicación."
    },
    {
      p: "¿Cuál es la diferencia entre las capas de negocio y presentación en la arquitectura Java EE?",
      ops: ["No existe diferencia real entre ambas capas en una aplicación moderna.", "La capa de negocio contiene la lógica de la aplicación (reglas, procesamiento, acceso a datos); la capa de presentación transforma esa información en formato visual para el cliente.", "La capa de presentación ejecuta la lógica de negocio; la capa de negocio gestiona la interfaz de usuario.", "La capa de negocio gestiona la base de datos; la capa de presentación gestiona la red."],
      ok: 1,
      exp: "La separación de capas es fundamental en Java EE: la capa de negocio (EJBs, servicios) procesa la lógica de la aplicación, mientras que la capa de presentación (JSP, JSF, frameworks web) transforma los datos en HTML u otros formatos para el cliente."
    },
    {
      p: "¿Qué es el descriptor de despliegue context.xml en Tomcat?",
      ops: ["El archivo principal de configuración del servidor Tomcat.", "Un archivo XML de configuración específico de una aplicación web que define recursos como pools de conexiones JDBC, parámetros y configuraciones de seguridad.", "El archivo que mapea las URLs a los servlets de la aplicación.", "El archivo que define los hosts virtuales del servidor Tomcat."],
      ok: 1,
      exp: "context.xml es el descriptor de contexto de una aplicación web en Tomcat. Permite definir recursos JNDI (como DataSources para pools de conexiones JDBC), parámetros de inicialización y configuraciones específicas de la aplicación."
    },
    {
      p: "¿Qué es un EJB (Enterprise JavaBean) en Java EE?",
      ops: ["Un componente de interfaz de usuario para aplicaciones web Java.", "Un componente de negocio del lado del servidor en Java EE que encapsula la lógica de la aplicación, con soporte para transacciones, seguridad y concurrencia gestionados por el contenedor.", "Una librería Java para conexiones a bases de datos.", "Una anotación de Java para definir endpoints REST."],
      ok: 1,
      exp: "Los EJBs son componentes de negocio en Java EE/Jakarta EE. El contenedor gestiona automáticamente transacciones, seguridad, concurrencia y pool de instancias. Existen Session Beans (stateless, stateful, singleton) y Message-Driven Beans."
    },
    {
      p: "¿Cuál es la función del Jasper Engine en Tomcat?",
      ops: ["Gestionar el pool de hilos para las peticiones HTTP.", "Compilar las páginas JSP (.jsp) a código Java (servlets) y posteriormente a bytecode .class para su ejecución.", "Gestionar las sesiones de los usuarios conectados.", "Configurar los conectores HTTP y AJP del servidor."],
      ok: 1,
      exp: "Jasper es el compilador JSP de Tomcat. Cuando se solicita por primera vez una página JSP, Jasper la traduce a un servlet Java, lo compila a bytecode y lo ejecuta. Las compilaciones sucesivas usan la versión cacheada."
    },
    {
      p: "¿Cuál es la diferencia entre una sesión stateful y stateless en Java EE?",
      ops: ["Stateful guarda el estado de la sesión entre peticiones del mismo cliente; stateless no mantiene ningún estado entre llamadas.", "Stateless mantiene el estado entre peticiones; stateful no guarda ningún estado.", "Stateful es más eficiente en rendimiento que stateless.", "No hay diferencia práctica entre ambos tipos de sesión."],
      ok: 0,
      exp: "Un Session Bean stateful mantiene el estado conversacional del cliente entre llamadas (carrito de compra, pasos de un proceso). Stateless no conserva estado entre invocaciones, siendo más escalable y eficiente en uso de memoria."
    }
  ],

  // ══════════════════════════════════════════════════════════
  // UF4 — Transferencia de archivos (FTP, SSH, acceso remoto)
  // ══════════════════════════════════════════════════════════
  UF4: [
    // — Cuestionario oficial (15) ——————————————————————————
    {
      p: "¿Qué devuelve la función json_decode si solo le pasamos como parámetro el contenido de un archivo JSON?",
      ops: ["Un array asociativo.", "Un objeto con una lista de objetos.", "Un array de objetos.", "Una cadena de texto JSON formateada."],
      ok: 1,
      exp: "Por defecto, json_decode() devuelve un objeto PHP (stdClass). Para obtener un array asociativo hay que pasar true como segundo parámetro: json_decode($json, true)."
    },
    {
      p: "¿Qué hace la instrucción $objeto->update([],$cambio,['multi'=>true]) si $objeto es de la clase BulkWrite?",
      ops: ["Preparar una modificación que afectará al primer elemento que cumpla una condición.", "Modificar todos los elementos de una colección que cumplan una condición.", "Preparar una modificación que afectará al primer elemento que cumpla una colección.", "Ejecutar la modificación de forma inmediata en todos los documentos."],
      ok: 2,
      exp: "Con BulkWrite en MongoDB/PHP, update() prepara (no ejecuta) una operación de actualización. Con 'multi'=>true actualiza todos los documentos que coincidan, pero se ejecuta solo al llamar executeBulkWrite()."
    },
    {
      p: "¿Qué tipo de estructura de control se utiliza para capturar y manejar excepciones en PHP?",
      ops: ["try", "finally", "catch", "throw"],
      ok: 2,
      exp: "La estructura try-catch-finally gestiona excepciones en PHP: try contiene el código que puede lanzar excepciones, catch las captura y maneja, y finally se ejecuta siempre."
    },
    {
      p: "¿Para qué sirve la función de PHP fflush()?",
      ops: ["Para cerrar el acceso a un fichero.", "Para leer los datos de un fichero.", "Para volcar al fichero lo que quede en el buffer.", "Para obtener el tamaño de un fichero."],
      ok: 2,
      exp: "fflush() fuerza la escritura de los datos que están en el buffer de salida al fichero asociado, asegurando que no quede ningún dato pendiente de escribirse en disco."
    },
    {
      p: "Si en un formulario tenemos un select con la propiedad multiple activada, ¿cómo se recibirían los datos del select en la página que recibe los datos del formulario?",
      ops: ["Como un array.", "Como un número.", "Como un objeto.", "Como una cadena separada por comas."],
      ok: 0,
      exp: "Cuando un select tiene multiple activado, el navegador envía múltiples valores con el mismo nombre. En PHP, para recibirlos como array hay que nombrar el campo con corchetes: nombre[]."
    },
    {
      p: "¿Para qué sirve el método prepare de la clase PDO?",
      ops: ["Para ejecutar una sentencia preparada.", "Para ejecutar una instrucción.", "Para crear una sentencia preparada.", "Para conectarse a la base de datos."],
      ok: 2,
      exp: "PDO::prepare() analiza la consulta SQL y la prepara para su ejecución, creando un objeto PDOStatement. Las sentencias preparadas previenen inyecciones SQL y mejoran el rendimiento en consultas repetidas."
    },
    {
      p: "¿En qué unidad de medida devuelve la función filesize el tamaño de un fichero?",
      ops: ["gigabytes", "bytes", "kilobytes", "megabytes"],
      ok: 1,
      exp: "filesize() devuelve el tamaño del fichero en bytes. Para convertirlo a KB se divide entre 1024, a MB entre 1024² y así sucesivamente."
    },
    {
      p: "¿Qué función, aplicada a un fichero del sistema de archivos, devuelve la fecha y hora del último acceso al fichero?",
      ops: ["filetime()", "filemtime()", "fileatime()", "filectime()"],
      ok: 2,
      exp: "fileatime() devuelve el timestamp Unix del último acceso al fichero. filemtime() devuelve la fecha de la última modificación del contenido y filectime() la del último cambio de metadatos."
    },
    {
      p: "Si tenemos una sentencia SQL \"SHOW TABLES\" en una variable $sql y queremos ejecutarla, ¿cuál es la forma correcta con PDO?",
      ops: ["$pdo->query($sql).", "$pdo->exec($sql).", "$pdo->select($sql).", "$pdo->run($sql)."],
      ok: 0,
      exp: "PDO::query() ejecuta sentencias SQL que devuelven un resultado (SELECT, SHOW, etc.) y retorna un PDOStatement. PDO::exec() se usa para sentencias que no devuelven filas (INSERT, UPDATE, DELETE)."
    },
    {
      p: "¿Para qué sirve el método rollback de la clase PDO?",
      ops: ["Para finalizar una transacción.", "Para empezar una transacción.", "Para deshacer una transacción.", "Para confirmar los cambios de una transacción."],
      ok: 2,
      exp: "PDO::rollback() deshace todos los cambios realizados desde el inicio de la transacción (beginTransaction()), restaurando el estado de la base de datos al punto anterior al inicio de la transacción."
    },
    {
      p: "¿Qué función de PHP se utiliza para validar un DNI (con la letra) utilizando expresiones regulares?",
      ops: ["check_dni()", "preg_match()", "validate_dni()", "regex_check()"],
      ok: 1,
      exp: "preg_match() evalúa una expresión regular contra una cadena y devuelve 1 si hay coincidencia, 0 si no. Es la función PHP estándar para validar patrones como DNIs, emails, teléfonos, etc."
    },
    {
      p: "¿Qué función de PHP se utiliza para configurar el tipo de errores que se desean mostrar?",
      ops: ["error_reporting()", "set_error()", "error_exception()", "display_errors()"],
      ok: 0,
      exp: "error_reporting() configura qué tipos de errores de PHP se reportan. Por ejemplo, error_reporting(E_ALL) muestra todos los errores, error_reporting(0) los silencia todos."
    },
    {
      p: "¿Cuál de las siguientes características de una cookie no puede definirse con la función setcookie()?",
      ops: ["El tipo de dato.", "El tiempo de expiración.", "El nombre.", "La ruta de acceso."],
      ok: 0,
      exp: "setcookie() permite definir nombre, valor, expiración, ruta, dominio, seguro (HTTPS) y httponly, pero no el tipo de dato: las cookies siempre almacenan cadenas de texto."
    },
    {
      p: "¿Qué método de la clase BulkWrite permite insertar un elemento nuevo en una colección de MongoDB desde PHP?",
      ops: ["insert", "insertMany", "insertOne", "add"],
      ok: 0,
      exp: "En la clase BulkWrite del driver PHP de MongoDB, el método insert() prepara una operación de inserción de un documento. La operación se ejecuta cuando se llama a executeBulkWrite()."
    },
    {
      p: "Tenemos un fichero XML cargado en $xml con simplexml_load_file. ¿Cómo sería el bucle correcto para leer cada uno de los libros?",
      ops: ["foreach($xml->[libro] as $libro).", "foreach($xml->libro as $libro).", "foreach($xml->libros as $libro).", "foreach($xml['libro'] as $libro)."],
      ok: 1,
      exp: "Con SimpleXML en PHP, se accede a los elementos hijos directamente como propiedades del objeto: $xml->libro accede a todos los elementos <libro> hijos del elemento raíz."
    },

    // — Temario (25) ———————————————————————————————————————
    {
      p: "¿Cuáles son los dos modos de transferencia de datos en FTP?",
      ops: ["Modo activo y modo pasivo.", "Modo cifrado y modo sin cifrar.", "Modo binario y modo ASCII.", "Modo push y modo pull."],
      ok: 0,
      exp: "FTP usa dos modos para establecer la conexión de datos: modo activo (el servidor inicia la conexión de datos hacia el cliente) y modo pasivo (el cliente inicia ambas conexiones, más compatible con firewalls)."
    },
    {
      p: "¿Cuál es la diferencia entre FTP y SFTP?",
      ops: ["SFTP es más rápido que FTP al usar compresión de datos.", "FTP transmite los datos sin cifrar; SFTP cifra toda la comunicación mediante el protocolo SSH.", "SFTP es la versión de FTP para redes inalámbricas.", "FTP usa el puerto 22; SFTP usa el puerto 21."],
      ok: 1,
      exp: "FTP transmite datos y credenciales en texto plano (inseguro). SFTP (SSH File Transfer Protocol) es un protocolo completamente distinto que usa SSH para cifrar toda la comunicación, incluyendo credenciales."
    },
    {
      p: "¿Qué puertos usa el protocolo FTP por defecto?",
      ops: ["Puerto 80 para comandos y puerto 443 para datos.", "Puerto 21 para comandos y puerto 20 para datos.", "Puerto 22 para comandos y datos.", "Puerto 25 para comandos y puerto 110 para datos."],
      ok: 1,
      exp: "FTP usa dos canales: el puerto 21 para el canal de control (autenticación y comandos) y el puerto 20 para el canal de datos en modo activo."
    },
    {
      p: "¿Qué es SSH y para qué se utiliza principalmente?",
      ops: ["Un protocolo de transferencia de archivos seguro.", "Un protocolo de red criptográfico para conexiones seguras de administración remota y transferencia de datos.", "Un protocolo para sincronización de archivos entre servidores.", "Un servicio de resolución de nombres seguro."],
      ok: 1,
      exp: "SSH (Secure Shell) es un protocolo criptográfico que proporciona comunicaciones seguras sobre una red insegura. Se usa principalmente para acceso remoto a servidores, tunelización y transferencia segura de archivos."
    },
    {
      p: "¿Cuál es el puerto estándar de SSH?",
      ops: ["Puerto 21", "Puerto 23", "Puerto 22", "Puerto 443"],
      ok: 2,
      exp: "SSH usa por defecto el puerto 22/TCP. Cambiar este puerto es una práctica de seguridad común para reducir los intentos de acceso no autorizado automatizados (bots de fuerza bruta)."
    },
    {
      p: "¿Qué es SCP y cómo se relaciona con SSH?",
      ops: ["Un protocolo de comunicación para microservicios que usa SSH como transporte.", "Una herramienta de copia segura de archivos entre hosts que utiliza SSH para el cifrado y autenticación.", "Un sistema de control de versiones distribuido basado en SSH.", "Un protocolo de sincronización de directorios en tiempo real sobre SSH."],
      ok: 1,
      exp: "SCP (Secure Copy Protocol) permite copiar archivos entre un cliente y un servidor remoto (o entre dos servidores) de forma segura, utilizando SSH para el cifrado y la autenticación."
    },
    {
      p: "¿Cuál es la ventaja de usar autenticación por clave pública/privada en SSH frente a contraseña?",
      ops: ["Es más fácil de configurar que la autenticación por contraseña.", "Es más segura porque elimina el riesgo de ataques de fuerza bruta a contraseñas y no requiere transmitir ningún secreto por la red.", "Permite conectarse a más servidores simultáneamente.", "Cifra la conexión SSH con un algoritmo más fuerte que el estándar."],
      ok: 1,
      exp: "La autenticación por clave pública/privada SSH es más segura: el cliente nunca transmite su clave privada. El servidor verifica la identidad del cliente mediante criptografía asimétrica, inmune a ataques de fuerza bruta de contraseñas."
    },
    {
      p: "¿Qué herramienta de línea de comandos se usa en Linux para conectarse a un servidor por SSH?",
      ops: ["ftp", "telnet", "ssh", "rlogin"],
      ok: 2,
      exp: "El comando 'ssh' es el cliente SSH estándar en sistemas Unix/Linux. La sintaxis básica es: ssh usuario@servidor o ssh -p puerto usuario@servidor para un puerto no estándar."
    },
    {
      p: "¿Qué es FTPS y en qué se diferencia de SFTP?",
      ops: ["FTPS y SFTP son exactamente el mismo protocolo con diferente nombre.", "FTPS es FTP con soporte TLS/SSL; SFTP es un protocolo independiente basado en SSH. Ambos cifran las transferencias pero de manera diferente.", "FTPS usa el puerto 22; SFTP usa el puerto 990.", "SFTP es más antiguo que FTPS y está deprecado."],
      ok: 1,
      exp: "FTPS añade cifrado TLS/SSL al protocolo FTP original (puerto 990 implícito o 21 explícito). SFTP es un protocolo completamente diferente (parte del conjunto de protocolos SSH) que no tiene relación con FTP a nivel de protocolo."
    },
    {
      p: "¿Qué hace la función file_get_contents() en PHP?",
      ops: ["Abre un fichero para escritura y devuelve su descriptor.", "Lee el contenido completo de un fichero o URL y lo devuelve como string.", "Escribe una cadena en un fichero.", "Obtiene los metadatos de un fichero (tamaño, permisos, fechas)."],
      ok: 1,
      exp: "file_get_contents() es la forma más sencilla de leer un fichero en PHP: devuelve todo el contenido como una cadena. También puede hacer peticiones HTTP GET a URLs, útil para consumir APIs."
    },
    {
      p: "¿Para qué se usa el protocolo SFTP en el contexto del despliegue web?",
      ops: ["Para configurar los virtual hosts del servidor Apache.", "Para subir de forma segura los archivos de la aplicación web al servidor de producción.", "Para gestionar los certificados SSL del servidor web.", "Para monitorizar el rendimiento del servidor web en tiempo real."],
      ok: 1,
      exp: "SFTP se usa habitualmente en el workflow de despliegue para transferir de forma segura los archivos de la aplicación (PHP, HTML, assets) desde la máquina de desarrollo al servidor de producción."
    },
    {
      p: "¿Qué es rsync y cuál es su ventaja principal frente a SCP?",
      ops: ["rsync es un cliente FTP gráfico; su ventaja es la interfaz visual.", "rsync es una herramienta de sincronización que solo transfiere las diferencias (delta), lo que la hace más eficiente que SCP para actualizaciones incrementales.", "rsync cifra los archivos antes de transferirlos, mientras que SCP no.", "rsync permite transferencias multipunto a varios servidores simultáneamente; SCP solo permite un destino."],
      ok: 1,
      exp: "rsync analiza los archivos origen y destino y solo transfiere los bloques que han cambiado (transferencia incremental/delta). Esto lo hace mucho más eficiente que SCP para actualizaciones frecuentes de grandes volúmenes de archivos."
    },
    {
      p: "¿Qué es un túnel SSH y para qué se usa?",
      ops: ["Una conexión SSH cifrada entre dos servidores en el mismo datacenter.", "Una técnica que redirige el tráfico de red a través de una conexión SSH cifrada, permitiendo acceder de forma segura a servicios en redes privadas.", "Una VPN que usa SSH como protocolo de autenticación.", "Un método para aumentar el ancho de banda de una conexión SSH."],
      ok: 1,
      exp: "El tunneling SSH encapsula el tráfico de otros protocolos dentro de una conexión SSH cifrada. Permite acceder de forma segura a servicios en redes privadas (ej: base de datos) a través de un servidor SSH intermedio."
    },
    {
      p: "¿Cuál es la función de PDO::beginTransaction() en PHP?",
      ops: ["Ejecutar una transacción pendiente en la base de datos.", "Iniciar una transacción en la base de datos, desactivando el autocommit hasta llamar a commit() o rollback().", "Comprobar si existe una transacción activa.", "Definir el nivel de aislamiento de la transacción."],
      ok: 1,
      exp: "PDO::beginTransaction() inicia una transacción de base de datos y deshabilita el modo autocommit. Los cambios no serán permanentes hasta llamar a commit(); si algo falla, rollback() revierte todos los cambios de la transacción."
    },
    {
      p: "¿Qué es WinSCP?",
      ops: ["Un servidor SFTP para Windows.", "Un cliente gráfico para Windows que soporta SFTP, FTP, FTPS, SCP y WebDAV para transferencias de archivos seguras.", "Una implementación de OpenSSH para Windows.", "Un protocolo de transferencia de archivos propio de Windows."],
      ok: 1,
      exp: "WinSCP es un popular cliente de transferencia de archivos de código abierto para Windows con interfaz gráfica que soporta SFTP, FTP, FTPS, SCP y WebDAV, con vista en dos paneles similar a un explorador de archivos."
    },
    {
      p: "¿Cómo se copia un archivo local al servidor remoto usando scp?",
      ops: ["scp archivo.txt usuario@servidor:/ruta/destino/", "scp -upload archivo.txt usuario@servidor:/ruta/", "ssh usuario@servidor put archivo.txt /ruta/", "ftp usuario@servidor upload archivo.txt"],
      ok: 0,
      exp: "La sintaxis de SCP para copiar un archivo local al servidor remoto es: scp archivo_origen usuario@host_remoto:/ruta/destino/. Para la dirección inversa se invierten origen y destino."
    },
    {
      p: "¿Qué archivo de configuración en Linux define los usuarios permitidos y la configuración del servidor SSH?",
      ops: ["/etc/ftp.conf", "/etc/ssh/sshd_config", "/etc/network/ssh", "/home/ssh/config"],
      ok: 1,
      exp: "/etc/ssh/sshd_config es el archivo de configuración del servidor OpenSSH. En él se configura el puerto de escucha, autenticación permitida, usuarios autorizados, redirección X11, etc."
    },
    {
      p: "¿Qué ventaja ofrece MongoDB frente a una base de datos relacional SQL en el contexto de PHP?",
      ops: ["MongoDB es más rápido en todos los casos de uso.", "MongoDB es un sistema NoSQL orientado a documentos JSON que ofrece esquema flexible, escalado horizontal sencillo y almacenamiento nativo de datos jerárquicos sin necesidad de JOINs.", "MongoDB tiene un soporte nativo de SQL para consultas complejas.", "MongoDB no requiere instalación de drivers PHP adicionales."],
      ok: 1,
      exp: "MongoDB almacena documentos JSON/BSON con esquema dinámico, ideal para datos jerárquicos o con estructura variable. Escala horizontalmente con facilidad y no requiere definir tablas ni JOINs para datos anidados."
    },
    {
      p: "¿Cómo se genera la clave pública/privada SSH en Linux?",
      ops: ["ssh-copy-id -t rsa", "ssh-keygen -t rsa", "openssl genrsa -out clave.pem", "gpg --gen-key"],
      ok: 1,
      exp: "ssh-keygen -t rsa (o -t ed25519 para mayor seguridad) genera el par de claves SSH. La clave privada se guarda en ~/.ssh/id_rsa y la pública en ~/.ssh/id_rsa.pub."
    },
    {
      p: "¿Qué función de PHP se usa para abrir un fichero para lectura o escritura?",
      ops: ["file_open()", "fopen()", "open_file()", "file_read()"],
      ok: 1,
      exp: "fopen() abre un fichero o URL y devuelve un descriptor de archivo (resource). El segundo parámetro indica el modo: 'r' para lectura, 'w' para escritura (sobrescribe), 'a' para añadir al final, etc."
    },
    {
      p: "¿Cuál es el propósito del archivo known_hosts en SSH?",
      ops: ["Almacena las claves privadas de los servidores a los que el cliente se conecta.", "Almacena las huellas digitales (fingerprints) de las claves públicas de los servidores SSH conocidos, previniendo ataques man-in-the-middle.", "Contiene la lista de usuarios autorizados a conectarse por SSH.", "Define las reglas de firewall para las conexiones SSH entrantes."],
      ok: 1,
      exp: "~/.ssh/known_hosts almacena la huella digital (fingerprint) de la clave del servidor para cada host conocido. Si la clave del servidor cambia, SSH alerta al usuario, previniendo ataques man-in-the-middle."
    },
    {
      p: "¿Qué hace la función PHP json_encode()?",
      ops: ["Descifra una cadena JSON cifrada con AES.", "Convierte un valor PHP (array, objeto) en su representación como cadena JSON.", "Valida si una cadena es JSON válido.", "Lee un fichero JSON y lo carga en memoria."],
      ok: 1,
      exp: "json_encode() serializa un valor PHP (array, objeto, string, número, etc.) a formato JSON. Es el complemento de json_decode() y se usa ampliamente en APIs REST para generar respuestas JSON."
    },
    {
      p: "¿Cuál es la diferencia entre fwrite() y file_put_contents() en PHP?",
      ops: ["Son equivalentes; file_put_contents() es el alias moderno de fwrite().", "fwrite() escribe en un descriptor de archivo ya abierto con fopen(); file_put_contents() abre, escribe y cierra el archivo en una sola llamada.", "fwrite() solo puede escribir texto; file_put_contents() puede escribir datos binarios.", "file_put_contents() añade siempre al final; fwrite() siempre sobrescribe el fichero."],
      ok: 1,
      exp: "file_put_contents() es una función de conveniencia que equivale a fopen() + fwrite() + fclose() en una sola llamada. fwrite() requiere que el archivo esté previamente abierto con fopen()."
    },
    {
      p: "¿Qué es VNC en el contexto del acceso remoto?",
      ops: ["Un protocolo de transferencia de archivos seguro basado en SSH.", "Un sistema que permite controlar de forma remota el escritorio gráfico de otro ordenador.", "Un servidor web ligero para administración remota.", "Un protocolo de tunelización para redes privadas virtuales."],
      ok: 1,
      exp: "VNC (Virtual Network Computing) es un sistema de escritorio remoto que transmite el estado de la pantalla del servidor al cliente y envía los eventos de teclado/ratón del cliente al servidor, permitiendo control gráfico remoto."
    },
    {
      p: "¿Qué hace el comando chmod en Linux y cómo se relaciona con la transferencia de archivos?",
      ops: ["Cambia el propietario de un archivo.", "Modifica los permisos de acceso de un archivo o directorio, determinando quién puede leer, escribir o ejecutar el archivo tras su transferencia al servidor.", "Mueve archivos entre directorios del servidor.", "Comprime archivos para optimizar la transferencia FTP."],
      ok: 1,
      exp: "chmod (change mode) establece los permisos de archivos y directorios en sistemas Unix/Linux. Tras subir archivos al servidor por FTP/SFTP, es necesario ajustar los permisos para que el servidor web (www-data) pueda leerlos correctamente."
    }
  ],

  // ══════════════════════════════════════════════════════════
  // UF5 — Documentación y control de versiones
  // ══════════════════════════════════════════════════════════
  UF5: [
    // — Cuestionario oficial (15) ——————————————————————————
    {
      p: "¿Por qué es tan habitual encontrar software sin documentar, sobre todo si se ha hecho a medida?",
      ops: ["Porque hay que pagar importes altos para utilizar las herramientas adecuadas.", "Porque requiere personal externo a la empresa y mucho tiempo.", "Porque, al ser software a medida, sus usuarios ya lo conocen y no necesitan ningún tipo de manual.", "Porque falta tiempo. A la documentación no se le da la importancia que se merece y documentar tiene fama de ser un trabajo aburrido entre los desarrolladores."],
      ok: 3,
      exp: "La falta de documentación suele deberse a presión de plazos, a que se considera menos prioritaria que el desarrollo y a que los programadores la perciben como una tarea poco gratificante."
    },
    {
      p: "¿Cuáles son las fases comunes del ciclo de vida del software?",
      ops: ["Recogida y análisis de requerimientos; especificación; implementación; comprobación; despliegue y explotación; mantenimiento.", "Análisis, diseño, programación, pruebas, despliegue y mantenimiento.", "Recogida de requisitos, diseño, implementación, prueba, despliegue y mantenimiento.", "Planificación, análisis, diseño, desarrollo, pruebas y cierre."],
      ok: 0,
      exp: "El ciclo de vida completo incluye: recogida y análisis de requisitos, especificación del programa, implementación, comprobación (pruebas), despliegue en entorno real y mantenimiento posterior."
    },
    {
      p: "¿Cuál es una característica importante de los comentarios utilizados con Javadoc en Java?",
      ops: ["Deben comenzar con el delimitador '/' y terminar con '/'.", "Deben tener un máximo de 100 caracteres por línea.", "Deben contener un primer bloque con la descripción del elemento, seguido de un segundo bloque con etiquetas precedidas por una arroba «@».", "Deben ir únicamente antes de la declaración de la clase, no de los métodos."],
      ok: 2,
      exp: "Los comentarios Javadoc siguen el formato /** ... */. Comienzan con una descripción del elemento documentado, seguida de etiquetas @param, @return, @throws, @author, etc."
    },
    {
      p: "El control de versiones...",
      ops: ["Se emplea solamente en la fase de diseño para saber cuántas propuestas se hicieron.", "Sirve solamente para indicarle al usuario la versión que tiene instalada en el ordenador.", "Se usa para tener un registro de los cambios realizados a lo largo de la vida útil de un programa.", "Se usa en la fase de pruebas para anotar los fallos y poder corregirlos en función de su prioridad."],
      ok: 2,
      exp: "El control de versiones (VCS) registra todos los cambios realizados en los archivos del proyecto a lo largo del tiempo, permitiendo recuperar versiones anteriores, comparar cambios y colaborar en equipo."
    },
    {
      p: "Git utiliza las siguientes áreas:",
      ops: ["Únicamente utiliza el área de preparación y el repositorio.", "Utiliza el directorio de trabajo, el área de preparación y el repositorio.", "Únicamente utiliza el directorio de trabajo y el repositorio.", "Únicamente utiliza el repositorio."],
      ok: 1,
      exp: "Git tiene tres áreas: el directorio de trabajo (working directory) donde editas los archivos, el área de preparación o staging area (index) donde seleccionas los cambios a confirmar, y el repositorio donde se almacenan los commits."
    },
    {
      p: "¿Con qué instrucción de Git se eliminan archivos del directorio de trabajo y del área de preparación?",
      ops: ["action_delete.", "action_remove.", "rm.", "reset."],
      ok: 2,
      exp: "El comando 'git rm' elimina un archivo tanto del directorio de trabajo como del área de preparación (staging), añadiendo la eliminación al próximo commit."
    },
    {
      p: "¿Cuál es la utilidad principal de la herramienta Man en sistemas Unix y similares?",
      ops: ["Facilitar el desarrollo colaborativo de documentación técnica.", "Ofrecer una interfaz de línea de comandos para acceder a los manuales de referencia del sistema.", "Proporcionar una interfaz gráfica para acceder a los manuales de referencia.", "Generar documentación en HTML a partir del código fuente."],
      ok: 1,
      exp: "El comando 'man' (manual) en Unix/Linux permite consultar las páginas del manual del sistema desde la línea de comandos: man ls, man ssh, man git, etc. Es la documentación de referencia del sistema."
    },
    {
      p: "¿Qué ventajas ofrece MediaWiki como plataforma para la documentación de proyectos de software?",
      ops: ["Proporciona una interfaz gráfica para acceder a los manuales de referencia del sistema.", "Facilita la creación colaborativa y centralizada de documentación multilenguaje, actualizable y fiable.", "Permite generar documentación técnica en formato HTML a partir de archivos Java.", "Es la única plataforma que soporta control de versiones en la documentación."],
      ok: 1,
      exp: "MediaWiki (el motor de Wikipedia) facilita la creación colaborativa de documentación: múltiples autores pueden editar, las páginas tienen historial de cambios, soporta múltiples idiomas y la información es centralizada y actualizable."
    },
    {
      p: "¿Cuál es el propósito principal de la integración continua (CI) en GitHub?",
      ops: ["Detectar conflictos y realizar pruebas de funcionamiento manualmente en cada cambio.", "Realizar pruebas e integrar automáticamente los cambios de programación en un repositorio compartido.", "Publicar nuevas versiones del producto inmediatamente después de su desarrollo.", "Crear ramas automáticamente para cada nueva funcionalidad del proyecto."],
      ok: 1,
      exp: "La CI automatiza la integración del código: cada vez que un desarrollador hace push al repositorio, se ejecutan automáticamente las pruebas y el proceso de build, detectando errores rápidamente."
    },
    {
      p: "¿Qué factores contribuyen a la falta de documentación en el desarrollo de software?",
      ops: ["Exceso de documentación, falta de conocimientos técnicos y limitaciones de recursos.", "Complejidad del proyecto, falta de herramientas adecuadas y problemas de comunicación.", "Plazos de entrega ajustados, falta de una cultura empresarial que valore la documentación y desinterés de los desarrolladores.", "Falta de plantillas estándar, coste de las herramientas y desconocimiento del cliente."],
      ok: 2,
      exp: "Los principales factores son los plazos de entrega ajustados (no hay tiempo), la ausencia de cultura de documentación en la empresa y el desinterés de los desarrolladores que prefieren escribir código."
    },
    {
      p: "¿Qué sección de los manuales de Man está reservada para los programas ejecutables y órdenes del shell?",
      ops: ["2.", "5.", "4.", "1."],
      ok: 3,
      exp: "La sección 1 de las páginas man contiene los programas ejecutables y comandos del shell. La sección 2 son llamadas al sistema, la 3 funciones de biblioteca y la 5 formatos de archivo."
    },
    {
      p: "¿Cuál es una ventaja de trabajar con ramas en un sistema de control de versiones?",
      ops: ["Permite trabajar en paralelo en diferentes funcionalidades del proyecto.", "Facilita la creación de repositorios distribuidos.", "Permite eliminar los conflictos entre programadores.", "Reduce el tamaño del repositorio al comprimir el historial de commits."],
      ok: 0,
      exp: "Las ramas (branches) permiten desarrollar funcionalidades, corregir errores o experimentar de forma aislada del código principal, trabajando en paralelo sin afectar a la rama principal (main/master)."
    },
    {
      p: "¿Cuál es una característica fundamental del repositorio en un sistema de control de versiones?",
      ops: ["Almacena solamente los archivos de código fuente.", "Permite que cada desarrollador tenga una copia local del proyecto.", "Debe contener siempre la última versión válida del programa.", "Solo permite un autor por repositorio."],
      ok: 2,
      exp: "El repositorio debe contener siempre la última versión estable y funcional del software. Es el punto de referencia de todo el equipo, por lo que solo deben integrarse en él cambios validados y funcionales."
    },
    {
      p: "¿Por qué es importante estructurar adecuadamente la documentación del software?",
      ops: ["Para que sea entendible y útil para el público objetivo, para localizar rápidamente la información necesaria y para conseguir una documentación homogénea.", "Para evitar errores en el código, para mejorar la seguridad del software y para asegurar la compatibilidad con múltiples plataformas.", "Para hacerla más atractiva visualmente, para facilitar su comprensión y para reducir el tiempo de redacción.", "Para cumplir con los estándares ISO obligatorios en el desarrollo de software."],
      ok: 0,
      exp: "Una buena estructura hace que la documentación sea útil y comprensible para su audiencia (usuarios, administradores, desarrolladores), permita localizar la información rápidamente y sea coherente y homogénea."
    },
    {
      p: "¿Cómo se indica en wikitexto que se debe representar un texto en negrita?",
      ops: ["== Texto ==", "=== Texto ===", "''Texto''.", "'''Texto'''."],
      ok: 3,
      exp: "En wikitexto, '''texto''' produce negrita. ''texto'' produce cursiva. == Texto == es un encabezado de nivel 2. El sistema de marcado de wikis usa apóstrofes para el énfasis tipográfico."
    },

    // — Temario (25) ———————————————————————————————————————
    {
      p: "¿Cuál es la diferencia entre git commit y git push?",
      ops: ["Son equivalentes; ambos guardan los cambios en el servidor remoto.", "git commit guarda los cambios en el repositorio local; git push los envía al repositorio remoto.", "git push guarda los cambios localmente; git commit los envía al servidor.", "git commit descarga cambios del repositorio remoto; git push los sube."],
      ok: 1,
      exp: "git commit crea un nuevo punto de guardado (snapshot) en el repositorio local con los cambios del staging area. git push sube los commits locales al repositorio remoto (como GitHub o GitLab)."
    },
    {
      p: "¿Para qué se usa el comando git clone?",
      ops: ["Para crear una copia local de un repositorio remoto.", "Para crear una nueva rama en el repositorio local.", "Para copiar archivos de una rama a otra.", "Para fusionar dos ramas en una sola."],
      ok: 0,
      exp: "git clone crea una copia completa de un repositorio remoto en el directorio local, incluyendo todo el historial de commits, ramas y etiquetas. Es el primer paso al incorporarse a un proyecto existente."
    },
    {
      p: "¿Qué es el archivo .gitignore?",
      ops: ["Un archivo que lista los usuarios sin permiso de acceso al repositorio.", "Un archivo que especifica los archivos y directorios que Git debe ignorar y no incluir en el control de versiones.", "Un archivo de configuración de las ramas remotas del repositorio.", "Un log de los archivos eliminados del repositorio."],
      ok: 1,
      exp: ".gitignore contiene patrones de archivos y directorios que Git no debe rastrear ni incluir en commits: dependencias (node_modules/), archivos de entorno (.env), compilados (dist/), archivos del IDE, etc."
    },
    {
      p: "¿Qué diferencia hay entre git merge y git rebase?",
      ops: ["Son exactamente equivalentes; producen el mismo resultado en el historial.", "git merge combina ramas creando un commit de merge; git rebase reaplica los commits de una rama sobre otra, creando un historial lineal.", "git rebase combina ramas; git merge reaplica commits.", "git merge solo funciona con repositorios locales; git rebase con remotos."],
      ok: 1,
      exp: "git merge integra cambios de otra rama creando un commit de fusión, preservando el historial completo. git rebase reescribe el historial recolocando los commits sobre el punta de otra rama, produciendo un historial más limpio y lineal."
    },
    {
      p: "¿Qué es Javadoc y cómo se genera la documentación?",
      ops: ["Un IDE de Java para generar documentación visual.", "Una herramienta del JDK que genera documentación HTML a partir de los comentarios especiales /** ... */ en el código fuente Java.", "Un formato XML de documentación para proyectos Java.", "Un plugin de Maven que genera automáticamente los comentarios de documentación."],
      ok: 1,
      exp: "Javadoc es la herramienta estándar del JDK para generar documentación de API en HTML. Lee los comentarios /** ... */ del código fuente Java y produce páginas HTML navegables con toda la documentación de clases, métodos y parámetros."
    },
    {
      p: "¿Qué es un tag (etiqueta) en Git y para qué se usa?",
      ops: ["Un nombre alternativo para una rama de desarrollo.", "Una referencia inmutable que marca un punto específico en el historial de commits, usada habitualmente para marcar versiones de lanzamiento (v1.0.0, v2.1.3).", "Un comentario añadido a un commit para describir los cambios.", "Un archivo de metadatos que describe el autor y fecha de cada commit."],
      ok: 1,
      exp: "Los tags de Git son referencias inmutables a commits específicos. Se usan principalmente para marcar versiones de lanzamiento (releases) del software, facilitando identificar qué commit corresponde a cada versión publicada."
    },
    {
      p: "¿Qué es el Semantic Versioning (SemVer) y cómo funciona su numeración?",
      ops: ["Un sistema de numeración donde los números no tienen significado concreto.", "Un estándar de numeración MAJOR.MINOR.PATCH donde MAJOR indica cambios incompatibles, MINOR nuevas funcionalidades compatibles y PATCH correcciones de errores.", "Un sistema de versiones basado en fechas (año.mes.día).", "Un sistema de control de versiones alternativo a Git."],
      ok: 1,
      exp: "SemVer usa el formato X.Y.Z: MAJOR (X) se incrementa con cambios que rompen la compatibilidad, MINOR (Y) con nuevas funcionalidades compatibles, y PATCH (Z) con correcciones de errores compatibles."
    },
    {
      p: "¿Cuál es el propósito del comando git stash?",
      ops: ["Eliminar permanentemente los cambios no confirmados del directorio de trabajo.", "Guardar temporalmente los cambios del directorio de trabajo sin hacer commit, permitiendo cambiar de contexto y recuperarlos después.", "Crear una nueva rama a partir del estado actual del directorio de trabajo.", "Comparar los cambios actuales con el último commit realizado."],
      ok: 1,
      exp: "git stash guarda temporalmente los cambios no confirmados (tanto del staging area como del directorio de trabajo) y limpia el directorio de trabajo. Útil cuando necesitas cambiar de rama sin hacer commit de trabajo incompleto."
    },
    {
      p: "¿Qué diferencia hay entre documentación técnica y documentación de usuario?",
      ops: ["Son lo mismo; toda la documentación debe servir para técnicos y usuarios finales.", "La documentación técnica está dirigida a desarrolladores y administradores (APIs, arquitectura, despliegue); la documentación de usuario está dirigida a los usuarios finales (manuales de uso, tutoriales).", "La documentación técnica explica cómo instalar el software; la de usuario explica cómo programarlo.", "La documentación de usuario es más detallada técnicamente que la documentación técnica."],
      ok: 1,
      exp: "La documentación técnica documenta el código, la arquitectura, las APIs y el despliegue para desarrolladores y administradores de sistemas. La documentación de usuario (manual de usuario, guía de inicio rápido) explica cómo usar el software a los usuarios finales."
    },
    {
      p: "¿Cuál es la diferencia entre git pull y git fetch?",
      ops: ["Son equivalentes; ambos descargan y aplican los cambios remotos.", "git fetch descarga los cambios del repositorio remoto pero no los aplica; git pull descarga y aplica automáticamente los cambios (fetch + merge).", "git pull solo descarga los cambios; git fetch los descarga y aplica.", "git fetch actualiza el repositorio local; git pull solo actualiza la rama activa."],
      ok: 1,
      exp: "git fetch descarga los cambios del remoto pero no modifica el directorio de trabajo ni las ramas locales (permite revisar antes de integrar). git pull = git fetch + git merge: descarga e integra los cambios en la rama local."
    },
    {
      p: "¿Qué es GitHub Actions en el contexto de CI/CD?",
      ops: ["Una interfaz gráfica de GitHub para revisar código.", "Una plataforma de automatización integrada en GitHub que permite definir flujos de trabajo (workflows) para CI/CD: compilar, probar y desplegar automáticamente al hacer push.", "Un servicio de almacenamiento de artefactos de build de GitHub.", "Una herramienta de GitHub para gestión de proyectos ágiles."],
      ok: 1,
      exp: "GitHub Actions permite definir workflows en archivos YAML que se ejecutan automáticamente ante eventos del repositorio (push, pull request, etc.), implementando pipelines de CI/CD directamente en GitHub."
    },
    {
      p: "¿Cuál es la diferencia entre un repositorio centralizado (SVN) y uno distribuido (Git)?",
      ops: ["No hay diferencia práctica; ambos modelos son equivalentes.", "En SVN el repositorio central es el único completo; en Git cada clon es un repositorio completo con todo el historial.", "Git requiere conexión constante a internet; SVN funciona sin conexión.", "SVN permite trabajo en ramas; Git no soporta ramificación."],
      ok: 1,
      exp: "En sistemas centralizados (SVN, CVS), solo el servidor tiene el historial completo y se requiere conexión para la mayoría de operaciones. En sistemas distribuidos (Git), cada clon es un repositorio completo, permitiendo trabajar sin conexión."
    },
    {
      p: "¿Qué hace el comando git log?",
      ops: ["Muestra el estado actual del directorio de trabajo.", "Muestra el historial de commits del repositorio con información de autor, fecha y mensaje.", "Compara el directorio de trabajo con el último commit.", "Descarga el historial de commits del repositorio remoto."],
      ok: 1,
      exp: "git log muestra el historial de commits de la rama actual: hash del commit, autor, fecha y mensaje. Con opciones como --oneline (resumen compacto), --graph (árbol ASCII) o --all (todas las ramas) se personaliza la salida."
    },
    {
      p: "¿Cuál es la función del comando git diff?",
      ops: ["Comparar los cambios entre el directorio de trabajo y el staging area (o entre commits).", "Aplicar las diferencias de otro repositorio al actual.", "Resolver automáticamente los conflictos de merge.", "Mostrar la diferencia entre la versión local y la remota del repositorio."],
      ok: 0,
      exp: "git diff muestra las diferencias línea a línea entre estados: directorio de trabajo vs staging, staging vs último commit, o entre dos commits. Es fundamental para revisar qué ha cambiado antes de hacer commit."
    },
    {
      p: "¿Qué son los Conventional Commits y por qué se usan?",
      ops: ["Commits que se hacen automáticamente mediante GitHub Actions.", "Un estándar de formato para los mensajes de commit que facilita la generación automática de changelogs y la comprensión del historial (feat:, fix:, docs:, etc.).", "Commits que solo pueden hacerse desde la rama principal.", "Un tipo especial de tag de Git para marcar versiones estables."],
      ok: 1,
      exp: "Conventional Commits define una estructura para los mensajes de commit: tipo(scope): descripción. Los tipos más comunes son feat (nueva funcionalidad), fix (corrección), docs (documentación), refactor, test, etc. Facilita la generación automática de changelogs y el versionado semántico."
    },
    {
      p: "¿Cuál es la utilidad del comando git cherry-pick?",
      ops: ["Seleccionar y aplicar los cambios de un commit específico de otra rama a la rama actual, sin hacer merge de toda la rama.", "Seleccionar qué archivos se añaden al staging area en un commit parcial.", "Elegir la estrategia de merge para resolver conflictos.", "Descartar cambios específicos del directorio de trabajo."],
      ok: 0,
      exp: "git cherry-pick aplica los cambios introducidos por un commit específico (identificado por su hash) a la rama actual, útil para portar correcciones de bugs de una rama a otra sin integrar todos los cambios de la rama."
    },
    {
      p: "¿Qué tipo de documentación genera Javadoc y dónde se puede consultar?",
      ops: ["Documentación en formato PDF consultable offline.", "Documentación de API en HTML, navegable en el navegador, similar a la documentación oficial de Java en docs.oracle.com.", "Documentación en formato Markdown para repositorios GitHub.", "Documentación XML para integración con IDEs como Eclipse o IntelliJ."],
      ok: 1,
      exp: "Javadoc genera documentación de API en HTML con frames y navegación similar a la documentación oficial de Java del JDK. Se puede servir como sitio web estático o incluir en el repositorio para consulta del equipo."
    },
    {
      p: "¿Cuáles son las secciones principales de una página de manual (man page) en Unix?",
      ops: ["Introducción, instalación, configuración y solución de problemas.", "NAME, SYNOPSIS, DESCRIPTION, OPTIONS, EXAMPLES y SEE ALSO.", "Nombre, versión, autor y licencia.", "Descripción, uso básico, uso avanzado y FAQ."],
      ok: 1,
      exp: "Las man pages siguen una estructura estandarizada: NAME (nombre y breve descripción), SYNOPSIS (sintaxis de uso), DESCRIPTION (descripción detallada), OPTIONS (opciones disponibles), EXAMPLES y SEE ALSO (referencias relacionadas)."
    },
    {
      p: "¿Qué es un pull request (PR) en el flujo de trabajo de Git/GitHub?",
      ops: ["El comando para descargar cambios de un repositorio remoto.", "Una solicitud formal para que los cambios de una rama sean revisados y fusionados en otra rama (generalmente main), facilitando la revisión de código en equipo.", "Una petición al servidor para actualizar el repositorio local.", "Un tipo especial de commit que incluye múltiples cambios de una sola vez."],
      ok: 1,
      exp: "Un pull request es una propuesta para fusionar cambios de una rama a otra. Permite que el equipo revise el código, añada comentarios, solicite cambios y, finalmente, apruebe o rechace la integración antes de que los cambios lleguen a la rama principal."
    },
    {
      p: "¿Cuál es la diferencia entre documentación interna (comentarios en el código) y documentación externa?",
      ops: ["No hay diferencia; ambas sirven el mismo propósito para el mismo público.", "La documentación interna está embebida en el código fuente (comentarios, Javadoc) y es para desarrolladores; la documentación externa es independiente del código (manuales, wikis, README) y puede dirigirse a distintos públicos.", "La documentación externa está en el código; la interna está en archivos separados.", "La documentación interna es la más importante; la externa es opcional."],
      ok: 1,
      exp: "Los comentarios y Javadoc en el código (documentación interna) documentan la implementación para los desarrolladores. La documentación externa (README, wiki, manual de usuario, guías de despliegue) es independiente del código y puede dirigirse a distintos públicos."
    },
    {
      p: "¿Qué es un CHANGELOG y cuál es su utilidad en un proyecto de software?",
      ops: ["Un archivo de log de errores del sistema.", "Un archivo que documenta cronológicamente todos los cambios notables de cada versión del proyecto, facilitando a usuarios y desarrolladores saber qué ha cambiado.", "Un archivo de configuración de Git para el registro de commits.", "Un reporte automático generado por GitHub con las estadísticas del repositorio."],
      ok: 1,
      exp: "El CHANGELOG es un archivo (normalmente CHANGELOG.md) que documenta los cambios realizados en cada versión del proyecto: nuevas funcionalidades, correcciones de bugs y cambios incompatibles. Facilita a los usuarios entender qué ha cambiado al actualizar."
    },
    {
      p: "¿Cuál es la diferencia entre Continuous Delivery y Continuous Deployment en CI/CD?",
      ops: ["Son exactamente lo mismo; los términos se usan indistintamente.", "En Continuous Delivery el despliegue a producción requiere aprobación manual; en Continuous Deployment todo el proceso es completamente automático hasta producción.", "Continuous Deployment requiere aprobación manual; Continuous Delivery es completamente automático.", "Continuous Delivery solo aplica a aplicaciones web; Continuous Deployment a aplicaciones móviles."],
      ok: 1,
      exp: "Continuous Delivery automatiza hasta tener el artefacto listo para desplegar, pero requiere una acción manual para ir a producción. Continuous Deployment va un paso más allá: si todos los tests pasan, el despliegue a producción también es automático."
    },
    {
      p: "¿Qué es un README en un repositorio Git y qué debería contener?",
      ops: ["Un archivo de log de los commits más recientes del proyecto.", "El documento principal del repositorio que describe el proyecto: qué hace, cómo instalarlo, cómo usarlo, cómo contribuir y la licencia.", "Un archivo de configuración de Git para el repositorio.", "Una lista de todos los colaboradores del proyecto."],
      ok: 1,
      exp: "El README.md es la carta de presentación de un repositorio. Un buen README incluye: descripción del proyecto, requisitos previos, instrucciones de instalación, ejemplos de uso, cómo contribuir y información de licencia."
    },
    {
      p: "¿Cuál es la utilidad del comando git reset --hard HEAD?",
      ops: ["Crear una nueva rama apuntando al commit HEAD actual.", "Descartar todos los cambios no confirmados del directorio de trabajo y el staging area, volviendo al estado del último commit.", "Fusionar la rama HEAD con la rama main.", "Subir el commit HEAD al repositorio remoto."],
      ok: 1,
      exp: "git reset --hard HEAD descarta permanentemente todos los cambios no confirmados (del directorio de trabajo y del staging), restaurando el estado exacto del último commit. Es una operación destructiva que no puede deshacerse fácilmente."
    },
    {
      p: "¿Qué es GitFlow y para qué sirve?",
      ops: ["Una herramienta de interfaz gráfica para Git.", "Un modelo de ramificación (branching strategy) para Git que define ramas específicas para features, releases, hotfixes y desarrollo, organizando el flujo de trabajo del equipo.", "Un protocolo de sincronización entre repositorios Git distribuidos.", "Una extensión de Git para la gestión de submódulos."],
      ok: 1,
      exp: "GitFlow es un modelo de branching que define ramas específicas: main (producción estable), develop (integración), feature/* (nuevas funcionalidades), release/* (preparación de versiones) y hotfix/* (correcciones urgentes en producción)."
    },
  ]
};

// Configuración de UFs para el selector
const UFS = [
  { id: 'UF1', nombre: 'DNS y dominios' },
  { id: 'UF2', nombre: 'Servidores web (Apache/Nginx)' },
  { id: 'UF3', nombre: 'FTP, SSH y acceso remoto' },
  { id: 'UF4', nombre: 'Docker y contenedores' },
  { id: 'UF5', nombre: 'CI/CD y despliegue cloud' },
];
