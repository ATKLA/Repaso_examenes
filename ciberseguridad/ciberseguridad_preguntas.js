// ============================================================
// BANCO DE PREGUNTAS — Ciberseguridad y Hardening (0615)
// UF1: 12 cuestionario + 28 temario = 40
// UF2-UF8: 15 cuestionario + 25 temario = 40 cada una
// Correcciones aplicadas: UF2-P15 (ok→B), UF8-P7 (ok→B)
// ============================================================

const BANCO = {

  // ══════════════════════════════════════════════════════════
  // UF1 — Aplicación de medidas de seguridad pasiva (CPD)
  // ══════════════════════════════════════════════════════════
  UF1: [
    // — Cuestionario oficial (12) ——————————————————————————
    {
      p: "¿Qué ventaja ofrece un CPD con redundancia eléctrica?",
      ops: ["Evita interrupciones del servicio en caso de fallo energético.", "Mejora la velocidad de conexión a Internet.", "Reduce la cantidad de servidores necesarios.", "Disminuye el consumo energético global del CPD."],
      ok: 0,
      exp: "La redundancia eléctrica (doble línea de suministro, grupos electrógenos y SAIs) garantiza que el CPD siga operativo aunque falle una fuente de alimentación."
    },
    {
      p: "¿Por qué es importante el control de acceso en un CPD?",
      ops: ["Para reducir el consumo energético de la empresa.", "Para que cualquier empleado pueda acceder a los servidores.", "Para evitar que personas no autorizadas manipulen los equipos.", "Para aumentar la velocidad de transferencia de datos."],
      ok: 2,
      exp: "El control de acceso físico impide que personas no autorizadas accedan a los equipos, previniendo robos, sabotajes o manipulaciones que comprometan la disponibilidad y confidencialidad de los datos."
    },
    {
      p: "¿Qué estrategia de refrigeración es común en un CPD?",
      ops: ["Colocar los servidores al aire libre.", "Ventiladores domésticos.", "Pasillos fríos y calientes.", "Aire acondicionado doméstico centralizado."],
      ok: 2,
      exp: "La distribución en pasillos fríos (donde entra el aire frío por la parte delantera de los racks) y calientes (donde sale el aire caliente por la parte trasera) optimiza la refrigeración y reduce el consumo energético."
    },
    {
      p: "¿Qué sistema evita la acumulación de polvo en un CPD?",
      ops: ["Uso de filtros de aire HEPA.", "Instalación de cortinas gruesas.", "Uso de humidificadores industriales.", "Ventilación natural con ventanas abiertas."],
      ok: 0,
      exp: "Los filtros HEPA (High Efficiency Particulate Air) retienen partículas muy pequeñas, evitando que el polvo se acumule en los componentes electrónicos, lo que podría provocar cortocircuitos o sobrecalentamientos."
    },
    {
      p: "¿Cuál es el objetivo del mantenimiento de un SAI?",
      ops: ["Asegurar que las baterías están en buen estado.", "Aumentar la temperatura del CPD.", "Apagar los servidores en caso de fallo eléctrico.", "Reducir el consumo de energía del CPD."],
      ok: 0,
      exp: "El mantenimiento preventivo del SAI incluye verificar el estado de las baterías, ya que estas tienen una vida útil limitada y deben sustituirse periódicamente para garantizar su funcionamiento en caso de corte eléctrico."
    },
    {
      p: "¿Cuál es el propósito principal de un falso suelo en un CPD?",
      ops: ["Aumentar la resistencia estructural del edificio.", "Facilitar la distribución del cableado y la ventilación.", "Reducir el consumo de energía de los servidores.", "Proteger los equipos de inundaciones."],
      ok: 1,
      exp: "El falso suelo elevado permite distribuir ordenadamente el cableado de red y eléctrico, y canalizar el aire frío desde el sistema de climatización hacia la parte delantera de los racks."
    },
    {
      p: "¿Qué ocurre si la humedad en un CPD es demasiado baja?",
      ops: ["Los servidores funcionan con más rapidez.", "Se genera electricidad estática, dañando los equipos.", "Se reduce el consumo de energía.", "Mejora la eficiencia de los sistemas de refrigeración."],
      ok: 1,
      exp: "Una humedad relativa demasiado baja (por debajo del 40-45%) favorece la generación de electricidad estática, que puede dañar los componentes electrónicos sensibles. Se recomienda mantenerla entre el 40% y el 60%."
    },
    {
      p: "¿Qué elemento de seguridad evita que los datos sean robados físicamente en un CPD?",
      ops: ["Uso de software antivirus.", "Cifrado de datos.", "Cámaras de seguridad y controles de acceso.", "Actualizaciones del sistema operativo."],
      ok: 2,
      exp: "Las cámaras de vigilancia y los sistemas de control de acceso físico (biométricos, tarjetas, guardias) disuaden y registran intentos de robo físico de equipos o soportes de almacenamiento."
    },
    {
      p: "¿Qué medida de seguridad física ayuda a restringir el acceso no autorizado a un CPD?",
      ops: ["Instalar más servidores dentro del CPD.", "Uso de sistemas biométricos y tarjetas de acceso.", "Permitir el acceso libre al personal de la empresa.", "Colocar carteles de advertencia en la puerta."],
      ok: 1,
      exp: "Los sistemas biométricos (huella dactilar, iris, reconocimiento facial) y las tarjetas de acceso con PIN garantizan que solo el personal autorizado pueda acceder físicamente al CPD."
    },
    {
      p: "¿Por qué es recomendable evitar la ubicación de un CPD en la planta baja?",
      ops: ["Para evitar el ruido de los servidores.", "Para reducir el acceso de empleados.", "Para minimizar el riesgo de inundaciones o sabotajes.", "Para mejorar la señal de red."],
      ok: 2,
      exp: "Ubicar el CPD en planta baja lo expone a riesgos de inundación (por lluvias intensas o rotura de tuberías) y facilita el acceso no autorizado desde el exterior. Se recomienda ubicarlo en plantas intermedias."
    },
    {
      p: "¿Qué sistema de seguridad ayuda a prevenir incendios en un CPD?",
      ops: ["Uso de ventiladores industriales.", "Detectores de humo y gases inertes.", "Apagar los servidores por la noche.", "Instalar extintores de agua."],
      ok: 1,
      exp: "Los detectores de humo detectan el incendio en su fase inicial. Los sistemas de extinción con gases inertes (como el argón o el FM-200) sofocan el fuego sin dañar los equipos electrónicos ni dejar residuos."
    },
    {
      p: "¿Cuál es la importancia de la monitorización en un CPD?",
      ops: ["Detectar anomalías antes de que se conviertan en fallos críticos.", "Aumentar el tamaño del CPD.", "Hacer que los servidores sean más rápidos.", "Reducir el número de técnicos necesarios."],
      ok: 0,
      exp: "La monitorización continua de temperatura, humedad, consumo eléctrico, rendimiento de servidores y eventos de seguridad permite detectar tendencias anómalas antes de que deriven en fallos críticos."
    },

    // — Temario (28) ———————————————————————————————————————
    {
      p: "¿Cuál es la diferencia entre seguridad pasiva y seguridad activa en el contexto de la ciberseguridad?",
      ops: ["Son sinónimos; ambas se refieren a la protección de sistemas informáticos.", "La seguridad pasiva minimiza el impacto de los incidentes (medidas preventivas y de recuperación); la activa detecta y responde a amenazas en tiempo real.", "La seguridad activa solo aplica a redes; la pasiva solo a equipos físicos.", "La seguridad pasiva es más moderna y efectiva que la activa."],
      ok: 1,
      exp: "La seguridad pasiva incluye medidas como SAIs, copias de seguridad, control de acceso físico y condiciones ambientales del CPD. La activa comprende antivirus, firewalls, IDS y monitorización en tiempo real."
    },
    {
      p: "¿Qué es un SAI (Sistema de Alimentación Ininterrumpida) y cuál es su función principal?",
      ops: ["Un sistema de refrigeración de emergencia para CPDs.", "Un dispositivo que proporciona energía eléctrica temporal cuando falla el suministro principal, protegiendo los equipos de cortes y fluctuaciones.", "Un protocolo de red para la gestión remota de servidores.", "Un sistema de detección de intrusos físicos en el CPD."],
      ok: 1,
      exp: "El SAI almacena energía en baterías y la suministra a los equipos cuando falla el suministro eléctrico, permitiendo un apagado ordenado o la continuidad del servicio hasta que se restaure el suministro o entre el generador."
    },
    {
      p: "¿Cuáles son los tres tipos principales de SAI?",
      ops: ["SAI básico, SAI avanzado y SAI industrial.", "SAI fuera de línea (offline), SAI en línea (online) y SAI interactivo (inline).", "SAI monofásico, SAI trifásico y SAI híbrido.", "SAI de batería, SAI de supercondensador y SAI de generador."],
      ok: 1,
      exp: "El SAI offline solo actúa cuando hay fallo eléctrico (conmutación con breve interrupción). El inline filtra la corriente pero conmuta en caso de fallo. El online siempre alimenta desde la batería (protección total sin interrupción)."
    },
    {
      p: "¿Qué es un plan de recuperación de desastres (DRP) en el contexto de un CPD?",
      ops: ["Un plan para aumentar la capacidad del CPD ante un crecimiento de usuarios.", "Un conjunto de procedimientos documentados para restaurar los sistemas y operaciones críticas tras un desastre o fallo grave.", "Una política de contraseñas para los administradores del CPD.", "Un contrato con el proveedor de servicios en la nube para garantizar disponibilidad."],
      ok: 1,
      exp: "El DRP (Disaster Recovery Plan) define los pasos a seguir para recuperar sistemas, datos e infraestructura tras incidentes graves como incendios, inundaciones, fallos hardware masivos o ciberataques."
    },
    {
      p: "¿Qué factores se deben considerar al elegir la ubicación de un CPD?",
      ops: ["Solo el coste del alquiler del edificio.", "Riesgo de catástrofes naturales, accesibilidad, disponibilidad de suministro eléctrico redundante, conectividad de red y control de acceso físico.", "Únicamente la proximidad a los usuarios finales.", "Solo la temperatura exterior media de la zona geográfica."],
      ok: 1,
      exp: "La ubicación ideal de un CPD minimiza riesgos naturales (inundaciones, terremotos), garantiza redundancia eléctrica y de comunicaciones, permite control de acceso físico eficaz y está alejada de zonas de riesgo industrial."
    },
    {
      p: "¿Qué es el Tier de un CPD y qué niveles existen según el estándar Uptime Institute?",
      ops: ["Una medida de la capacidad de almacenamiento del CPD.", "Un sistema de clasificación de la disponibilidad y redundancia del CPD en 4 niveles (Tier I al Tier IV), siendo Tier IV el de mayor disponibilidad (99,995%).", "El número de servidores físicos instalados en el CPD.", "La certificación de eficiencia energética del CPD."],
      ok: 1,
      exp: "El estándar Tier del Uptime Institute clasifica los CPDs: Tier I (básico, 99,671% disponibilidad), Tier II (componentes redundantes), Tier III (mantenimiento sin interrupciones) y Tier IV (tolerante a fallos, 99,995%)."
    },
    {
      p: "¿Qué es el PUE (Power Usage Effectiveness) en un CPD?",
      ops: ["Un protocolo de seguridad para la gestión de accesos al CPD.", "Una métrica que mide la eficiencia energética del CPD: PUE = Energía total consumida / Energía consumida por los equipos TI. Un valor ideal es cercano a 1.", "El porcentaje de uptime garantizado por el proveedor del CPD.", "Un sistema de refrigeración líquida para servidores de alta densidad."],
      ok: 1,
      exp: "PUE mide cuánta energía total consume el CPD por cada unidad de energía que consumen los equipos TI. Un PUE de 1,0 sería perfecto (toda la energía va a los equipos). Los CPDs modernos eficientes tienen PUE entre 1,1 y 1,5."
    },
    {
      p: "¿Qué es la seguridad física en el contexto de la ciberseguridad?",
      ops: ["El conjunto de medidas de software para proteger los sistemas informáticos.", "Las medidas destinadas a proteger físicamente los equipos, instalaciones y personas frente a accesos no autorizados, desastres naturales y sabotajes.", "La configuración de firewalls y sistemas IDS en la red.", "La política de contraseñas y autenticación de usuarios."],
      ok: 1,
      exp: "La seguridad física comprende controles de acceso (biometría, tarjetas, guardias), sistemas contra incendios, control ambiental (temperatura/humedad), vigilancia por cámaras y protección del cableado."
    },
    {
      p: "¿Cuál es el rango de temperatura recomendado para el interior de un CPD?",
      ops: ["Entre 0 °C y 10 °C.", "Entre 18 °C y 27 °C.", "Entre 30 °C y 40 °C.", "Entre 10 °C y 15 °C."],
      ok: 1,
      exp: "ASHRAE recomienda mantener la temperatura de la zona de entrada de aire a los servidores entre 18 °C y 27 °C. Temperaturas fuera de este rango aumentan el riesgo de fallos por sobrecalentamiento o condensación."
    },
    {
      p: "¿Qué es el cableado estructurado en un CPD y por qué es importante?",
      ops: ["Un sistema de alimentación eléctrica redundante para los servidores.", "Un sistema de cableado organizado y estandarizado que facilita la gestión, el mantenimiento y la escalabilidad de la infraestructura de red.", "Un protocolo de comunicación entre los servidores del CPD.", "Un método de cifrado de las comunicaciones internas del CPD."],
      ok: 1,
      exp: "El cableado estructurado organiza los cables de red y eléctricos mediante bandejas, canaletas y patch panels, facilitando la identificación, mantenimiento y escalabilidad, y reduciendo el riesgo de errores humanos."
    },
    {
      p: "¿Qué es un rack en el contexto de un CPD?",
      ops: ["Un protocolo de seguridad para la gestión remota de servidores.", "Una armario estándar (normalmente 19 pulgadas) diseñado para alojar servidores, switches, routers y otros equipos de forma organizada.", "Un sistema de refrigeración líquida para servidores.", "Una unidad de medida de la capacidad de almacenamiento."],
      ok: 1,
      exp: "Un rack es un bastidor metálico estándar (19 pulgadas de ancho en la mayoría de los casos) que aloja los equipos del CPD de forma organizada. La altura se mide en 'Us' (unidades de rack), donde 1U equivale a 44,45 mm."
    },
    {
      p: "¿Qué sistemas de extinción de incendios son más adecuados para un CPD y por qué?",
      ops: ["Sistemas de agua a presión, porque son los más económicos y efectivos.", "Sistemas de gases inertes o agentes limpios (como FM-200 o CO₂), porque sofocan el fuego sin dañar los equipos electrónicos ni dejar residuos.", "Extintores de polvo, porque son los más fáciles de usar.", "Sistemas de espuma, porque son los más efectivos contra incendios eléctricos."],
      ok: 1,
      exp: "Los sistemas con agentes gaseosos (CO₂, argón, FM-200, Novec 1230) son ideales para CPDs porque sofocan el fuego eliminando el oxígeno o absorbiendo el calor, sin dañar los equipos ni dejar residuos que los inutilicen."
    },
    {
      p: "¿Qué es la seguridad lógica en el contexto de las medidas de seguridad pasiva?",
      ops: ["Las medidas físicas para proteger los servidores del CPD.", "El conjunto de controles de acceso lógicos (contraseñas, permisos, cifrado) que protegen los datos y sistemas frente a accesos no autorizados.", "El plan de recuperación ante desastres del CPD.", "Las políticas de mantenimiento preventivo de los equipos."],
      ok: 1,
      exp: "La seguridad lógica complementa a la física: incluye autenticación (contraseñas, MFA, biometría lógica), autorización (permisos y roles), cifrado de datos, auditoría y políticas de acceso."
    },
    {
      p: "¿Cuál es la diferencia entre un CPD propio y un CPD en colocation?",
      ops: ["No hay diferencia; ambos términos son sinónimos.", "En un CPD propio la empresa posee y gestiona toda la infraestructura; en colocation la empresa aloja sus equipos propios en las instalaciones de un proveedor externo.", "En colocation la empresa solo arrienda servidores virtuales; en CPD propio gestiona servidores físicos.", "Un CPD propio siempre está en la nube; colocation siempre es on-premise."],
      ok: 1,
      exp: "Colocation permite a las empresas instalar sus propios servidores físicos en el CPD de un proveedor, que ofrece instalaciones, energía, refrigeración y conectividad. La empresa mantiene la propiedad y gestión de sus equipos."
    },
    {
      p: "¿Qué es el tiempo de actividad (uptime) y cómo se expresa habitualmente?",
      ops: ["El tiempo total que el CPD ha estado en funcionamiento desde su inauguración.", "La disponibilidad del sistema expresada en porcentaje (ej: 99,9% = 8,76 h de inactividad al año). Los 'nueve nueves' son el estándar del sector.", "El tiempo que tardan los servidores en arrancar tras un reinicio.", "El tiempo máximo que puede estar el CPD sin suministro eléctrico."],
      ok: 1,
      exp: "El uptime mide la disponibilidad del servicio: 99,9% (tres nueves) implica ~8,76 h de inactividad al año; 99,99% (cuatro nueves) ~52 min; 99,999% (cinco nueves) ~5,26 min. Los SLAs de CPDs premium garantizan cuatro o cinco nueves."
    },
    {
      p: "¿Qué es el MTBF y el MTTR en el contexto de la gestión de un CPD?",
      ops: ["Protocolos de monitorización de red.", "MTBF (Mean Time Between Failures) es el tiempo medio entre fallos; MTTR (Mean Time To Repair) es el tiempo medio de reparación. Ambos determinan la disponibilidad del sistema.", "Tipos de licencias de software para sistemas de monitorización.", "Estándares de certificación de eficiencia energética."],
      ok: 1,
      exp: "Disponibilidad = MTBF / (MTBF + MTTR). Un MTBF alto y un MTTR bajo garantizan alta disponibilidad. Estos indicadores guían las decisiones de mantenimiento preventivo y la adquisición de componentes de repuesto."
    },
    {
      p: "¿Qué es RAID 5 y cuántos discos mínimos necesita?",
      ops: ["Mínimo 2 discos sin paridad.","Mínimo 3 discos, distribuye datos y paridad rotativa entre todos, tolerando el fallo de un disco.","Mínimo 4 discos con doble paridad.","Mínimo 2 discos en espejo."],
      ok: 1,
      exp: "RAID 5 necesita mínimo 3 discos. Distribuye los datos y un bloque de paridad de forma rotativa. Si falla un disco, se reconstruye a partir de los demás. Buen balance entre rendimiento, capacidad y tolerancia."
    },
    {
      p: "¿Cuál es la diferencia entre seguridad pasiva y seguridad activa?",
      ops: ["Son exactamente lo mismo.","La pasiva reduce el impacto mediante medidas preventivas estructurales (SAI, RAID, backups, CPD); la activa detecta y responde a amenazas en tiempo real (antivirus, firewall, IDS).","La activa solo aplica a software; la pasiva solo a hardware.","La pasiva es reactiva; la activa es preventiva."],
      ok: 1,
      exp: "Seguridad pasiva: medidas que minimizan el impacto ante fallos o ataques (SAI, RAID, copias, acceso físico). Seguridad activa: herramientas que detectan y neutralizan amenazas activamente (antivirus, firewall, IDS/IPS, actualizaciones)."
    },
    {
      p: "¿Qué temperatura y humedad relativa se recomiendan para un CPD?",
      ops: ["25-35°C y 60-80%.","18-27°C y 40-60%.","Menos de 10°C y mínima posible.","La temperatura ambiente del edificio sin control especial."],
      ok: 1,
      exp: "Los estándares ASHRAE y TIA-942 recomiendan 18-27°C y 40-60% de humedad relativa. Por encima se produce sobrecalentamiento; por debajo de la humedad recomendada aparece electricidad estática."
    },
    {
      p: "¿Qué es el principio de mínimo privilegio en seguridad lógica?",
      ops: ["Dar privilegios de administrador a todos los usuarios para facilitar el trabajo.","Conceder a cada usuario solo los permisos estrictamente necesarios para sus tareas, nada más.","Reducir al mínimo el número de usuarios en el sistema.","Eliminar todos los privilegios de los usuarios estándar."],
      ok: 1,
      exp: "El principio de mínimo privilegio (least privilege) limita cada usuario, proceso o sistema a los permisos estrictamente necesarios. Reduce el daño potencial ante errores humanos o compromisos de seguridad."
    },
    {
      p: "¿Qué es el PUE y para qué se usa en CPDs?",
      ops: ["Un protocolo de seguridad para redes de CPD.","Una métrica de eficiencia energética: PUE = Energía total del CPD / Energía consumida por los equipos TI. Un valor de 1.0 sería perfecto.","Un sistema de alimentación ininterrumpida.","Un estándar de cableado estructurado."],
      ok: 1,
      exp: "El PUE (Power Usage Effectiveness) mide qué fracción de la energía total se destina realmente a los equipos TI frente a la usada en refrigeración, iluminación y otros auxiliares. CPDs modernos buscan valores entre 1.1 y 1.5."
    },
    {
      p: "¿Cuáles son los tipos de extintores apropiados para un CPD?",
      ops: ["Rociadores de agua, los más efectivos contra cualquier fuego.","Sistemas de gas inerte o agentes limpios (CO2, Novec 1230, FM-200) que extinguen el fuego sin dañar los equipos electrónicos.","Extintores de espuma, por su alta efectividad.","Extintores de polvo ABC, los más comunes en entornos industriales."],
      ok: 1,
      exp: "En CPDs se usan gases inertes (argón, nitrógeno, CO2) o agentes limpios (Novec 1230, FM-200) que extinguen sin dejar residuos ni dañar los equipos. El agua y la espuma son incompatibles con la electrónica."
    },
    {
      p: "¿Qué es la clasificación Tier de la norma TIA-942?",
      ops: ["El nivel de consumo energético del CPD.","Una escala de 4 niveles que describe la disponibilidad y redundancia de la infraestructura: Tier 1 (básico, 99.671%) hasta Tier 4 (tolerante a fallos, 99.995%).","El tipo de cableado estructurado del CPD.","La temperatura máxima permitida en el CPD."],
      ok: 1,
      exp: "TIA-942 clasifica los CPDs en Tier 1 (básico, sin redundancia), Tier 2 (componentes redundantes), Tier 3 (mantenimiento sin interrupción, N+1) y Tier 4 (tolerante a fallos, activo-activo). A mayor Tier, mayor disponibilidad y coste."
    },
    {
      p: "¿Para qué sirve un CCTV en la seguridad de un CPD?",
      ops: ["Un sistema de refrigeración continua.","Un sistema de videovigilancia que registra y monitoriza el acceso físico, disuade intrusos y proporciona evidencia ante incidentes.","Un protocolo de comunicación entre servidores.","Un sistema de control de corriente continua."],
      ok: 1,
      exp: "CCTV (Closed-Circuit Television) registra continuamente el CPD y sus accesos. Disuade físicamente a posibles intrusos, permite revisar incidentes ocurridos y proporciona evidencia para investigaciones de seguridad."
    },
    {
      p: "¿Qué es el hardening de un sistema informático?",
      ops: ["Instalar el hardware más potente disponible.","El proceso de reducir la superficie de ataque eliminando servicios innecesarios, aplicando parches, configurando permisos mínimos y deshabilitando funcionalidades no usadas.","Cifrar todos los discos duros del servidor.","Instalar múltiples antivirus simultáneamente."],
      ok: 1,
      exp: "El hardening endurece un sistema reduciéndolo al mínimo funcional: desinstalar servicios no necesarios, cerrar puertos no usados, aplicar parches, configurar mínimo privilegio, eliminar cuentas y contraseñas por defecto, y activar logs de auditoría."
    },
    {
      p: "¿Cuál es la diferencia entre amenaza y vulnerabilidad en seguridad informática?",
      ops: ["Son sinónimos.","Una amenaza es un peligro potencial; una vulnerabilidad es una debilidad en el sistema que puede ser aprovechada por esa amenaza.","Una vulnerabilidad es un ataque activo; una amenaza es una debilidad pasiva.","Las amenazas son solo externas; las vulnerabilidades solo internas."],
      ok: 1,
      exp: "Vulnerabilidad: debilidad explotable (bug, contraseña débil, puerto abierto). Amenaza: agente o evento que puede explotar esa vulnerabilidad (hacker, malware, desastre). Riesgo = probabilidad × impacto de que una amenaza explote una vulnerabilidad."
    },
    {
      p: "¿Cuál es la función de las ACL en seguridad informática?",
      ops: ["Listas de virus conocidos mantenidas por los antivirus.","Listas de reglas que determinan qué usuarios o procesos tienen acceso a qué recursos y con qué permisos.","Registros de todos los accesos fallidos al sistema.","Listas de dominios bloqueados por el firewall."],
      ok: 1,
      exp: "Las ACL (Access Control Lists) definen permisos por recurso: qué usuarios/grupos pueden leer, escribir o ejecutar cada fichero, directorio o servicio de red. Son el mecanismo fundamental del control de acceso lógico."
    },
    {
      p: "¿Qué norma internacional establece los requisitos para un SGSI?",
      ops: ["ISO 27001.","ISO 9001.","ISO 14001.","ISO 45001."],
      ok: 0,
      exp: "ISO/IEC 27001 especifica los requisitos para establecer, implementar, mantener y mejorar un Sistema de Gestión de Seguridad de la Información (SGSI), aplicable a organizaciones de cualquier tamaño y sector."
    }

  ],

  // ══════════════════════════════════════════════════════════
  // UF2 — Gestión de dispositivos de almacenamiento
  // ══════════════════════════════════════════════════════════
  UF2: [
    // — Cuestionario oficial (15) ——————————————————————————
    {
      p: "¿Qué define al almacenamiento en estado sólido (SSD)?",
      ops: ["Su mayor velocidad de transferencia.", "Su capacidad de almacenamiento superior.", "Su bajo coste comparado con los discos duros convencionales.", "Su resistencia a campos magnéticos."],
      ok: 0,
      exp: "Los SSDs destacan por su velocidad de lectura/escritura muy superior a los HDDs convencionales, al no tener partes móviles y usar memoria flash NAND para almacenar los datos."
    },
    {
      p: "¿Qué es una instantánea (snapshot) de copia de seguridad?",
      ops: ["Una copia en caliente de todos los datos del sistema.", "Un duplicado completo del sistema en tiempo real.", "Una congelación del sistema de archivos en un momento determinado.", "Una copia incremental de los archivos modificados en las últimas 24 horas."],
      ok: 2,
      exp: "Un snapshot captura el estado exacto del sistema de archivos (o volumen) en un momento concreto, permitiendo restaurar a ese punto sin afectar al sistema en producción."
    },
    {
      p: "¿Cuál de las siguientes es una desventaja de la encriptación en las copias de seguridad?",
      ops: ["Ocupa más espacio de almacenamiento.", "Reduce la vida útil del dispositivo de almacenamiento.", "Disminuye la velocidad del proceso.", "Hace inaccesibles los datos si se pierde la clave."],
      ok: 2,
      exp: "El cifrado de backups añade una carga computacional al proceso de backup y restauración, disminuyendo la velocidad. Es una compensación necesaria para garantizar la confidencialidad de los datos."
    },
    {
      p: "¿Cuál es el principal objetivo de las copias de seguridad?",
      ops: ["Recuperar datos tras un desastre o pérdida accidental.", "Evitar la redundancia en la información.", "Mejorar el rendimiento del sistema.", "Sustituir al sistema de almacenamiento principal."],
      ok: 0,
      exp: "Las copias de seguridad (backups) tienen como objetivo fundamental garantizar la recuperación de datos y la continuidad del negocio ante incidentes como fallos hardware, errores humanos, ransomware o desastres."
    },
    {
      p: "¿Qué significa el término hot swapping?",
      ops: ["Creación de copias de seguridad incrementales.", "Sustitución de un disco sin apagar el sistema.", "Configuración de RAID en caliente.", "Transferencia de datos entre discos en caliente."],
      ok: 1,
      exp: "Hot swapping (intercambio en caliente) permite reemplazar un disco u otro componente mientras el sistema está en funcionamiento, sin necesidad de apagarlo. Es esencial en servidores que requieren alta disponibilidad."
    },
    {
      p: "¿Qué se requiere para implementar almacenamiento en red distribuido?",
      ops: ["Un sistema operativo compatible y una red informática.", "Discos duros externos y acceso remoto.", "Un protocolo exclusivo para sistemas Windows.", "Servidores dedicados de gama alta."],
      ok: 0,
      exp: "El almacenamiento en red distribuido (NAS, SAN, sistemas en nube) requiere un sistema operativo compatible con los protocolos de red (NFS, SMB, iSCSI) y una infraestructura de red adecuada."
    },
    {
      p: "¿Qué tipo de metadatos es esencial para recuperar un sistema completo?",
      ops: ["Registro de eventos.", "Esquema de particiones y configuración del sistema de archivos.", "Permisos de archivos y ACL.", "Historial de accesos de usuarios."],
      ok: 1,
      exp: "Para una recuperación completa (bare metal recovery) se necesita el esquema de particiones (MBR/GPT) y la configuración del sistema de archivos, ya que sin esta información no es posible restaurar el sistema operativo."
    },
    {
      p: "¿Qué caracteriza a un sistema RAID de software?",
      ops: ["Utiliza el procesador principal para los cálculos.", "Permite el intercambio en caliente de discos.", "Requiere una tarjeta controladora dedicada.", "Ofrece mejor rendimiento que el RAID hardware."],
      ok: 0,
      exp: "El RAID por software usa el CPU del sistema para los cálculos de paridad y gestión del array, sin necesitar hardware específico. Esto añade carga al procesador pero reduce el coste."
    },
    {
      p: "¿Cuál de los siguientes es un ejemplo típico de almacenamiento fuera de línea?",
      ops: ["Una memoria flash USB almacenada en un lugar seguro.", "Un disco duro externo conectado por USB.", "Un sistema NAS accesible por red.", "Un servidor cloud con acceso permanente."],
      ok: 0,
      exp: "El almacenamiento fuera de línea (offline) no está conectado al sistema. Una memoria USB guardada en un cajón o caja fuerte es offline: no puede ser afectada por ransomware ni ataques de red."
    },
    {
      p: "¿Qué técnica se utiliza para optimizar el espacio de las copias de seguridad?",
      ops: ["Encriptación previa.", "Multiplexación.", "Eliminación de duplicaciones (deduplicación).", "Compresión con pérdida."],
      ok: 2,
      exp: "La deduplicación detecta y elimina bloques de datos duplicados, almacenando solo una copia única y referencias a ella. Puede reducir el espacio necesario en un 90% o más en entornos con datos repetitivos."
    },
    {
      p: "¿Cuál de las siguientes es una ventaja clave de los sistemas de almacenamiento redundante (RAID)?",
      ops: ["Garantizan la disponibilidad de los datos incluso si falla uno de los discos.", "Aumentan significativamente la velocidad de transferencia en todas las configuraciones.", "Permiten combinar diferentes tipos de almacenamiento en una misma unidad lógica.", "Eliminan la necesidad de realizar copias de seguridad."],
      ok: 0,
      exp: "La principal ventaja del RAID es la tolerancia a fallos: según el nivel (RAID 1, 5, 6, 10), el sistema puede seguir funcionando aunque falle uno o incluso dos discos, gracias a la redundancia."
    },
    {
      p: "¿Qué esquema de copia de seguridad registra todos los cambios en tiempo real?",
      ops: ["Copia completa e incremental.", "Protección continua de datos (CDP).", "Cinta magnética con acceso rápido.", "Copia diferencial programada cada hora."],
      ok: 1,
      exp: "La CDP (Continuous Data Protection) captura y registra cada cambio en los datos en tiempo real, permitiendo restaurar a cualquier punto en el tiempo con una granularidad de segundos."
    },
    {
      p: "¿Qué ventaja tiene el almacenamiento distribuido?",
      ops: ["Facilita las copias de seguridad centralizadas.", "Elimina la necesidad de una red informática.", "Reduce la velocidad de transferencia.", "Elimina los puntos únicos de fallo."],
      ok: 0,
      exp: "El almacenamiento distribuido reparte los datos entre múltiples nodos, facilitando la gestión centralizada de copias de seguridad y mejorando la disponibilidad al no depender de un único dispositivo."
    },
    {
      p: "¿Cuál de las siguientes es una desventaja significativa del almacenamiento en la nube para copias de seguridad?",
      ops: ["Puede implicar problemas de privacidad y seguridad si no está encriptado adecuadamente.", "Requiere una conexión a Internet rápida y estable.", "Tiene una capacidad limitada frente a otros métodos de almacenamiento locales.", "Solo es compatible con sistemas operativos Windows."],
      ok: 0,
      exp: "Si los datos no están cifrados antes de subirse a la nube, el proveedor y potenciales atacantes podrían acceder a información sensible. La encriptación extremo a extremo es imprescindible para backups cloud seguros."
    },
    {
      p: "¿Cuál es la principal diferencia entre el almacenamiento secundario y el terciario?",
      ops: ["La velocidad de transferencia de datos.", "La capacidad de almacenamiento.", "La necesidad de intervención humana en el terciario.", "El coste por gigabyte almacenado."],
      ok: 2,
      exp: "El almacenamiento terciario (cintas, discos ópticos en robots de archivo) requiere intervención humana o robótica para acceder a los datos, a diferencia del secundario (HDD/SSD) que es accesible directamente en línea."
    },

    // — Temario (25) ———————————————————————————————————————
    {
      p: "¿Cuáles son los niveles RAID más comunes y cuál es su diferencia principal?",
      ops: ["RAID 0 (striping, sin redundancia), RAID 1 (mirroring), RAID 5 (paridad distribuida, tolera 1 fallo) y RAID 6 (doble paridad, tolera 2 fallos).", "RAID 1, 2, 3 y 4, todos con paridad simple.", "RAID A, B y C para aplicaciones, backups y archivado.", "Solo existen RAID 0 y RAID 1; el resto son combinaciones de estos."],
      ok: 0,
      exp: "RAID 0 mejora el rendimiento sin redundancia. RAID 1 duplica los datos en dos discos. RAID 5 usa paridad distribuida entre 3+ discos. RAID 6 añade doble paridad (tolera 2 fallos simultáneos). RAID 10 combina striping y mirroring."
    },
    {
      p: "¿Qué es NAS (Network Attached Storage) y en qué se diferencia de SAN?",
      ops: ["NAS es almacenamiento a nivel de bloque en red Fibre Channel; SAN es almacenamiento de archivos en red Ethernet.", "NAS es almacenamiento de archivos accesible por red mediante NFS o SMB; SAN es almacenamiento a nivel de bloque de alta velocidad (Fibre Channel/iSCSI) para uso exclusivo de servidores.", "Son sinónimos; ambos ofrecen exactamente las mismas funciones.", "NAS es para empresas pequeñas; SAN solo para grandes corporaciones."],
      ok: 1,
      exp: "NAS expone sistemas de archivos completos (carpetas) por la red usando protocolos NFS (Linux) o SMB/CIFS (Windows), accesibles por múltiples clientes. SAN proporciona bloques de almacenamiento bruto a servidores, que lo formatean como si fuera un disco local."
    },
    {
      p: "¿Qué es la deduplicación de datos y cuándo es más beneficiosa?",
      ops: ["Un método de cifrado que elimina datos duplicados por razones de seguridad.", "Una técnica que identifica y elimina bloques de datos idénticos, almacenando solo una copia y referencias, especialmente útil en backups con muchos datos repetidos.", "Un algoritmo de compresión con pérdida para reducir el tamaño de los archivos.", "Un sistema RAID que elimina discos redundantes para reducir costes."],
      ok: 1,
      exp: "La deduplicación es más efectiva en entornos de backup donde múltiples máquinas virtuales comparten SO y aplicaciones: en vez de guardar n copias idénticas del SO, se guarda una y referencias a ella, ahorrando hasta el 95% de espacio."
    },
    {
      p: "¿Cuál es la diferencia entre una copia de seguridad completa, incremental y diferencial?",
      ops: ["Son el mismo tipo de backup con diferente nombre según el fabricante.", "Completa: copia todos los datos. Incremental: copia solo los cambios desde el último backup (completo o incremental). Diferencial: copia los cambios desde la última copia completa.", "Incremental es la más lenta; diferencial la más rápida; completa intermedia.", "Diferencial copia todo; incremental solo archivos nuevos; completa los archivos modificados."],
      ok: 1,
      exp: "Completa: lenta de hacer, rápida de restaurar. Incremental: rápida de hacer (solo cambios recientes), pero lenta de restaurar (necesita la completa + todas las incrementales). Diferencial: compromiso entre ambas (solo necesita completa + última diferencial para restaurar)."
    },
    {
      p: "¿Qué es la regla de backup 3-2-1?",
      ops: ["Hacer 3 copias en 2 formatos diferentes, y 1 fuera de la empresa.", "Hacer 3 backups al día, en 2 ubicaciones distintas y verificar 1 vez por semana.", "3 servidores de backup, 2 tipos de RAID y 1 copia en la nube.", "3 copias completas, 2 incrementales y 1 diferencial por semana."],
      ok: 0,
      exp: "La regla 3-2-1 es la mejor práctica estándar: mantener 3 copias de los datos, en 2 soportes o medios diferentes, y 1 de ellas en una ubicación geográfica distinta (offsite), para protegerse contra cualquier tipo de desastre."
    },
    {
      p: "¿Qué diferencia hay entre almacenamiento en caliente (hot), templado (warm) y frío (cold)?",
      ops: ["Hot es más seguro; warm es más rápido; cold es más barato.", "Hot: acceso inmediato y constante (discos en línea); warm: acceso en minutos (discos fuera de línea pero disponibles); cold: acceso en horas o días (cintas, archivado profundo).", "Son niveles de cifrado del almacenamiento, no de accesibilidad.", "Hot es para producción; warm y cold son solo para backups."],
      ok: 1,
      exp: "El almacenamiento hot (SSD/HDD en línea) ofrece acceso instantáneo pero es caro. Warm (disco externo conectado, NAS) requiere minutos. Cold (cintas en robot o almacén, Glacier) puede tardar horas, pero es el más económico por GB."
    },
    {
      p: "¿Qué es una SAN y qué protocolo se usa habitualmente para acceder a ella?",
      ops: ["Una red de almacenamiento de archivos que usa el protocolo HTTP.", "Una red dedicada de alta velocidad para almacenamiento a nivel de bloque, que usa Fibre Channel (FC) o iSCSI como protocolos de transporte.", "Un sistema NAS de gran capacidad para empresas.", "Un tipo de RAID de software basado en red."],
      ok: 1,
      exp: "Una SAN (Storage Area Network) es una red dedicada que conecta servidores con arrays de almacenamiento. Fibre Channel ofrece máximo rendimiento y baja latencia; iSCSI usa TCP/IP convencional y es más económico."
    },
    {
      p: "¿Qué ventajas ofrecen las unidades NVMe frente a los SSD SATA?",
      ops: ["NVMe usa más energía pero no aporta ventajas de velocidad.", "NVMe usa el bus PCIe directamente, ofreciendo velocidades de lectura/escritura varias veces superiores a los SSD SATA (que están limitados por la interfaz SATA a ~600 MB/s).", "NVMe es más barato y tiene mayor capacidad que SATA.", "No hay diferencia práctica entre NVMe y SATA en uso cotidiano."],
      ok: 1,
      exp: "Los SSD NVMe conectados por PCIe alcanzan velocidades de 3.500 MB/s o más en lectura, frente a los ~550 MB/s de los SSD SATA. También ofrecen latencias mucho menores, siendo ideales para cargas de trabajo intensivas."
    },
    {
      p: "¿Qué es el almacenamiento por objetos (object storage) y cuál es su uso principal?",
      ops: ["Un tipo de RAID avanzado para almacenamiento de bases de datos.", "Un modelo de almacenamiento que guarda datos como objetos con metadatos y un ID único, ideal para almacenar grandes volúmenes de datos no estructurados en la nube (imágenes, vídeos, backups).", "Un sistema de archivos jerárquico para servidores Linux.", "Un protocolo de sincronización entre CPDs redundantes."],
      ok: 1,
      exp: "El object storage (ej: Amazon S3, Azure Blob) almacena datos como objetos planos con metadatos ricos y acceso por API. Es infinitamente escalable y perfecto para datos no estructurados: backups, logs, multimedia, archivos históricos."
    },
    {
      p: "¿Qué es la protección continua de datos (CDP) y en qué se diferencia del backup incremental?",
      ops: ["CDP es un backup incremental optimizado que se ejecuta cada hora.", "CDP captura cada cambio en los datos en tiempo real (granularidad de segundos), permitiendo restaurar a cualquier punto exacto. El backup incremental opera a intervalos (diario, horario) con posible pérdida de datos entre intervalos.", "No hay diferencia; CDP es el nombre comercial del backup incremental.", "CDP es más lento y caro, pero no ofrece ventajas adicionales sobre el incremental."],
      ok: 1,
      exp: "CDP registra cada escritura en tiempo real usando journaling o snapshots continuos. El RPO (Recovery Point Objective) es prácticamente cero. Los backups incrementales tienen un RPO igual al intervalo entre ejecuciones (horas o días)."
    },
    {
      p: "¿Qué es el RPO (Recovery Point Objective)?",
      ops: ["El tiempo máximo que puede estar el sistema inactivo antes de restaurarlo.", "La cantidad máxima de datos (expresada en tiempo) que una organización puede permitirse perder en caso de desastre, determinando la frecuencia mínima de los backups.", "El tiempo que tarda en completarse un proceso de restauración.", "El porcentaje mínimo de disponibilidad garantizado en el SLA."],
      ok: 1,
      exp: "El RPO define la tolerancia a la pérdida de datos: un RPO de 4 horas significa que el sistema de backup debe garantizar que nunca se pierdan más de 4 horas de datos. Determina la frecuencia de los backups."
    },
    {
      p: "¿Qué es el RTO (Recovery Time Objective)?",
      ops: ["La cantidad de datos que se puede perder en un desastre.", "El tiempo máximo tolerable para restaurar un sistema o servicio tras un incidente antes de que el impacto en el negocio sea inaceptable.", "El porcentaje de disponibilidad garantizado anualmente.", "El tiempo que tarda en crearse un backup completo del sistema."],
      ok: 1,
      exp: "El RTO es el tiempo máximo que la organización puede tolerar que un sistema esté inactivo. Determina el nivel de inversión necesario en sistemas de recuperación: un RTO de 0 requiere alta disponibilidad activa-activa."
    },
    {
      p: "¿Qué ventaja principal ofrece el almacenamiento en cinta magnética en la actualidad?",
      ops: ["Su velocidad de acceso aleatorio, que supera a los SSDs.", "Su coste por TB es muy bajo y ofrece alta durabilidad para archivado a largo plazo, siendo ideal para datos de acceso infrecuente.", "Su compatibilidad con todos los sistemas operativos modernos sin drivers adicionales.", "Su resistencia a ataques de ransomware por estar siempre conectado en línea."],
      ok: 1,
      exp: "La cinta magnética sigue siendo relevante por su coste por TB (el más bajo del mercado), su durabilidad (30+ años si se almacena correctamente) y su naturaleza offline (inmune a ransomware). LTO-9 ofrece 18 TB nativos por cartucho."
    },
    {
      p: "¿Qué es RAID 10 y cuáles son sus ventajas?",
      ops: ["Un RAID de 10 discos con paridad simple.", "Una combinación de RAID 1 (mirroring) y RAID 0 (striping) que ofrece tanto redundancia como alto rendimiento, requiriendo un mínimo de 4 discos.", "Un RAID de software exclusivo de Linux.", "Un RAID con paridad doble equivalente al RAID 6."],
      ok: 1,
      exp: "RAID 10 combina lo mejor de RAID 0 (velocidad por striping) y RAID 1 (seguridad por mirroring). Puede tolerar múltiples fallos de disco (siempre que no fallen los dos discos de un mismo par espejo) y ofrece excelente rendimiento en escritura."
    },
    {
      p: "¿Qué es la verificación de integridad de backups y por qué es crítica?",
      ops: ["Un proceso para cifrar los backups antes de almacenarlos.", "La comprobación periódica de que los datos del backup son correctos y pueden restaurarse con éxito, detectando corrupción silenciosa antes de que sea necesario restaurar.", "Una auditoría de acceso a los backups para detectar accesos no autorizados.", "El proceso de deduplicar y comprimir los backups para reducir espacio."],
      ok: 1,
      exp: "Un backup que no se puede restaurar no sirve de nada. La verificación periódica (checksums, restauraciones de prueba) detecta corrupción silenciosa de datos (bit rot) o fallos en el proceso de backup antes de que se necesite recuperar datos reales."
    },
    {
      p: "¿Cuál es la diferencia entre almacenamiento fuera de línea y en línea para backups?",
      ops: ["Son equivalentes en términos de seguridad.","En línea: siempre conectado y accesible en red. Fuera de línea: desconectado, inmune a ransomware y ataques remotos pero requiere intervención manual.","El almacenamiento en línea es siempre más seguro.","El fuera de línea es exclusivo para archivado a largo plazo."],
      ok: 1,
      exp: "Online: acceso rápido pero vulnerable a ransomware. Offline (air-gapped): no conectado a la red, inmune a ataques remotos, pero requiere intervención física. La regla 3-2-1 recomienda al menos una copia offline."
    },
    {
      p: "¿Qué es RAID 0 y cuándo se usa?",
      ops: ["RAID 0 tiene la mayor redundancia.","RAID 0 divide los datos entre todos los discos sin paridad, aumentando el rendimiento pero sin tolerancia a fallos. Se usa cuando la velocidad es prioritaria sobre la seguridad.","RAID 0 crea un espejo de todos los discos.","RAID 0 proporciona la misma redundancia que RAID 1."],
      ok: 1,
      exp: "RAID 0 (striping): distribuye bloques entre discos en paralelo, multiplicando el rendimiento. Si falla cualquier disco se pierden todos los datos. Solo para entornos donde la velocidad es crítica y los datos son prescindibles o están respaldados de otra forma."
    },
    {
      p: "¿Cuál es la ventaja del NAS frente a un disco externo USB en entornos empresariales?",
      ops: ["El disco USB es siempre más rápido.","El NAS proporciona almacenamiento centralizado accesible simultáneamente por múltiples usuarios en red, con RAID integrado, mayor capacidad y gestión centralizada.","Ambos ofrecen las mismas prestaciones.","Los discos USB son más seguros porque no están en la red."],
      ok: 1,
      exp: "NAS ofrece: acceso multiusuario simultáneo vía red, RAID integrado para tolerancia a fallos, gestión remota, mayor capacidad escalable, protocolos empresariales (NFS, SMB/CIFS) y funciones de backup programado."
    },
    {
      p: "¿Qué es la protección continua de datos (CDP) y en qué escenarios es útil?",
      ops: ["Equivale a backups cada hora.","CDP captura cada cambio en tiempo real permitiendo recuperar los datos a cualquier punto en el tiempo. Útil en bases de datos transaccionales y sistemas que no toleran pérdida de datos.","CDP solo funciona en sistemas virtualizados.","CDP es lo mismo que RAID 1."],
      ok: 1,
      exp: "CDP registra cada escritura en disco, creando un historial continuo. Permite RPO de segundos o cero. Ideal para: bases de datos de alta criticidad, sistemas financieros, entornos donde perder cualquier transacción es inaceptable."
    },
    {
      p: "¿Cuál es la función de RAID 1 y cuál es su desventaja respecto al espacio?",
      ops: ["RAID 1 distribuye los datos para mayor velocidad.","RAID 1 crea un espejo exacto en dos o más discos. Si falla uno los datos siguen disponibles. Desventaja: solo se aprovecha el 50% del espacio total (2 discos de 1TB = 1TB útil).","RAID 1 proporciona paridad distribuida como RAID 5.","RAID 1 requiere mínimo 4 discos."],
      ok: 1,
      exp: "RAID 1 espeja todos los datos: cada escritura va a todos los discos simultáneamente. Ventaja: tolerancia a fallos máxima, lecturas más rápidas. Desventaja: 50% de eficiencia de almacenamiento (la mitad del espacio total es redundancia)."
    },
    {
      p: "¿Cuáles son las buenas prácticas para gestionar un repositorio de backups?",
      ops: ["Almacenar todos los backups en el servidor de producción para mayor rapidez.","Separar los backups de producción, cifrar los datos, verificar la integridad regularmente, rotar los medios según GFS, documentar el proceso y probar restauraciones periódicamente.","Solo hacer backups cuando el sistema no está en uso.","Usar siempre el mismo medio para todos los backups."],
      ok: 1,
      exp: "Buenas prácticas: separación física/lógica de producción, cifrado de datos en reposo, verificación de integridad automática, rotación GFS, pruebas de restauración periódicas, documentación actualizada y almacenamiento offsite."
    },
    {
      p: "¿Qué es la deduplicación en origen versus en destino?",
      ops: ["Son lo mismo con diferente nombre.","En origen: el cliente analiza los datos antes de enviarlos y transmite solo bloques únicos (menor ancho de banda). En destino: el servidor de backup deduplica al almacenar.","La deduplicación en destino es siempre más eficiente.","La deduplicación en origen requiere más hardware en el servidor."],
      ok: 1,
      exp: "Source-side dedup: el software cliente deduplica antes de transmitir, ahorrando ancho de banda (ideal para backups WAN). Target-side dedup: todos los datos se transmiten al servidor de backup, que aplica deduplicación al almacenar. Más transparente para los clientes."
    },
    {
      p: "¿Cuál es la diferencia entre backup completo, diferencial e incremental en términos de espacio y restauración?",
      ops: ["Son equivalentes en espacio y tiempo de restauración.","Completo: mayor espacio, restauración más rápida (1 copia). Diferencial: espacio medio, restauración rápida (completo + 1 diferencial). Incremental: menor espacio, restauración más lenta (completo + todos los incrementales).","El incremental es mejor en todos los aspectos.","El diferencial requiere más tiempo de restauración que el incremental."],
      ok: 1,
      exp: "Full: una copia, restauración 1 paso. Diferencial: crece desde el full, restaurar full + 1 diferencial. Incremental: solo cambios desde el último backup de cualquier tipo, restaurar full + todos los incrementales en orden. Compromiso entre espacio y velocidad de restauración."
    },
    {
      p: "¿Qué es la memoria virtual y cómo afecta al almacenamiento?",
      ops: ["Es una partición especial del disco usada como extensión de la RAM cuando esta se llena, más lenta que la RAM pero permite ejecutar más procesos.","Es una tecnología de almacenamiento solo disponible en Linux.","Es equivalente a la memoria caché del procesador.","Es una RAM virtual en la GPU del sistema."],
      ok: 0,
      exp: "La memoria virtual (swap en Linux, archivo de paginación en Windows) usa espacio en disco como extensión de la RAM física. Es mucho más lenta que la RAM, por lo que el exceso de paginación degrada severamente el rendimiento del sistema."
    },
    {
      p: "¿Por qué las cintas siguen siendo relevantes en entornos empresariales?",
      ops: ["Las cintas han sido completamente reemplazadas por la nube.","Ofrecen el coste por GB más bajo, capacidades enormes (LTO-9: 18TB nativos), larga vida útil (30+ años), portabilidad y seguridad air-gapped natural contra ransomware.","Las cintas son más rápidas que los SSDs.","Las cintas solo se usan en sistemas mainframe obsoletos."],
      ok: 1,
      exp: "Las cintas LTO siguen siendo la opción más económica para archivado masivo. LTO-9 ofrece 18TB nativos por cartucho. Bajo coste/GB, duración 30+ años, consumo cero en almacenamiento y la cinta offline es la protección ideal contra ransomware."
    }

  ],

  // ══════════════════════════════════════════════════════════
  // UF3 — Gestión de copias de seguridad
  // ══════════════════════════════════════════════════════════
  UF3: [
    // — Cuestionario oficial (15) ——————————————————————————
    {
      p: "¿Qué software se puede utilizar para realizar copias de seguridad en entornos virtuales?",
      ops: ["Adobe Photoshop.", "Microsoft Excel.", "VMware vCenter Converter.", "WinZip."],
      ok: 2,
      exp: "VMware vCenter Converter permite convertir máquinas virtuales y físicas, y junto con vCenter, gestiona backups de entornos virtuales VMware. Para backups específicos también se usan Veeam Backup & Replication o Acronis."
    },
    {
      p: "¿Qué tipo de copia de seguridad almacena solo los cambios desde la última copia completa?",
      ops: ["Copia incremental.", "Copia en espejo.", "Copia diferencial.", "Copia completa."],
      ok: 2,
      exp: "La copia diferencial almacena todos los cambios producidos desde la última copia completa. Es más grande que la incremental pero más fácil de restaurar (solo se necesita la completa + la última diferencial)."
    },
    {
      p: "¿Qué ventaja ofrece almacenar copias de seguridad en la nube?",
      ops: ["Permite recuperar datos desde cualquier ubicación.", "Reduce la necesidad de usar discos duros en el servidor.", "Hace que las copias sean más rápidas.", "Elimina la necesidad de cifrar los datos."],
      ok: 0,
      exp: "El almacenamiento en la nube permite acceder y recuperar los datos desde cualquier lugar con conexión a Internet, eliminando la dependencia de la ubicación física del soporte de backup."
    },
    {
      p: "¿Cuál de las siguientes es una de las principales desventajas de una copia incremental?",
      ops: ["La restauración puede ser más lenta, ya que depende de varias copias.", "No permite recuperar archivos eliminados accidentalmente.", "Necesita más espacio de almacenamiento que una copia completa.", "No se puede automatizar."],
      ok: 0,
      exp: "Para restaurar desde backups incrementales se necesita la copia completa más todas las incrementales en orden cronológico, lo que hace el proceso de restauración más lento y complejo."
    },
    {
      p: "¿Qué elemento ayuda a evitar la corrupción de los datos en copias de seguridad almacenadas en discos duros?",
      ops: ["Reducción del tamaño de los archivos copiados.", "Desfragmentación del disco.", "Pruebas de integridad y verificación de datos.", "Actualización del firmware del disco."],
      ok: 2,
      exp: "Las pruebas de integridad mediante checksums (MD5, SHA-256) verifican que los datos del backup no se han corrompido durante el almacenamiento, detectando errores antes de que sea necesario restaurar."
    },
    {
      p: "¿Qué herramienta permite comprimir las copias de seguridad para reducir el espacio en disco?",
      ops: ["WinRAR.", "Paint.", "Microsoft Word.", "Notepad."],
      ok: 0,
      exp: "WinRAR, junto con otras herramientas como 7-Zip o gzip/bzip2 en Linux, permiten comprimir archivos de backup, reduciendo significativamente el espacio de almacenamiento necesario."
    },
    {
      p: "¿Por qué es importante realizar pruebas de restauración de las copias de seguridad?",
      ops: ["Para asegurarse de que los datos puedan recuperarse correctamente en caso de necesidad.", "Para liberar espacio en el disco duro.", "Para mejorar la velocidad del sistema operativo.", "Para actualizar el software de backup."],
      ok: 0,
      exp: "Un backup que no se puede restaurar correctamente es inútil. Las pruebas periódicas de restauración verifican que el proceso funciona, los datos están íntegros y el personal conoce el procedimiento de recuperación."
    },
    {
      p: "¿Cuál es el principal objetivo de una copia de seguridad?",
      ops: ["Reducir el consumo de energía del servidor.", "Mejorar la velocidad del sistema.", "Proteger los datos y garantizar su recuperación en caso de pérdida.", "Aumentar la capacidad de almacenamiento disponible."],
      ok: 2,
      exp: "El objetivo primario de los backups es proteger los datos frente a pérdidas (por fallos hardware, errores humanos, ransomware, desastres) y garantizar su recuperación en un tiempo y con una pérdida de datos aceptables."
    },
    {
      p: "¿Qué tipo de copia de seguridad se ejecuta automáticamente sin intervención humana?",
      ops: ["Copia automática.", "Copia en frío.", "Copia manual.", "Copia programada."],
      ok: 0,
      exp: "Las copias automáticas se ejecutan de forma desatendida según una programación definida, sin necesidad de intervención humana. Son fundamentales para garantizar que los backups se realicen regularmente."
    },
    {
      p: "Según la regla 3-2-1, ¿cuántas copias de seguridad se deben tener en total?",
      ops: ["3.", "1.", "2.", "5."],
      ok: 0,
      exp: "La regla 3-2-1 establece mantener 3 copias de los datos en total (el original más dos backups), en 2 tipos de soportes diferentes, con 1 copia en una ubicación geográfica distinta."
    },
    {
      p: "¿Cuál de los siguientes es un ejemplo de solución de recuperación ante desastres?",
      ops: ["Usar un solo disco duro externo para almacenar todos los datos.", "Contar con copias de seguridad en diferentes ubicaciones.", "Hacer copias solo en un USB.", "Guardar todas las copias en el mismo servidor."],
      ok: 1,
      exp: "Mantener copias en diferentes ubicaciones geográficas (offsite) es fundamental para la recuperación ante desastres: si el CPD principal sufre un incendio o inundación, la copia offsite permite la recuperación."
    },
    {
      p: "¿Cuál de los siguientes métodos garantiza que un backup sea seguro frente a accesos no autorizados?",
      ops: ["Almacenar todas las copias en la misma ubicación física.", "Realizar copias en discos sin protección de acceso.", "Cifrar los archivos de la copia de seguridad.", "Hacer copias cada hora."],
      ok: 2,
      exp: "El cifrado de backups garantiza que, aunque alguien acceda físicamente al soporte de almacenamiento, no pueda leer los datos sin la clave de descifrado. Es imprescindible para backups offsite o en la nube."
    },
    {
      p: "¿Cuál de estas opciones es una estrategia efectiva para evitar la pérdida de datos en caso de ransomware?",
      ops: ["Mantener copias de seguridad desconectadas de la red.", "Guardar todas las copias en la misma unidad de almacenamiento.", "Realizar solo copias en la nube sin cifrado.", "Aumentar la frecuencia de las copias incrementales."],
      ok: 0,
      exp: "Las copias offline (desconectadas de la red) son inmunes al ransomware, ya que el malware no puede alcanzarlas para cifrarlas. Es la medida más efectiva contra este tipo de ataque."
    },
    {
      p: "¿Qué tipo de copia de seguridad se actualiza en tiempo real con cada cambio en los archivos?",
      ops: ["Copia diferencial.", "Copia en espejo.", "Copia manual.", "Copia incremental."],
      ok: 1,
      exp: "La copia en espejo (mirror backup) replica los datos en tiempo real: cualquier cambio en el origen se refleja inmediatamente en el destino. Es la más actualizada, pero si se borra un archivo también se borra en el espejo."
    },
    {
      p: "¿Cuál es la ventaja principal de una imagen de respaldo frente a una copia de seguridad tradicional?",
      ops: ["No necesita software adicional para su restauración.", "Ocupa menos espacio en disco que una copia de seguridad incremental.", "Permite restaurar todo el sistema, incluyendo el sistema operativo y las configuraciones.", "Es más rápida de crear que cualquier otro tipo de backup."],
      ok: 2,
      exp: "Una imagen de disco (bare metal backup) captura el sistema completo: SO, configuraciones, aplicaciones y datos. Permite restaurar un sistema desde cero en un hardware nuevo sin reinstalar el SO ni las aplicaciones."
    },

    // — Temario (25) ———————————————————————————————————————
    {
      p: "¿Qué diferencia hay entre compresión sin pérdida y compresión con pérdida en el contexto de backups?",
      ops: ["Son equivalentes para copias de seguridad; la elección no afecta a la recuperación de datos.", "Compresión sin pérdida (ZIP, 7z, gzip) permite recuperar todos los datos exactamente; compresión con pérdida (JPEG, MP3) descarta datos permanentemente. Solo la sin pérdida es válida para backups.", "La compresión con pérdida es más segura para backups porque elimina datos redundantes.", "La compresión sin pérdida ocupa más espacio que sin comprimir."],
      ok: 1,
      exp: "Para backups siempre se usa compresión sin pérdida porque garantiza la recuperación exacta de todos los datos. La compresión con pérdida (usada en multimedia) descarta información de forma permanente, lo que haría inútil el backup."
    },
    {
      p: "¿Qué es el esquema de rotación Grandfather-Father-Son (GFS) en la gestión de backups?",
      ops: ["Un esquema de permisos para el acceso a los archivos de backup.", "Un esquema de rotación de cintas/medios que mantiene backups diarios (Son), semanales (Father) y mensuales (Grandfather), equilibrando retención y uso de medios.", "Un estándar internacional para la catalogación de backups.", "Un tipo de RAID con tres niveles de paridad."],
      ok: 1,
      exp: "GFS es una estrategia de rotación clásica: los backups 'Son' (diarios) se sobreescriben semanalmente, los 'Father' (semanales) mensualmente y los 'Grandfather' (mensuales) se retienen 1 año, ofreciendo un buen equilibrio entre retención y coste de almacenamiento."
    },
    {
      p: "¿Qué herramientas de línea de comandos se usan habitualmente en Linux para crear backups?",
      ops: ["copy, paste y archive.", "tar, rsync, dd y dump.", "backup, restore y compress.", "cp, mv y zip únicamente."],
      ok: 1,
      exp: "En Linux, tar crea archivos comprimidos de directorios; rsync sincroniza de forma eficiente (solo diferencias); dd crea imágenes exactas de discos/particiones; dump hace backups de sistemas de archivos ext. Todos son herramientas estándar de backup."
    },
    {
      p: "¿Qué es Veeam Backup & Replication y para qué se usa?",
      ops: ["Un sistema operativo especializado en la gestión de backups.", "Una solución profesional de backup, replicación y recuperación ante desastres para entornos virtualizados (VMware, Hyper-V) y cloud.", "Un protocolo de red para transferencia de backups entre CPDs.", "Un hardware especializado en almacenamiento de cintas magnéticas."],
      ok: 1,
      exp: "Veeam es una de las soluciones de backup más usadas en entornos empresariales para VMs. Ofrece backups sin agente, replicación, instant VM recovery (arrancar una VM directamente desde el backup) y soporte para nubes públicas."
    },
    {
      p: "¿Qué ventaja tiene hacer backups de máquinas virtuales a nivel de hipervisor frente a backups dentro de la VM?",
      ops: ["Los backups a nivel de hipervisor son más lentos pero más seguros.", "Permiten capturar toda la VM (disco, RAM, configuración) en un snapshot consistente sin instalar agentes dentro de cada VM, y facilitan restauraciones rápidas de VMs completas.", "Solo funcionan con VMware; Hyper-V requiere backups dentro de la VM.", "Son menos fiables que los backups tradicionales con agente."],
      ok: 1,
      exp: "El backup a nivel de hipervisor (agentless) captura el estado completo de la VM mediante snapshots del hipervisor. No requiere instalar software en cada VM, reduce la carga de la VM durante el backup y permite restauraciones instant VM recovery."
    },
    {
      p: "¿Cómo se cifran habitualmente los backups en entornos empresariales?",
      ops: ["Con MD5, que proporciona cifrado robusto de 128 bits.", "Con algoritmos de cifrado simétrico (AES-256) para los datos del backup y cifrado asimétrico para proteger las claves de cifrado.", "Enviando los backups por SFTP, que proporciona cifrado automático del contenido.", "El cifrado de backups no está estandarizado; cada empresa usa su propio método."],
      ok: 1,
      exp: "AES-256 es el estándar de facto para cifrar el contenido de los backups (rápido y muy seguro). Las claves AES se protegen mediante cifrado asimétrico (RSA/ECC). La gestión segura de claves es tan crítica como el propio cifrado."
    },
    {
      p: "¿Qué es el backup offsite y por qué es esencial en un plan de continuidad de negocio?",
      ops: ["Un backup realizado fuera del horario de trabajo para no afectar al rendimiento.", "Una copia de seguridad almacenada en una ubicación geográficamente separada del CPD principal, que garantiza la recuperación ante desastres que afecten a la ubicación principal.", "Un backup que se realiza fuera de la red corporativa mediante una VPN.", "Un tipo de backup incremental optimizado para conexiones de baja velocidad."],
      ok: 1,
      exp: "El backup offsite protege contra desastres locales (incendio, inundación, terremoto) que podrían destruir el CPD principal junto con sus backups locales. La separación geográfica es el principio central de la continuidad de negocio."
    },
    {
      p: "¿Qué es un sistema de backup dedicado (appliance de backup) y qué ventajas ofrece?",
      ops: ["Un servidor genérico con software de backup instalado.", "Un dispositivo hardware especializado que integra hardware optimizado, software de backup, deduplicación y compresión, ofreciendo mayor rendimiento, fiabilidad y simplicidad de gestión.", "Una NAS de gran capacidad usada exclusivamente para almacenar backups.", "Un sistema cloud de terceros para backups empresariales."],
      ok: 1,
      exp: "Los appliances de backup (como Dell EMC Data Domain, Quantum DXi) integran hardware y software optimizados para backup, ofreciendo deduplicación inline de alto rendimiento, gestión centralizada y tiempos de restauración más rápidos que soluciones genéricas."
    },
    {
      p: "¿Cuál es la diferencia entre backup y replicación en términos de protección de datos?",
      ops: ["Son exactamente lo mismo; replicación es el término técnico de backup.", "El backup crea copias a intervalos con retención histórica (permite volver a puntos del pasado); la replicación sincroniza datos en tiempo real sin retención histórica (protege contra fallos de hardware pero no contra borrados accidentales).", "La replicación solo protege contra fallos físicos; el backup solo contra errores humanos.", "La replicación es siempre offsite; el backup siempre es local."],
      ok: 1,
      exp: "Si alguien borra accidentalmente un archivo, la replicación habrá borrado también esa copia. El backup histórico permite recuperar la versión anterior. Por eso ambas estrategias son complementarias: replicación para HA, backup para recuperación de datos."
    },
    {
      p: "¿Qué información mínima debe documentarse en una política de copias de seguridad?",
      ops: ["Solo el software de backup utilizado y las credenciales de acceso.", "Qué datos se respaldan, con qué frecuencia, en qué soportes, dónde se almacenan, durante cuánto tiempo se retienen, cómo se cifran y cómo se verifica y prueba la restauración.", "Únicamente el cronograma de ejecución de los backups.", "El inventario de hardware de almacenamiento disponible."],
      ok: 1,
      exp: "Una política de backup completa debe definir: alcance (qué se respalda), frecuencia (cuándo), medios y ubicación, retención (cuánto tiempo), cifrado, procedimiento de restauración, responsables y plan de pruebas periódicas."
    },
    {
      p: "¿Cuál es la diferencia entre una copia de seguridad en caliente y una copia en frío?",
      ops: ["La copia en caliente es más rápida; la en frío es más segura.", "La copia en caliente se realiza con el sistema en funcionamiento (puede requerir snapshots para consistencia); la copia en frío se realiza con el sistema apagado (garantiza consistencia total pero implica tiempo de inactividad).", "La copia en frío usa discos SSD; la en caliente usa cintas magnéticas.", "Son términos que solo aplican a bases de datos, no a sistemas de ficheros."],
      ok: 1,
      exp: "Los backups en frío son simples y garantizan consistencia total, pero requieren apagar el servicio. Los en caliente permiten operar sin interrupciones, pero requieren mecanismos (snapshots, journaling) para garantizar la consistencia de los datos en el backup."
    },
    {
      p: "¿Qué herramientas open source existen para backups en sistemas Linux?",
      ops: ["Solo tar y gzip.","Rsync (sincronización incremental), BorgBackup (deduplicación+cifrado), Bacula, Amanda, Restic y TimeShift, entre otras.","Solo Veeam y Acronis con versión para Linux.","Solo los backups integrados en el propio sistema operativo."],
      ok: 1,
      exp: "Herramientas Linux open source: rsync (incremental eficiente), BorgBackup (deduplicación y cifrado), Bacula/Bareos (soluciones cliente-servidor empresariales), Restic (multi-backend: local, S3, SSH) y TimeShift (backups del sistema similares a Time Machine)."
    },
    {
      p: "¿Cuál es la diferencia entre imagen basada en bloques y basada en archivos?",
      ops: ["Son equivalentes; solo difieren en el nombre.","La basada en bloques copia sectores del disco directamente sin interpretar el FS, ideal para DR y sistemas dañados; la basada en archivos copia archivos individuales, mejor para restauración granular.","La basada en archivos es siempre más rápida.","La basada en bloques solo funciona en Linux."],
      ok: 1,
      exp: "Bloques: copia sectores brutos, rápido, funciona aunque el FS esté dañado, ideal para DR. Archivos: procesa cada fichero individualmente, más lento para imágenes completas pero permite restaurar archivos específicos. Los sistemas modernos a menudo combinan ambos enfoques."
    },
    {
      p: "¿Qué es la estrategia 3-2-1-1-0 y qué añade a la regla 3-2-1?",
      ops: ["Es simplemente la regla 3-2-1 con un nombre diferente.","Amplía 3-2-1 añadiendo: 1 copia offline/air-gapped (protección contra ransomware) y 0 errores verificados (todas las copias pasan verificación de integridad).","Requiere 5 copias en lugar de 3.","El último 0 indica que no se necesitan copias en la nube."],
      ok: 1,
      exp: "3-2-1-1-0: 3 copias, 2 medios, 1 offsite, 1 offline/air-gapped (inmune a ransomware) y 0 errores (verificación de integridad de TODOS los backups). Evolución moderna de 3-2-1 diseñada para la era del ransomware."
    },
    {
      p: "¿Cuál es la ventaja de la compresión lz4 frente a gzip en backups?",
      ops: ["lz4 ofrece mayor ratio de compresión.","lz4 es extremadamente rápido (a veces más rápido que leer sin comprimir), aunque con menor ratio que gzip. Ideal cuando la velocidad es prioritaria.","gzip y lz4 son equivalentes en velocidad.","lz4 solo está disponible en ZFS."],
      ok: 1,
      exp: "lz4 sacrifica ratio de compresión por velocidad extrema: comprime/descomprime a varios GB/s sin impacto perceptible. gzip ofrece ~30% mejor compresión pero es 5-10x más lento. La elección depende del cuello de botella: CPU o disco."
    },
    {
      p: "¿Qué es el snapshot de LVM y cómo se usa para backups consistentes?",
      ops: ["LVM snapshot es una herramienta de backup de pago.","LVM permite crear un snapshot del volumen lógico en un instante. El backup se realiza desde el snapshot, no del volumen activo, garantizando consistencia sin detener el sistema.","Solo funciona con sistemas de archivos ext4.","Requiere detener todos los servicios."],
      ok: 1,
      exp: "LVM snapshot usa Copy-on-Write: las escrituras nuevas van a un área separada, manteniendo el snapshot inmutable. Permite backup desde el snapshot mientras el sistema sigue en producción, obteniendo datos consistentes sin interrupción del servicio."
    },
    {
      p: "¿Cuál es la importancia de documentar el procedimiento de restauración?",
      ops: ["Solo es necesaria si el backup es manual.","Garantiza que cualquier miembro del equipo pueda restaurar correctamente en una crisis, sin depender de un único experto, reduciendo el tiempo de recuperación y los errores bajo presión.","Solo hay que documentar qué se copia, no cómo se restaura.","Solo es necesaria para auditorías externas."],
      ok: 1,
      exp: "Un procedimiento de restauración documentado es esencial: en una crisis, el estrés aumenta errores, el responsable habitual puede no estar disponible, y el tiempo es crítico. Debe incluir pasos exactos, comandos, requisitos previos y pruebas de validación."
    },
    {
      p: "¿Qué es Veeam y para qué se usa?",
      ops: ["Un sistema operativo para servidores de backup.","Una solución de backup y DR para entornos virtualizados (VMware, Hyper-V) y cloud, con capacidades de replicación y recuperación granular.","Una herramienta de compresión de archivos para servidores.","Un antivirus para servidores de backup."],
      ok: 1,
      exp: "Veeam es una de las soluciones de backup más usadas en empresas para VMware y Hyper-V. Permite backups de VMs completos, recuperación granular de archivos y objetos, replicación para DR y backups de Microsoft 365."
    },
    {
      p: "¿Cuál es el procedimiento correcto de restauración con estrategia incremental?",
      ops: ["Restaurar solo el último backup incremental.","Restaurar primero el backup completo más reciente y luego aplicar cada backup incremental en orden cronológico hasta el punto deseado.","Restaurar solo el backup diferencial más reciente.","El orden de restauración de los incrementales no importa."],
      ok: 1,
      exp: "Restauración incremental: 1) Restaurar el backup COMPLETO base. 2) Aplicar incrementales en orden cronológico estricto (Inc1, Inc2, Inc3...). Es el proceso más largo pero el que requiere menos espacio de almacenamiento en la cadena de backups."
    },
    {
      p: "¿Por qué los backups en cinta siguen siendo relevantes para archivado?",
      ops: ["Las cintas ya no se usan.","Ofrecen el menor coste por GB, capacidades enormes (LTO-9: 18TB nativos), larga vida útil (30+ años), portabilidad y seguridad air-gapped natural contra ransomware.","Las cintas son más rápidas que los SSDs.","Solo se usan en sistemas mainframe obsoletos."],
      ok: 1,
      exp: "Las cintas LTO son la opción más económica para archivado masivo a largo plazo. LTO-9 ofrece 18TB nativos por cartucho, duración 30+ años, consumo cero en almacenamiento. La cinta offline es la protección ideal contra ransomware en políticas de backup."
    },
    {
      p: "¿Para qué sirve la herramienta rsync en backups de Linux?",
      ops: ["Para cifrar los archivos de backup antes de transmitirlos.","Para sincronizar archivos transfiriendo solo los bloques modificados (delta), lo que hace los backups incrementales muy eficientes tanto localmente como a través de SSH.","Para gestionar los metadatos de los backups.","Para automatizar la rotación de backups según la política GFS."],
      ok: 1,
      exp: "rsync transfiere solo las diferencias entre origen y destino, haciendo los backups incrementales muy eficientes. Uso local: rsync -av /origen /destino. Uso remoto por SSH: rsync -avz /origen usuario@servidor:/destino."
    },
    {
      p: "¿Qué consideraciones especiales requieren los backups de bases de datos en producción?",
      ops: ["Las BD no necesitan consideraciones especiales.","Requieren garantizar coherencia transaccional: dump SQL, herramientas nativas del motor (mysqldump, pg_dump, RMAN) o snapshot con quiesce previo de la BD.","Solo es posible hacer backup de BD deteniéndolas.","Los backups de BD son idénticos a los de archivos normales."],
      ok: 1,
      exp: "Los backups de BD requieren coherencia transaccional: ficheros escritos a medias producen una BD corrupta. Soluciones: dump lógico (mysqldump, pg_dump), backup con herramientas nativas (RMAN, SQL Server Backup), snapshot con quiesce previo o integración con VSS."
    },
    {
      p: "¿Qué es BorgBackup y cuáles son sus características principales?",
      ops: ["Un sistema de virtualización para servidores de backup.","Una herramienta de backup open source para Linux/macOS con deduplicación, compresión y cifrado integrados, que almacena incrementalmente de forma muy eficiente.","Un protocolo de red para transferencias de backup.","Una interfaz gráfica para gestionar backups en Windows."],
      ok: 1,
      exp: "BorgBackup es open source con deduplicación nativa (almacena solo bloques únicos), múltiples algoritmos de compresión (lz4, zstd, zlib) y cifrado AES. Muy eficiente para backups incrementales a largo plazo en sistemas Linux y macOS."
    },
    {
      p: "¿Cuál es la ventaja principal de las imágenes de respaldo frente a los backups de archivos?",
      ops: ["Ocupan menos espacio que los backups de archivos.","Permiten restaurar el sistema completo (SO, aplicaciones, configuraciones y datos) a un estado exacto sin reinstalación, a diferencia de los backups de archivos que solo recuperan datos.","No necesitan software adicional para restaurarse.","Son más rápidas de crear que los backups de archivos."],
      ok: 1,
      exp: "Una imagen de sistema captura todo el disco sector a sector: SO, drivers, aplicaciones, configuraciones y datos. La restauración bare-metal recupera el sistema completo en minutos sin reinstalación, mientras los backups de archivos solo recuperan datos de usuario."
    },
    {
      p: "¿Qué es el cifrado de backups y por qué es especialmente importante para copias offsite?",
      ops: ["El cifrado de backups reduce la velocidad sin aportar beneficios de seguridad reales.","Protege los datos del backup ante accesos no autorizados. Es especialmente crítico para copias offsite (cloud, mensajería, ubicaciones externas) donde el medio puede ser accedido por terceros.","Solo es necesario cuando los backups se almacenan en la nube.","El cifrado hace los backups irrecuperables en caso de pérdida de la clave."],
      ok: 1,
      exp: "Los backups offsite (nube, discos enviados por mensajería, ubicaciones remotas) pueden ser interceptados o accedidos por terceros. El cifrado garantiza que aunque el medio sea robado o filtrado, los datos sean inaccesibles sin la clave. Usar AES-256 con clave segura guardada por separado."
    }

  ],

  // ══════════════════════════════════════════════════════════
  // UF4 — Seguridad activa
  // ══════════════════════════════════════════════════════════
  UF4: [
    // — Cuestionario oficial (15) ——————————————————————————
    {
      p: "¿Qué tipo de virus afecta principalmente a documentos de Microsoft Office mediante el uso de macros?",
      ops: ["Virus de macro.", "Virus de acción directa.", "Virus de sector de arranque.", "Gusano de red."],
      ok: 0,
      exp: "Los virus de macro explotan el lenguaje de macros de aplicaciones como Word o Excel. Se ejecutan cuando el usuario abre el documento y puede propagarse infectando otros documentos."
    },
    {
      p: "¿Cuál de estos elementos constituye un plan de contingencia ante un fallo de seguridad?",
      ops: ["Ignorar alertas de seguridad menores.", "Evaluar los riesgos y planificar acciones de recuperación.", "Reiniciar el equipo sin análisis previo.", "Desinstalar el antivirus para liberar recursos."],
      ok: 1,
      exp: "Un plan de contingencia incluye la evaluación de riesgos, la definición de procedimientos de respuesta, la asignación de responsables y las acciones de recuperación para minimizar el impacto de un incidente de seguridad."
    },
    {
      p: "¿Cuál de los siguientes comandos de Linux se utiliza para actualizar los paquetes del sistema?",
      ops: ["sudo apt update.", "clear cache.", "sudo format disk.", "sudo rm -rf /"],
      ok: 0,
      exp: "sudo apt update actualiza la lista de paquetes disponibles en los repositorios. Para instalar las actualizaciones se usa sudo apt upgrade. Mantener el sistema actualizado es fundamental para la seguridad."
    },
    {
      p: "¿Qué acción ayuda a prevenir ataques por fuerza bruta?",
      ops: ["Configurar contraseñas complejas y seguras.", "Usar contraseñas fáciles de recordar.", "Compartir contraseñas con compañeros de trabajo.", "Deshabilitar el bloqueo de cuenta tras intentos fallidos."],
      ok: 0,
      exp: "Las contraseñas complejas (mayúsculas, minúsculas, números y símbolos, mínimo 12 caracteres) aumentan exponencialmente el tiempo necesario para un ataque de fuerza bruta. Combinarlas con bloqueo de cuenta y MFA es la mejor defensa."
    },
    {
      p: "¿Qué acción es recomendable al detectar un comportamiento sospechoso en un equipo?",
      ops: ["Continuar trabajando normalmente para no perder productividad.", "Reiniciar el sistema sin realizar un análisis.", "Aislar el equipo de la red para evitar la propagación.", "Formatear inmediatamente el equipo."],
      ok: 2,
      exp: "El aislamiento inmediato de la red evita que el malware se propague a otros sistemas. Permite realizar un análisis forense del equipo afectado sin comprometer el resto de la infraestructura."
    },
    {
      p: "¿Qué característica no corresponde a un sistema operativo seguro?",
      ops: ["Mantenerlo actualizado con parches de seguridad.", "Permitir la ejecución de cualquier aplicación sin restricciones.", "Configurar permisos de usuario de manera adecuada.", "Aplicar el principio de mínimo privilegio."],
      ok: 1,
      exp: "Permitir la ejecución de cualquier aplicación sin restricciones viola el principio de control de aplicaciones (whitelisting/blacklisting) y facilita la ejecución de malware. Un SO seguro debe controlar qué aplicaciones pueden ejecutarse."
    },
    {
      p: "¿Cuál de los siguientes es un tipo de software malicioso diseñado para replicarse automáticamente a través de redes?",
      ops: ["Rootkit.", "Gusano (worm).", "Troyano.", "Adware."],
      ok: 1,
      exp: "Los gusanos (worms) se propagan automáticamente por redes explotando vulnerabilidades, sin necesidad de intervención humana ni de infectar otros archivos. Son especialmente peligrosos por su capacidad de propagación masiva."
    },
    {
      p: "¿Qué es un ataque de phishing?",
      ops: ["Un tipo de virus que modifica el sector de arranque del disco.", "Un software que mejora la velocidad de conexión a Internet.", "Un intento de obtener información confidencial mediante engaño.", "Un ataque que satura un servidor con peticiones masivas."],
      ok: 2,
      exp: "El phishing usa correos electrónicos, SMS (smishing) o llamadas (vishing) que suplantan identidades legítimas para engañar a los usuarios y obtener credenciales, datos bancarios u otra información confidencial."
    },
    {
      p: "¿Qué opción ayuda a prevenir la entrada de software malicioso en un sistema?",
      ops: ["Desactivar el firewall para mejorar la velocidad de conexión.", "Mantener el sistema operativo y las aplicaciones actualizadas.", "Descargar software de fuentes desconocidas.", "Compartir credenciales entre compañeros."],
      ok: 1,
      exp: "Las actualizaciones incluyen parches de seguridad que corrigen vulnerabilidades conocidas. La mayoría del malware explota vulnerabilidades para las que ya existen parches; mantener el sistema actualizado elimina estos vectores de entrada."
    },
    {
      p: "¿Cuál de las siguientes herramientas forma parte de la seguridad activa?",
      ops: ["Compiladores de software.", "Programas antivirus.", "Editores de texto.", "Sistemas de alimentación ininterrumpida."],
      ok: 1,
      exp: "Los antivirus son herramientas de seguridad activa: detectan y eliminan malware en tiempo real. La seguridad activa incluye también firewalls, IDS/IPS, SIEM y herramientas de monitorización."
    },
    {
      p: "¿Qué indica un archivo adjunto con extensión .exe recibido por correo electrónico?",
      ops: ["Puede contener código malicioso y debe analizarse antes de abrirlo.", "Solo funciona en sistemas operativos antiguos.", "Es completamente seguro porque viene de un contacto conocido.", "Es un documento de texto comprimido."],
      ok: 0,
      exp: "Los archivos .exe son ejecutables de Windows que pueden contener malware. Incluso si vienen de contactos conocidos (cuya cuenta puede estar comprometida), deben escanearse antes de ejecutarse. El email de un contacto de confianza no garantiza la seguridad del adjunto."
    },
    {
      p: "¿Qué medida básica ayuda a proteger un sistema contra virus informáticos?",
      ops: ["Compartir contraseñas con otros usuarios de confianza.", "Desactivar el antivirus para mejorar el rendimiento.", "Instalar un programa antivirus actualizado.", "Formatear el disco duro semanalmente."],
      ok: 2,
      exp: "Un antivirus actualizado con las últimas definiciones de virus detecta y elimina malware conocido. Las actualizaciones de firmas son críticas porque aparecen nuevas variantes de malware constantemente."
    },
    {
      p: "¿Cuál de las siguientes herramientas se utiliza para detectar intrusiones en un sistema informático?",
      ops: ["IDS (sistema de detección de intrusos).", "Compresor de archivos.", "Procesador de texto.", "Gestor de contraseñas."],
      ok: 0,
      exp: "Un IDS (Intrusion Detection System) monitoriza el tráfico de red o los eventos del sistema en busca de patrones anómalos o firmas de ataques conocidos, alertando al administrador cuando detecta actividad sospechosa."
    },
    {
      p: "¿Cuál de los siguientes términos se refiere a un software que se oculta para mantener el acceso no autorizado al sistema?",
      ops: ["Ransomware.", "Rootkit.", "Spyware.", "Adware."],
      ok: 1,
      exp: "Un rootkit modifica el sistema operativo (a veces a nivel de kernel) para ocultarse a sí mismo y a otros procesos maliciosos, manteniendo acceso privilegiado al sistema sin ser detectado por herramientas de seguridad convencionales."
    },
    {
      p: "¿Qué herramienta permite revisar los eventos de seguridad en un sistema operativo Windows?",
      ops: ["Visor de eventos.", "Bloc de notas.", "Calculadora.", "Panel de control."],
      ok: 0,
      exp: "El Visor de eventos (Event Viewer) de Windows registra y muestra los eventos del sistema, seguridad y aplicaciones. Los eventos de seguridad (inicio de sesión, cambios de política, acceso a objetos) son fundamentales para el análisis forense."
    },

    // — Temario (25) ———————————————————————————————————————
    {
      p: "¿Cuáles son los principales tipos de hackers según sus intenciones?",
      ops: ["Hackers buenos, hackers malos y hackers neutrales.", "White hat (éticos, trabajan con permiso), Black hat (maliciosos) y Grey hat (entre ambos, pueden actuar sin permiso pero sin intención destructiva).", "Hackers internos y hackers externos.", "Hackers de red y hackers de aplicaciones."],
      ok: 1,
      exp: "White hat: profesionales de seguridad que realizan pruebas con permiso. Black hat: atacantes maliciosos que buscan beneficio o daño. Grey hat: actúan sin permiso pero publican los fallos encontrados. También existen hacktivistas, script kiddies y APTs."
    },
    {
      p: "¿Qué es el malware y cuáles son sus principales tipos?",
      ops: ["Software legítimo que optimiza el rendimiento del sistema.", "Cualquier software diseñado para dañar o infiltrarse en sistemas sin consentimiento. Tipos principales: virus, gusanos, troyanos, ransomware, spyware, adware, rootkits y keyloggers.", "Únicamente los virus informáticos que se propagan por email.", "Software desactualizado que puede causar vulnerabilidades."],
      ok: 1,
      exp: "Malware (malicious software) es el término genérico para cualquier código dañino. Cada tipo tiene características específicas: los virus se adjuntan a archivos, los gusanos se propagan por red, los troyanos se disfrazan de software legítimo, el ransomware cifra datos exigiendo rescate."
    },
    {
      p: "¿Qué es el ransomware y cómo funciona?",
      ops: ["Un virus que ralentiza el sistema operativo.", "Un malware que cifra los archivos de la víctima y exige un rescate económico (normalmente en criptomonedas) para proporcionar la clave de descifrado.", "Un software espía que roba contraseñas bancarias.", "Un gusano que se propaga por correo electrónico."],
      ok: 1,
      exp: "El ransomware cifra los archivos del sistema usando criptografía asimétrica: la clave privada la tiene el atacante. Sin el backup adecuado, la víctima debe pagar el rescate o perder sus datos. WannaCry, REvil y LockBit son ejemplos conocidos."
    },
    {
      p: "¿Qué es la firma digital y para qué se usa en la seguridad informática?",
      ops: ["Un certificado SSL que cifra las comunicaciones web.", "Un mecanismo criptográfico que usa la clave privada del emisor para firmar datos, permitiendo al receptor verificar la autenticidad e integridad del mensaje usando la clave pública del emisor.", "Una contraseña especial para acceder a documentos cifrados.", "Un tipo de antivirus basado en firmas de malware conocido."],
      ok: 1,
      exp: "La firma digital garantiza autenticidad (solo el poseedor de la clave privada puede firmar), integridad (cualquier modificación invalida la firma) y no repudio (el firmante no puede negar haber firmado). Se usa en contratos electrónicos, software y correos cifrados."
    },
    {
      p: "¿Qué es el MD5 y cuál es su uso actual en seguridad?",
      ops: ["Un algoritmo de cifrado simétrico usado para proteger contraseñas.", "Una función hash que genera un resumen de 128 bits. Fue ampliamente usado para verificar integridad, pero ya no se recomienda para seguridad por ser vulnerable a colisiones.", "Un protocolo de autenticación de red.", "Un estándar de cifrado de clave pública."],
      ok: 1,
      exp: "MD5 genera un hash de 128 bits. Aunque sigue usándose para verificar integridad de archivos en contextos no críticos, está completamente roto para uso criptográfico de seguridad: se pueden crear colisiones (dos datos distintos con el mismo hash)."
    },
    {
      p: "¿Qué es la ingeniería social en ciberseguridad?",
      ops: ["La disciplina que estudia la arquitectura de sistemas seguros.", "El conjunto de técnicas psicológicas y de manipulación para engañar a personas y obtener información confidencial o acceso no autorizado a sistemas.", "Un método de análisis de vulnerabilidades de software.", "La práctica de configurar sistemas operativos seguros."],
      ok: 1,
      exp: "La ingeniería social explota el 'factor humano', el eslabón más débil de la seguridad. Técnicas como phishing, pretexting, baiting o tailgating manipulan psicológicamente a las personas para obtener credenciales, acceso físico o información sensible."
    },
    {
      p: "¿Qué diferencia hay entre un IDS y un IPS?",
      ops: ["Son exactamente lo mismo con diferente nombre según el fabricante.", "IDS (Intrusion Detection System) solo detecta y alerta; IPS (Intrusion Prevention System) además bloquea automáticamente el tráfico malicioso.", "IPS solo detecta; IDS detecta y bloquea.", "IDS es para redes; IPS solo para sistemas operativos."],
      ok: 1,
      exp: "El IDS monitoriza y alerta sobre actividad sospechosa pero no actúa (solo detecta). El IPS está en línea con el tráfico y puede bloquear ataques en tiempo real. Un NGFW (Next Generation Firewall) suele integrar funcionalidad IPS."
    },
    {
      p: "¿Qué es el principio de mínimo privilegio (PoLP)?",
      ops: ["Dar a los usuarios los permisos máximos para que no necesiten solicitar acceso constantemente.", "Otorgar a cada usuario, proceso o sistema únicamente los privilegios estrictamente necesarios para realizar su función, reduciendo la superficie de ataque.", "Configurar contraseñas mínimas de 8 caracteres.", "Instalar el mínimo de software posible en los servidores."],
      ok: 1,
      exp: "El PoLP limita el daño potencial si una cuenta es comprometida: si un atacante toma el control de una cuenta con privilegios mínimos, el daño que puede causar está limitado. Es un principio fundamental de hardening de sistemas."
    },
    {
      p: "¿Qué es el hardening de un sistema operativo?",
      ops: ["La instalación de hardware más potente para mejorar el rendimiento.", "El proceso de reducir la superficie de ataque de un sistema eliminando servicios innecesarios, aplicando configuraciones seguras, actualizaciones y controles de acceso estrictos.", "La instalación de un firewall de hardware.", "El proceso de cifrar el disco duro del sistema."],
      ok: 1,
      exp: "El hardening incluye: deshabilitar servicios y puertos no necesarios, aplicar parches, configurar políticas de contraseñas, activar registro de eventos, usar el principio de mínimo privilegio, configurar firewalls y eliminar cuentas innecesarias."
    },
    {
      p: "¿Qué es un certificado digital y quién lo emite?",
      ops: ["Un archivo de texto que contiene la contraseña cifrada de un usuario.", "Un documento electrónico que vincula una clave pública con la identidad de su propietario, emitido y firmado por una Autoridad de Certificación (CA) de confianza.", "Un protocolo de autenticación basado en contraseñas de un solo uso.", "Un estándar para el cifrado de discos duros."],
      ok: 1,
      exp: "Un certificado digital (estándar X.509) contiene: clave pública del propietario, datos de identidad, período de validez y la firma digital de la CA que lo emite. La CA actúa como tercero de confianza que avala la identidad del propietario."
    },
    {
      p: "¿Cuáles son las fases típicas de un ataque informático?",
      ops: ["Planificación, ejecución y borrado.", "Reconocimiento, escaneo, obtención de acceso, mantenimiento del acceso y borrado de huellas.", "Infección, propagación y daño.", "Detección, explotación y extracción."],
      ok: 1,
      exp: "El modelo de ataque clásico (Cyber Kill Chain) incluye: reconocimiento (recopilación de información), escaneo (búsqueda de vulnerabilidades), explotación (obtención de acceso), escalada de privilegios, movimiento lateral, persistencia y borrado de evidencias."
    },
    {
      p: "¿Qué es la autenticación multifactor (MFA) y por qué es importante?",
      ops: ["El uso de contraseñas largas como único factor de autenticación.", "Un mecanismo que requiere dos o más factores de verificación independientes (algo que sabes, algo que tienes, algo que eres) para autenticar al usuario, dificultando enormemente los ataques incluso si se roba la contraseña.", "Un protocolo de red que cifra las credenciales de acceso.", "El uso de diferentes contraseñas para cada servicio."],
      ok: 1,
      exp: "MFA combina: algo que sabes (contraseña), algo que tienes (token, teléfono) y/o algo que eres (biometría). Aunque un atacante robe la contraseña, sin el segundo factor no puede acceder. Reduce el riesgo de compromiso de cuentas en más del 99%."
    },
    {
      p: "¿Qué es un keylogger y cómo puede afectar a la seguridad?",
      ops: ["Un software que optimiza el rendimiento del teclado.", "Un malware que registra todas las pulsaciones del teclado, capturando contraseñas, números de tarjeta y cualquier información introducida por el usuario.", "Un protocolo de seguridad para teclados inalámbricos.", "Un sistema de monitorización legítimo para empleados."],
      ok: 1,
      exp: "Los keyloggers (hardware o software) capturan todo lo que teclea el usuario. Son especialmente peligrosos para robar credenciales, incluyendo contraseñas, PINs y datos bancarios. Se instalan habitualmente como parte de un troyano."
    },
    {
      p: "¿Qué es un exploit y cómo se relaciona con las vulnerabilidades?",
      ops: ["Un antivirus especializado en detectar malware avanzado.", "Un código o técnica que aprovecha una vulnerabilidad específica en un software para ejecutar código malicioso o escalar privilegios.", "Un sistema de detección de intrusos basado en red.", "Un tipo de firewall de nueva generación."],
      ok: 1,
      exp: "Un exploit es el 'arma' que usa una vulnerabilidad como 'puerta de entrada'. Los zero-day exploits aprovechan vulnerabilidades desconocidas para el fabricante. Mantener el software actualizado cierra las puertas que explotan los exploits conocidos."
    },
    {
      p: "¿Qué es un SIEM (Security Information and Event Management)?",
      ops: ["Un antivirus de nueva generación para endpoints.", "Una plataforma que recopila, correlaciona y analiza logs y eventos de seguridad de múltiples fuentes, proporcionando visibilidad centralizada y alertas en tiempo real sobre incidentes.", "Un tipo de firewall de capa de aplicación.", "Un sistema de backup centralizado para logs de seguridad."],
      ok: 1,
      exp: "El SIEM (como Splunk, IBM QRadar o Microsoft Sentinel) centraliza los logs de toda la infraestructura, aplica reglas de correlación para detectar patrones de ataque complejos y genera alertas. Es fundamental en centros de operaciones de seguridad (SOC)."
    },
    {
      p: "¿Qué es el vishing y cómo se diferencia del phishing?",
      ops: ["El vishing solo se realiza por correo electrónico.","El vishing (voice phishing) usa llamadas telefónicas fraudulentas para engañar a las víctimas, suplantando a bancos, soporte técnico o autoridades.","Es un ataque técnico que explota vulnerabilidades VoIP.","Solo afecta a teléfonos móviles, no a fijos."],
      ok: 1,
      exp: "Vishing = phishing por voz. El atacante llama haciéndose pasar por el banco (alerta de fraude), soporte técnico de Microsoft (falso virus) o Hacienda (deuda fiscal). La urgencia y autoridad simulada manipulan a la víctima para que proporcione credenciales o realice transferencias."
    },
    {
      p: "¿Qué es el smishing?",
      ops: ["Un ataque que compromete servidores SMS.","Phishing mediante mensajes SMS que se hacen pasar por bancos, empresas de mensajería o entidades públicas para robar credenciales.","Un tipo de spam telefónico sin intención maliciosa.","Un ataque que intercepta mensajes SMS en tránsito."],
      ok: 1,
      exp: "Smishing = SMS + phishing. Los SMS tienen mayor tasa de apertura que el email (98% vs 20%). Los ataques simulan notificaciones de paquetes (DHL/FedEx), alertas de seguridad bancaria o premios. Los enlaces llevan a páginas de phishing optimizadas para móvil."
    },
    {
      p: "¿Cuál es la diferencia entre antivirus basado en firmas y en heurística/comportamiento?",
      ops: ["Son equivalentes; todos usan solo firmas.","Firmas: detecta malware conocido comparando con una base de datos. Heurística/comportamiento: detecta malware desconocido o variantes analizando comportamientos sospechosos.","El análisis heurístico es menos efectivo que las firmas.","Los antivirus modernos solo usan análisis de comportamiento."],
      ok: 1,
      exp: "Firmas: detección exacta de malware conocido, ineficaz ante zero-days. Heurística: busca patrones sospechosos en la estructura del código. Comportamiento (sandboxing): ejecuta el código en entorno aislado y observa acciones. Los antivirus modernos combinan los tres enfoques."
    },
    {
      p: "¿Qué es el sandboxing en los antivirus?",
      ops: ["Un sistema de copias de seguridad en entornos aislados.","Una técnica que ejecuta código sospechoso en un entorno virtual aislado observando su comportamiento para determinar si es malicioso.","Una técnica de análisis de código fuente.","Un tipo de aislamiento de red para servidores sospechosos."],
      ok: 1,
      exp: "El sandboxing ejecuta archivos sospechosos en una VM aislada y analiza su comportamiento: conexiones a IPs maliciosas, modificación del registro, inyección de código, cifrado de archivos. Si el comportamiento es malicioso, se clasifica como malware aunque no tenga firma conocida."
    },
    {
      p: "¿Qué es el pretexting en ingeniería social?",
      ops: ["Un malware que finge ser un antivirus legítimo.","Una técnica donde el atacante crea una historia falsa y convincente para ganarse la confianza de la víctima, suplantando identidades legítimas como técnico TI, auditor o compañero de trabajo.","Un phishing que usa correos con pretextos legales.","Una técnica que explota el protocolo de autenticación."],
      ok: 1,
      exp: "Pretexting: el atacante construye una narrativa falsa detallada (soy el nuevo técnico de TI, necesito tu contraseña para migrar tu cuenta). Más elaborado que el phishing simple porque implica investigación previa (OSINT) sobre la organización y sus procesos."
    },
    {
      p: "¿Cuáles son los pasos recomendados en la respuesta a un incidente de malware?",
      ops: ["Solo reinstalar el sistema operativo inmediatamente.","1) Identificar y aislar el equipo. 2) Analizar y documentar el incidente. 3) Contener la propagación. 4) Erradicar el malware. 5) Restaurar desde backup limpio. 6) Análisis post-incidente.","Solo ejecutar el antivirus y reiniciar.","Apagar todos los servidores inmediatamente."],
      ok: 1,
      exp: "Respuesta a incidentes (NIST SP 800-61): Preparación → Detección e Identificación → Contención (aislar el equipo de la red) → Erradicación → Recuperación (restaurar desde backup limpio) → Post-incidente (lecciones aprendidas). No apagar inmediatamente: podría destruir evidencia forense."
    },
    {
      p: "¿Cuál es la función de las actualizaciones de seguridad (patches)?",
      ops: ["Solo añaden nuevas funcionalidades al software.","Corrigen vulnerabilidades conocidas. Un sistema sin parchear es vulnerable a exploits disponibles públicamente que los atacantes automatizan para comprometer sistemas masivamente.","Solo son necesarias para el antivirus.","Pueden ignorarse si el sistema tiene firewall."],
      ok: 1,
      exp: "Los parches de seguridad corrigen CVEs publicados. Tras la publicación de un CVE, los atacantes disponen de exploits en horas-días. Mantener los sistemas parcheados es la medida de seguridad activa más efectiva y de menor coste, reduciendo drásticamente la superficie de ataque."
    },
    {
      p: "¿Qué es una vulnerabilidad zero-day?",
      ops: ["Una vulnerabilidad que solo afecta a sistemas nuevos.","Una vulnerabilidad desconocida por el fabricante y sin parche disponible. Los atacantes que la conocen pueden explotarla hasta que el fabricante la descubra y publique una corrección.","Una vulnerabilidad ya parcheada que sigue siendo explotable.","Una vulnerabilidad que solo puede explotarse el primer día."],
      ok: 1,
      exp: "Un zero-day es desconocido para el fabricante y sin parche. Son muy valiosos (se venden en mercados de exploits). No hay defensa técnica directa. Mitigación: capas adicionales de seguridad, WAF, monitorización de anomalías, sandboxing y principio de mínimo privilegio."
    },
    {
      p: "¿Qué es una bomba lógica?",
      ops: ["Un dispositivo físico que destruye hardware al activarse.","Código malicioso oculto en un programa que se activa cuando se cumplen ciertas condiciones (fecha, evento), ejecutando acciones destructivas.","Un tipo de ataque DDoS programado.","Un virus que se activa al conectar un USB infectado."],
      ok: 1,
      exp: "Las bombas lógicas son fragmentos de código ocultos que permanecen inactivos hasta que se cumple una condición predefinida: una fecha, la eliminación de un registro, un número de ejecuciones. Entonces ejecutan su carga destructiva (borrar datos, cifrar archivos, enviar información)."
    },
    {
      p: "¿Qué es el IPS y en qué se diferencia del IDS?",
      ops: ["Son exactamente lo mismo.","El IDS solo detecta y alerta; el IPS, además, bloquea activamente el tráfico malicioso en tiempo real, pudiendo descartar paquetes o cerrar conexiones sospechosas.","El IPS solo funciona en redes wifi; el IDS en redes cableadas.","El IDS previene intrusiones; el IPS solo las detecta."],
      ok: 1,
      exp: "IDS (Intrusion Detection System): detecta y alerta. IPS (Intrusion Prevention System): detecta Y bloquea activamente. El IPS está en línea en el tráfico de red y puede descartar paquetes maliciosos, resetear conexiones o bloquear IPs atacantes en tiempo real."
    }

  ],

  // ══════════════════════════════════════════════════════════
  // UF5 — Seguridad activa en redes
  // ══════════════════════════════════════════════════════════
  UF5: [
    // — Cuestionario oficial (15) ——————————————————————————
    {
      p: "¿Qué ataque consiste en engañar a los usuarios con correos electrónicos o sitios falsos para robar información?",
      ops: ["Phishing.", "Spoofing.", "Sniffing.", "DoS."],
      ok: 0,
      exp: "El phishing usa correos, SMS o páginas web que suplantan identidades legítimas (bancos, empresas) para engañar al usuario y obtener credenciales, datos bancarios u otra información confidencial."
    },
    {
      p: "¿Cuál es la principal función de un proxy en una red?",
      ops: ["Actuar como intermediario entre los usuarios y los servidores externos.", "Proteger las bases de datos contra ataques de inyección SQL.", "Almacenar datos de respaldo para evitar su pérdida.", "Asignar direcciones IP a los dispositivos de la red."],
      ok: 0,
      exp: "El proxy actúa como intermediario: recibe las peticiones de los clientes internos, las reenvía a los servidores externos y devuelve las respuestas. Puede cachear contenido, filtrar URLs, controlar acceso y ocultar las IPs internas."
    },
    {
      p: "¿Qué tipo de firewall posibilita analizar el estado de una conexión antes de permitir el tráfico?",
      ops: ["Firewall de filtrado de paquetes.", "Firewall basado en reglas estáticas.", "Firewall de estado (stateful).", "Firewall de aplicación."],
      ok: 2,
      exp: "El firewall stateful mantiene una tabla de estado de todas las conexiones activas. Permite el tráfico de respuesta de conexiones ya establecidas y bloquea paquetes que no pertenecen a ninguna conexión legítima, siendo más seguro que el filtrado de paquetes simple."
    },
    {
      p: "¿Qué tipo de ataque intenta introducir código malicioso en formularios web para manipular bases de datos?",
      ops: ["Ransomware.", "Sniffing.", "Inyección SQL.", "CSRF."],
      ok: 2,
      exp: "La inyección SQL inserta código SQL malicioso en los campos de entrada de una aplicación web. Si la aplicación no sanitiza las entradas, el código se ejecuta en la base de datos, permitiendo robar datos, modificarlos o eliminarlos."
    },
    {
      p: "¿Qué mecanismo de seguridad permite proteger los servidores expuestos a Internet sin comprometer la red interna?",
      ops: ["DMZ (zona desmilitarizada).", "VLAN.", "Proxy caché.", "NAT."],
      ok: 0,
      exp: "La DMZ es una red perimetral que aloja servicios expuestos a Internet (web, email, DNS). Está separada de la red interna por firewalls, de modo que si un servidor de la DMZ es comprometido, el atacante no accede directamente a la red interna."
    },
    {
      p: "¿Qué herramienta se usa para escanear puertos y detectar servicios abiertos en una red?",
      ops: ["Wireshark.", "Nmap.", "Squid.", "Metasploit."],
      ok: 1,
      exp: "Nmap (Network Mapper) es la herramienta estándar de escaneo de redes: detecta hosts activos, puertos abiertos, servicios en ejecución y versiones de software. Es usada tanto por administradores como por atacantes en reconocimiento."
    },
    {
      p: "¿Cuál de las siguientes es una medida efectiva para mitigar ataques de fuerza bruta en accesos remotos?",
      ops: ["Usar contraseñas cortas y fáciles de recordar.", "Permitir intentos ilimitados de inicio de sesión.", "Implementar autenticación multifactor (MFA).", "Deshabilitar el registro de intentos fallidos."],
      ok: 2,
      exp: "MFA requiere un segundo factor (token, app de autenticación) además de la contraseña. Aunque el atacante obtenga la contraseña por fuerza bruta o filtración, sin el segundo factor no puede acceder."
    },
    {
      p: "¿Qué tipo de ataque se basa en interceptar el tráfico sin modificarlo?",
      ops: ["Sniffing.", "Ransomware.", "Phishing.", "DoS."],
      ok: 0,
      exp: "El sniffing (escucha pasiva) captura paquetes de red sin modificarlos. En redes no cifradas permite capturar credenciales y datos sensibles. Herramientas como Wireshark se usan tanto para análisis legítimo como para sniffing malicioso."
    },
    {
      p: "¿Qué protocolo cifra el tráfico de las conexiones web para proteger la información?",
      ops: ["HTTP.", "HTTPS.", "FTP.", "Telnet."],
      ok: 1,
      exp: "HTTPS (HTTP Secure) usa TLS/SSL para cifrar el tráfico entre el navegador y el servidor, garantizando confidencialidad e integridad. Impide que atacantes en posición de MITM puedan leer o modificar los datos transmitidos."
    },
    {
      p: "¿Cuál de los siguientes tipos de firewall es más efectivo para bloquear ataques a aplicaciones web?",
      ops: ["Proxy transparente.", "Firewall de estado.", "WAF (Web Application Firewall).", "Firewall de filtrado de paquetes."],
      ok: 2,
      exp: "Un WAF analiza el tráfico HTTP/HTTPS a nivel de aplicación, detectando y bloqueando ataques como inyección SQL, XSS, CSRF y otras vulnerabilidades web (OWASP Top 10) que los firewalls de red convencionales no pueden detectar."
    },
    {
      p: "¿Qué protocolo se recomienda para acceder de forma segura a un servidor remoto?",
      ops: ["FTP.", "Telnet.", "SSH.", "SMTP."],
      ok: 2,
      exp: "SSH cifra toda la sesión remota (comandos, salida y transferencia de archivos). Telnet transmite en texto plano y está completamente obsoleto desde el punto de vista de seguridad. SSH es el estándar para administración remota segura."
    },
    {
      p: "¿Qué ventaja ofrece un proxy inverso en la seguridad de una red?",
      ops: ["Protege los servidores internos contra accesos directos desde Internet.", "Permite ocultar las direcciones IP de los usuarios internos.", "Aumenta la velocidad de descarga de archivos personales.", "Gestiona la asignación de IPs en la red interna."],
      ok: 0,
      exp: "El proxy inverso (reverse proxy) se sitúa delante de los servidores web: recibe las peticiones de Internet y las reenvía al servidor interno. Los clientes nunca se conectan directamente al servidor, que queda oculto y protegido."
    },
    {
      p: "¿Cuál es el principal objetivo de la seguridad de red?",
      ops: ["Aumentar la velocidad de conexión a Internet.", "Optimizar el uso del ancho de banda.", "Garantizar la confidencialidad, la integridad y la disponibilidad de la información.", "Reducir el coste de la infraestructura de red."],
      ok: 2,
      exp: "La tríada CIA (Confidentiality, Integrity, Availability) es el fundamento de la seguridad de la información: confidencialidad (solo acceden los autorizados), integridad (los datos no son alterados) y disponibilidad (los sistemas son accesibles cuando se necesitan)."
    },
    {
      p: "¿Qué función cumple un firewall en una red?",
      ops: ["Filtrar y controlar el tráfico de red según reglas de seguridad.", "Almacenar copias de seguridad de los datos.", "Bloquear todos los accesos externos a la red.", "Acelerar la conexión a Internet."],
      ok: 0,
      exp: "El firewall aplica una política de control de acceso a la red: permite o deniega el tráfico según reglas definidas (IP, puerto, protocolo, estado de conexión). No bloquea todo el tráfico externo, sino el que no cumple las reglas autorizadas."
    },
    {
      p: "¿Cuál de estos ataques busca saturar un servidor para dejarlo fuera de servicio?",
      ops: ["Inyección SQL.", "Denegación de servicio (DoS/DDoS).", "Man-in-the-Middle (MitM).", "Phishing."],
      ok: 1,
      exp: "Un ataque DoS satura los recursos del servidor (CPU, memoria, ancho de banda) con peticiones masivas. DDoS lo hace desde miles de equipos comprometidos (botnet) simultáneamente, siendo mucho más difícil de mitigar."
    },

    // — Temario (25) ———————————————————————————————————————
    {
      p: "¿Cuáles son los tipos de cortafuegos según su tecnología?",
      ops: ["Cortafuegos hardware, software y cloud.", "Filtrado de paquetes, stateful inspection, proxy de aplicación y NGFW (Next Generation Firewall).", "Cortafuegos interno, externo y perimetral.", "Cortafuegos activo, pasivo e híbrido."],
      ok: 1,
      exp: "Evolución tecnológica: filtrado de paquetes (capa 3-4, sin estado), stateful inspection (mantiene tabla de conexiones), proxy de aplicación (analiza capa 7), NGFW (combina stateful + IPS + control de aplicaciones + inspección SSL)."
    },
    {
      p: "¿Qué es un ataque Man-in-the-Middle (MitM) y cómo funciona?",
      ops: ["Un ataque que satura el servidor con peticiones.", "Un ataque en el que el atacante se interpone entre dos partes que creen comunicarse directamente entre sí, pudiendo leer, modificar o inyectar mensajes.", "Un malware que se instala en el equipo de la víctima sin su conocimiento.", "Un ataque que explota vulnerabilidades en el sector de arranque del disco."],
      ok: 1,
      exp: "En un ataque MitM, el atacante intercepta la comunicación entre cliente y servidor (mediante ARP spoofing, DNS spoofing, Evil Twin Wi-Fi). HTTPS con certificados válidos mitiga este riesgo al autenticar el servidor y cifrar la comunicación."
    },
    {
      p: "¿Qué es ARP Spoofing y qué riesgo representa?",
      ops: ["Una técnica para acelerar la resolución de nombres DNS.", "Un ataque que envía respuestas ARP falsas para asociar la MAC del atacante con la IP de otro host, redirigiendo el tráfico de red hacia el atacante (facilitando ataques MitM).", "Un método de escaneo de puertos en redes locales.", "Una vulnerabilidad del protocolo HTTPS."],
      ok: 1,
      exp: "El ARP no tiene autenticación. Un atacante puede enviar respuestas ARP falsas sin que nadie las haya solicitado (gratuitous ARP). La víctima actualiza su caché ARP con la MAC del atacante, que pasa a recibir todo el tráfico destinado a la IP suplantada."
    },
    {
      p: "¿Qué son las VLANs y qué beneficio de seguridad aportan?",
      ops: ["Redes privadas virtuales que cifran el tráfico entre sedes.", "Segmentación lógica de una red física en redes virtuales independientes, que aíslan el tráfico entre segmentos y limitan la propagación de ataques dentro de la red.", "Redes inalámbricas virtualizadas para entornos empresariales.", "Un protocolo para la gestión segura de switches."],
      ok: 1,
      exp: "Las VLANs segmentan la red: si un equipo de la VLAN de usuarios es comprometido, el atacante no puede acceder directamente a la VLAN de servidores. Reducen el dominio de broadcast y limitan el movimiento lateral de un atacante."
    },
    {
      p: "¿Qué es un ataque de Denegación de Servicio Distribuido (DDoS) y cómo se mitiga?",
      ops: ["Un ataque de un solo equipo que satura un servidor con peticiones repetidas.", "Un ataque coordinado desde miles de dispositivos comprometidos (botnet) que satura los recursos del servidor. Se mitiga con scrubbing centers, CDNs, rate limiting y servicios anti-DDoS.", "Un tipo de inyección SQL distribuida entre múltiples bases de datos.", "Un ataque que cifra los datos del servidor usando criptografía distribuida."],
      ok: 1,
      exp: "Los DDoS usan botnets de miles/millones de dispositivos IoT y PCs comprometidos. Las defensas incluyen: filtrado upstream (proveedor), Anycast routing, CDNs (Cloudflare), rate limiting, desafíos CAPTCHA y servicios especializados anti-DDoS."
    },
    {
      p: "¿Qué es la seguridad en redes inalámbricas (Wi-Fi) y cuáles son los protocolos de cifrado más seguros?",
      ops: ["WEP es el protocolo más seguro; WPA y WPA2 son versiones antiguas.", "WEP (obsoleto y roto), WPA (deprecado), WPA2 (seguro con AES/CCMP) y WPA3 (el más moderno, con SAE para autenticación y cifrado individualizado).", "Todos los protocolos Wi-Fi ofrecen el mismo nivel de seguridad.", "La seguridad Wi-Fi depende únicamente de la fortaleza de la contraseña."],
      ok: 1,
      exp: "WEP fue roto en pocos minutos; WPA con TKIP también tiene vulnerabilidades. WPA2 con AES-CCMP es suficientemente seguro en la mayoría de entornos. WPA3 es el estándar actual: usa SAE (Simultaneous Authentication of Equals) resistente a ataques de diccionario offline."
    },
    {
      p: "¿Qué es una VPN y cuándo se debe usar?",
      ops: ["Un firewall de red para filtrar el tráfico malicioso.", "Una Red Privada Virtual que cifra todo el tráfico entre el cliente y el servidor VPN, creando un túnel seguro. Debe usarse en redes Wi-Fi públicas, acceso remoto a redes corporativas y para proteger la privacidad.", "Un protocolo para la gestión de direcciones IP.", "Un antivirus basado en red para tráfico cifrado."],
      ok: 1,
      exp: "Una VPN crea un túnel cifrado sobre Internet: todo el tráfico del usuario pasa cifrado por el servidor VPN antes de llegar al destino. Protege contra sniffing en redes no confiables y permite acceder a recursos de la red corporativa de forma segura."
    },
    {
      p: "¿Qué es el escaneo de vulnerabilidades y cómo difiere de un pentest?",
      ops: ["Son el mismo proceso con diferente nombre.", "El escaneo de vulnerabilidades es automatizado (Nessus, OpenVAS) e identifica vulnerabilidades conocidas; el pentest (penetration test) es un proceso manual realizado por expertos que intenta explotar esas vulnerabilidades para evaluar el impacto real.", "El pentest es automatizado; el escaneo es manual.", "El escaneo de vulnerabilidades incluye la explotación; el pentest solo identifica."],
      ok: 1,
      exp: "El escaneo automatizado (Nessus, OpenVAS) genera listas de vulnerabilidades potenciales pero produce falsos positivos y no verifica si son explotables. El pentest (manual) confirma qué vulnerabilidades son realmente explotables y evalúa el impacto real en el negocio."
    },
    {
      p: "¿Qué es el protocolo HTTPS y cuáles son sus componentes?",
      ops: ["HTTP con una contraseña adicional para acceder al servidor.", "HTTP sobre TLS: el certificado digital del servidor autentica la identidad, TLS cifra el canal con clave simétrica (negociada en el handshake con criptografía asimétrica) garantizando confidencialidad e integridad.", "Un protocolo de red de capa 3 para comunicaciones seguras.", "Una extensión de HTTP que solo cifra las credenciales de acceso."],
      ok: 1,
      exp: "HTTPS = HTTP + TLS. El handshake TLS autentica el servidor (certificado X.509), negocia algoritmos criptográficos y establece las claves de sesión simétricas. Después, todo el tráfico HTTP se cifra y autentica con estas claves."
    },
    {
      p: "¿Qué son las honeypots y para qué se usan en ciberseguridad?",
      ops: ["Sistemas de backup diseñados para atraer a administradores.", "Sistemas o servicios señuelo diseñados para atraer a atacantes, detectar sus técnicas, estudiar sus métodos y desviar su atención de los sistemas reales.", "Filtros de spam para servidores de correo.", "Herramientas de monitorización del rendimiento de la red."],
      ok: 1,
      exp: "Un honeypot simula un sistema vulnerable para atraer atacantes. Permite estudiar sus técnicas (threat intelligence), detectar ataques en curso y generar alertas tempranas. Los honeynets son redes enteras de honeypots."
    },
    {
      p: "¿Qué es el protocolo 802.1X y qué proporciona en redes corporativas?",
      ops: ["Un protocolo de enrutamiento para redes empresariales.", "Un estándar de control de acceso a la red (NAC) que requiere autenticación antes de permitir que un dispositivo acceda a la red, usando un servidor RADIUS como backend de autenticación.", "Un protocolo de cifrado para redes Wi-Fi empresariales.", "Un sistema de gestión de ancho de banda para redes LAN."],
      ok: 1,
      exp: "802.1X implementa autenticación port-based: ningún dispositivo puede acceder a la red hasta que se autentique (usuario+contraseña, certificado) contra un servidor RADIUS/LDAP. Previene que dispositivos no autorizados se conecten a la red corporativa."
    },
    {
      p: "¿Qué es el ataque de Cross-Site Scripting (XSS)?",
      ops: ["Un ataque que inyecta sentencias SQL en formularios web.", "Un ataque que inyecta scripts maliciosos en páginas web que son ejecutados en el navegador de otros usuarios, permitiendo robar cookies de sesión, redirigir a páginas falsas o realizar acciones en nombre de la víctima.", "Un ataque que suplanta la identidad del servidor DNS.", "Un ataque de fuerza bruta contra aplicaciones web."],
      ok: 1,
      exp: "XSS inyecta JavaScript malicioso en páginas web (stored XSS: persistente en la BD; reflected XSS: en el URL). El script se ejecuta en el navegador de la víctima con los privilegios de la sesión. Content Security Policy (CSP) y sanitización de entradas son las defensas."
    },
    {
      p: "¿Qué medidas de seguridad se deben aplicar en los puertos de una red?",
      ops: ["Abrir todos los puertos para maximizar la compatibilidad.", "Cerrar todos los puertos excepto los estrictamente necesarios para los servicios en producción (principio de mínima exposición), y usar port knocking o cambiar puertos por defecto para servicios críticos.", "Solo proteger los puertos 80 y 443 (HTTP y HTTPS).", "Los puertos no requieren configuración de seguridad específica."],
      ok: 1,
      exp: "Cada puerto abierto es un vector de ataque potencial. El hardening de red incluye cerrar todos los puertos innecesarios con firewall y en el propio SO (desactivando servicios), cambiar puertos por defecto y monitorizar el tráfico en los puertos abiertos."
    },
    {
      p: "¿Qué es el DNS Spoofing (o DNS cache poisoning)?",
      ops: ["Un ataque que satura el servidor DNS con peticiones.", "Un ataque que introduce entradas DNS falsas en la caché del servidor DNS, redirigiendo a los usuarios a servidores maliciosos cuando escriben URLs legítimas.", "Un método para cifrar las consultas DNS.", "Una técnica para acelerar la resolución DNS mediante caché local."],
      ok: 1,
      exp: "El DNS spoofing envenena la caché DNS con registros falsos: cuando un usuario visita 'banco.com', el DNS resuelve a la IP del atacante en vez de la legítima. DNSSEC (extensiones de seguridad DNS) firma criptográficamente los registros DNS para prevenir este ataque."
    },
    {
      p: "¿Cuál es la diferencia entre una red interna, una DMZ y una red externa en la arquitectura de seguridad perimetral?",
      ops: ["Son términos equivalentes para describir diferentes partes de la misma red.", "Red externa (Internet, no confiable), DMZ (zona intermedia para servicios públicos, semi-confiable) y red interna (alta confianza, protegida por firewalls de las otras dos zonas).", "La DMZ es más segura que la red interna.", "La red interna está directamente expuesta a Internet sin firewall."],
      ok: 1,
      exp: "La arquitectura de tres zonas usa dos firewalls: externo (Internet↔DMZ) e interno (DMZ↔LAN). Los servidores públicos (web, email, DNS) van en la DMZ. La red interna (usuarios, servidores críticos) está protegida incluso si la DMZ es comprometida."
    },
    {
      p: "¿Cuál es la diferencia entre ataque pasivo y activo en redes?",
      ops: ["Los pasivos usan menos ancho de banda.","Un ataque pasivo intercepta información sin modificarla (sniffing); un ataque activo modifica, interrumpe o destruye datos o servicios (inyección SQL, DoS, ransomware).","Los activos son menos peligrosos que los pasivos.","Solo los activos son ilegales."],
      ok: 1,
      exp: "Ataques pasivos: observan y capturan datos sin alterar el sistema (sniffing, análisis de tráfico). Son difíciles de detectar. Ataques activos: modifican datos, interrumpen servicios o toman control del sistema. Más detectables pero con daño directo."
    },
    {
      p: "¿Qué es Wireshark y para qué se usa?",
      ops: ["Un firewall de aplicaciones web open source.","Un analizador de protocolos de red (sniffer) que captura y analiza el tráfico en tiempo real, usado para diagnóstico de red, auditorías de seguridad y análisis forense.","Un escáner de vulnerabilidades de servidores web.","Un IDS basado en host."],
      ok: 1,
      exp: "Wireshark captura todos los paquetes que pasan por una interfaz de red y permite analizarlos en detalle: ver protocolos, contenido de paquetes no cifrados, reconstruir sesiones TCP, detectar anomalías y analizar incidentes de seguridad."
    },
    {
      p: "¿Qué es una VLAN y cómo mejora la seguridad?",
      ops: ["Una red privada virtual cifrada para acceso remoto.","Una segmentación lógica de la red que agrupa dispositivos en dominios de broadcast independientes, limitando la propagación de ataques y el acceso entre segmentos.","Un tipo de firewall virtual para redes inalámbricas.","Un protocolo de enrutamiento seguro entre subredes."],
      ok: 1,
      exp: "Las VLANs segmentan la red lógicamente: los dispositivos de diferentes VLANs no pueden comunicarse directamente aunque estén en el mismo switch físico. Limita el movimiento lateral de atacantes y contiene la propagación de malware."
    },
    {
      p: "¿Qué es Squid y para qué se usa?",
      ops: ["Un escáner de vulnerabilidades para apps web.","Un servidor proxy open source para Linux que cachea contenido web, filtra URLs, controla el acceso y registra el tráfico de los usuarios.","Un sistema IDS basado en red.","Un firewall de capa de aplicación."],
      ok: 1,
      exp: "Squid es el servidor proxy más usado en Linux. Funciona como proxy de caché HTTP/HTTPS, permite filtrar URLs y categorías de contenido, controlar el acceso por usuario/IP/horario, registrar el tráfico y redirigir peticiones transparentemente."
    },
    {
      p: "¿Qué es el protocolo 802.1X y para qué se usa?",
      ops: ["Un protocolo de enrutamiento para redes corporativas.","Un estándar de autenticación basado en EAP que controla el acceso a la red verificando la identidad del dispositivo o usuario antes de permitirle conectarse, mediante un servidor RADIUS.","Un protocolo de cifrado para VPN.","Un estándar para Ethernet de 10 Gbps."],
      ok: 1,
      exp: "IEEE 802.1X implementa autenticación port-based: un dispositivo que se conecta (switch o AP wifi) no obtiene acceso hasta autenticarse mediante RADIUS/EAP. Muy usado en entornos corporativos para control de acceso a red (NAC), tanto en cableado como en wifi (WPA2/3-Enterprise)."
    },
    {
      p: "¿Cuál es la diferencia entre WEP, WPA2 y WPA3?",
      ops: ["Son equivalentes; solo difieren en velocidad.","WEP tiene cifrado RC4 roto desde 2001; WPA2 usa AES-CCMP (seguro pero vulnerable a KRACK); WPA3 usa SAE (resistente a ataques de diccionario offline y con Perfect Forward Secrecy).","WPA3 es más lento que WEP.","WPA2 y WPA3 son incompatibles entre sí."],
      ok: 1,
      exp: "WEP: RC4, completamente roto (crackeable en minutos). WPA2: AES-CCMP, seguro para la mayoría de usos pero vulnerable a KRACK. WPA3: SAE (Simultaneous Authentication of Equals), resistente a ataques de diccionario offline y ofrece Perfect Forward Secrecy."
    },
    {
      p: "¿Qué es un ataque DDoS y cómo funciona?",
      ops: ["Un ataque desde un único equipo a un único servidor.","Un ataque coordinado desde miles o millones de equipos (botnet) hacia un objetivo, generando un volumen de tráfico tan alto que el servicio queda inaccesible.","Un ataque que deniega acceso a un usuario específico.","Un ransomware que cifra los datos del servidor."],
      ok: 1,
      exp: "En DDoS, el atacante controla una botnet y dirige sus peticiones simultáneamente al objetivo. El volumen sobrepasa la capacidad del servidor o la red, haciéndolo inaccesible. Contramedidas: CDN anti-DDoS, rate limiting, scrubbing centers y anycast."
    },
    {
      p: "¿Qué es Fail2ban y para qué se usa en servidores Linux?",
      ops: ["Una herramienta para cifrar el disco del servidor.","Monitoriza los logs del sistema y bloquea automáticamente las IPs que generan demasiados intentos fallidos de autenticación (SSH, FTP, web).","Un gestor del firewall del servidor.","Un detector de malware en tiempo real."],
      ok: 1,
      exp: "Fail2ban analiza archivos de log (auth.log, nginx.log) en tiempo real. Cuando detecta múltiples intentos fallidos desde una IP, añade automáticamente una regla al firewall (iptables/nftables) para bloquearla temporalmente, mitigando ataques de fuerza bruta."
    },
    {
      p: "¿Qué es un honeypot?",
      ops: ["Un sistema de copias de seguridad señuelo.","Un sistema trampa configurado deliberadamente como objetivo vulnerable para atraer a atacantes, estudiar sus técnicas y detectar intrusiones sin comprometer los sistemas reales.","Un tipo de proxy inverso para equilibrio de carga.","Un sistema de autenticación biométrico."],
      ok: 1,
      exp: "Un honeypot simula un sistema vulnerable para atraer y engañar a atacantes. Permite estudiar sus técnicas, recopilar inteligencia sobre amenazas, detectar ataques tempranamente y desviar atención de los sistemas reales."
    },
    {
      p: "¿Cuál es la función principal de una VPN?",
      ops: ["Aumentar la velocidad de conexión a Internet.","Crear un túnel cifrado entre el cliente y el servidor, garantizando la confidencialidad del tráfico y permitiendo acceso seguro a redes privadas a través de Internet.","Bloquear el acceso a sitios web no autorizados.","Sustituir al firewall en la protección perimetral."],
      ok: 1,
      exp: "Una VPN cifra el tráfico entre cliente y servidor, protegiéndolo en redes inseguras (wifi públicas). También permite a empleados remotos acceder a la intranet corporativa como si estuvieran físicamente en la oficina."
    }

  ],

  // ══════════════════════════════════════════════════════════
  // UF6 — Aseguramiento de la privacidad
  // ══════════════════════════════════════════════════════════
  UF6: [
    // — Cuestionario oficial (15) ——————————————————————————
    {
      p: "¿Qué garantiza un certificado digital?",
      ops: ["La identidad del emisor.", "La disponibilidad del servidor.", "La velocidad de conexión.", "El cifrado del contenido."],
      ok: 0,
      exp: "Un certificado digital, emitido por una CA de confianza, garantiza la identidad del propietario de la clave pública. Permite a los usuarios verificar que están comunicándose con quien dicen ser."
    },
    {
      p: "¿Cuál de las siguientes técnicas pertenece a la ingeniería social?",
      ops: ["Phishing.", "DDoS.", "Brute force.", "SQL injection."],
      ok: 0,
      exp: "El phishing es la técnica de ingeniería social más común: usa correos electrónicos, SMS o llamadas falsas para engañar psicológicamente al usuario y obtener información confidencial."
    },
    {
      p: "¿Qué capa del modelo OSI se encarga del cifrado y la compresión de datos?",
      ops: ["Transporte.", "Presentación.", "Aplicación.", "Sesión."],
      ok: 1,
      exp: "La capa de presentación (capa 6 del modelo OSI) se encarga del cifrado, descifrado, compresión y formateo de los datos para garantizar que la información sea legible por la capa de aplicación."
    },
    {
      p: "¿Cuál es el principal problema del protocolo WEP?",
      ops: ["Solo funciona en servidores.", "Tiene una encriptación débil.", "Es lento.", "No soporta conexiones múltiples."],
      ok: 1,
      exp: "WEP (Wired Equivalent Privacy) usa el algoritmo RC4 con claves de 40 o 104 bits y vectores de inicialización de solo 24 bits, lo que lo hace vulnerable a ataques en minutos. Está completamente obsoleto y no debe usarse."
    },
    {
      p: "¿Qué define mejor una red ad-hoc?",
      ops: ["Usa conexiones por cable.", "Los dispositivos conectan directamente entre sí sin punto de acceso.", "Usa un router central.", "Requiere un servidor de autenticación."],
      ok: 1,
      exp: "Las redes ad-hoc son redes inalámbricas peer-to-peer donde los dispositivos se conectan directamente entre sí sin necesidad de un punto de acceso (AP) o router central."
    },
    {
      p: "¿Qué herramienta permite detectar intrusiones en la red?",
      ops: ["Linux Mint.", "SNMP.", "IDS.", "Wireshark."],
      ok: 2,
      exp: "Un IDS (Intrusion Detection System) monitoriza el tráfico de red en busca de patrones de ataque conocidos o comportamientos anómalos, generando alertas para que el administrador tome medidas."
    },
    {
      p: "¿Qué significa SSID en una red wifi?",
      ops: ["Sistema de cifrado inalámbrico.", "Identificador de red (Service Set Identifier).", "Controlador de señal.", "Protocolo de seguridad inalámbrica."],
      ok: 1,
      exp: "SSID (Service Set Identifier) es el nombre que identifica una red Wi-Fi. Es el nombre que ven los usuarios cuando buscan redes disponibles. Puede ocultarse (SSID oculto), aunque esto no proporciona seguridad real."
    },
    {
      p: "¿Qué puerto se usa comúnmente para HTTPS?",
      ops: ["80.", "443.", "110.", "25."],
      ok: 1,
      exp: "HTTPS usa el puerto 443/TCP por defecto. HTTP usa el puerto 80/TCP. Otros puertos comunes: 22 (SSH), 25 (SMTP), 110 (POP3), 143 (IMAP), 21 (FTP)."
    },
    {
      p: "¿Cuál de estas herramientas sirve para escanear puertos y servicios?",
      ops: ["Wireshark.", "Nmap.", "Kali Linux.", "OpenSSL."],
      ok: 1,
      exp: "Nmap es la herramienta de escaneo de red más usada: detecta hosts activos, puertos abiertos, servicios y versiones. Kali Linux es una distribución que incluye Nmap entre muchas otras herramientas de seguridad."
    },
    {
      p: "¿Qué hace el protocolo NAT?",
      ops: ["Analiza malware.", "Traduce direcciones IP (Network Address Translation).", "Encripta emails.", "Asigna nombres de dominio."],
      ok: 1,
      exp: "NAT traduce las direcciones IP privadas de la red interna a la dirección IP pública del router cuando el tráfico sale a Internet, y viceversa. Permite que múltiples dispositivos compartan una sola IP pública y oculta la topología interna."
    },
    {
      p: "¿Qué tipo de dirección IP se asigna automáticamente mediante DHCP?",
      ops: ["Estática.", "Dinámica.", "Reservada.", "Pública."],
      ok: 1,
      exp: "DHCP (Dynamic Host Configuration Protocol) asigna automáticamente direcciones IP dinámicas a los dispositivos cuando se conectan a la red. Las IPs estáticas se configuran manualmente."
    },
    {
      p: "¿Cuál de estas es una recomendación para evitar el spam?",
      ops: ["Usar cuentas distintas para diferentes usos.", "Responder a correos desconocidos.", "Publicar la dirección de correo en foros y redes sociales.", "Hacer clic en los enlaces de cancelación de suscripción de remitentes desconocidos."],
      ok: 0,
      exp: "Usar cuentas de email diferentes para distintos propósitos (trabajo, compras, foros) limita la propagación: si una cuenta recibe spam, no afecta a las demás. Nunca se debe responder a spam ni publicar el email en lugares públicos."
    },
    {
      p: "¿Qué función cumple el firewall en una red?",
      ops: ["Almacenar datos de respaldo.", "Encriptar mensajes.", "Filtrar tráfico entre redes.", "Gestionar usuarios y contraseñas."],
      ok: 2,
      exp: "El firewall filtra el tráfico de red entre zonas de diferente nivel de confianza (Internet, DMZ, red interna) aplicando reglas que permiten o deniegan el paso según IP, puerto, protocolo y estado de conexión."
    },
    {
      p: "¿Qué protocolo permite la gestión remota y centralizada de dispositivos de red?",
      ops: ["HTTPS.", "FTP.", "SNMP.", "SSH."],
      ok: 2,
      exp: "SNMP (Simple Network Management Protocol) permite monitorizar y gestionar dispositivos de red (routers, switches, servidores) de forma centralizada, recibiendo alertas (traps) y consultando/modificando parámetros de configuración."
    },
    {
      p: "¿Qué tipo de firma tiene el mayor valor legal en la UE según el Reglamento eIDAS?",
      ops: ["Cualificada.", "Simple.", "Avanzada.", "Electrónica básica."],
      ok: 0,
      exp: "El Reglamento eIDAS establece tres niveles: firma electrónica simple (básica), firma electrónica avanzada (vinculada al firmante) y firma electrónica cualificada (basada en certificado cualificado, emite con un QSCD, equivalente legal a la firma manuscrita)."
    },

    // — Temario (25) ———————————————————————————————————————
    {
      p: "¿Qué es el pharming y en qué se diferencia del phishing?",
      ops: ["Son el mismo ataque con diferente nombre.", "El phishing engaña al usuario con emails o páginas falsas; el pharming redirige automáticamente a páginas falsas aunque el usuario escriba la URL correcta, mediante envenenamiento DNS o modificación del archivo hosts.", "El pharming requiere que el usuario haga clic en un enlace; el phishing no.", "El pharming solo afecta a sistemas Windows; el phishing es multiplataforma."],
      ok: 1,
      exp: "En el pharming el usuario no necesita ser engañado con un enlace: aunque escriba 'banco.com' correctamente en el navegador, el DNS comprometido o el archivo hosts modificado lo redirige a la IP del atacante. Es más difícil de detectar que el phishing."
    },
    {
      p: "¿Qué es el spam y cuáles son sus principales riesgos?",
      ops: ["Solo publicidad molesta sin consecuencias de seguridad.", "Correo electrónico no solicitado que, además de consumir recursos, puede contener malware, phishing, scams o ser parte de campañas de ingeniería social.", "Un tipo de ataque DoS contra servidores de correo.", "Un protocolo de correo electrónico no seguro."],
      ok: 1,
      exp: "El spam no es solo molesto: es el principal vector de distribución de malware (adjuntos infectados), phishing y estafas. Los filtros antispam usan listas negras, análisis bayesiano y reputación del remitente para filtrarlo."
    },
    {
      p: "¿Qué es un hoax en el contexto de la seguridad informática?",
      ops: ["Un tipo de malware que se propaga por redes P2P.", "Una alarma o noticia falsa que se distribuye masivamente (normalmente por email o redes sociales), generando pánico o engañando a usuarios para que tomen acciones contraproducentes.", "Un ataque de denegación de servicio basado en falsas peticiones.", "Un certificado digital falsificado."],
      ok: 1,
      exp: "Los hoax son cadenas de mensajes falsos: 'alerta de virus inexistente', 'comparte o perderás tu cuenta'... Aunque no son malware directamente, consumen recursos, generan desconfianza y pueden llevar al usuario a desactivar protecciones reales."
    },
    {
      p: "¿Qué es SNMP y qué versión es la más segura?",
      ops: ["Un protocolo de monitorización de red; SNMPv3 es la más segura por incluir autenticación y cifrado.", "Un protocolo de enrutamiento; SNMPv1 es la más moderna.", "Un protocolo de gestión de certificados; todas las versiones son igualmente seguras.", "Un sistema de detección de intrusos basado en red."],
      ok: 0,
      exp: "SNMPv1 y v2c transmiten en texto plano (community strings como contraseña). SNMPv3 añade autenticación (MD5/SHA) y cifrado (DES/AES), siendo la única versión recomendada para entornos de producción seguros."
    },
    {
      p: "¿Qué es el roaming en redes Wi-Fi y qué implicaciones de seguridad tiene?",
      ops: ["La capacidad de moverse entre puntos de acceso sin perder la conexión; puede ser explotado por Evil Twin para interceptar el tráfico durante el roaming.", "La extensión del alcance de una red Wi-Fi mediante repetidores; no tiene implicaciones de seguridad.", "El uso de múltiples bandas (2,4 GHz y 5 GHz) en la misma red; solo implica configuración.", "La velocidad de transferencia entre dispositivos en la misma red; sin implicaciones de seguridad."],
      ok: 0,
      exp: "El roaming permite moverse entre APs sin reconexión. Un atacante puede crear un 'Evil Twin' (AP falso con el mismo SSID pero mayor potencia) para que el cliente se conecte al AP malicioso durante el roaming, realizando un ataque MitM."
    },
    {
      p: "¿Qué es la anonimización de datos y en qué se diferencia de la seudonimización?",
      ops: ["Son procesos equivalentes que eliminan completamente la identificación del individuo.", "La anonimización elimina de forma irreversible todos los identificadores (no se puede reidentificar); la seudonimización reemplaza identificadores por seudónimos, permitiendo la reidentificación con información adicional.", "La seudonimización es más segura que la anonimización.", "La anonimización solo aplica a datos numéricos; la seudonimización a datos de texto."],
      ok: 1,
      exp: "Según el RGPD, los datos verdaderamente anonimizados no están sujetos a la regulación (no permiten reidentificación). Los datos seudonimizados sí lo están, ya que con la clave de seudonimización se puede recuperar la identidad real."
    },
    {
      p: "¿Qué es una política de privacidad y qué debe incluir según el RGPD?",
      ops: ["Un documento interno de la empresa sin obligación legal.", "Un documento informativo que debe incluir qué datos personales se recogen, con qué finalidad, base legal del tratamiento, tiempo de conservación, derechos del interesado y datos del responsable/DPO.", "Un contrato entre la empresa y sus empleados sobre el uso de datos.", "Un procedimiento técnico para el cifrado de datos personales."],
      ok: 1,
      exp: "El RGPD (Art. 13-14) exige informar de forma transparente sobre el tratamiento de datos: responsable, DPO, finalidades, base legal, destinatarios, transferencias internacionales, plazos de conservación y derechos del interesado (ARCO+)."
    },
    {
      p: "¿Qué es el criptojacking y cómo afecta a los usuarios?",
      ops: ["El robo de criptomonedas de wallets online.", "El uso no autorizado de los recursos de computación de un dispositivo (CPU, GPU) para minar criptomonedas, sin conocimiento del propietario, ralentizando el sistema y aumentando el consumo eléctrico.", "Un tipo de ransomware que cifra datos y exige pago en criptomonedas.", "El robo de claves privadas de criptomonedas mediante keyloggers."],
      ok: 1,
      exp: "El criptojacking puede ejecutarse en el navegador (JavaScript malicioso en páginas web) o como malware instalado. El síntoma típico es sobrecalentamiento y lentitud del dispositivo. Ublock Origin y extensiones anti-cryptomining lo bloquean en el navegador."
    },
    {
      p: "¿Qué son los metadatos y por qué son importantes para la privacidad?",
      ops: ["Los datos principales de un archivo (contenido); no tienen relevancia para la privacidad.", "Datos que describen otros datos (fecha de creación, autor, ubicación GPS, historial de ediciones). Pueden revelar información sensible aunque el contenido esté cifrado o se haya eliminado el texto visible.", "Las contraseñas usadas para cifrar archivos.", "Los permisos de acceso a los archivos."],
      ok: 1,
      exp: "Los metadatos de una foto pueden incluir la ubicación GPS donde fue tomada. Los metadatos de un documento Word contienen el nombre del autor y el historial de revisiones. Herramientas como ExifTool o el propio Office permiten eliminarlos antes de compartir archivos."
    },
    {
      p: "¿Qué son las scam bait y cartas nigerianas en el contexto del fraude online?",
      ops: ["Ataques de denegación de servicio basados en emails.", "Estafas de ingeniería social que prometen grandes recompensas (herencias, premios) a cambio de un pequeño pago previo o información personal, diseñadas para defraudar económicamente a la víctima.", "Tipos de malware distribuidos por email.", "Certificados digitales falsos usados en phishing."],
      ok: 1,
      exp: "Las cartas nigerianas (estafa 419) y similares explotan la codicia: ofrecen millones a cambio de ayuda para transferir fondos, solicitando un 'adelanto'. Las víctimas pierden el dinero adelantado. El scam baiting es la práctica de los investigadores que hacen perder tiempo a los estafadores."
    },
    {
      p: "¿Cuáles son las medidas técnicas y organizativas para proteger la privacidad según el RGPD?",
      ops: ["Solo se requieren medidas técnicas (cifrado); las organizativas son opcionales.", "Medidas técnicas: cifrado, seudonimización, control de acceso, backups, auditorías. Medidas organizativas: políticas de privacidad, formación de empleados, evaluaciones de impacto (DPIA), nombrar DPO si aplica.", "Solo son obligatorias si se tratan datos de menores.", "El RGPD no especifica medidas técnicas concretas."],
      ok: 1,
      exp: "El RGPD (Art. 25 y 32) exige privacy by design y by default, y medidas apropiadas al riesgo: pseudoanonimización, cifrado, garantías de confidencialidad/integridad/disponibilidad, recuperación ante incidentes y evaluaciones periódicas de efectividad."
    },
    {
      p: "¿Qué es la ingeniería social y cuáles son sus técnicas más comunes?",
      ops: ["La explotación de vulnerabilidades de software mediante código malicioso.", "La manipulación psicológica de personas para obtener información o acceso. Técnicas: phishing, vishing (llamadas), smishing (SMS), pretexting (historia falsa), baiting (USB infectado), tailgating (acceso físico siguiendo a alguien).", "Un método de ataque exclusivamente técnico sin interacción humana.", "El análisis de vulnerabilidades en redes corporativas."],
      ok: 1,
      exp: "La ingeniería social es la principal causa de brechas de seguridad. La formación y concienciación de los empleados es la defensa más efectiva: reconocer intentos de manipulación, verificar identidades y seguir procedimientos de seguridad aunque parezca urgente."
    },
    {
      p: "¿Qué es el análisis de tráfico de red y qué información puede revelar?",
      ops: ["Un proceso de optimización del ancho de banda de la red.", "El monitoreo y análisis de los paquetes que circulan por la red, que puede revelar protocolos usados, servidores contactados, volumen de datos y, en redes no cifradas, el contenido de las comunicaciones.", "Un método de gestión de las VLANs corporativas.", "Una técnica de balanceo de carga en servidores web."],
      ok: 1,
      exp: "El análisis de tráfico (con herramientas como Wireshark) permite diagnóstico de red, detección de anomalías y, si el tráfico no está cifrado, captura de credenciales y datos sensibles. Es la base del sniffing malicioso y de la forensia de red."
    },
    {
      p: "¿Qué son las 'cookies' en el contexto de la privacidad web y qué regula el RGPD sobre ellas?",
      ops: ["Son únicamente mecanismos de rendimiento sin implicaciones de privacidad.", "Pequeños archivos de texto almacenados en el navegador que pueden rastrear el comportamiento del usuario. El RGPD exige consentimiento informado y específico para cookies no esenciales (analíticas, publicitarias).", "El RGPD prohíbe el uso de cookies en sitios web europeos.", "Solo las cookies de sesión requieren consentimiento según el RGPD."],
      ok: 1,
      exp: "Las cookies técnicas (sesión, carrito) son esenciales y no requieren consentimiento. Las analíticas y publicitarias rastrean al usuario y requieren consentimiento explícito. La Directiva ePrivacy y el RGPD regulan conjuntamente el uso de cookies."
    },
    {
      p: "¿Qué es una brecha de seguridad de datos y qué obligaciones genera el RGPD?",
      ops: ["Cualquier error en la configuración de un servidor, aunque no exponga datos.", "Un incidente de seguridad que provoca acceso, divulgación, modificación o destrucción no autorizados de datos personales. El RGPD obliga a notificar a la autoridad de control en 72 horas y, si hay alto riesgo, también a los afectados.", "Solo las brechas que afectan a más de 1.000 personas deben notificarse.", "Las brechas de seguridad de datos nunca requieren notificación si se solucionan a tiempo."],
      ok: 1,
      exp: "El RGPD (Art. 33-34) obliga al responsable del tratamiento a notificar brechas a la autoridad de control (AEPD en España) en máximo 72 horas, y a los afectados cuando la brecha supone alto riesgo para sus derechos y libertades."
    },
    {
      p: "¿Qué es el pharming y en qué se diferencia del phishing?",
      ops: ["Son exactamente lo mismo.","El pharming redirige al usuario a una web falsa manipulando el DNS o el archivo hosts, aunque escriba la URL correcta; el phishing usa engaños por correo/SMS para que haga clic en enlaces falsos.","El pharming solo afecta a dispositivos móviles.","El phishing manipula el DNS; el pharming usa correos fraudulentos."],
      ok: 1,
      exp: "Pharming: envenenamiento DNS o modificación del hosts que redirige el tráfico de un dominio legítimo a un servidor malicioso, sin que el usuario haga nada incorrecto. Phishing: engaño activo para que el usuario siga un enlace falso."
    },
    {
      p: "¿Qué es el SNMP y cuáles son sus riesgos de seguridad?",
      ops: ["Un protocolo de cifrado para correos.","Un protocolo de gestión de red que permite monitorizar dispositivos. Sus riesgos incluyen el uso de community strings por defecto (public/private) fácilmente interceptables.","Un sistema de detección de intrusiones.","Un protocolo de autenticación para redes wifi."],
      ok: 1,
      exp: "SNMP v1/v2c usan community strings (cadenas de texto) para autenticación, interceptables. Las strings public (lectura) y private (escritura) por defecto son ampliamente conocidas. SNMPv3 añade autenticación y cifrado real y debe usarse en entornos de producción."
    },
    {
      p: "¿Qué es la autenticación por MAC en wifi y cuáles son sus limitaciones?",
      ops: ["Es el método más seguro ya que las MACs son únicas.","Permite o deniega el acceso según la dirección MAC. Limitación: las MACs pueden suplantarse fácilmente (MAC spoofing), por lo que no debe ser la única medida de seguridad.","Es equivalente al protocolo 802.1X.","Solo funciona en redes domésticas."],
      ok: 1,
      exp: "El filtrado por MAC registra MACs autorizadas, pero un atacante puede capturar una MAC autorizada mediante sniffing y suplantarla (MAC spoofing con ip link set eth0 address ...). No es una medida de seguridad fiable por sí sola."
    },
    {
      p: "¿Qué es el baiting en ingeniería social?",
      ops: ["Envío de correos con archivos adjuntos maliciosos.","Dejar USB, CD u otros dispositivos infectados en lugares donde la víctima los encuentre y los use por curiosidad, instalando así el malware.","Llamadas telefónicas falsas para obtener información.","Envío de SMS fraudulentos con enlaces maliciosos."],
      ok: 1,
      exp: "El baiting usa la curiosidad humana: se dejan memorias USB infectadas en aparcamientos o salas de espera de empresas. Cuando alguien lo conecta para ver qué contiene, el malware se instala automáticamente. La educación y las políticas de uso de dispositivos son la principal contramedida."
    },
    {
      p: "¿Qué es el shoulder surfing y cómo puede prevenirse?",
      ops: ["Un ataque de suplantación de identidad por correo.","La técnica de espiar a alguien mientras introduce información sensible observando directamente o a través de cámaras. Prevención: pantallas de privacidad, posición del cuerpo y concienciación.","Un tipo de ataque DDoS que simula tráfico humano.","Una técnica para eludir el bloqueo de pantalla."],
      ok: 1,
      exp: "Shoulder surfing es espiar por encima del hombro a alguien que introduce una contraseña o PIN. Prevención: filtros de privacidad en pantallas (películas polarizadas), orientación adecuada del monitor, bloqueo automático de pantalla y concienciación del usuario."
    },
    {
      p: "¿Cuáles son las herramientas de monitorización de red más usadas en seguridad?",
      ops: ["Solo Wireshark es útil para monitorización.","Nagios y Zabbix para disponibilidad y rendimiento; Nmap para escaneo de puertos; Wireshark para análisis de paquetes; Snort/Suricata para IDS/IPS.","Solo son útiles para redes corporativas grandes.","Los firewalls de nueva generación hacen innecesarias las herramientas de monitorización."],
      ok: 1,
      exp: "Ecosistema de monitorización: Nagios/Zabbix (disponibilidad y alertas), Nmap (inventario y escaneo), Wireshark (análisis de tráfico), Snort/Suricata (IDS/IPS), ELK Stack (análisis de logs) y Grafana (visualización). Cada herramienta cubre una capa diferente."
    },
    {
      p: "¿Para qué se usa iptables en Linux?",
      ops: ["Es un gestor de paquetes de software.","Es la herramienta de configuración del firewall en Linux (netfilter) que permite definir reglas para filtrar, redirigir y modificar el tráfico de red a nivel de kernel.","Es un sistema de monitorización de procesos.","Es un protocolo de enrutamiento para redes Linux."],
      ok: 1,
      exp: "iptables configura las reglas del firewall netfilter del kernel Linux: filtrar paquetes (INPUT, OUTPUT, FORWARD), hacer NAT, registrar tráfico y crear reglas complejas. En distribuciones modernas, nftables es su sucesor, aunque iptables sigue siendo ampliamente usado."
    },
    {
      p: "¿Qué es el dumpster diving?",
      ops: ["Un tipo de ataque de fuerza bruta contra contraseñas.","La búsqueda de información confidencial en la basura (documentos desechados, discos duros, post-its con contraseñas). Permite obtener datos sensibles sin técnicas informáticas avanzadas.","Un ataque de phishing por correo postal físico.","Una técnica de hacking wifi."],
      ok: 1,
      exp: "Dumpster diving (rebuscar en la basura): puede revelar documentos con contraseñas, organigramas, facturas, datos de clientes, soportes de almacenamiento desechados. Solución: destructoras de documentos de corte en cruz, borrado seguro de dispositivos y política de escritorios limpios."
    },
    {
      p: "¿Cuáles son las diferencias entre NIDS y HIDS?",
      ops: ["Son equivalentes; solo difieren en la interfaz.","NIDS monitoriza el tráfico de red buscando patrones de ataque; HIDS analiza logs e integridad de archivos del sistema en un equipo específico.","HIDS protege toda la red; NIDS solo protege un equipo.","NIDS es más efectivo en todos los escenarios."],
      ok: 1,
      exp: "NIDS (Network IDS): sensor en la red que analiza todos los paquetes (ej: Snort). Detecta ataques de red pero no los cifrados E2E. HIDS (Host IDS): agente en el equipo que monitoriza logs, cambios en archivos y comportamiento de procesos (ej: OSSEC, Wazuh). Complementarios."
    },
    {
      p: "¿Cuál es la función del TLS en las comunicaciones web?",
      ops: ["Solo cifra los datos en tránsito.","Proporciona autenticación del servidor (certificados), cifrado del canal y verificación de integridad, garantizando confidencialidad, autenticidad e integridad.","Solo verifica la integridad de los datos, sin cifrado.","Es un protocolo de autenticación de usuarios para apps web."],
      ok: 1,
      exp: "TLS establece un canal seguro: 1) Autenticación del servidor con certificado X.509, 2) Negociación de algoritmos criptográficos, 3) Intercambio de clave mediante DH/ECDH, 4) Cifrado simétrico del tráfico (AES-GCM), 5) MAC para integridad de mensajes."
    }

  ],

  // ══════════════════════════════════════════════════════════
  // UF7 — Criptografía
  // ══════════════════════════════════════════════════════════
  UF7: [
    // — Cuestionario oficial (15) ——————————————————————————
    {
      p: "¿Qué infraestructura permite la gestión de claves y certificados digitales?",
      ops: ["SSL/TLS.", "PKI (infraestructura de clave pública).", "AES (Advanced Encryption Standard).", "RSA."],
      ok: 1,
      exp: "La PKI (Public Key Infrastructure) es el conjunto de hardware, software, políticas y procedimientos para crear, gestionar, distribuir, usar, almacenar y revocar certificados digitales y gestionar el cifrado de clave pública."
    },
    {
      p: "¿Qué método se utiliza para verificar que un archivo descargado no ha sido modificado?",
      ops: ["Cifrado del archivo con una clave privada.", "Uso de una VPN para proteger la descarga.", "Comparación de su hash con el publicado por el proveedor.", "Escanear el archivo con un antivirus."],
      ok: 2,
      exp: "El proveedor publica el hash (SHA-256, MD5) del archivo original. Después de la descarga, el usuario calcula el hash del archivo descargado: si coincide, el archivo es íntegro y no ha sido modificado o corrompido."
    },
    {
      p: "¿Qué garantiza el no repudio en la criptografía?",
      ops: ["Que un usuario no pueda negar haber enviado un mensaje firmado digitalmente.", "Que solo el remitente pueda leer el mensaje cifrado.", "Que los datos cifrados sean ilegibles para terceros.", "Que la comunicación sea confidencial."],
      ok: 0,
      exp: "El no repudio garantiza que el emisor de un mensaje firmado digitalmente no puede negar posteriormente haberlo enviado, ya que la firma solo puede generarse con su clave privada, que solo él posee."
    },
    {
      p: "¿Cuál de los siguientes mecanismos se usa para verificar la autenticidad de un documento digital?",
      ops: ["VPN (Red Privada Virtual).", "Firma digital.", "Función hash.", "Certificado SSL."],
      ok: 1,
      exp: "La firma digital usa la clave privada del autor para firmar el hash del documento. El receptor puede verificar la autenticidad usando la clave pública del autor: si la verificación es correcta, el documento no ha sido alterado."
    },
    {
      p: "¿Cuál de los siguientes algoritmos pertenece a la criptografía simétrica?",
      ops: ["RSA.", "AES.", "Diffie-Hellman.", "ECC."],
      ok: 1,
      exp: "AES (Advanced Encryption Standard) es un algoritmo de cifrado simétrico: usa la misma clave para cifrar y descifrar. Es el estándar de facto para cifrado simétrico, aprobado por el NIST con claves de 128, 192 o 256 bits."
    },
    {
      p: "¿Qué permite la infraestructura de clave pública (PKI)?",
      ops: ["Administrar claves y certificados digitales para la autenticación y el cifrado.", "Proteger sistemas operativos contra ataques de malware.", "Acelerar la conexión a Internet mediante el cifrado de datos.", "Gestionar contraseñas de forma centralizada."],
      ok: 0,
      exp: "La PKI gestiona todo el ciclo de vida de los certificados digitales: emisión, renovación, revocación (CRL/OCSP) y distribución. Las CAs raíz (VeriSign, DigiCert, Let's Encrypt) son los pilares de confianza del sistema."
    },
    {
      p: "¿Cuál es la principal función de un certificado digital?",
      ops: ["Verificar la identidad de una entidad y su clave pública.", "Almacenar claves de cifrado de forma segura.", "Garantizar que un mensaje no ha sido interceptado.", "Cifrar el contenido de los mensajes."],
      ok: 0,
      exp: "Un certificado digital (X.509) vincula una clave pública con la identidad de su propietario, avalada por la firma de una CA de confianza. Permite a los demás verificar que la clave pública pertenece realmente a quien dice ser."
    },
    {
      p: "¿Cuál es la función principal de la firma digital en un documento?",
      ops: ["Comprimir su tamaño para facilitar la transmisión.", "Verificar la autenticidad y la integridad del documento.", "Asegurar que solo una persona específica pueda abrirlo.", "Cifrar el contenido del documento."],
      ok: 1,
      exp: "La firma digital garantiza dos cosas: autenticidad (el documento fue creado/aprobado por el titular de la clave privada) e integridad (no ha sido modificado desde que se firmó). El no repudio es la propiedad adicional que proporciona."
    },
    {
      p: "¿Qué tecnología permite verificar la identidad de un servidor en una conexión segura?",
      ops: ["Certificado digital.", "Firewall.", "VPN.", "IDS."],
      ok: 0,
      exp: "Durante el handshake TLS, el servidor presenta su certificado digital. El cliente lo verifica: comprueba que está firmado por una CA de confianza, que no ha expirado y que el nombre de dominio coincide con el del certificado."
    },
    {
      p: "¿Qué protocolo permite el intercambio seguro de claves en una red insegura?",
      ops: ["SHA-256.", "HMAC.", "Diffie-Hellman.", "AES."],
      ok: 2,
      exp: "Diffie-Hellman (DH) permite que dos partes establezcan un secreto compartido a través de un canal público sin transmitir el secreto en sí. ECDH (versión con curvas elípticas) es la variante moderna usada en TLS 1.3."
    },
    {
      p: "¿Qué mecanismo de seguridad se utiliza en HTTPS para cifrar las comunicaciones?",
      ops: ["WAF.", "SSL/TLS.", "VPN.", "IPSec."],
      ok: 1,
      exp: "HTTPS usa TLS (Transport Layer Security), el sucesor de SSL. TLS cifra el canal HTTP usando cifrado simétrico (AES) para los datos y criptografía asimétrica (RSA/ECDH) para el intercambio de claves durante el handshake."
    },
    {
      p: "¿Cuál es el principal objetivo de la criptografía en la seguridad informática?",
      ops: ["Reducir el tamaño de los archivos almacenados.", "Acelerar la velocidad de transmisión de datos.", "Proteger la información garantizando la confidencialidad, la integridad y la autenticación.", "Prevenir ataques de denegación de servicio."],
      ok: 2,
      exp: "La criptografía es la herramienta fundamental para garantizar la tríada CIA: confidencialidad (cifrado), integridad (hashes y firmas), autenticación (certificados y firmas). También proporciona no repudio."
    },
    {
      p: "¿Qué distingue al cifrado asimétrico del cifrado simétrico?",
      ops: ["No requiere claves para funcionar.", "Utiliza un par de claves: una pública y una privada.", "Usa la misma clave para cifrar y descifrar datos.", "Es siempre más rápido que el cifrado simétrico."],
      ok: 1,
      exp: "El cifrado simétrico usa una única clave compartida (más rápido). El asimétrico usa un par: la pública para cifrar (o verificar firmas) y la privada para descifrar (o firmar). En la práctica se combinan: asimétrico para intercambiar la clave simétrica de sesión."
    },
    {
      p: "¿Qué hace el protocolo HMAC en la seguridad informática?",
      ops: ["Proteger el tráfico de la red en conexiones wifi públicas.", "Cifrar discos duros completos para proteger los datos almacenados.", "Garantizar la integridad y la autenticación de los datos mediante funciones hash y claves secretas.", "Gestionar certificados digitales en una PKI."],
      ok: 2,
      exp: "HMAC (Hash-based Message Authentication Code) combina una función hash (SHA-256, SHA-3) con una clave secreta compartida para generar un código de autenticación. Garantiza tanto integridad (el mensaje no ha cambiado) como autenticación (solo quien tiene la clave puede generarlo)."
    },
    {
      p: "¿Qué función tiene un hash criptográfico en la seguridad de la información?",
      ops: ["Generar un valor único que permite verificar la integridad de los datos.", "Cifrar y descifrar mensajes de manera segura.", "Asegurar que un mensaje solo pueda ser leído por el destinatario correcto.", "Autenticar la identidad del remitente de un mensaje."],
      ok: 0,
      exp: "Un hash criptográfico (SHA-256, SHA-3, BLAKE2) transforma cualquier cantidad de datos en un resumen de longitud fija. Cualquier modificación en los datos produce un hash completamente diferente (efecto avalancha), permitiendo detectar alteraciones."
    },

    // — Temario (25) ———————————————————————————————————————
    {
      p: "¿Cuál es la diferencia entre cifrado simétrico y asimétrico en términos de rendimiento y casos de uso?",
      ops: ["El simétrico es más lento pero más seguro; el asimétrico es más rápido.", "El simétrico es mucho más rápido (ideal para grandes volúmenes de datos); el asimétrico es más lento pero resuelve el problema de distribución de claves. En la práctica se usan conjuntamente (híbrido).", "El asimétrico es obsoleto; hoy solo se usa el simétrico.", "No hay diferencia de rendimiento; la elección depende únicamente del caso de uso."],
      ok: 1,
      exp: "AES puede cifrar GB de datos por segundo. RSA-2048 es miles de veces más lento. Por eso en TLS se usa RSA/ECDH solo para negociar la clave de sesión AES, y después AES para cifrar el tráfico real. Este esquema híbrido combina seguridad y rendimiento."
    },
    {
      p: "¿Qué es el algoritmo RSA y para qué se usa principalmente?",
      ops: ["Un algoritmo de hash para verificar integridad de archivos.", "Un algoritmo de cifrado asimétrico basado en la dificultad matemática de factorizar el producto de dos números primos grandes. Se usa principalmente para intercambio de claves, firmas digitales y cifrado de datos pequeños.", "Un algoritmo de cifrado simétrico para cifrado de disco.", "Un protocolo de autenticación para redes empresariales."],
      ok: 1,
      exp: "RSA (Rivest-Shamir-Adleman, 1977) genera un par de claves basándose en la dificultad de factorizar n=p×q donde p y q son primos grandes. Con claves de 2048+ bits sigue siendo seguro, aunque ECC ofrece mayor seguridad con claves más cortas."
    },
    {
      p: "¿Qué es el cifrado de extremo a extremo (E2EE) y en qué aplicaciones se usa?",
      ops: ["Un cifrado que solo protege los datos en el servidor, no en tránsito.", "Un sistema donde los datos se cifran en el dispositivo del emisor y solo se descifran en el dispositivo del receptor, sin que el servidor intermediario pueda leerlos. Usado en WhatsApp, Signal, ProtonMail.", "Un cifrado que protege solo el canal de red entre cliente y servidor.", "Un protocolo de cifrado exclusivo para redes corporativas."],
      ok: 1,
      exp: "E2EE garantiza que solo el emisor y el receptor pueden leer los mensajes, ni siquiera el proveedor del servicio. Signal Protocol (usado en WhatsApp y Signal) implementa E2EE con Double Ratchet Algorithm para perfect forward secrecy."
    },
    {
      p: "¿Qué es el cifrado homomórfico y cuál es su potencial?",
      ops: ["Un tipo de cifrado para datos de salud con múltiples niveles de acceso.", "Un tipo de cifrado que permite realizar operaciones matemáticas directamente sobre datos cifrados sin necesidad de descifrarlos primero, preservando la privacidad en computación en la nube.", "Un algoritmo de cifrado simétrico especialmente eficiente para dispositivos IoT.", "Un método de cifrado que combina simétrico y asimétrico."],
      ok: 1,
      exp: "El cifrado homomórfico (Fully Homomorphic Encryption, FHE) permite, por ejemplo, que un servidor realice cálculos sobre datos cifrados sin ver los datos reales. Es muy prometedor para cloud computing privado, aunque actualmente es muy lento para uso generalizado."
    },
    {
      p: "¿Qué es la criptografía de curva elíptica (ECC) y qué ventaja ofrece sobre RSA?",
      ops: ["Un sistema de cifrado simétrico basado en curvas matemáticas.", "Un sistema de criptografía asimétrica que ofrece la misma seguridad que RSA con claves mucho más cortas (256 bits ECC ≈ 3072 bits RSA), siendo más eficiente en dispositivos con recursos limitados.", "Un protocolo de autenticación para redes inalámbricas.", "Un algoritmo de hash más seguro que SHA-256."],
      ok: 1,
      exp: "ECC basa su seguridad en la dificultad del problema del logaritmo discreto en curvas elípticas. Con claves más cortas ofrece mayor seguridad que RSA, reduciendo el consumo de CPU y memoria. ECDSA y ECDH son las variantes para firma e intercambio de claves."
    },
    {
      p: "¿Cuáles son las propiedades fundamentales de una función hash criptográfica?",
      ops: ["Reversibilidad, rapidez y tamaño fijo de salida.", "Determinismo (mismo input → mismo hash), irreversibilidad (no se puede obtener el input a partir del hash), efecto avalancha (pequeño cambio → hash completamente diferente), resistencia a colisiones (difícil encontrar dos inputs con el mismo hash).", "Tamaño variable de salida, reversibilidad y alta velocidad.", "Solo se requiere que el hash sea diferente para cada input."],
      ok: 1,
      exp: "Una función hash criptográfica es una función de una sola dirección. Las propiedades son: preimage resistance (difícil invertir), second preimage resistance (difícil encontrar otro input con el mismo hash) y collision resistance (difícil encontrar cualquier par de inputs con el mismo hash)."
    },
    {
      p: "¿Qué es el cifrado César y por qué no se usa en criptografía moderna?",
      ops: ["Un algoritmo de cifrado moderno basado en sustitución polialfabética.", "Un cifrado de sustitución monoalfabética que desplaza cada letra del alfabeto un número fijo de posiciones. No se usa hoy por ser trivialmente rompible por análisis de frecuencia o prueba de los 25 desplazamientos posibles.", "El primer algoritmo de cifrado asimétrico de la historia.", "Un protocolo de intercambio de claves del siglo XXI."],
      ok: 1,
      exp: "El cifrado César (±N posiciones en el alfabeto) tiene solo 25 claves posibles. Puede romperse en segundos por fuerza bruta o análisis de frecuencias de letras. Es útil pedagógicamente pero no ofrece ninguna seguridad real."
    },
    {
      p: "¿Qué es una Lista de Revocación de Certificados (CRL) y para qué sirve?",
      ops: ["Una lista de CAs de confianza del navegador.", "Una lista publicada por la CA que contiene los certificados que han sido revocados antes de su expiración (por compromiso de clave, cambio de propietario, etc.), permitiendo a los clientes verificar la validez actual de un certificado.", "Un registro de todos los certificados emitidos por una CA.", "Un protocolo para renovar certificados próximos a expirar."],
      ok: 1,
      exp: "Cuando se roba una clave privada o se emite un certificado erróneamente, la CA lo añade a su CRL. Los clientes deben verificar la CRL (o usar OCSP para verificación en tiempo real) al validar un certificado, para detectar los revocados antes de su expiración."
    },
    {
      p: "¿Qué es la esteganografía y en qué se diferencia de la criptografía?",
      ops: ["Es un sinónimo moderno de criptografía asimétrica.", "La criptografía oculta el contenido de un mensaje cifrándolo; la esteganografía oculta la existencia del mensaje (ej: embeber texto en una imagen de forma imperceptible) sin necesariamente cifrarlo.", "La esteganografía es más segura que la criptografía.", "La esteganografía solo se aplica a datos de texto; la criptografía a cualquier tipo de dato."],
      ok: 1,
      exp: "La criptografía hace el mensaje ilegible; la esteganografía lo hace invisible. Combinadas son muy potentes: el mensaje cifrado se embebe en una imagen. Las herramientas de esteganografía pueden ocultar datos en los bits menos significativos de imágenes, audio o vídeo."
    },
    {
      p: "¿Qué es la Perfect Forward Secrecy (PFS) y por qué es importante en TLS?",
      ops: ["Un protocolo que garantiza que los datos cifrados son perfectamente seguros.", "Una propiedad que garantiza que el compromiso de la clave privada del servidor NO permite descifrar sesiones pasadas, porque cada sesión usa claves efímeras (ECDHE) que se eliminan al terminar la sesión.", "Un algoritmo de hash para la autenticación de mensajes.", "Un sistema de rotación automática de certificados SSL."],
      ok: 1,
      exp: "Sin PFS, si el atacante captura el tráfico cifrado y luego obtiene la clave privada del servidor, puede descifrar todo el tráfico pasado. Con PFS (usando ECDHE), cada sesión tiene claves únicas y efímeras: comprometer la clave del servidor no afecta a sesiones anteriores."
    },
    {
      p: "¿Cuáles son los algoritmos de hash más usados actualmente y cuáles están obsoletos?",
      ops: ["MD5 y SHA-1 son los más seguros; SHA-256 está deprecado.", "MD5 (128 bits, ROTO) y SHA-1 (160 bits, ROTO) están obsoletos. SHA-256 y SHA-3 son los estándares actuales seguros. BLAKE2 y BLAKE3 son modernos y muy rápidos.", "SHA-1 sigue siendo el estándar; MD5 está deprecado.", "Todos los algoritmos de hash son igualmente seguros para uso actual."],
      ok: 1,
      exp: "MD5 está completamente roto (colisiones en segundos). SHA-1 fue oficialmente deprecado tras la demostración de colisiones prácticas (SHAttered, 2017). SHA-256 (parte de SHA-2) y SHA-3 son los estándares actuales; BLAKE3 ofrece velocidad excepcional."
    },
    {
      p: "¿Qué es el protocolo TLS y cuáles son sus fases principales?",
      ops: ["Un protocolo de enrutamiento seguro para redes empresariales.", "Un protocolo criptográfico de capa de transporte con dos fases: handshake (negociación de parámetros, autenticación del servidor y establecimiento de claves de sesión) y transferencia de datos (cifrado simétrico de la comunicación).", "Un sistema de gestión de certificados para PKIs.", "Un protocolo de autenticación de usuarios en redes Wi-Fi."],
      ok: 1,
      exp: "TLS 1.3 (RFC 8446, 2018) simplificó el handshake a 1-RTT (antes 2-RTT en TLS 1.2): el cliente envía parámetros DH en el primer mensaje, eliminando algoritmos obsoletos (RSA para intercambio de claves, MD5, SHA-1, RC4) y requiriendo PFS obligatorio."
    },
    {
      p: "¿Cuáles son los cuatro principios de la criptografía?",
      ops: ["Velocidad, seguridad, compatibilidad y eficiencia.","Confidencialidad, integridad, autenticación y no repudio.","Cifrado, descifrado, firma y verificación.","Secreto, redundancia, disponibilidad y trazabilidad."],
      ok: 1,
      exp: "Los cuatro principios fundamentales de la criptografía: Confidencialidad (solo acceden los autorizados), Integridad (datos no alterados), Autenticación (verificación de identidad) y No repudio (imposibilidad de negar haber realizado una acción)."
    },
    {
      p: "¿Qué es el cifrado César y cuál es su debilidad?",
      ops: ["Un algoritmo de cifrado simétrico moderno.","Un cifrado clásico que desplaza cada letra del alfabeto un número fijo de posiciones. Su debilidad es que solo hay 25 claves posibles, haciéndolo trivialmente descifrable por fuerza bruta.","Un protocolo de intercambio de claves de la antigua Roma.","Un método de cifrado asimétrico basado en números primos."],
      ok: 1,
      exp: "El cifrado César desplaza cada letra N posiciones (ej: N=3: A→D). Solo existen 25 claves posibles en el alfabeto inglés, trivialmente atacable por fuerza bruta. Además, mantiene la frecuencia de letras, vulnerable al análisis de frecuencias."
    },
    {
      p: "¿Cuál es la diferencia entre un hash y un algoritmo de cifrado?",
      ops: ["Son equivalentes; ambos pueden cifrar y descifrar.","El hash es unidireccional: genera un resumen irreversible. El cifrado es bidireccional: los datos cifrados pueden recuperarse con la clave correcta.","El cifrado es más rápido que el hash.","El hash usa clave pública; el cifrado usa clave simétrica."],
      ok: 1,
      exp: "Hash: función one-way. Dado un hash, no se puede recuperar el dato original (salvo colisiones). Cifrado: función bidireccional. Los datos cifrados se recuperan con la clave. Usos: hash para integridad y almacenamiento de contraseñas; cifrado para confidencialidad."
    },
    {
      p: "¿Qué es la criptografía híbrida y por qué se usa en TLS?",
      ops: ["Un sistema que usa dos algoritmos simétricos diferentes.","Combina cifrado asimétrico (para intercambiar la clave de sesión de forma segura) y simétrico (para cifrar los datos con alta velocidad). TLS usa RSA/DH para la clave y AES para los datos.","Un sistema de cifrado exclusivo para redes wifi.","Un método de cifrado donde la clave cambia cada segundo."],
      ok: 1,
      exp: "La criptografía híbrida aprovecha ambos sistemas: el asimétrico resuelve el problema de distribución de claves (no hay que compartir un secreto previo), y el simétrico proporciona la velocidad necesaria para cifrar grandes volúmenes de datos en la sesión."
    },
    {
      p: "¿Cuáles son los principales algoritmos de cifrado simétrico?",
      ops: ["RSA (2048 bits), ECC (256 bits), DSA (1024 bits).","AES (128/192/256 bits, estándar actual), DES (56 bits, obsoleto), 3DES (en proceso de deprecación) y ChaCha20.","SHA-256, SHA-512 y MD5.","Diffie-Hellman, ECDH y RSA."],
      ok: 1,
      exp: "Simétricos: AES (estándar NIST actual, 128/192/256 bits), DES (56 bits, roto desde 1999), 3DES (168 bits efectivos, deprecado), ChaCha20 (alternativa para dispositivos sin aceleración AES). RSA, ECC y DH son asimétricos."
    },
    {
      p: "¿Qué es RSA y en qué se basa su seguridad?",
      ops: ["En la dificultad de resolver logaritmos discretos.","En la dificultad computacional de factorizar el producto de dos números primos grandes. Se usan claves de 2048-4096 bits actualmente.","En la velocidad de procesamiento de claves simétricas.","En el número de rondas del algoritmo."],
      ok: 1,
      exp: "RSA (Rivest, Shamir, Adleman) basa su seguridad en la factorización de enteros. Generar el par de claves es fácil; factorizar el número público para obtener la clave privada es computacionalmente inviable con claves de 2048+ bits."
    },
    {
      p: "¿Para qué se usan las funciones hash en el almacenamiento de contraseñas?",
      ops: ["Para cifrar las contraseñas de forma reversible.","Para almacenar solo el hash de la contraseña. Si la BD se compromete, no se exponen las contraseñas en texto plano. Con salt se protege contra ataques de tabla arcoíris.","Para comprimir las contraseñas y ahorrar espacio.","Para sincronizar contraseñas entre sistemas."],
      ok: 1,
      exp: "Las contraseñas nunca deben almacenarse en texto plano. Se almacena solo el hash (bcrypt, Argon2, PBKDF2). Al verificar, se hashea la contraseña introducida y se compara con el hash almacenado. El salt (valor aleatorio por usuario) evita que contraseñas iguales tengan el mismo hash."
    },
    {
      p: "¿Qué es una CRL en el contexto de PKI?",
      ops: ["Una lista de todos los certificados emitidos por una CA.","Una lista periódicamente actualizada que publica los certificados revocados antes de su fecha de expiración por la CA.","La lista de algoritmos criptográficos obsoletos.","Un registro de intentos de acceso con certificados inválidos."],
      ok: 1,
      exp: "La CRL (Certificate Revocation List) es una lista firmada por la CA que contiene los números de serie de los certificados revocados (por compromiso de clave privada, cambio de datos, etc.). OCSP es el mecanismo moderno para verificar el estado de un certificado en tiempo real."
    },
    {
      p: "¿Cuál es la estructura de un certificado digital X.509?",
      ops: ["Solo contiene la clave pública del titular.","Contiene: versión, número de serie, algoritmo de firma, emisor (CA), período de validez, titular (subject), clave pública y extensiones, todo firmado digitalmente por la CA.","Solo contiene el nombre del titular y la firma de la CA.","Contiene únicamente la clave privada del titular cifrada."],
      ok: 1,
      exp: "Un certificado X.509 contiene: versión del estándar, número de serie único, algoritmo de firma, DN del emisor (CA), período de validez (notBefore/notAfter), DN del titular, clave pública del titular y extensiones (uso de clave, SAN, AIA, CDP). Todo firmado por la CA."
    },
    {
      p: "¿Qué es SHA-256 y cuándo se usa?",
      ops: ["Un algoritmo de cifrado simétrico de 256 bits.","Una función hash que produce un resumen de 256 bits, usada para verificar integridad de archivos, en certificados digitales, firmas digitales y almacenamiento de contraseñas.","Un protocolo de intercambio de claves para TLS 1.3.","Un algoritmo de cifrado asimétrico más seguro que RSA."],
      ok: 1,
      exp: "SHA-256 (SHA-2 de 256 bits) produce un hash de 256 bits prácticamente único para cada entrada diferente. Se usa en HTTPS (certificados TLS), Git (identificadores de commits), Bitcoin (minería) y verificación de descargas."
    },
    {
      p: "¿Cuáles son las aplicaciones del cifrado asimétrico?",
      ops: ["Solo cifrado de datos masivos por su alta velocidad.","Intercambio seguro de claves (DH), firmas digitales (RSA, ECDSA), cifrado de correo (PGP/S-MIME), autenticación SSH con clave pública y certificados digitales SSL/TLS.","Solo verificación de integridad mediante hashes.","Exclusivamente para cifrado de contraseñas en BD."],
      ok: 1,
      exp: "El cifrado asimétrico (lento, par pública/privada) se usa para: intercambio de claves simétricas (TLS handshake), firmas digitales (autenticidad), cifrado de correo (PGP), SSH key-based auth y certificados X.509. No se usa para cifrar grandes volúmenes de datos."
    },
    {
      p: "¿Qué es el cifrado de extremo a extremo (E2E)?",
      ops: ["Un cifrado donde solo el servidor puede leer los mensajes.","Un sistema donde los mensajes solo pueden ser leídos por el emisor y el receptor. Ni el proveedor del servicio ni ningún intermediario puede acceder al contenido en texto plano.","Un cifrado que solo funciona en redes privadas.","Un sistema de cifrado exclusivo para archivos."],
      ok: 1,
      exp: "En E2E el cifrado y descifrado solo ocurre en los dispositivos del emisor y receptor. Los servidores intermedios solo transmiten datos cifrados que no pueden leer. Ejemplos: Signal, WhatsApp, iMessage. Implica que incluso con una orden judicial al proveedor, los datos cifrados son ilegibles."
    },
    {
      p: "¿Qué algoritmo hash se considera actualmente seguro para aplicaciones criptográficas?",
      ops: ["MD5, por su amplia compatibilidad.","SHA-256 o SHA-3, ya que MD5 y SHA-1 tienen vulnerabilidades de colisión demostradas y no deben usarse para firmas digitales ni certificados.","SHA-1, aún considerado seguro para la mayoría de usos.","DES, el estándar oficial de hash del NIST."],
      ok: 1,
      exp: "MD5: colisiones demostradas en 2004. SHA-1: ataque de colisión práctica demostrado en 2017 (SHAttered). Ambos deben evitarse para firmas digitales y certificados. Para aplicaciones de seguridad usar SHA-256 (SHA-2) o SHA-3, que no tienen vulnerabilidades conocidas."
    }

  ],

  // ══════════════════════════════════════════════════════════
  // UF8 — Legislación y cumplimiento normativo
  // ══════════════════════════════════════════════════════════
  UF8: [
    // — Cuestionario oficial (15) ——————————————————————————
    {
      p: "¿Cuál es el nombre de la técnica que manipula psicológicamente a los usuarios para obtener información?",
      ops: ["Criptojacking.", "Ransomware.", "Ingeniería social.", "Pharming."],
      ok: 2,
      exp: "La ingeniería social es el arte de manipular personas para que revelen información confidencial o realicen acciones que comprometan la seguridad, explotando la confianza, el miedo o la urgencia."
    },
    {
      p: "¿Qué tipo de software se utiliza para registrar lo que escribe el usuario en el teclado?",
      ops: ["Keylogger.", "Sniffer.", "Troyano.", "Rootkit."],
      ok: 0,
      exp: "Un keylogger registra todas las pulsaciones de teclado del usuario, capturando contraseñas, números de tarjeta y mensajes. Puede ser hardware (USB) o software (malware). Su detección requiere herramientas antimalware especializadas."
    },
    {
      p: "¿Cuál de los siguientes artículos del Código Penal está relacionado con el uso no autorizado de wifi ajeno?",
      ops: ["Art. 270.", "Art. 256.", "Art. 278.", "Art. 197."],
      ok: 1,
      exp: "El Art. 256 del Código Penal español tipifica el uso no autorizado de equipos o terminales ajenos, incluyendo el uso de conexiones wifi sin permiso, cuando causa perjuicio económico."
    },
    {
      p: "¿Qué artículo del Código Penal regula el delito de estafa informática?",
      ops: ["Art. 248.2.", "Art. 197.", "Art. 270.", "Art. 264."],
      ok: 0,
      exp: "El Art. 248.2 del CP tipifica la estafa informática: manipulación informática o artificio semejante para obtener una transferencia no consentida de activos patrimoniales en perjuicio de otro."
    },
    {
      p: "¿Qué tipo de licencia permite modificar y redistribuir software manteniendo sus condiciones originales?",
      ops: ["GPL (licencia pública general).", "Retail.", "OEM.", "Freeware."],
      ok: 0,
      exp: "La GPL (GNU General Public License) es una licencia copyleft: permite usar, modificar y redistribuir el software, pero las obras derivadas deben distribuirse bajo la misma licencia GPL (principio de 'share-alike')."
    },
    {
      p: "¿Cuál de los siguientes delitos informáticos está tipificado en el artículo 264.2 del Código Penal?",
      ops: ["Distribución de malware.", "Suplantación de identidad.", "Estafa por phishing.", "Acceso no autorizado a sistemas."],
      ok: 0,
      exp: "El Art. 264.2 del CP tipifica la producción, adquisición, importación o facilitación de programas informáticos o dispositivos diseñados para cometer daños informáticos (distribución de malware, herramientas de hacking malicioso)."
    },
    {
      p: "¿Cuál es el objetivo del artículo 278 del Código Penal?",
      ops: ["Castigar el espionaje industrial.", "Penalizar el sabotaje informático.", "Proteger la intimidad personal.", "Regular el comercio electrónico."],
      ok: 0,
      exp: "El Art. 278 CP tipifica el descubrimiento y revelación de secretos empresariales: el apoderamiento por cualquier medio de datos, documentos o información reservada de la empresa con la finalidad de obtener un beneficio propio."
    },
    {
      p: "¿Qué derechos garantizaba la antigua LOPD (15/1999)?",
      ops: ["Acceso, rectificación, cancelación y oposición (ARCO).", "Honor, privacidad y desconexión.", "Acreditación, limitación, supresión.", "Información, consentimiento y portabilidad."],
      ok: 0,
      exp: "La LOPD 15/1999 establecía los derechos ARCO: Acceso (conocer los datos tratados), Rectificación (corregirlos), Cancelación (suprimirlos) y Oposición (negarse al tratamiento). El RGPD amplió estos derechos."
    },
    {
      p: "¿Qué tipo de ataque se basa en redirigir al usuario a una página falsa, incluso si escribe la dirección correcta?",
      ops: ["Pharming.", "Phishing.", "Spoofing.", "Keylogging."],
      ok: 0,
      exp: "El pharming envenena el DNS o modifica el archivo hosts del equipo para que, aunque el usuario escriba correctamente la URL, el sistema resuelva a la IP de un servidor malicioso que replica la apariencia del sitio legítimo."
    },
    {
      p: "¿Qué artículo del CP sanciona la revelación de secretos personales por un profesional?",
      ops: ["Art. 264.", "Art. 199.2.", "Art. 278.", "Art. 248."],
      ok: 1,
      exp: "El Art. 199.2 CP sanciona al profesional que, incumpliendo su obligación de sigilo (médicos, abogados, psicólogos), revela secretos ajenos conocidos por razón de su oficio o relaciones laborales."
    },
    {
      p: "¿Qué institución vela por el cumplimiento de la LOPDPGDD en España?",
      ops: ["Consejo General del Poder Judicial.", "Agencia Española de Protección de Datos (AEPD).", "Ministerio del Interior.", "Centro Nacional de Inteligencia (CNI)."],
      ok: 1,
      exp: "La AEPD es la autoridad de control independiente española encargada de velar por el cumplimiento del RGPD y la LOPDPGDD. Puede imponer sanciones de hasta 20 millones de euros o el 4% de la facturación global anual."
    },
    {
      p: "¿Qué elemento biométrico no se suele utilizar en la autenticación de usuarios?",
      ops: ["Iris.", "Huella dactilar.", "Grupo sanguíneo.", "Reconocimiento facial."],
      ok: 2,
      exp: "El grupo sanguíneo no se usa para autenticación: no es único por persona (solo hay 8 tipos), no es medible fácilmente de forma no invasiva y no varía. Los sistemas biométricos usan características únicas y medibles: iris, huella, cara, voz, venas de la palma."
    },
    {
      p: "¿Qué ley regula el comercio electrónico en España?",
      ops: ["LOPDPGDD.", "LSSI (Ley 34/2002 de Servicios de la Sociedad de la Información).", "Ley de Firma Electrónica.", "Ley Orgánica de Propiedad Intelectual."],
      ok: 1,
      exp: "La LSSI (Ley 34/2002) regula el comercio electrónico y los servicios de la sociedad de la información en España: requisitos de información de los prestadores, contratos electrónicos, publicidad online y responsabilidad de intermediarios."
    },
    {
      p: "¿Qué artículo del Código Penal castiga la creación y difusión de malware?",
      ops: ["Art. 197 bis.", "Art. 248.2.", "Art. 264 ter.", "Art. 278."],
      ok: 2,
      exp: "El Art. 264 ter CP castiga a quien produzca, adquiera, importe o facilite programas informáticos o equipos específicamente diseñados para cometer los daños informáticos tipificados en los artículos precedentes."
    },
    {
      p: "¿Cuál es el principal objetivo de la Ley Orgánica 3/2018 (LOPDPGDD)?",
      ops: ["Regular la propiedad intelectual.", "Adaptar el RGPD al marco español y regular aspectos específicos.", "Penalizar la suplantación de identidad.", "Regular el comercio electrónico en España."],
      ok: 1,
      exp: "La LOPDPGDD (Ley Orgánica de Protección de Datos y Garantía de los Derechos Digitales) adapta el RGPD al ordenamiento jurídico español y añade aspectos como el derecho al olvido en redes sociales, el derecho a la desconexión digital laboral y la regulación de datos de menores."
    },

    // — Temario (25) ———————————————————————————————————————
    {
      p: "¿Qué es el RGPD y cuándo entró en vigor?",
      ops: ["Una directiva europea sobre ciberseguridad, en vigor desde 2016.", "El Reglamento General de Protección de Datos (UE 2016/679), aplicable desde el 25 de mayo de 2018 en todos los estados miembros de la UE, que regula el tratamiento de datos personales.", "Una ley española de protección de datos, en vigor desde 2018.", "Un estándar internacional ISO sobre privacidad de datos, aprobado en 2018."],
      ok: 1,
      exp: "El RGPD (General Data Protection Regulation, GDPR en inglés) es de aplicación directa en todos los estados de la UE desde mayo 2018. Sustituyó a la Directiva 95/46/CE y supuso un cambio radical en la protección de datos, con sanciones hasta el 4% de la facturación global."
    },
    {
      p: "¿Cuáles son los principios del tratamiento de datos según el RGPD?",
      ops: ["Solo confidencialidad e integridad.", "Licitud, lealtad y transparencia; limitación de la finalidad; minimización de datos; exactitud; limitación del plazo de conservación; integridad y confidencialidad; y responsabilidad proactiva.", "Solo se requiere el consentimiento del interesado.", "Los datos pueden tratarse para cualquier finalidad si existe consentimiento inicial."],
      ok: 1,
      exp: "El Art. 5 RGPD establece 7 principios: licitud/lealtad/transparencia (base legal para tratar los datos), limitación de finalidad (no usar para otros fines), minimización (solo los datos necesarios), exactitud, limitación de conservación, integridad/confidencialidad y responsabilidad proactiva."
    },
    {
      p: "¿Qué nuevos derechos añade el RGPD respecto a la antigua LOPD (derechos ARCO)?",
      ops: ["El RGPD suprimió todos los derechos ARCO.", "El RGPD amplía con: derecho a la portabilidad de datos, derecho al olvido (supresión reforzada) y derecho a no ser objeto de decisiones automatizadas con efectos significativos.", "El RGPD solo añadió el derecho a la portabilidad.", "El RGPD no añadió nuevos derechos; solo aumentó las sanciones."],
      ok: 1,
      exp: "El RGPD mantiene ARCO y añade: portabilidad (recibir los datos en formato estructurado para cambiar de proveedor), derecho al olvido (supresión reforzada incluso de datos indexados por buscadores) y oposición a decisiones automatizadas/perfilado."
    },
    {
      p: "¿Qué es el Delegado de Protección de Datos (DPO) y cuándo es obligatorio?",
      ops: ["Un cargo obligatorio en todas las empresas con más de 10 empleados.", "Un experto en protección de datos que asesora y supervisa el cumplimiento del RGPD. Es obligatorio para organismos públicos, empresas que tratan datos a gran escala o categorías especiales de datos, y empresas de monitorización sistemática.", "El director de IT de la empresa, que asume automáticamente las funciones de DPO.", "Un auditor externo que revisa el cumplimiento del RGPD anualmente."],
      ok: 1,
      exp: "El DPO (Data Protection Officer / Delegado de Protección de Datos) es obligatorio (Art. 37 RGPD) para: autoridades públicas, empresas que traten datos a gran escala de forma regular, y las que traten categorías especiales (salud, orientación sexual, etc.) a gran escala."
    },
    {
      p: "¿Qué es una Evaluación de Impacto relativa a la Protección de Datos (DPIA)?",
      ops: ["Una auditoría anual obligatoria para todas las empresas.", "Un análisis previo obligatorio cuando un tratamiento de datos puede suponer alto riesgo para los derechos de los interesados (videovigilancia masiva, perfilado, nuevas tecnologías). Debe identificar riesgos y medidas para mitigarlos.", "Un formulario para notificar brechas de seguridad a la AEPD.", "Un contrato con proveedores de servicios cloud que traten datos personales."],
      ok: 1,
      exp: "La DPIA (Data Protection Impact Assessment) es obligatoria cuando el tratamiento presenta alto riesgo (Art. 35 RGPD). Evalúa la necesidad, proporcionalidad y riesgos del tratamiento, y define medidas técnicas y organizativas para mitigarlos."
    },
    {
      p: "¿Cuáles son las bases legales para el tratamiento de datos personales según el RGPD?",
      ops: ["Solo el consentimiento es válido como base legal.", "Consentimiento, contrato, obligación legal, intereses vitales, interés público e interés legítimo del responsable (siempre que no prevalezcan los derechos del interesado).", "Solo el consentimiento y el contrato.", "Cualquier finalidad que el responsable considere justificada."],
      ok: 1,
      exp: "El Art. 6 RGPD establece 6 bases legales alternativas. El consentimiento debe ser libre, específico, informado e inequívoco. El interés legítimo requiere una ponderación (test de equilibrio) para verificar que no prevalecen los derechos del interesado."
    },
    {
      p: "¿Qué artículo del Código Penal español protege la intimidad en las comunicaciones electrónicas?",
      ops: ["Art. 248 CP.", "Art. 197 CP (y 197 bis para sistemas informáticos).", "Art. 264 CP.", "Art. 278 CP."],
      ok: 1,
      exp: "El Art. 197 CP protege la intimidad: interceptar comunicaciones privadas o acceder a datos privados sin consentimiento. El 197 bis, añadido en 2015, tipifica específicamente el acceso no autorizado a sistemas y datos informáticos ajenos."
    },
    {
      p: "¿Qué son las categorías especiales de datos según el RGPD y qué tratamiento requieren?",
      ops: ["Datos sobre preferencias de consumo; pueden tratarse con consentimiento simple.", "Datos especialmente sensibles (salud, origen racial/étnico, religión, orientación sexual, datos genéticos/biométricos, afiliación sindical, opiniones políticas). Su tratamiento está prohibido salvo excepciones específicas, requiriendo generalmente consentimiento explícito.", "Datos de menores de 14 años; pueden tratarse con autorización parental.", "Datos financieros; requieren cifrado pero no consentimiento especial."],
      ok: 1,
      exp: "El Art. 9 RGPD prohíbe el tratamiento de categorías especiales (datos sensibles) salvo que concurra alguna de las excepciones: consentimiento explícito, obligaciones laborales, defensa de intereses vitales, datos manifiestamente públicos, investigación científica, etc."
    },
    {
      p: "¿Qué es el Esquema Nacional de Seguridad (ENS) en España?",
      ops: ["Un estándar privado de seguridad para empresas del IBEX 35.", "Un marco normativo de obligado cumplimiento para las administraciones públicas españolas y sus proveedores que establece los principios y requisitos mínimos de seguridad en el uso de medios electrónicos.", "Una certificación voluntaria equivalente al ISO 27001 para empresas españolas.", "Un protocolo de respuesta a incidentes para infraestructuras críticas."],
      ok: 1,
      exp: "El ENS (Real Decreto 311/2022) obliga a las AAPP y a sus proveedores de servicios TIC a implementar medidas de seguridad clasificadas por niveles (Básico, Medio, Alto) según la criticidad de los sistemas. Su cumplimiento es auditado periódicamente."
    },
    {
      p: "¿Qué es la Directiva NIS2 y a qué empresas afecta?",
      ops: ["Una directiva sobre firma electrónica cualificada.", "Una directiva europea (2022/2555) que eleva el nivel de ciberseguridad de entidades esenciales e importantes en sectores críticos (energía, transporte, salud, banca, agua, infraestructura digital), con obligaciones de gestión de riesgos y notificación de incidentes.", "Una ley española equivalente al RGPD para datos de empresas.", "Un reglamento que regula el comercio de productos de ciberseguridad en la UE."],
      ok: 1,
      exp: "NIS2 (transpuesta al ordenamiento español) amplía el alcance de NIS1 e impone medidas de ciberseguridad y notificación de incidentes a entidades esenciales e importantes. Las sanciones pueden alcanzar 10M€ o el 2% de la facturación global para entidades esenciales."
    },
    {
      p: "¿Qué diferencia hay entre una licencia freeware, shareware y software libre (open source)?",
      ops: ["Son sinónimos; todos permiten uso, modificación y redistribución.", "Freeware: gratuito pero sin acceso al código fuente ni redistribución libre. Shareware: prueba gratuita con funciones limitadas/tiempo limitado. Software libre (OSS): acceso al código fuente con libertad de uso, modificación y redistribución según la licencia.", "El software libre siempre es gratuito; el freeware puede ser de pago.", "No hay diferencias legales entre estos tipos de licencias."],
      ok: 1,
      exp: "Freeware: gratis pero propietario (Zoom, Acrobat Reader). Shareware: modelo freemium o prueba temporal (WinRAR). Software libre: el código fuente es accesible y puede modificarse/redistribuirse bajo licencias como GPL, MIT o Apache. Libre no implica necesariamente gratuito."
    },
    {
      p: "¿Qué obligaciones tiene una empresa en caso de brecha de seguridad que afecte a datos personales según el RGPD?",
      ops: ["Solo debe solucionarla internamente sin necesidad de notificación.", "Notificar a la autoridad de control (AEPD) en 72 horas (Art. 33), y si la brecha supone alto riesgo, también notificar a los afectados (Art. 34). Debe documentar todas las brechas aunque no requieran notificación.", "Notificar solo si afecta a más de 1.000 personas.", "Tiene 30 días para notificar a la autoridad de control."],
      ok: 1,
      exp: "El RGPD impone un régimen de notificación estricto: 72 horas a la autoridad de control (salvo que sea improbable que la brecha suponga riesgo para los interesados). La notificación a los afectados es adicional cuando hay alto riesgo para sus derechos y libertades."
    },
    {
      p: "¿Qué es la ISO/IEC 27001 y para qué sirve?",
      ops: ["Un estándar para la gestión de la calidad en empresas tecnológicas.", "El estándar internacional que especifica los requisitos para establecer, implementar, mantener y mejorar un Sistema de Gestión de la Seguridad de la Información (SGSI), con certificación auditada por terceros.", "Una norma sobre privacidad de datos equivalente al RGPD.", "Un protocolo de seguridad para redes corporativas."],
      ok: 1,
      exp: "ISO/IEC 27001 es el estándar SGSI más reconocido mundialmente. Sigue el ciclo PDCA (Plan-Do-Check-Act) y se complementa con ISO 27002 (controles de seguridad) e ISO 27005 (gestión de riesgos). La certificación demuestra madurez en seguridad de la información."
    },
    {
      p: "¿Qué artículo del CP español tipifica el acceso no autorizado a sistemas informáticos?",
      ops: ["Art. 248 CP.", "Art. 197 bis CP.", "Art. 264 CP.", "Art. 270 CP."],
      ok: 1,
      exp: "El Art. 197 bis CP (introducido por la reforma de 2015) tipifica el acceso sin autorización o excediendo la autorización a sistemas informáticos, equiparándose a lo que en otros países se conoce como 'hacking' o 'cracking' no autorizado."
    },
    {
      p: "¿Cuáles son los tres niveles de datos personales según la LOPDPGDD?",
      ops: ["Datos públicos, privados y secretos.","Nivel básico (nombre, DNI, email), nivel medio (datos financieros, académicos, laborales) y nivel alto (salud, biométricos, ideología, orientación sexual, antecedentes penales).","Solo existe un nivel de protección para todos los datos personales.","Datos de usuario, de empresa y gubernamentales."],
      ok: 1,
      exp: "Clasificación de datos personales en España: Básico (identificativos y de contacto); Medio (económicos, académicos, laborales); Alto (salud, biometría, geolocalización, ideología/religión/orientación sexual, antecedentes penales) — máxima protección requerida."
    },
    {
      p: "¿Cuáles son los derechos del interesado según el RGPD?",
      ops: ["Solo acceso y rectificación.","Acceso, rectificación, supresión (derecho al olvido), oposición, portabilidad, limitación del tratamiento y a no ser objeto de decisiones automatizadas.","Solo los derechos ARCO de la antigua LOPD.","Solo el derecho a ser informado y el de acceso."],
      ok: 1,
      exp: "El RGPD amplía los derechos ARCO con nuevos derechos: portabilidad (recibir datos en formato estructurado), supresión/olvido (borrar datos cuando ya no sean necesarios), limitación (restringir el tratamiento) y oposición a decisiones automatizadas (incluido perfilado)."
    },
    {
      p: "¿Qué es el artículo 197 bis del Código Penal?",
      ops: ["El artículo que regula la estafa informática.","El artículo que tipifica el acceso ilegal a sistemas informáticos o datos, independientemente de si se causa daño, con penas de prisión de 6 meses a 2 años.","El artículo que castiga la distribución de malware.","El artículo que regula el espionaje industrial."],
      ok: 1,
      exp: "El artículo 197 bis CP castiga al que, sin estar autorizado, acceda o facilite acceso a un sistema informático o a los datos contenidos en él, vulnerando medidas de seguridad, incluso sin causar daño. También incluye interceptación de transmisiones informáticas."
    },
    {
      p: "¿Qué sanciones puede imponer la AEPD por incumplimiento del RGPD?",
      ops: ["Solo advertencias y requerimientos, sin multas.","Multas de hasta 10 millones de euros o el 2% de la facturación global para infracciones graves, y hasta 20 millones o el 4% para infracciones muy graves.","Solo sanciones penales que corresponden a los tribunales.","Multas máximas de 600 euros para personas físicas."],
      ok: 1,
      exp: "El RGPD establece multas por escalones: infracciones menos graves hasta 10M€ o 2% de facturación global anual; infracciones muy graves (vulneración de derechos fundamentales, transferencias ilegales) hasta 20M€ o 4% de facturación global, el importe mayor."
    },
    {
      p: "¿Qué regula el artículo 270 del Código Penal en materia de propiedad intelectual?",
      ops: ["El acceso ilegal a sistemas informáticos.","La reproducción, plagio, distribución o comunicación pública de obras sin autorización del autor (piratería), incluyendo software y contenido digital.","El espionaje industrial.","La estafa a través de Internet."],
      ok: 1,
      exp: "El artículo 270 CP sanciona la vulneración de derechos de propiedad intelectual: reproducir, plagiar, distribuir o comunicar públicamente obras sin autorización del titular, con ánimo de lucro. Incluye software pirata y contenido audiovisual."
    },
    {
      p: "¿Cuáles son las bases legales para el tratamiento de datos personales según el RGPD?",
      ops: ["Solo el consentimiento del interesado.","Consentimiento, ejecución de contrato, obligación legal, intereses vitales, misión de interés público e intereses legítimos del responsable.","Solo el interés legítimo de la empresa.","Únicamente cuando existe una ley que lo exija."],
      ok: 1,
      exp: "El RGPD establece seis bases legales: 1) Consentimiento explícito, 2) Ejecución de un contrato, 3) Cumplimiento de obligación legal, 4) Protección de intereses vitales, 5) Misión de interés público, 6) Intereses legítimos del responsable (no aplica a autoridades públicas en el ejercicio de sus funciones)."
    },
    {
      p: "¿Cuáles son las obligaciones de las empresas que prestan servicios en Internet según la LSSI?",
      ops: ["Solo identificarse con nombre y CIF.","Identificación clara, información precontractual en comercio electrónico, acuse de recibo de pedidos, archivo del contrato y cumplimiento de normativa anti-spam.","Solo informar del precio final incluyendo impuestos.","No tienen obligaciones específicas más allá del derecho mercantil general."],
      ok: 1,
      exp: "La LSSI obliga a los prestadores de servicios en internet a: identificarse claramente, informar precontractualmente en e-commerce (precio, características, plazos), confirmar recepción de pedidos, archivar contratos, no enviar spam y cumplir las condiciones de cookies."
    },
    {
      p: "¿Qué es la firma electrónica cualificada según el Reglamento eIDAS?",
      ops: ["Cualquier imagen de firma manuscrita en un PDF.","Una firma electrónica avanzada basada en un certificado cualificado emitido por un prestador de servicios de confianza cualificado, producida por un dispositivo seguro de creación de firma (DSCF).","Una firma digital generada por cualquier software de firma.","Solo la firma del DNI Electrónico español."],
      ok: 1,
      exp: "Según eIDAS: firma simple (cualquier dato electrónico), firma avanzada (vinculada al firmante, detecta cambios), firma cualificada (firma avanzada + certificado cualificado + dispositivo seguro DSCF). La cualificada es equivalente a la firma manuscrita y tiene el mayor valor legal."
    },
    {
      p: "¿Qué es el delito de sabotaje informático según el Código Penal?",
      ops: ["El uso no autorizado de sistemas informáticos ajenos.","La destrucción, alteración, inutilización o daño grave de datos, programas o sistemas informáticos ajenos (art. 264 CP), incluyendo ransomware o ataques DoS que causen daño significativo.","La revelación de secretos empresariales a la competencia.","El uso fraudulento de tarjetas de crédito por Internet."],
      ok: 1,
      exp: "El artículo 264 CP castiga el sabotaje informático: dañar, borrar, deteriorar, alterar, suprimir o hacer inaccesibles datos o programas ajenos. El art. 264.2 añade la distribución de malware para estos fines. Las penas se agravan si afectan a infraestructuras críticas."
    },
    {
      p: "¿Cuáles son los principios del tratamiento de datos personales según el RGPD?",
      ops: ["Solo la confidencialidad y la integridad.","Licitud, lealtad y transparencia; limitación de la finalidad; minimización de datos; exactitud; limitación del plazo de conservación; integridad y confidencialidad.","Solo el consentimiento del interesado.","Únicamente la anonimización y el cifrado de los datos."],
      ok: 1,
      exp: "El RGPD (art. 5) establece los principios del tratamiento: licitud/lealtad/transparencia, limitación de finalidad (solo para el fin declarado), minimización (solo datos necesarios), exactitud, limitación del plazo de conservación, e integridad y confidencialidad."
    },
    {
      p: "¿Qué es el criptojacking y cómo se relaciona con la legislación?",
      ops: ["El cifrado no autorizado de datos ajenos (ransomware).","El uso no autorizado de los recursos computacionales de un tercero para minar criptomonedas sin su conocimiento, tipificado como uso no autorizado de equipos y daño informático.","Un tipo de phishing para robar claves de criptomonedas.","El robo físico de equipos para minar criptomonedas."],
      ok: 1,
      exp: "El criptojacking instala software que usa la CPU/GPU de la víctima para minar criptomonedas en beneficio del atacante sin que lo sepa. Constituye uso no autorizado de equipos (art. 256 CP) y puede considerarse también daño informático si perjudica al sistema."
    }
  ]
};

// Configuración de UFs para el selector
const UFS = [
  { id: 'UF1', nombre: 'CPD: Infraestructura y seguridad pasiva' },
  { id: 'UF2', nombre: 'Gestión de dispositivos de almacenamiento' },
  { id: 'UF3', nombre: 'Gestión de copias de seguridad' },
  { id: 'UF4', nombre: 'Seguridad activa' },
  { id: 'UF5', nombre: 'Seguridad activa en redes' },
  { id: 'UF6', nombre: 'Aseguramiento de la privacidad' },
  { id: 'UF7', nombre: 'Criptografía' },
  { id: 'UF8', nombre: 'Legislación y cumplimiento normativo' },
];
