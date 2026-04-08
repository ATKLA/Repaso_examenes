// ============================================================
// CIBERSEGURIDAD — Banco de preguntas
// UF1 · UF2 · UF3 · UF4 · UF5 · UF6 · UF7 · UF8
// ============================================================

const PREGUNTAS = {

  // ─── UF1: Seguridad pasiva / CPD ────────────────────────
  "UF1": [
    {
      p: "¿Qué ventaja ofrece un CPD con redundancia eléctrica?",
      ops: ["Evita interrupciones del servicio en caso de fallo energético.", "Mejora la velocidad de conexión a Internet.", "Reduce la cantidad de servidores necesarios."],
      ok: 0,
      exp: "La redundancia eléctrica garantiza continuidad del servicio ante cortes de suministro, usando sistemas eléctricos independientes y generadores de respaldo."
    },
    {
      p: "¿Por qué es importante el control de acceso en un CPD?",
      ops: ["Para reducir el consumo energético de la empresa.", "Para que cualquier empleado pueda acceder a los servidores.", "Para evitar que personas no autorizadas manipulen los equipos."],
      ok: 2,
      exp: "El control de acceso físico impide que personas no autorizadas accedan a equipos críticos, previniendo sabotajes, robos o manipulaciones."
    },
    {
      p: "¿Qué estrategia de refrigeración es común en un CPD?",
      ops: ["Colocar los servidores al aire libre.", "Ventiladores domésticos.", "Pasillos fríos y calientes."],
      ok: 2,
      exp: "La arquitectura de pasillos fríos/calientes separa el flujo de aire frío (entrada) del caliente (salida), optimizando la refrigeración y reduciendo el consumo energético."
    },
    {
      p: "¿Qué sistema evita la acumulación de polvo en un CPD?",
      ops: ["Uso de filtros de aire HEPA.", "Instalación de cortinas gruesas.", "Uso de humidificadores industriales."],
      ok: 0,
      exp: "Los filtros HEPA (High Efficiency Particulate Air) retienen partículas muy pequeñas, incluido el polvo, protegiendo los componentes electrónicos."
    },
    {
      p: "¿Cuál es el objetivo del mantenimiento de un SAI?",
      ops: ["Asegurar que las baterías están en buen estado.", "Aumentar la temperatura del CPD.", "Apagar los servidores en caso de fallo eléctrico."],
      ok: 0,
      exp: "El SAI (Sistema de Alimentación Ininterrumpida) depende de sus baterías. El mantenimiento preventivo garantiza que estarán operativas cuando se necesiten."
    },
    {
      p: "¿Cuál es el propósito principal de un falso suelo en un CPD?",
      ops: ["Aumentar la resistencia estructural del edificio.", "Facilitar la distribución del cableado y la ventilación.", "Reducir el consumo de energía de los servidores."],
      ok: 1,
      exp: "El falso suelo permite pasar el cableado de red y eléctrico por debajo, y también distribuir aire frío hacia los servidores desde la parte inferior."
    },
    {
      p: "¿Qué ocurre si la humedad en un CPD es demasiado baja?",
      ops: ["Los servidores funcionan con más rapidez.", "Se genera electricidad estática, dañando los equipos.", "Se reduce el consumo de energía."],
      ok: 1,
      exp: "La humedad relativa óptima en un CPD es del 40-60%. Por debajo, se acumula electricidad estática que puede dañar componentes electrónicos sensibles."
    },
    {
      p: "¿Qué elemento de seguridad evita que los datos sean robados físicamente en un CPD?",
      ops: ["Uso de software antivirus.", "Cifrado de datos.", "Cámaras de seguridad y controles de acceso."],
      ok: 2,
      exp: "Las cámaras CCTV y los controles de acceso (biometría, tarjetas) son la primera barrera física contra el robo o manipulación de equipos."
    },
    {
      p: "¿Qué medida de seguridad física ayuda a restringir el acceso no autorizado a un CPD?",
      ops: ["Instalar más servidores dentro del CPD.", "Uso de sistemas biométricos y tarjetas de acceso.", "Permitir el acceso libre al personal de la empresa."],
      ok: 1,
      exp: "Los sistemas biométricos (huella, retina) y las tarjetas de acceso garantizan que solo el personal autorizado pueda acceder a las zonas críticas."
    },
    {
      p: "¿Por qué es recomendable evitar la ubicación de un CPD en la planta baja?",
      ops: ["Para evitar el ruido de los servidores.", "Para reducir el acceso de empleados.", "Para minimizar el riesgo de inundaciones o sabotajes."],
      ok: 2,
      exp: "La planta baja es más vulnerable a inundaciones (agua de lluvia, roturas de tuberías) y a accesos físicos no autorizados desde el exterior."
    },
    {
      p: "¿Qué sistema de seguridad ayuda a prevenir incendios en un CPD?",
      ops: ["Uso de ventiladores industriales.", "Detectores de humo y gases inertes.", "Apagar los servidores por la noche."],
      ok: 1,
      exp: "Los detectores de humo activan sistemas de extinción con gases inertes (CO₂, Argón) que sofocan el fuego sin dañar los equipos electrónicos, a diferencia del agua."
    },
    {
      p: "¿Cuál es la importancia de la monitorización en un CPD?",
      ops: ["Detectar anomalías antes de que se conviertan en fallos críticos.", "Aumentar el tamaño del CPD.", "Hacer que los servidores sean más rápidos."],
      ok: 0,
      exp: "La monitorización continua permite identificar tendencias anómalas (temperatura, carga, errores de disco) antes de que provoquen una interrupción del servicio."
    },
    {
      p: "¿Qué tipo de SAI alimenta siempre desde batería sin tiempo de transferencia?",
      ops: ["SAI Offline.", "SAI Inline.", "SAI Online."],
      ok: 2,
      exp: "El SAI Online convierte constantemente la corriente alterna a continua y de vuelta a alterna, eliminando cualquier interrupción. Ideal para equipos críticos aunque tiene mayor coste."
    },
    {
      p: "¿Cuál es el rango de temperatura óptima en un CPD?",
      ops: ["5 a 12 °C.", "18 a 24 °C.", "28 a 35 °C."],
      ok: 1,
      exp: "La ASHRAE recomienda entre 18 y 24 °C para garantizar el correcto funcionamiento de los equipos y una vida útil prolongada."
    },
    {
      p: "¿Qué principio de seguridad lógica establece que cada usuario accede solo a lo necesario?",
      ops: ["Denegación por defecto.", "Menor privilegio.", "Separación de funciones."],
      ok: 1,
      exp: "El principio de menor privilegio (Least Privilege) limita los derechos de cada usuario al mínimo imprescindible para realizar su trabajo, reduciendo el impacto de posibles compromisos."
    },
    { p: "¿Qué tres tipos de SAI existen según su modo de funcionamiento?", ops: ["Activo, pasivo e híbrido.", "Offline, inline y online.", "Primario, secundario y terciario."], ok: 1, exp: "SAI Offline: alimenta desde red, conmuta en milisegundos. SAI Inline (interactivo): mejora estabilidad de señal. SAI Online: siempre alimenta desde batería, sin tiempo de conmutación." },
    { p: "¿Qué normativa define los niveles de disponibilidad (Tier) de los CPD?", ops: ["ISO 27001.", "TIA-942.", "RGPD."], ok: 1, exp: "TIA-942 clasifica los CPD en 4 niveles Tier: Tier I (básico, 99.671% disponibilidad) hasta Tier IV (fault tolerant, 99.995%). A mayor Tier, más redundancia y disponibilidad." },
    { p: "¿Qué es un grupo electrógeno en el contexto de un CPD?", ops: ["Un sistema de baterías de alta capacidad.", "Un generador de electricidad a motor de combustión que actúa como respaldo ante fallos eléctricos prolongados.", "Un transformador que estabiliza la tensión de entrada."], ok: 1, exp: "El grupo electrógeno (generador diésel) proporciona electricidad durante cortes prolongados. Se arranca cuando las baterías del SAI se agotan, generalmente en 10-30 segundos." },
    { p: "¿Qué significa PUE en eficiencia energética de un CPD?", ops: ["Potencia Útil Estandarizada.", "Power Usage Effectiveness — ratio entre energía total consumida y energía usada por los equipos IT.", "Protocolo de Uso Eléctrico."], ok: 1, exp: "PUE = Energía total CPD / Energía IT. Un PUE de 1.0 sería perfecto (toda la energía va a IT). Un CPD típico tiene PUE entre 1.2 y 2.0. Hiperscalers como Google logran ~1.1." },
    { p: "¿Qué es un CCTV en el contexto de seguridad física?", ops: ["Circuito Cerrado de Televisión para videovigilancia.", "Certificado de Cumplimiento de Tecnología de Virtualización.", "Control Centralizado de Tráfico de Voz."], ok: 0, exp: "CCTV (Closed Circuit Television) es el sistema de cámaras de videovigilancia. En un CPD cubren accesos, pasillos y zonas críticas, disuadiendo intrusiones y registrando incidentes." },
    { p: "¿Qué característica distingue al almacenamiento primario del secundario?", ops: ["El primario es más barato por GB.", "El primario es volátil y directamente accesible por la CPU (RAM, caché); el secundario no es volátil (HDD, SSD).", "El secundario es siempre más rápido."], ok: 1, exp: "El almacenamiento primario (RAM, caché) es volátil, muy rápido y directamente accesible por el procesador. El secundario (HDD, SSD) es persistente pero más lento y accesible mediante controladores." },
    { p: "¿Qué es un DRP (Disaster Recovery Plan)?", ops: ["Un plan de copias de seguridad diarias.", "Un documento que define cómo restaurar los sistemas y datos críticos tras un desastre mayor.", "Un protocolo de red para recuperación de paquetes perdidos."], ok: 1, exp: "El DRP define: prioridades de recuperación, RTO (tiempo máximo aceptable de inactividad), RPO (pérdida de datos máxima tolerable), roles y procedimientos paso a paso para restaurar operaciones." },
    { p: "¿Qué es el RPO en recuperación ante desastres?", ops: ["Recovery Point Objective — el tiempo máximo que puede estar inactivo el sistema.", "Recovery Point Objective — la antigüedad máxima de los datos que pueden perderse en caso de fallo.", "Restore Procedure Outline — el documento de procedimientos de restauración."], ok: 1, exp: "RPO (Recovery Point Objective) define cuántos datos podemos permitirnos perder: si el RPO es 4 horas, los backups deben hacerse cada 4 horas como máximo para no superar esa pérdida." },
    { p: "¿Qué es el RTO en recuperación ante desastres?", ops: ["Recovery Time Objective — el tiempo máximo tolerable para restaurar un sistema tras un fallo.", "Remote Transfer Operation — protocolo de sincronización remota.", "Recovery Transfer Order — orden de prioridad en la restauración."], ok: 0, exp: "RTO (Recovery Time Objective) es el tiempo máximo aceptable de inactividad de un sistema. Si el RTO es 2 horas, el sistema debe estar operativo en menos de 2 horas tras un desastre." },
    { p: "¿Qué normativa ISO cubre la gestión de la seguridad de la información?", ops: ["ISO 9001.", "ISO 27001.", "ISO 14001."], ok: 1, exp: "ISO 27001 es el estándar internacional para Sistemas de Gestión de Seguridad de la Información (SGSI). Define requisitos para establecer, implementar, mantener y mejorar la seguridad de la información." },
    { p: "¿Qué es una jaula de Faraday en el contexto de un CPD?", ops: ["Una estructura conductora que bloquea campos electromagnéticos externos.", "Un sistema de refrigeración por inmersión en líquido.", "Una técnica de virtualización de servidores."], ok: 0, exp: "Una jaula de Faraday es un recinto metálico que bloquea las interferencias electromagnéticas externas (EMP, escuchas). Algunos CPD de alta seguridad incorporan protección de este tipo." },
    { p: "¿Qué es la autenticación de doble factor (2FA)?", ops: ["Usar dos contraseñas diferentes.", "Verificar identidad usando dos factores de distinta categoría: algo que sabes + algo que tienes o eres.", "Solicitar dos administradores para aprobar un acceso."], ok: 1, exp: "2FA combina dos factores de distinta categoría: algo que sabes (contraseña), algo que tienes (token, móvil) o algo que eres (biometría). Aunque roben la contraseña, necesitan el segundo factor." },
    { p: "¿Qué tipo de extintor NO debe usarse en un CPD ante un incendio en equipos electrónicos?", ops: ["CO₂ (dióxido de carbono).", "Agua.", "Agentes limpios (HFC, FK-5-1-12)."], ok: 1, exp: "El agua conduce la electricidad y daña irreparablemente los equipos electrónicos. En CPD se usan gas CO₂, agentes limpios (FM-200, Novec 1230) o sistemas de inertización por gases inertes." },
    { p: "¿Qué es un bastidor (rack) en infraestructura de CPD?", ops: ["Un armario estandarizado (19 pulgadas) donde se instalan los equipos de forma organizada.", "Una unidad de almacenamiento de alta densidad.", "Un sistema de cableado estructurado."], ok: 0, exp: "El rack estándar de 19 pulgadas organiza los equipos de forma ordenada. La altura se mide en unidades U (1U = 4.45 cm). Un rack de 42U puede albergar servidores, switches, patch panels y SAI." },
    { p: "¿Qué es la seguridad perimetral física en un CPD?", ops: ["El firewall que protege la red del CPD.", "El conjunto de barreras físicas (vallas, cámaras, control de acceso) que protegen el edificio.", "El sistema de copias de seguridad externas."], ok: 1, exp: "La seguridad perimetral incluye: vallado exterior, iluminación, cámaras CCTV, garitas de seguridad, control de acceso vehicular y peatonal. Es la primera línea de defensa física del CPD." },
  ],

  // ─── UF2/UF3: Almacenamiento y Copias de Seguridad ──────
  "UF2-UF3": [
    {
      p: "¿Qué define al almacenamiento en estado sólido (SSD)?",
      ops: ["Su mayor velocidad de transferencia.", "Su capacidad de almacenamiento superior.", "Su bajo coste comparado con los discos duros convencionales."],
      ok: 0,
      exp: "Los SSD no tienen partes móviles, lo que les permite velocidades de lectura/escritura muy superiores a los HDD mecánicos. Su coste por GB sigue siendo más alto que el de los HDD."
    },
    {
      p: "¿Qué es una instantánea de copia de seguridad (snapshot)?",
      ops: ["Una copia en caliente de todos los datos del sistema.", "Un duplicado completo del sistema en tiempo real.", "Una congelación del sistema de archivos en un momento determinado."],
      ok: 2,
      exp: "Un snapshot captura el estado del sistema de archivos en un instante específico, permitiendo restaurar ese estado exacto sin necesidad de detener el sistema."
    },
    {
      p: "¿Cuál es el principal objetivo de las copias de seguridad?",
      ops: ["Recuperar datos tras un desastre o pérdida accidental.", "Evitar la redundancia en la información.", "Mejorar el rendimiento del sistema."],
      ok: 0,
      exp: "El backup existe para garantizar la recuperación de datos ante fallos de hardware, errores humanos, ataques o desastres. Sin backup, la pérdida de datos puede ser irreversible."
    },
    {
      p: "¿Qué significa el término hot swapping?",
      ops: ["Creación de copias de seguridad incrementales.", "Sustitución de un disco sin apagar el sistema.", "Configuración de RAID en caliente."],
      ok: 1,
      exp: "El hot swapping permite reemplazar un disco fallido mientras el sistema sigue en funcionamiento, fundamental en entornos RAID para mantener la disponibilidad."
    },
    {
      p: "¿Qué caracteriza a un sistema RAID de software?",
      ops: ["Utiliza el procesador principal para los cálculos.", "Permite el intercambio en caliente de discos.", "Requiere una tarjeta controladora dedicada."],
      ok: 0,
      exp: "El RAID por software gestiona la redundancia usando la CPU del sistema, sin hardware adicional. Es más económico pero consume recursos del procesador principal."
    },
    {
      p: "¿Cuál es una ventaja clave de los sistemas RAID?",
      ops: ["Garantizan la disponibilidad de los datos incluso si falla uno de los discos.", "Aumentan significativamente la velocidad en todas las configuraciones.", "Permiten combinar diferentes tipos de almacenamiento."],
      ok: 0,
      exp: "RAID (Redundant Array of Independent Disks) distribuye o replica datos entre varios discos. Si uno falla, los datos siguen accesibles desde los demás. No sustituye al backup."
    },
    {
      p: "¿Qué tipo de copia de seguridad almacena solo los cambios desde la última copia completa?",
      ops: ["Copia incremental.", "Copia en espejo.", "Copia diferencial."],
      ok: 2,
      exp: "La copia diferencial guarda todos los cambios desde la última copia completa (no desde la última incremental). Es más rápida de restaurar que la incremental pero ocupa más espacio."
    },
    {
      p: "¿Qué ventaja ofrece almacenar copias de seguridad en la nube?",
      ops: ["Permite recuperar datos desde cualquier ubicación.", "Reduce la necesidad de usar discos duros en el servidor.", "Hace que las copias sean más rápidas."],
      ok: 0,
      exp: "La nube permite acceso remoto desde cualquier lugar con Internet, facilitando la recuperación ante desastres que afecten a las instalaciones físicas."
    },
    {
      p: "¿Cuál es una de las principales desventajas de una copia incremental?",
      ops: ["La restauración puede ser más lenta, ya que depende de varias copias.", "No permite recuperar archivos eliminados accidentalmente.", "Necesita más espacio que una copia completa."],
      ok: 0,
      exp: "Para restaurar, se necesita la última copia completa más todas las incrementales posteriores en orden. Cuantas más incrementales haya, más complejo y lento es el proceso."
    },
    {
      p: "Según la regla 3-2-1, ¿cuántas copias de seguridad se deben tener en total?",
      ops: ["3.", "1.", "2."],
      ok: 0,
      exp: "La regla 3-2-1: 3 copias de los datos, en 2 tipos de medios diferentes, con 1 copia en una ubicación remota. Protege ante fallos de hardware, desastres locales y errores humanos."
    },
    {
      p: "¿Qué método garantiza que un backup sea seguro frente a accesos no autorizados?",
      ops: ["Almacenar todas las copias en la misma ubicación física.", "Realizar copias en discos sin protección de acceso.", "Cifrar los archivos de la copia de seguridad."],
      ok: 2,
      exp: "El cifrado (AES, RSA) garantiza que aunque alguien acceda físicamente a los medios de backup, no pueda leer los datos sin la clave de descifrado."
    },
    {
      p: "¿Cuál es la estrategia más efectiva para evitar la pérdida de datos ante ransomware?",
      ops: ["Mantener copias de seguridad desconectadas de la red.", "Guardar todas las copias en la misma unidad de almacenamiento.", "Realizar solo copias en la nube sin cifrado."],
      ok: 0,
      exp: "El ransomware cifra todos los archivos accesibles desde la red. Las copias offline (air-gap) no pueden ser alcanzadas por el malware, garantizando la recuperación."
    },
    {
      p: "¿Cuál es la ventaja principal de una imagen de respaldo frente a una copia de seguridad tradicional?",
      ops: ["No necesita software adicional para su restauración.", "Ocupa menos espacio en disco.", "Permite restaurar todo el sistema, incluyendo el sistema operativo y las configuraciones."],
      ok: 2,
      exp: "Una imagen de respaldo (system image) captura todo el estado del sistema — SO, aplicaciones, configuraciones y datos — permitiendo una restauración completa del entorno."
    },
    {
      p: "¿Qué tipo de almacenamiento requiere intervención humana para insertar las unidades?",
      ops: ["Almacenamiento secundario (HDD/SSD).", "Almacenamiento primario (RAM).", "Almacenamiento terciario (cintas magnéticas)."],
      ok: 2,
      exp: "El almacenamiento terciario (cintas, discos ópticos en bibliotecas robóticas) requiere que un operador o robot introduzca el medio en el lector para acceder a los datos."
    },
    {
      p: "¿Cuál es la diferencia entre NAS y SAN?",
      ops: ["NAS usa Fiber-Channel, SAN usa redes IP.", "NAS es para colaboración en red IP, SAN para alta disponibilidad en Fiber-Channel.", "NAS cifra los datos, SAN no."],
      ok: 1,
      exp: "NAS (Network Attached Storage) comparte archivos por red IP, ideal para entornos colaborativos. SAN (Storage Area Network) usa redes dedicadas Fiber-Channel para bases de datos y aplicaciones críticas de alta disponibilidad."
    },
    { p: "¿Qué diferencia hay entre copia en caliente y copia en frío?", ops: ["La copia en caliente es más fiable que la fría.", "La copia en caliente se realiza con el sistema en marcha; la fría con el sistema detenido.", "La copia fría ocupa menos espacio."], ok: 1, exp: "Copia en caliente (hot backup): sistema activo durante la copia. Copia en frío (cold backup): sistema detenido, garantiza consistencia total pero implica interrupción del servicio." },
    { p: "¿Qué es la deduplicación en copias de seguridad?", ops: ["El proceso de cifrar los bloques duplicados.", "La técnica que elimina bloques de datos repetidos para reducir el espacio de almacenamiento.", "La verificación de integridad mediante hash."], ok: 1, exp: "La deduplicación identifica bloques de datos idénticos y solo almacena una copia, referenciando los duplicados. Puede reducir el espacio necesario hasta un 90% en datos empresariales." },
    { p: "¿Qué es un RTO de 0 segundos?", ops: ["Es imposible de lograr en la práctica.", "Significa que el sistema nunca falla.", "Se logra con alta disponibilidad (HA) y failover automático sin interrupción perceptible."], ok: 2, exp: "Un RTO de 0 (o casi 0) se consigue con sistemas de alta disponibilidad: clúster activo-activo, failover automático, load balancers. El servicio conmuta a un nodo secundario sin interrupción." },
    { p: "¿Qué es la rotación GFS en gestión de backups?", ops: ["Grandfather-Father-Son: esquema de rotación con copias diarias, semanales y mensuales.", "Generic File System: sistema de archivos genérico para backups.", "Guided Failsafe Storage: almacenamiento con redundancia guiada."], ok: 0, exp: "GFS (Grandfather-Father-Son) organiza los backups en tres niveles: Hijo (diario, incremental), Padre (semanal, completo o diferencial) y Abuelo (mensual, completo). Optimiza espacio y cobertura temporal." },
    { p: "¿Qué mide el MTBF de un disco duro?", ops: ["La velocidad media de lectura.", "El tiempo medio entre fallos — estimación estadística de la vida útil.", "El tiempo mínimo de arranque."], ok: 1, exp: "MTBF (Mean Time Between Failures) es la estadística que indica cada cuántas horas, en media, se espera que falle un componente. Un MTBF de 1.000.000 horas no significa que dure 114 años: es probabilístico." },
    { p: "¿Qué es RAID 0?", ops: ["Espejo — copia exacta en dos discos sin redundancia de datos.", "Striping — divide datos entre varios discos para máxima velocidad, sin redundancia.", "Paridad — distribuye datos y paridad entre 3+ discos."], ok: 1, exp: "RAID 0 divide (striping) los datos entre varios discos para multiplicar el rendimiento. Si falla un disco, se pierden todos los datos. No ofrece redundancia: es pura velocidad." },
    { p: "¿Qué es RAID 1?", ops: ["Striping sin redundancia.", "Mirror — copia exacta simultánea en dos o más discos.", "Paridad distribuida entre 5 discos."], ok: 1, exp: "RAID 1 (mirroring) mantiene copias idénticas en dos o más discos. Si falla uno, los datos siguen accesibles en el otro. Sacrifica capacidad (solo usa el 50%) a cambio de redundancia máxima." },
    { p: "¿Qué ventaja tiene el almacenamiento NVMe sobre SSD SATA?", ops: ["NVMe es más barato.", "NVMe usa interfaz PCIe, ofreciendo velocidades hasta 5-7 veces superiores al SSD SATA.", "NVMe tiene mayor capacidad máxima."], ok: 1, exp: "NVMe (Non-Volatile Memory Express) se conecta por PCIe directamente al procesador, eliminando el cuello de botella del controlador SATA. Velocidades de 3.500-7.000 MB/s frente a ~550 MB/s del SATA." },
    { p: "¿Qué es un snapshot en virtualización?", ops: ["Una copia completa de todos los archivos de la máquina virtual.", "Un punto de restauración que captura el estado de una VM en un instante.", "Un tipo de copia de seguridad fría."], ok: 1, exp: "En virtualización, un snapshot captura el estado de la VM (disco, RAM, configuración) en un momento dado. Permite revertir rápidamente a ese estado, útil antes de actualizaciones o cambios." },
    { p: "¿Qué algoritmo de hash se considera actualmente más seguro para verificar integridad?", ops: ["MD5.", "SHA-1.", "SHA-256 o SHA-3."], ok: 2, exp: "MD5 y SHA-1 están criptográficamente rotos (se han demostrado colisiones). SHA-256 (familia SHA-2) y SHA-3 son los estándares actuales recomendados para verificación de integridad." },
    { p: "¿Qué es el cifrado de extremo a extremo en copias de seguridad?", ops: ["Cifrar los datos solo durante la transmisión.", "Cifrar los datos en origen antes de transmitirlos y mantenerlos cifrados en destino, con claves solo en el cliente.", "Cifrar solo el acceso al servidor de backup."], ok: 1, exp: "E2E encryption en backups significa que los datos se cifran en el dispositivo del cliente antes de enviarse. Ni el proveedor del servicio puede acceder al contenido: solo el cliente tiene las claves." },
    { p: "¿Qué es un agente de backup?", ops: ["Un software instalado en el servidor de backup.", "Un software instalado en cada máquina a proteger que gestiona la comunicación con el servidor de backup.", "Un protocolo de red para transferencia de backups."], ok: 1, exp: "El agente de backup es un software cliente (Veeam Agent, Acronis Agent) instalado en el equipo a proteger. Gestiona la captura de datos, la compresión, el cifrado y la transferencia al servidor de backup." },
    { p: "¿Qué garantiza la prueba de restauración de un backup?", ops: ["Que los datos están correctamente cifrados.", "Que los datos pueden recuperarse de forma efectiva cuando sea necesario.", "Que el backup ocupa menos espacio del esperado."], ok: 1, exp: "Un backup no verificado puede ser inútil: errores de escritura, corrupción silenciosa o problemas de compatibilidad pueden hacer irrecuperable el backup. Las pruebas periódicas de restauración son obligatorias." },
    { p: "¿Qué ventaja tiene el almacenamiento en cinta (LTO) para retención a largo plazo?", ops: ["Mayor velocidad de acceso que los discos.", "Bajo coste por GB, gran capacidad y durabilidad superior a 30 años.", "Permite acceso aleatorio instantáneo."], ok: 1, exp: "Las cintas LTO (Linear Tape-Open) tienen coste muy bajo por GB (~0.02$/GB), capacidades de hasta 45TB por cartucho (LTO-9 comprimido) y vida útil de 30+ años. Son el estándar para archivado a largo plazo." },
    { p: "¿Qué es un backup offsite?", ops: ["Una copia de seguridad realizada fuera del horario laboral.", "Una copia almacenada en una ubicación física diferente a la de los datos originales.", "Un backup cifrado externamente."], ok: 1, exp: "Un backup offsite cumple la regla 3-2-1: la tercera copia debe estar en una ubicación diferente (otra sede, caja fuerte externa, nube). Protege ante desastres físicos (incendio, inundación) en la sede principal." },
  ],

  // ─── UF4: Test general de Ciberseguridad ────────────────
  "UF4": [
    {
      p: "¿Qué tipo de virus afecta principalmente a documentos de Office mediante macros?",
      ops: ["Virus de macro.", "Virus de acción directa.", "Virus de sector de arranque."],
      ok: 0,
      exp: "Los virus de macro se insertan en documentos de Office (Word, Excel) aprovechando el lenguaje de macros VBA, ejecutándose cuando se abre el documento infectado."
    },
    {
      p: "¿Cuál de los siguientes comandos de Linux se utiliza para actualizar los paquetes del sistema?",
      ops: ["sudo apt update.", "clear cache.", "sudo format disk."],
      ok: 0,
      exp: "`sudo apt update` actualiza la lista de paquetes disponibles en sistemas Debian/Ubuntu. Después se usa `sudo apt upgrade` para instalar las actualizaciones."
    },
    {
      p: "¿Qué acción ayuda a prevenir ataques por fuerza bruta?",
      ops: ["Configurar contraseñas complejas y seguras.", "Usar contraseñas fáciles de recordar.", "Compartir contraseñas con compañeros de trabajo."],
      ok: 0,
      exp: "Las contraseñas complejas (longitud, mayúsculas, símbolos, números) aumentan exponencialmente el tiempo necesario para un ataque de fuerza bruta. Complementar con bloqueo tras intentos fallidos."
    },
    {
      p: "¿Qué acción es recomendable al detectar un comportamiento sospechoso en un equipo?",
      ops: ["Continuar trabajando normalmente.", "Reiniciar el sistema sin análisis.", "Aislar el equipo de la red para evitar la propagación."],
      ok: 2,
      exp: "Aislar el equipo corta la comunicación con otros sistemas, impidiendo que el malware se propague o que el atacante siga enviando comandos. Es el primer paso del protocolo de respuesta a incidentes."
    },
    {
      p: "¿Cuál de los siguientes es un tipo de software malicioso diseñado para replicarse automáticamente?",
      ops: ["Rootkit.", "Gusano (worm).", "Troyano."],
      ok: 1,
      exp: "Los gusanos se replican automáticamente a través de redes sin necesidad de intervención humana ni de infectar otros programas. El famoso WannaCry era un gusano ransomware."
    },
    {
      p: "¿Qué es un ataque de phishing?",
      ops: ["Un tipo de virus que modifica el sector de arranque.", "Un software que mejora la velocidad de conexión.", "Un intento de obtener información confidencial mediante engaño."],
      ok: 2,
      exp: "El phishing utiliza correos, SMS o webs falsas que imitan entidades legítimas para robar credenciales, datos bancarios u otra información sensible de la víctima."
    },
    {
      p: "¿Cuál de las siguientes herramientas forma parte de la seguridad activa?",
      ops: ["Compiladores de software.", "Programas antivirus.", "Editores de texto."],
      ok: 1,
      exp: "La seguridad activa incluye medidas que detectan y responden a amenazas en tiempo real: antivirus, IDS, firewalls, SIEM. La seguridad pasiva incluye backups, redundancia y cifrado de datos en reposo."
    },
    {
      p: "¿Qué indica un archivo adjunto con extensión .exe recibido por correo electrónico?",
      ops: ["Puede contener código malicioso y debe analizarse antes de abrirlo.", "Solo funciona en sistemas operativos antiguos.", "Es completamente seguro porque viene de un contacto conocido."],
      ok: 0,
      exp: "Los ejecutables .exe son el vector de infección más común vía email. Incluso si el remitente es conocido, su cuenta puede estar comprometida. Siempre analizar con antivirus antes de ejecutar."
    },
    {
      p: "¿Cuál de las siguientes herramientas se utiliza para detectar intrusiones en un sistema?",
      ops: ["IDS (sistema de detección de intrusos).", "Compresor de archivos.", "Procesador de texto."],
      ok: 0,
      exp: "Un IDS (Intrusion Detection System) monitoriza el tráfico de red o los logs del sistema para detectar actividades sospechosas y alertar a los administradores."
    },
    {
      p: "¿A qué se refiere un software que se oculta para mantener el acceso no autorizado al sistema?",
      ops: ["Ransomware.", "Rootkit.", "Spyware."],
      ok: 1,
      exp: "Un rootkit se instala a nivel del SO o kernel para ocultar su presencia y la de otros malware, manteniendo acceso persistente y privilegiado sin ser detectado por herramientas convencionales."
    },
    {
      p: "¿Qué herramienta permite revisar los eventos de seguridad en Windows?",
      ops: ["Visor de eventos.", "Bloc de notas.", "Calculadora."],
      ok: 0,
      exp: "El Visor de eventos (Event Viewer) de Windows registra todos los eventos del sistema, incluidos los de seguridad (inicio de sesión, cambios de permisos, errores), esencial para el análisis forense."
    },
    {
      p: "¿Qué característica no corresponde a un sistema operativo seguro?",
      ops: ["Mantenerlo actualizado con parches de seguridad.", "Permitir la ejecución de cualquier aplicación sin restricciones.", "Configurar permisos de usuario de manera adecuada."],
      ok: 1,
      exp: "Permitir la ejecución sin restricciones viola el principio de menor privilegio. Un SO seguro debe controlar qué aplicaciones pueden ejecutarse y con qué permisos."
    },
    {
      p: "¿Qué elemento constituye un plan de contingencia ante un fallo de seguridad?",
      ops: ["Ignorar alertas de seguridad menores.", "Evaluar los riesgos y planificar acciones de recuperación.", "Reiniciar el equipo sin análisis previo."],
      ok: 1,
      exp: "Un plan de contingencia incluye identificación de riesgos, procedimientos de respuesta, roles y responsabilidades, y pasos para restaurar la operación normal minimizando el impacto."
    },
    {
      p: "¿Qué opción ayuda a prevenir la entrada de software malicioso en un sistema?",
      ops: ["Desactivar el firewall.", "Mantener el sistema operativo y las aplicaciones actualizadas.", "Descargar software de fuentes desconocidas."],
      ok: 1,
      exp: "Las actualizaciones corrigen vulnerabilidades conocidas (CVEs) que el malware explota. Un sistema sin parches es el objetivo preferido de los atacantes."
    },
    {
      p: "¿Qué medida básica ayuda a proteger un sistema contra virus informáticos?",
      ops: ["Compartir contraseñas con usuarios de confianza.", "Desactivar el antivirus para mejorar el rendimiento.", "Instalar un programa antivirus actualizado."],
      ok: 2,
      exp: "Un antivirus actualizado dispone de las últimas definiciones de malware, permitiendo detectar y eliminar las amenazas más recientes. Sin actualización, pierde efectividad rápidamente."
    },
    { p: "¿Qué es un troyano informático?", ops: ["Un virus que se replica por red automáticamente.", "Malware que se disfraza de software legítimo para ejecutarse en el sistema sin ser detectado.", "Un programa que cifra archivos y pide rescate."], ok: 1, exp: "Un troyano (Trojan Horse) finge ser software útil o legítimo para engañar al usuario e instalarse. Una vez dentro, puede abrir puertas traseras, robar datos o instalar más malware. No se replica solo." },
    { p: "¿Qué es el análisis de vulnerabilidades?", ops: ["La instalación automática de parches de seguridad.", "El proceso de identificar, clasificar y priorizar los puntos débiles de seguridad en sistemas.", "La auditoría de contraseñas de usuarios."], ok: 1, exp: "El análisis de vulnerabilidades examina sistemas en busca de debilidades conocidas (CVEs), configuraciones erróneas o software desactualizado. Herramientas: Nessus, OpenVAS, Qualys." },
    { p: "¿Qué es el hardening de sistemas?", ops: ["La actualización automática del sistema operativo.", "El proceso de reducir la superficie de ataque eliminando servicios innecesarios y aplicando configuraciones seguras.", "La instalación de hardware adicional para mejorar la seguridad."], ok: 1, exp: "El hardening refuerza un sistema eliminando software no necesario, cerrando puertos abiertos sin uso, aplicando políticas de contraseñas, configurando permisos mínimos y aplicando todos los parches." },
    { p: "¿Qué es un honeypot en ciberseguridad?", ops: ["Un sistema señuelo diseñado para atraer y estudiar a los atacantes.", "Una herramienta de cifrado de datos sensibles.", "Un tipo de firewall avanzado."], ok: 0, exp: "Un honeypot es un sistema falso que simula ser un objetivo atractivo. Atrae a atacantes, registra sus técnicas y alerta al equipo de seguridad. Permite estudiar comportamientos sin riesgo para sistemas reales." },
    { p: "¿Qué es el CVE en ciberseguridad?", ops: ["Common Vulnerability Exposure — listado público de vulnerabilidades conocidas.", "Cifrado de Variables de Entorno.", "Control de Versiones Empresarial."], ok: 0, exp: "CVE (Common Vulnerabilities and Exposures) es el sistema estándar de identificación de vulnerabilidades conocidas. Cada vuln tiene un ID único (CVE-2021-44228 fue Log4Shell). Mantenido por MITRE." },
    { p: "¿Qué es un SIEM?", ops: ["Sistema de información y gestión de eventos de seguridad que centraliza logs y detecta patrones.", "Software de inventario de equipos de red.", "Sistema de escaneo de vulnerabilidades automático."], ok: 0, exp: "SIEM (Security Information and Event Management) agrega logs de toda la infraestructura, correlaciona eventos y detecta patrones sospechosos en tiempo real. Ejemplos: Splunk, IBM QRadar, Microsoft Sentinel." },
    { p: "¿Qué es un ataque de día cero (zero-day)?", ops: ["Un ataque que ocurre el primer día del mes.", "Un ataque que explota una vulnerabilidad desconocida para el fabricante, sin parche disponible.", "Un ataque de fuerza bruta que dura exactamente 24 horas."], ok: 1, exp: "Un zero-day explota una vulnerabilidad que el fabricante no conoce y para la que no existe parche. Son extremadamente valiosos en el mercado negro porque los sistemas afectados no tienen defensa inmediata." },
    { p: "¿Qué es el pentesting o prueba de penetración?", ops: ["Un test de rendimiento de servidores bajo carga.", "Un proceso autorizado de ataque a un sistema para descubrir vulnerabilidades reales antes que los atacantes.", "Una auditoría de cumplimiento normativo."], ok: 1, exp: "El pentesting simula ataques reales de forma controlada y autorizada. El resultado es un informe con las vulnerabilidades encontradas y recomendaciones de remediación. Fases: reconocimiento, escaneo, explotación, post-explotación, informe." },
    { p: "¿Qué diferencia hay entre escáner de red y analizador de paquetes?", ops: ["Son idénticos.", "El escáner descubre hosts y puertos abiertos; el analizador captura y examina el contenido del tráfico.", "El analizador es ilegal y el escáner no."], ok: 1, exp: "Escáner (Nmap): descubre qué hosts existen y qué puertos/servicios tienen abiertos. Analizador/sniffer (Wireshark): captura el tráfico real y permite examinar el contenido de los paquetes." },
    { p: "¿Qué es el footprinting en hacking ético?", ops: ["El análisis de huellas dactilares para acceso biométrico.", "La fase de reconocimiento donde se recopila información pública sobre el objetivo antes del ataque.", "La técnica de borrar rastros tras un ataque."], ok: 1, exp: "El footprinting (reconocimiento pasivo) recopila información disponible públicamente sobre el objetivo: WHOIS, DNS, redes sociales, ofertas de trabajo, tecnologías usadas. No interactúa directamente con el sistema." },
    { p: "¿Qué tipo de malware muestra publicidad no deseada en el sistema?", ops: ["Ransomware.", "Adware.", "Spyware."], ok: 1, exp: "El adware muestra anuncios no solicitados, modifica la página de inicio del navegador o redirige búsquedas. Aunque menos dañino que otros malware, degrada el rendimiento y puede ser vector de infecciones más graves." },
    { p: "¿Qué es el spyware?", ops: ["Software que cifra archivos del usuario.", "Malware que recopila información del usuario (hábitos, credenciales, datos personales) sin su conocimiento.", "Software que muestra anuncios intrusivos."], ok: 1, exp: "El spyware se instala silenciosamente y monitoriza actividad: sitios visitados, teclas pulsadas (keylogger), capturas de pantalla, credenciales. Los datos recopilados se envían al atacante." },
    { p: "¿Qué es la ingeniería inversa en ciberseguridad?", ops: ["El proceso de analizar malware o software para entender su funcionamiento interno sin acceso al código fuente.", "La técnica de recuperar contraseñas mediante fuerza bruta.", "El proceso de documentar sistemas heredados."], ok: 0, exp: "La ingeniería inversa (reverse engineering) desmonta un binario para entender qué hace. En ciberseguridad se usa para analizar malware, encontrar vulnerabilidades o verificar si un software hace lo que dice." },
    { p: "¿Qué es el principio de defensa en profundidad?", ops: ["Usar un único firewall muy potente.", "Implementar múltiples capas de seguridad para que si una falla, las demás contengan el ataque.", "Proteger solo los datos más críticos."], ok: 1, exp: "Defense in Depth superpone múltiples controles de seguridad (perimetral, red, host, aplicación, datos) para que el atacante deba superar varias barreras independientes. Si una capa falla, las demás siguen activas." },
    { p: "¿Qué herramienta de línea de comandos de Linux permite ver las conexiones de red activas?", ops: ["ls -la.", "netstat o ss.", "chmod 755."], ok: 1, exp: "netstat (o su sucesor ss) muestra las conexiones de red activas, puertos en escucha y estadísticas. Ejemplo: `netstat -tulpn` lista todos los puertos TCP/UDP en escucha con el proceso asociado." },
  ],

  // ─── UF5: Seguridad en Redes ─────────────────────────────
  "UF5": [
    {
      p: "¿Qué ataque consiste en engañar con correos o sitios falsos para robar información?",
      ops: ["Phishing.", "Spoofing.", "Sniffing."],
      ok: 0,
      exp: "El phishing es una técnica de ingeniería social que suplanta la identidad de entidades legítimas (bancos, servicios online) para engañar a la víctima y obtener sus credenciales."
    },
    {
      p: "¿Cuál es la principal función de un proxy en una red?",
      ops: ["Actuar como intermediario entre los usuarios y los servidores externos.", "Proteger las bases de datos contra inyección SQL.", "Almacenar datos de respaldo para evitar su pérdida."],
      ok: 0,
      exp: "Un proxy intercepta las peticiones de los clientes hacia Internet, permitiendo filtrar contenido, cachear respuestas, ocultar IPs internas y aplicar políticas de uso."
    },
    {
      p: "¿Qué tipo de firewall analiza el estado de una conexión antes de permitir el tráfico?",
      ops: ["Firewall de filtrado de paquetes.", "Firewall basado en reglas estáticas.", "Firewall de estado."],
      ok: 2,
      exp: "El firewall stateful (de estado) mantiene una tabla de conexiones activas y verifica que cada paquete pertenezca a una conexión legítima, siendo más seguro que el simple filtrado de paquetes."
    },
    {
      p: "¿Qué tipo de ataque introduce código malicioso en formularios web para manipular bases de datos?",
      ops: ["Ransomware.", "Sniffing.", "Inyección SQL."],
      ok: 2,
      exp: "La inyección SQL inserta instrucciones SQL en campos de formulario para manipular la base de datos: extraer datos, saltarse autenticación o eliminar registros."
    },
    {
      p: "¿Qué mecanismo protege los servidores expuestos a Internet sin comprometer la red interna?",
      ops: ["DMZ (zona desmilitarizada).", "VLAN.", "Proxy caché."],
      ok: 0,
      exp: "La DMZ es una zona de red intermedia entre Internet y la red interna donde se ubican los servidores públicos (web, correo). Si son comprometidos, el atacante no accede directamente a la red interna."
    },
    {
      p: "¿Qué herramienta se usa para escanear puertos y detectar servicios abiertos en una red?",
      ops: ["Wireshark.", "Nmap.", "Squid."],
      ok: 1,
      exp: "Nmap (Network Mapper) es la herramienta estándar para descubrimiento de hosts y auditoría de servicios abiertos en una red, fundamental en pentesting y administración de redes."
    },
    {
      p: "¿Cuál es una medida efectiva para mitigar ataques de fuerza bruta en accesos remotos?",
      ops: ["Usar contraseñas cortas y fáciles de recordar.", "Permitir intentos ilimitados de inicio de sesión.", "Implementar autenticación multifactor (MFA)."],
      ok: 2,
      exp: "El MFA añade una segunda capa de verificación (SMS, app autenticadora, token físico) que hace inútil la contraseña aunque el atacante la obtenga por fuerza bruta."
    },
    {
      p: "¿Qué tipo de ataque se basa en interceptar el tráfico sin modificarlo?",
      ops: ["Sniffing.", "Ransomware.", "Phishing."],
      ok: 0,
      exp: "El sniffing (escucha pasiva) captura el tráfico de red para analizarlo. En redes no cifradas permite obtener credenciales, correos y datos sensibles. Herramienta: Wireshark."
    },
    {
      p: "¿Qué protocolo cifra el tráfico de las conexiones web para proteger la información?",
      ops: ["HTTP.", "HTTPS.", "FTP."],
      ok: 1,
      exp: "HTTPS (HTTP Secure) usa SSL/TLS para cifrar la comunicación entre el navegador y el servidor, impidiendo que intermediarios lean o modifiquen los datos transmitidos."
    },
    {
      p: "¿Cuál de los siguientes tipos de firewall es más efectivo para bloquear ataques a aplicaciones web?",
      ops: ["Proxy transparente.", "Firewall de estado.", "WAF (Web Application Firewall)."],
      ok: 2,
      exp: "Un WAF analiza el tráfico HTTP/HTTPS a nivel de aplicación, detectando y bloqueando ataques específicos como inyección SQL, XSS, CSRF que un firewall de red no puede ver."
    },
    {
      p: "¿Qué protocolo se recomienda para acceder de forma segura a un servidor remoto?",
      ops: ["FTP.", "Telnet.", "SSH."],
      ok: 2,
      exp: "SSH (Secure Shell) cifra toda la comunicación con el servidor remoto, incluyendo credenciales y comandos. Telnet y FTP transmiten en texto plano, siendo totalmente inseguros."
    },
    {
      p: "¿Qué ventaja ofrece un proxy inverso en la seguridad de una red?",
      ops: ["Protege los servidores internos contra accesos directos desde Internet.", "Permite ocultar las IPs de los usuarios internos.", "Aumenta la velocidad de descarga de archivos personales."],
      ok: 0,
      exp: "El proxy inverso se sitúa delante de los servidores web, recibiendo las peticiones externas y reenvíándolas internamente. Oculta la arquitectura interna y puede hacer de WAF y balanceador."
    },
    {
      p: "¿Cuál es el principal objetivo de la seguridad de red?",
      ops: ["Aumentar la velocidad de conexión a Internet.", "Optimizar el uso del ancho de banda.", "Garantizar la confidencialidad, la integridad y la disponibilidad de la información."],
      ok: 2,
      exp: "La tríada CIA (Confidentiality, Integrity, Availability) es el fundamento de la seguridad de la información: proteger los datos de accesos no autorizados, modificaciones y garantizar su disponibilidad."
    },
    {
      p: "¿Qué función cumple un firewall en una red?",
      ops: ["Filtrar y controlar el tráfico de red según reglas de seguridad.", "Almacenar copias de seguridad de los datos.", "Bloquear todos los accesos externos a la red."],
      ok: 0,
      exp: "Un firewall aplica reglas (ACLs) que determinan qué tráfico se permite o deniega basándose en IPs, puertos, protocolos y estado de la conexión. No bloquea todo, solo lo no autorizado."
    },
    {
      p: "¿Cuál de estos ataques busca saturar un servidor para dejarlo fuera de servicio?",
      ops: ["Inyección SQL.", "Denegación de servicio (DoS/DDoS).", "Man-in-the-Middle (MitM)."],
      ok: 1,
      exp: "Un ataque DoS/DDoS inunda el servidor con miles de peticiones por segundo hasta que agota sus recursos y deja de responder a usuarios legítimos. El DDoS usa miles de equipos comprometidos (botnet)."
    },
    { p: "¿Qué es un ataque Man-in-the-Middle (MitM)?", ops: ["Un ataque donde el atacante intercepta y puede modificar la comunicación entre dos partes sin que lo sepan.", "Un ataque de fuerza bruta a contraseñas de administrador.", "Un ataque que satura el ancho de banda de la red."], ok: 0, exp: "En un MitM el atacante se posiciona entre cliente y servidor, interceptando y pudiendo modificar el tráfico. Técnicas: ARP spoofing, DNS poisoning, SSL stripping. Mitigación: HTTPS, certificados válidos." },
    { p: "¿Qué es una botnet?", ops: ["Una red de pruebas de penetración autorizada.", "Una red de dispositivos comprometidos controlados remotamente por un atacante para ejecutar ataques coordinados.", "Un sistema de monitorización de redes empresariales."], ok: 1, exp: "Una botnet es una red de dispositivos (PCs, IoT, servidores) infectados con malware que los convierte en 'bots' controlados por el atacante (C&C server). Se usan para DDoS, spam, minería, etc." },
    { p: "¿Qué es el protocolo VLAN y para qué sirve en seguridad?", ops: ["Es un protocolo de cifrado de tráfico de red.", "Permite segmentar lógicamente una red física en redes virtuales independientes, limitando el alcance de las brechas.", "Es un protocolo de enrutamiento dinámico."], ok: 1, exp: "Las VLANs (Virtual LAN) segmentan la red a nivel 2. Si un equipo de una VLAN es comprometido, el atacante no puede acceder directamente a otras VLANs. Reduce el radio de impacto de un ataque." },
    { p: "¿Qué es el protocolo HTTPS?", ops: ["HTTP con compresión de datos.", "HTTP sobre TLS/SSL que cifra el tráfico web entre cliente y servidor.", "Un protocolo de transferencia de archivos seguro."], ok: 1, exp: "HTTPS = HTTP + TLS. Cifra la comunicación, autentica el servidor mediante su certificado y garantiza la integridad de los datos intercambiados. Esencial para cualquier web que maneje datos sensibles." },
    { p: "¿Qué es un ataque de XSS (Cross-Site Scripting)?", ops: ["Inyección de comandos SQL en formularios.", "Inyección de scripts maliciosos en páginas web que se ejecutan en el navegador de otros usuarios.", "Ataque que suplanta la dirección IP del servidor."], ok: 1, exp: "XSS inyecta código JavaScript malicioso en páginas web. Cuando otro usuario carga la página, el script se ejecuta en su navegador: puede robar cookies de sesión, redirigir a phishing o modificar contenido." },
    { p: "¿Qué es CSRF (Cross-Site Request Forgery)?", ops: ["Un ataque que inyecta SQL en formularios.", "Un ataque que fuerza al navegador autenticado de la víctima a realizar acciones no deseadas en un sitio web.", "Un tipo de XSS persistente."], ok: 1, exp: "CSRF engaña al navegador de un usuario autenticado para que envíe peticiones no autorizadas. Ejemplo: un enlace en un email que, al clicar, transfiere dinero desde la banca online de la víctima (ya autenticada)." },
    { p: "¿Qué protección ofrece un IPS frente a un IDS?", ops: ["El IPS solo detecta; el IDS además bloquea.", "El IDS solo detecta; el IPS detecta Y bloquea activamente el tráfico malicioso.", "Son equivalentes, solo difieren en el nombre."], ok: 1, exp: "IDS (Intrusion Detection System): detecta y alerta. IPS (Intrusion Prevention System): detecta y bloquea activamente. El IPS se coloca inline en el tráfico; el IDS solo lo monitoriza en modo pasivo." },
    { p: "¿Qué es el protocolo 802.1X?", ops: ["Un estándar WiFi de alta velocidad.", "Un estándar de control de acceso a red que requiere autenticación antes de permitir acceso a la infraestructura.", "Un protocolo de cifrado para redes inalámbricas."], ok: 1, exp: "IEEE 802.1X es el estándar de autenticación de acceso a red (NAC). Requiere que el dispositivo se autentique (usuario/contraseña, certificado) ante un servidor RADIUS antes de acceder a la VLAN de producción." },
    { p: "¿Qué puerto usa el protocolo SSH por defecto?", ops: ["21.", "22.", "23."], ok: 1, exp: "SSH usa el puerto 22 TCP. Por seguridad se recomienda cambiar a un puerto no estándar (oscuridad), pero no es una medida de seguridad real. FTP usa 21, Telnet usa 23 (sin cifrado, obsoleto)." },
    { p: "¿Qué es un proxy transparente?", ops: ["Un proxy que no requiere configuración en el cliente y es invisible para él.", "Un proxy que cifra todo el tráfico automáticamente.", "Un proxy solo disponible en redes IPv6."], ok: 0, exp: "Un proxy transparente intercepta el tráfico sin necesitar configuración en el cliente. El usuario ni sabe que existe. Se usa para filtrado de contenido, caché y logging en empresas sin modificar los equipos." },
    { p: "¿Qué es la inspección profunda de paquetes (DPI)?", ops: ["El análisis solo de las cabeceras IP de los paquetes.", "El análisis del contenido completo de los paquetes (cabecera + payload) para detectar amenazas o aplicar políticas.", "La verificación de integridad mediante hash de cada paquete."], ok: 1, exp: "DPI (Deep Packet Inspection) examina el contenido real del paquete, no solo las cabeceras. Permite detectar malware, bloquear aplicaciones específicas o identificar protocolos encubiertos en otros puertos." },
    { p: "¿Cuál es la diferencia entre un firewall de red y un WAF?", ops: ["Son idénticos, solo cambia el nombre.", "Un firewall de red filtra por IP/puerto; un WAF filtra tráfico HTTP/HTTPS a nivel de aplicación web.", "El WAF es más antiguo y menos eficaz."], ok: 1, exp: "Firewall de red: capa 3-4, filtra por IP, puerto y protocolo. WAF (Web Application Firewall): capa 7, entiende HTTP/HTTPS y protege contra ataques web (SQLi, XSS, CSRF). Son complementarios." },
    { p: "¿Qué es el cifrado WPA3?", ops: ["La primera versión del protocolo de seguridad WiFi.", "La versión más moderna del protocolo de seguridad WiFi, con SAE para claves más robustas.", "Un protocolo de autenticación para redes cableadas."], ok: 1, exp: "WPA3 (2018) mejora WPA2 con SAE (Simultaneous Authentication of Equals, basado en Dragonfly), protección contra ataques de diccionario offline y cifrado de 192 bits para redes empresariales." },
    { p: "¿Qué es un ataque de ARP Spoofing?", ops: ["Suplantación de direcciones MAC en la tabla ARP para redirigir el tráfico de red hacia el atacante.", "Inyección de paquetes maliciosos en el protocolo de enrutamiento.", "Ataque de denegación de servicio a nivel de capa 2."], ok: 0, exp: "ARP Spoofing envía respuestas ARP falsas para asociar la MAC del atacante con la IP de la víctima o del gateway. Resultado: el tráfico se redirige al atacante (MitM). Mitigación: Dynamic ARP Inspection." },
    { p: "¿Qué es el DNS over HTTPS (DoH)?", ops: ["Un protocolo para transferir archivos sobre DNS.", "Una técnica que cifra las consultas DNS dentro de tráfico HTTPS para evitar espionaje o manipulación.", "Un sistema de caché DNS distribuido."], ok: 1, exp: "DoH (RFC 8484) envía las consultas DNS cifradas dentro de conexiones HTTPS al puerto 443, impidiendo que ISPs o atacantes espíen o manipulen las resoluciones DNS. Firefox y Chrome lo soportan nativamente." },
  ],

  // ─── UF6: Ciberseguridad y Redes ─────────────────────────
  "UF6": [
    {
      p: "¿Qué garantiza un certificado digital?",
      ops: ["La identidad del emisor.", "La disponibilidad del servidor.", "La velocidad de conexión."],
      ok: 0,
      exp: "Un certificado digital emitido por una CA (Autoridad Certificadora) vincula una clave pública con la identidad de su propietario, permitiendo verificar que estamos comunicando con quien creemos."
    },
    {
      p: "¿Cuál de las siguientes técnicas pertenece a la ingeniería social?",
      ops: ["Phishing.", "DDoS.", "Brute forcé."],
      ok: 0,
      exp: "La ingeniería social manipula psicológicamente a las personas para obtener información o acceso. El phishing es su técnica más común; DDoS y fuerza bruta son ataques técnicos."
    },
    {
      p: "¿Qué capa del modelo OSI se encarga del cifrado y la compresión de datos?",
      ops: ["Transporte.", "Presentación.", "Aplicación."],
      ok: 1,
      exp: "La capa 6 (Presentación) del modelo OSI es responsable del cifrado, descifrado, compresión y traducción de datos entre el formato de red y el formato de la aplicación."
    },
    {
      p: "¿Cuál es el principal problema del protocolo WEP?",
      ops: ["Solo funciona en servidores.", "Tiene una encriptación débil.", "Es lento."],
      ok: 1,
      exp: "WEP (Wired Equivalent Privacy) usa RC4 con claves de 40/104 bits y vectores de inicialización estáticos, lo que permite romper la clave en minutos con herramientas como aircrack-ng."
    },
    {
      p: "¿Qué define mejor una red ad-hoc?",
      ops: ["Usa conexiones por cable.", "Los dispositivos conectan directamente entre sí.", "Usa un router central."],
      ok: 1,
      exp: "Una red ad-hoc (IBSS) conecta dispositivos directamente entre ellos sin necesitar un punto de acceso o router central. Útil para compartir archivos entre pocos dispositivos cercanos."
    },
    {
      p: "¿Qué herramienta permite detectar intrusiones en la red?",
      ops: ["Linux Mint.", "SNMP.", "IDS."],
      ok: 2,
      exp: "Un IDS (Intrusion Detection System) analiza el tráfico de red en busca de patrones maliciosos. Snort es el IDS de red open source más conocido."
    },
    {
      p: "¿Qué significa SSID en una red wifi?",
      ops: ["Sistema de cifrado inalámbrico.", "Identificador de red.", "Controlador de señal."],
      ok: 1,
      exp: "SSID (Service Set Identifier) es el nombre que identifica una red WiFi. Es lo que ves cuando buscas redes disponibles. Puede ocultarse pero no proporciona seguridad real."
    },
    {
      p: "¿Qué puerto se usa comúnmente para HTTPS?",
      ops: ["80.", "443.", "110."],
      ok: 1,
      exp: "HTTPS usa el puerto 443 por defecto. HTTP usa el 80, SMTP el 25, POP3 el 110 y FTP el 21. Conocer los puertos estándar es esencial en administración de redes."
    },
    {
      p: "¿Cuál de estas herramientas sirve para escanear puertos y servicios?",
      ops: ["Wireshark.", "Nmap.", "Kali Linux."],
      ok: 1,
      exp: "Nmap es la herramienta de escaneo de puertos y descubrimiento de servicios más utilizada. Kali Linux es una distribución que incluye Nmap entre otras herramientas; Wireshark captura tráfico."
    },
    {
      p: "¿Qué hace el protocolo NAT?",
      ops: ["Analiza malware.", "Traduce direcciones IP.", "Encripta emails."],
      ok: 1,
      exp: "NAT (Network Address Translation) traduce las IPs privadas de la red local a la IP pública del router al salir a Internet, permitiendo que muchos dispositivos compartan una sola IP pública."
    },
    {
      p: "¿Qué tipo de dirección IP se asigna automáticamente mediante DHCP?",
      ops: ["Estática.", "Dinámica.", "Reservada."],
      ok: 1,
      exp: "DHCP (Dynamic Host Configuration Protocol) asigna automáticamente IPs dinámicas a los dispositivos de la red. Las IPs estáticas se configuran manualmente; las reservadas son dinámicas pero siempre asignadas al mismo dispositivo."
    },
    {
      p: "¿Cuál de estas es una recomendación para evitar el spam?",
      ops: ["Usar cuentas distintas para diferentes usos.", "Responder a correos desconocidos.", "Publicar la dirección en foros y redes sociales."],
      ok: 0,
      exp: "Tener cuentas separadas (personal, trabajo, registros online) limita el impacto del spam. Responder a spam o publicar el email en foros alimenta las listas de spammers."
    },
    {
      p: "¿Qué función cumple el firewall en una red?",
      ops: ["Almacenar datos de respaldo.", "Encriptar mensajes.", "Filtrar tráfico entre redes."],
      ok: 2,
      exp: "El firewall controla el tráfico entre redes (interna/externa, diferentes VLANs) aplicando reglas que permiten o deniegan paquetes según criterios de seguridad predefinidos."
    },
    {
      p: "¿Qué protocolo permite la gestión remota y centralizada de dispositivos de red?",
      ops: ["HTTPS.", "FTP.", "SNMP."],
      ok: 2,
      exp: "SNMP (Simple Network Management Protocol) permite monitorizar y gestionar dispositivos de red (routers, switches, servidores) de forma remota y centralizada. La versión 3 incluye cifrado."
    },
    {
      p: "¿Qué tipo de firma tiene el mayor valor legal en la UE?",
      ops: ["Cualificada.", "Simple.", "Especial."],
      ok: 0,
      exp: "El Reglamento eIDAS establece tres niveles de firma: simple, avanzada y cualificada. La firma electrónica cualificada tiene el mismo valor legal que la firma manuscrita en toda la UE."
    },
    { p: "¿Qué es la segmentación de red y por qué mejora la seguridad?", ops: ["Dividir la red en subredes aisladas para limitar el movimiento lateral de un atacante.", "Aplicar cifrado a todos los segmentos de cable de red.", "Duplicar la red para aumentar la disponibilidad."], ok: 0, exp: "La segmentación divide la red en zonas (DMZ, producción, desarrollo, invitados) con firewalls entre ellas. Si un atacante compromete una zona, no puede moverse libremente a otras. Reduce el radio de impacto." },
    { p: "¿Qué es el protocolo LDAP?", ops: ["Protocolo de acceso a directorios para autenticación y gestión de usuarios centralizada.", "Protocolo de transferencia de archivos ligero.", "Protocolo de monitorización de red."], ok: 0, exp: "LDAP (Lightweight Directory Access Protocol) permite acceder y gestionar directorios de usuarios (Active Directory, OpenLDAP). Se usa para autenticación centralizada: un usuario, una contraseña para todos los sistemas." },
    { p: "¿Para qué sirve el protocolo RADIUS en seguridad de red?", ops: ["Para asignar IPs dinámicas a los dispositivos.", "Para autenticar y autorizar el acceso de usuarios a la red, centralizando las políticas de acceso.", "Para cifrar el tráfico entre routers."], ok: 1, exp: "RADIUS (Remote Authentication Dial-In User Service) centraliza la autenticación de acceso a red. Cuando un usuario se conecta al WiFi corporativo con 802.1X, el switch consulta al servidor RADIUS para autorizar el acceso." },
    { p: "¿Qué es el protocolo TACACS+?", ops: ["Una alternativa a RADIUS para autenticar acceso a dispositivos de red (routers, switches), con cifrado completo de la sesión.", "Un protocolo de monitorización de red.", "Un sucesor del protocolo FTP."], ok: 0, exp: "TACACS+ (Terminal Access Controller Access-Control System Plus) es similar a RADIUS pero cifra toda la sesión (no solo la contraseña) y separa autenticación, autorización y contabilidad (AAA). Preferido para dispositivos Cisco." },
    { p: "¿Qué es el modelo de referencia OSI y cuántas capas tiene?", ops: ["Un modelo de 4 capas para diseño de protocolos de internet.", "Un modelo de 7 capas para estandarizar las comunicaciones de red.", "Un modelo de 5 capas para seguridad de aplicaciones."], ok: 1, exp: "El modelo OSI tiene 7 capas: 1-Física, 2-Enlace, 3-Red, 4-Transporte, 5-Sesión, 6-Presentación, 7-Aplicación. Cada capa tiene funciones específicas y usa los servicios de la capa inferior." },
    { p: "¿Qué es un ataque de VLAN hopping?", ops: ["Saturar los puertos de un switch para deshabilitar la segmentación VLAN.", "Técnica para acceder a tráfico de VLANs no autorizadas explotando configuraciones erróneas del switch.", "Un ataque DDoS específico contra switches gestionados."], ok: 1, exp: "VLAN hopping usa técnicas como switch spoofing o double tagging para enviar tráfico a una VLAN diferente a la asignada. Mitigación: desactivar DTP, configurar explícitamente los puertos de acceso y trunk." },
    { p: "¿Qué es WPS en redes WiFi y por qué es problemático?", ops: ["WiFi Protected Setup — método simplificado de conexión con PIN de 8 dígitos vulnerable a fuerza bruta.", "Wireless Protection System — sistema de cifrado mejorado.", "Wireless Power Standard — estándar de carga inalámbrica."], ok: 0, exp: "WPS permite conectar dispositivos con un PIN de 8 dígitos. El diseño del protocolo permite ataques de fuerza bruta en ~11.000 intentos (en lugar de 100 millones). Recomendación: desactivar WPS." },
    { p: "¿Qué es IPv6 y qué diferencia tiene respecto a IPv4 en términos de seguridad?", ops: ["IPv6 es idéntico a IPv4 pero con más velocidad.", "IPv6 usa direcciones de 128 bits (vs 32 de IPv4) e incluye IPSec de forma nativa.", "IPv6 elimina la necesidad de firewalls."], ok: 1, exp: "IPv6 amplía el espacio de direcciones y tiene IPSec integrado de forma nativa (en IPv4 es opcional). Sin embargo, muchas organizaciones no han securizado bien su implementación IPv6, creando nuevos vectores de ataque." },
    { p: "¿Qué es un sistema NAC (Network Access Control)?", ops: ["Un sistema que controla el acceso a la red verificando el estado de seguridad del dispositivo.", "Un protocolo de cifrado de acceso remoto.", "Un tipo de firewall de aplicaciones."], ok: 0, exp: "NAC verifica que un dispositivo cumple las políticas de seguridad (antivirus actualizado, OS parcheado, cifrado activo) antes de permitirle acceder a la red corporativa. Si no cumple, lo pone en cuarentena." },
    { p: "¿Qué puertos usa el protocolo SMTP?", ops: ["Puerto 25 (entre servidores) y 587 (cliente autenticado).", "Puerto 80 y 443.", "Puerto 21 y 22."], ok: 0, exp: "SMTP usa el puerto 25 para comunicación entre servidores de correo (MTA-to-MTA). El puerto 587 (con STARTTLS) se usa para el envío autenticado desde clientes de correo. El 465 es para SMTPS (cifrado SSL)." },
    { p: "¿Qué es el protocolo IMAP y en qué se diferencia de POP3?", ops: ["Ambos son idénticos.", "IMAP sincroniza el correo en el servidor (accesible desde varios dispositivos); POP3 lo descarga y borra del servidor.", "POP3 es más seguro que IMAP."], ok: 1, exp: "IMAP (puerto 143/993) mantiene los correos en el servidor y sincroniza el estado entre dispositivos. POP3 (puerto 110/995) descarga y elimina del servidor. IMAP es preferible para usuarios con varios dispositivos." },
    { p: "¿Qué es el protocolo TLS 1.3 y qué mejoras introduce?", ops: ["Es idéntico a TLS 1.2 con un nombre diferente.", "Elimina algoritmos inseguros, reduce la latencia del handshake a 1-RTT y añade 0-RTT para reconexiones.", "Es un protocolo solo para tráfico HTTPS."], ok: 1, exp: "TLS 1.3 (RFC 8446, 2018) elimina algoritmos débiles (RSA sin forward secrecy, RC4, DES), reduce el handshake a 1 viaje de ida y vuelta (vs 2 en TLS 1.2) y soporta 0-RTT para sesiones reanudadas." },
    { p: "¿Qué es el tunneling en redes?", ops: ["Una técnica para aumentar el ancho de banda disponible.", "El encapsulamiento de un protocolo dentro de otro para crear un canal privado sobre una red pública.", "La compresión de datos antes de su transmisión."], ok: 1, exp: "El tunneling encapsula un protocolo dentro de otro. Una VPN crea un túnel cifrado (IPSec, OpenVPN, WireGuard) a través de Internet para conectar redes privadas de forma segura como si fueran una LAN." },
    { p: "¿Qué es el principio de zero trust en seguridad de red?", ops: ["No confiar en ningún usuario o dispositivo por defecto, verificar siempre antes de conceder acceso.", "Usar solo software de código abierto auditado.", "Eliminar todos los firewalls y confiar en el cifrado."], ok: 0, exp: "Zero Trust asume que ningún usuario, dispositivo o red es de confianza por defecto, incluso dentro del perímetro corporativo. Requiere verificación continua: autenticación fuerte, autorización por contexto y mínimo privilegio." },
    { p: "¿Qué es el protocolo Telnet y por qué se considera inseguro?", ops: ["Un protocolo de acceso remoto cifrado que sustituyó a SSH.", "Un protocolo de acceso remoto que transmite todo en texto plano, incluyendo credenciales.", "Un protocolo de monitorización de servidores."], ok: 1, exp: "Telnet (puerto 23) permite gestión remota de equipos pero transmite todo sin cifrar. Cualquier sniffer en la red puede capturar usuario, contraseña y comandos. Debe sustituirse siempre por SSH." },
  ],

  // ─── UF7: Criptografía ───────────────────────────────────
  "UF7": [
    {
      p: "¿Qué infraestructura permite la gestión de claves y certificados digitales?",
      ops: ["SSL/TLS.", "PKI (infraestructura de clave pública).", "AES (Advanced Encryption Standard)."],
      ok: 1,
      exp: "PKI (Public Key Infrastructure) es el conjunto de hardware, software, políticas y procedimientos para crear, gestionar, distribuir, usar, almacenar y revocar certificados digitales."
    },
    {
      p: "¿Qué método se utiliza para verificar que un archivo descargado no ha sido modificado?",
      ops: ["Cifrado del archivo con una clave privada.", "Uso de una VPN para proteger la descarga.", "Comparación de su hash con el publicado por el proveedor."],
      ok: 2,
      exp: "El hash (SHA-256, MD5) genera una huella única del archivo. Si el hash calculado coincide con el publicado por el proveedor, el archivo no ha sido alterado durante la descarga."
    },
    {
      p: "¿Qué garantiza el no repudio en la criptografía?",
      ops: ["Que un usuario no pueda negar haber enviado un mensaje firmado digitalmente.", "Que solo el remitente pueda leer el mensaje cifrado.", "Que los datos cifrados sean ilegibles para terceros."],
      ok: 0,
      exp: "El no repudio garantiza que el emisor no puede negar haber enviado un mensaje, ya que la firma digital solo puede ser creada con su clave privada, de la que es el único poseedor."
    },
    {
      p: "¿Cuál de los siguientes mecanismos se usa para verificar la autenticidad de un documento digital?",
      ops: ["VPN (Red Privada Virtual).", "Firma digital.", "Función hash."],
      ok: 1,
      exp: "La firma digital combina hash y criptografía asimétrica: se calcula el hash del documento y se cifra con la clave privada. Cualquiera con la clave pública puede verificar la firma."
    },
    {
      p: "¿Cuál de los siguientes algoritmos pertenece a la criptografía simétrica?",
      ops: ["RSA.", "AES.", "Diffie-Hellman."],
      ok: 1,
      exp: "AES (Advanced Encryption Standard) es el algoritmo simétrico más usado, con claves de 128, 192 o 256 bits. RSA y Diffie-Hellman son asimétricos. DES es otro simétrico, pero obsoleto."
    },
    {
      p: "¿Qué permite la infraestructura de clave pública (PKI)?",
      ops: ["Administrar claves y certificados digitales para la autenticación y el cifrado.", "Proteger sistemas operativos contra ataques de malware.", "Acelerar la conexión a Internet mediante el cifrado de datos."],
      ok: 0,
      exp: "PKI gestiona todo el ciclo de vida de los certificados: creación, distribución, renovación y revocación. Permite autenticación mutua y establecer canales cifrados de forma segura."
    },
    {
      p: "¿Cuál es la principal función de un certificado digital?",
      ops: ["Verificar la identidad de una entidad y su clave pública.", "Almacenar claves de cifrado de forma segura.", "Garantizar que un mensaje no ha sido interceptado."],
      ok: 0,
      exp: "Un certificado X.509 vincula una clave pública con la identidad de su propietario, firmado por una CA de confianza. Permite verificar con quién nos estamos comunicando realmente."
    },
    {
      p: "¿Cuál es la función principal de la firma digital en un documento?",
      ops: ["Comprimir su tamaño para facilitar la transmisión.", "Verificar la autenticidad y la integridad del documento.", "Asegurar que solo una persona específica pueda abrirlo."],
      ok: 1,
      exp: "La firma digital garantiza autenticidad (quién lo firmó), integridad (no ha sido modificado) y no repudio (el firmante no puede negar haberlo firmado)."
    },
    {
      p: "¿Qué tecnología permite verificar la identidad de un servidor en una conexión segura?",
      ops: ["Certificado digital.", "Firewall.", "VPN."],
      ok: 0,
      exp: "Cuando el navegador se conecta por HTTPS, el servidor presenta su certificado digital. El navegador verifica que fue emitido por una CA de confianza y que el dominio coincide."
    },
    {
      p: "¿Qué protocolo permite el intercambio seguro de claves en una red insegura?",
      ops: ["SHA-256.", "HMAC.", "Diffie-Hellman."],
      ok: 2,
      exp: "Diffie-Hellman permite que dos partes establezcan una clave compartida secreta a través de un canal inseguro sin transmitirla directamente, usando operaciones matemáticas con logaritmos discretos."
    },
    {
      p: "¿Qué mecanismo de seguridad se utiliza en HTTPS para cifrar las comunicaciones?",
      ops: ["WAF.", "SSL/TLS.", "VPN."],
      ok: 1,
      exp: "HTTPS usa TLS (Transport Layer Security), sucesor de SSL. TLS establece un canal cifrado y autenticado mediante certificados digitales y algoritmos como AES para el cifrado simétrico del tráfico."
    },
    {
      p: "¿Cuál es el principal objetivo de la criptografía en la seguridad informática?",
      ops: ["Reducir el tamaño de los archivos almacenados.", "Acelerar la velocidad de transmisión de datos.", "Proteger la información garantizando la confidencialidad, la integridad y la autenticación."],
      ok: 2,
      exp: "La criptografía es el pilar de la seguridad de la información. Garantiza: confidencialidad (solo el destinatario lee el mensaje), integridad (no ha sido alterado) y autenticación (verificar el origen)."
    },
    {
      p: "¿Qué distingue al cifrado asimétrico del simétrico?",
      ops: ["No requiere claves para funcionar.", "Utiliza un par de claves: una pública y una privada.", "Usa la misma clave para cifrar y descifrar datos."],
      ok: 1,
      exp: "El cifrado asimétrico usa un par de claves matemáticamente relacionadas: la pública (para cifrar/verificar) y la privada (para descifrar/firmar). El simétrico usa la misma clave para ambas operaciones."
    },
    {
      p: "¿Qué hace el protocolo HMAC en la seguridad informática?",
      ops: ["Proteger el tráfico de la red en conexiones wifi públicas.", "Cifrar discos duros completos para proteger los datos almacenados.", "Garantizar la integridad y la autenticación de los datos mediante funciones hash y claves secretas."],
      ok: 2,
      exp: "HMAC (Hash-based Message Authentication Code) combina una función hash con una clave secreta compartida. Garantiza que el mensaje no ha sido alterado y que proviene de alguien con la clave."
    },
    {
      p: "¿Qué función tiene un hash criptográfico en la seguridad de la información?",
      ops: ["Generar un valor único que permite verificar la integridad de los datos.", "Cifrar y descifrar mensajes de manera segura.", "Asegurar que un mensaje solo pueda ser leído por el destinatario correcto."],
      ok: 0,
      exp: "Un hash (SHA-256, SHA-3) produce un resumen de longitud fija único para cada entrada. Cualquier cambio mínimo en los datos produce un hash completamente diferente. Es unidireccional: no se puede revertir."
    },
    { p: "¿Qué es el cifrado AES y qué longitudes de clave soporta?", ops: ["Algoritmo asimétrico con claves de 1024/2048 bits.", "Algoritmo simétrico de bloque con claves de 128, 192 o 256 bits.", "Protocolo de cifrado de correo con clave de 256 bits únicamente."], ok: 1, exp: "AES (Advanced Encryption Standard) es el algoritmo simétrico estándar, cifra bloques de 128 bits con claves de 128, 192 o 256 bits. Adoptado por NIST en 2001, es el más usado en el mundo para cifrado en reposo y en tránsito." },
    { p: "¿Qué es RSA y para qué se usa principalmente?", ops: ["Algoritmo simétrico para cifrado masivo de datos.", "Algoritmo asimétrico basado en factorización de números primos grandes, usado para cifrado y firma digital.", "Protocolo de intercambio de claves basado en curvas elípticas."], ok: 1, exp: "RSA (Rivest-Shamir-Adleman, 1977) es el algoritmo asimétrico más conocido. Se basa en la dificultad de factorizar el producto de dos números primos grandes. Usado en TLS, SSH, firma digital y PKI." },
    { p: "¿Qué son las curvas elípticas (ECC) y qué ventaja tienen sobre RSA?", ops: ["Son algoritmos simétricos más rápidos que AES.", "Son algoritmos asimétricos que ofrecen la misma seguridad que RSA con claves mucho más cortas.", "Son funciones hash diseñadas para resistir colisiones."], ok: 1, exp: "ECC (Elliptic Curve Cryptography) logra la misma seguridad que RSA con claves hasta 10 veces más cortas: ECC-256 bits ≈ RSA-3072 bits. Menor consumo de CPU y ancho de banda. Usado en TLS moderno, Bitcoin." },
    { p: "¿Qué es la forward secrecy (secreto hacia adelante)?", ops: ["El cifrado de mensajes futuros con claves generadas previamente.", "La propiedad por la que claves de sesión únicas garantizan que comprometer la clave privada no descifra sesiones pasadas.", "Un sistema de copia de seguridad de claves criptográficas."], ok: 1, exp: "Forward Secrecy (PFS) genera claves de sesión efímeras (Diffie-Hellman temporal). Si se compromete la clave privada del servidor, no se pueden descifrar las comunicaciones pasadas, ya que cada sesión usó una clave diferente." },
    { p: "¿Qué es un certificado autofirmado?", ops: ["Un certificado emitido por una CA de confianza reconocida internacionalmente.", "Un certificado firmado por su propio propietario, sin validación por una CA externa.", "Un certificado gratuito emitido por Let's Encrypt."], ok: 1, exp: "Un certificado autofirmado lo firma el mismo servidor que lo usa, no una CA de confianza. Los navegadores muestran advertencia de seguridad. Útil para entornos internos, pero no debe usarse en producción pública." },
    { p: "¿Qué es una CA (Certificate Authority) raíz?", ops: ["El servidor web que almacena los certificados de los usuarios.", "Una entidad de confianza cuyo certificado está preinstalado en los sistemas operativos y navegadores.", "Un protocolo para renovar certificados automáticamente."], ok: 1, exp: "Una CA raíz (Root CA) es la cima de la jerarquía PKI. Su certificado viene preinstalado en los sistemas operativos. DigiCert, Comodo, Let's Encrypt (raíz IdenTrust) son CAs raíz reconocidas mundialmente." },
    { p: "¿Qué es el protocolo S/MIME?", ops: ["Un protocolo de transferencia de correo seguro.", "Un estándar para cifrar y firmar digitalmente correos electrónicos.", "Un sustituto de SMTP con cifrado integrado."], ok: 1, exp: "S/MIME (Secure/Multipurpose Internet Mail Extensions) añade cifrado asimétrico y firma digital a los emails estándar. Requiere que ambas partes tengan certificados. Alternativa: PGP/GPG." },
    { p: "¿Qué es PGP/GPG en criptografía?", ops: ["Un protocolo de cifrado web similar a TLS.", "Pretty Good Privacy — sistema de cifrado de clave pública para emails y archivos, con modelo de confianza web of trust.", "Un algoritmo hash para verificación de integridad."], ok: 1, exp: "PGP (y su implementación libre GPG) permite cifrar y firmar emails y archivos. Usa cifrado híbrido: cifra los datos con AES y cifra la clave AES con RSA/ECC. El modelo de confianza es 'web of trust' (sin CA central)." },
    { p: "¿Qué es el protocolo OCSP?", ops: ["Online Certificate Status Protocol — verifica en tiempo real si un certificado digital ha sido revocado.", "Protocolo de sincronización de claves entre servidores.", "Open Cryptography Standard Protocol."], ok: 0, exp: "OCSP permite al navegador verificar en tiempo real si el certificado de un servidor es válido o ha sido revocado, consultando al servidor OCSP de la CA. Más eficiente que descargar las CRL completas." },
    { p: "¿Qué es una CRL (Certificate Revocation List)?", ops: ["Una lista de algoritmos criptográficos obsoletos.", "Una lista publicada por la CA con los certificados que han sido revocados antes de su fecha de expiración.", "Una lista de certificados emitidos pendientes de renovación."], ok: 1, exp: "La CRL es la lista de certificados que la CA ha revocado (por compromiso de clave, baja del servicio, etc.) antes de su fecha de expiración. Los clientes deben consultarla para no confiar en certificados revocados." },
    { p: "¿Qué es el cifrado de extremo a extremo (E2EE)?", ops: ["Cifrar el tráfico solo entre el cliente y el servidor de la aplicación.", "Cifrar los datos en origen de modo que solo el destinatario final pueda descifrarlos; ningún intermediario puede acceder al contenido.", "Cifrar la conexión entre dos servidores."], ok: 1, exp: "E2EE garantiza que solo emisor y receptor pueden leer los mensajes. Ni el proveedor del servicio tiene acceso. WhatsApp, Signal y iMessage usan E2EE. Clave: las claves privadas no salen del dispositivo del usuario." },
    { p: "¿Qué es el algoritmo SHA-256?", ops: ["Un algoritmo de cifrado simétrico.", "Una función hash que produce un resumen de 256 bits, parte de la familia SHA-2.", "Un algoritmo de firma digital basado en curvas elípticas."], ok: 1, exp: "SHA-256 (Secure Hash Algorithm 256 bits) es parte de SHA-2. Produce un hash de 256 bits. Es el estándar actual en TLS, certificados X.509, blockchain (Bitcoin) y verificación de integridad de software." },
    { p: "¿Qué es el intercambio de claves ECDH?", ops: ["Un algoritmo de cifrado simétrico basado en curvas elípticas.", "Una variante de Diffie-Hellman que usa curvas elípticas para generar claves compartidas con mayor eficiencia.", "Un protocolo de autenticación mutua."], ok: 1, exp: "ECDH (Elliptic Curve Diffie-Hellman) es la versión de Diffie-Hellman con curvas elípticas. Permite a dos partes generar un secreto compartido sobre un canal inseguro con claves más cortas y mayor eficiencia que DH clásico." },
    { p: "¿Qué es la criptografía postcuántica?", ops: ["Criptografía diseñada para ejecutarse en ordenadores cuánticos.", "Algoritmos criptográficos resistentes a los ataques de ordenadores cuánticos futuros.", "Una mejora de RSA para usar claves más largas."], ok: 1, exp: "Los ordenadores cuánticos podrían romper RSA y ECC con el algoritmo de Shor. La criptografía postcuántica (NIST está estandarizando CRYSTALS-Kyber, CRYSTALS-Dilithium) usa matemáticas resistentes a ataques cuánticos." },
    { p: "¿Qué es el protocolo Kerberos?", ops: ["Un protocolo de cifrado de archivos en red.", "Un protocolo de autenticación de red basado en tickets que permite SSO en entornos corporativos (Active Directory).", "Un sistema de distribución de certificados digitales."], ok: 1, exp: "Kerberos es el protocolo de autenticación de Active Directory. Usa tickets cifrados emitidos por el KDC (Key Distribution Center) para autenticar usuarios y servicios sin enviar contraseñas por la red. Base del SSO corporativo." },
  ],

  // ─── UF8: Legislación y Delitos Informáticos ────────────
  "UF8": [
    {
      p: "¿Cuál es el nombre de la técnica que manipula psicológicamente a los usuarios para obtener información?",
      ops: ["Criptojacking.", "Ransomware.", "Ingeniería social."],
      ok: 2,
      exp: "La ingeniería social explota la psicología humana (confianza, miedo, urgencia) para obtener información o acceso sin necesidad de explotar vulnerabilidades técnicas."
    },
    {
      p: "¿Qué tipo de software se utiliza para registrar lo que escribe el usuario en el teclado?",
      ops: ["Keylogger.", "Sniffer.", "Troyano."],
      ok: 0,
      exp: "Un keylogger registra todas las pulsaciones del teclado, capturando contraseñas, mensajes y cualquier texto introducido. Puede ser software (malware) o hardware (dispositivo físico)."
    },
    {
      p: "¿Cuál de los siguientes artículos del CP está relacionado con el uso no autorizado de wifi ajeno?",
      ops: ["Art. 270.", "Art. 256.", "Art. 278."],
      ok: 1,
      exp: "El Art. 256 del Código Penal sanciona el uso de servicios de telecomunicación ajenos sin consentimiento, lo que incluye conectarse a una red WiFi sin autorización del titular."
    },
    {
      p: "¿Qué artículo del Código Penal regula el delito de estafa informática?",
      ops: ["Art. 248.2.", "Art. 197.", "Art. 270."],
      ok: 0,
      exp: "El Art. 248.2 CP tipifica la estafa informática: obtener una transferencia patrimonial no consentida manipulando datos o sistemas informáticos. El 197 es sobre intimidad; el 270 sobre propiedad intelectual."
    },
    {
      p: "¿Qué tipo de licencia permite modificar y redistribuir software manteniendo sus condiciones?",
      ops: ["GPL (licencia pública general).", "Retail.", "OEM."],
      ok: 0,
      exp: "La GPL (GNU General Public License) es una licencia copyleft: permite usar, modificar y redistribuir el software, pero las versiones modificadas deben distribuirse con la misma licencia GPL."
    },
    {
      p: "¿Cuál de los siguientes delitos informáticos está tipificado en el artículo 264.2 del Código Penal?",
      ops: ["Distribución de malware.", "Suplantación de identidad.", "Estafa por phishing."],
      ok: 0,
      exp: "El Art. 264.2 CP sanciona la producción, adquisición, importación o facilitación de programas informáticos destinados a causar daños (malware). El 264 regula el daño informático general."
    },
    {
      p: "¿Cuál es el objetivo del artículo 278 del Código Penal?",
      ops: ["Castigar el espionaje industrial.", "Penalizar el sabotaje informático.", "Proteger la intimidad personal."],
      ok: 0,
      exp: "El Art. 278 CP protege los secretos empresariales e industriales, sancionando el apoderamiento de datos de la empresa por medios informáticos para descubrir secretos comerciales o industriales."
    },
    {
      p: "¿Qué derechos garantizaba la antigua LOPD (15/1999)?",
      ops: ["Acceso, rectificación, cancelación y oposición (ARCO).", "Honor, privacidad y desconexión.", "Acreditación, limitación, supresión."],
      ok: 0,
      exp: "La LOPD de 1999 reconocía los derechos ARCO: Acceso (conocer tus datos), Rectificación (corregirlos), Cancelación (eliminarlos) y Oposición (impedir su uso). El RGPD amplió estos derechos."
    },
    {
      p: "¿Qué tipo de ataque redirige al usuario a una página falsa aunque escriba la dirección correcta?",
      ops: ["Pharming.", "Phishing.", "Spoofing."],
      ok: 0,
      exp: "El pharming envenena el DNS o modifica el fichero hosts para redirigir dominios legítimos a IPs maliciosas. La víctima escribe la URL correcta pero acaba en una web falsa."
    },
    {
      p: "¿Qué artículo del CP sanciona la revelación de secretos personales por un profesional?",
      ops: ["Art. 264.", "Art. 199.2.", "Art. 278."],
      ok: 1,
      exp: "El Art. 199.2 CP agrava la pena cuando la revelación de secretos es cometida por un profesional (médico, abogado, psicólogo) que los conoce en ejercicio de su actividad."
    },
    {
      p: "¿Qué institución vela por el cumplimiento de la LOPDPGDD en España?",
      ops: ["Consejo General del Poder Judicial.", "Agencia Española de Protección de Datos (AEPD).", "Ministerio del Interior."],
      ok: 1,
      exp: "La AEPD es la autoridad de control independiente española encargada de velar por el cumplimiento del RGPD y la LOPDPGDD. Puede imponer sanciones de hasta 20 millones de euros."
    },
    {
      p: "¿Qué elemento biométrico no se suele utilizar en la autenticación de usuarios?",
      ops: ["Iris.", "Huella dactilar.", "Grupo sanguíneo."],
      ok: 2,
      exp: "El grupo sanguíneo no es un rasgo biométrico útil para autenticación: no es único por persona (solo hay 8 grupos ABO+RH) y no es capturable digitalmente. Iris y huella dactilar son únicos y capturables."
    },
    {
      p: "¿Qué ley regula el comercio electrónico en España?",
      ops: ["LOPDPGDD.", "LSSI (34/2002).", "Ley de Firma Electrónica."],
      ok: 1,
      exp: "La LSSI (Ley de Servicios de la Sociedad de la Información y el Comercio Electrónico, Ley 34/2002) regula los servicios online, el comercio electrónico y las comunicaciones comerciales en España."
    },
    {
      p: "¿Qué artículo del Código Penal castiga la creación y difusión de malware?",
      ops: ["Art. 197 bis.", "Art. 248.2.", "Art. 264 ter."],
      ok: 2,
      exp: "El Art. 264 ter CP sanciona la producción, adquisición o difusión de herramientas informáticas diseñadas para cometer delitos de daños informáticos, incluyendo el malware."
    },
    {
      p: "¿Cuál es el principal objetivo de la Ley Orgánica 3/2018 (LOPDPGDD)?",
      ops: ["Regular la propiedad intelectual.", "Adaptar el RGPD al marco español.", "Penalizar la suplantación de identidad."],
      ok: 1,
      exp: "La LOPDPGDD (Ley Orgánica de Protección de Datos y Garantía de los Derechos Digitales) adapta el Reglamento General de Protección de Datos (RGPD) europeo al ordenamiento jurídico español."
    },
    { p: "¿Qué derecho del RGPD permite al usuario solicitar que sus datos sean eliminados?", ops: ["Derecho de acceso.", "Derecho al olvido (supresión).", "Derecho de portabilidad."], ok: 1, exp: "El derecho al olvido (Art. 17 RGPD) permite solicitar la supresión de datos cuando ya no son necesarios, se retira el consentimiento o han sido tratados ilícitamente." },
    { p: "¿Qué es el criptojacking?", ops: ["Robo de contraseñas mediante ingeniería social.", "Uso no autorizado de recursos de un equipo para minar criptomonedas.", "Ataque de denegación de servicio a exchanges de criptomonedas."], ok: 1, exp: "El criptojacking infecta el dispositivo de la víctima con código que usa su CPU/GPU para minar criptomonedas en beneficio del atacante, sin conocimiento del propietario." },
    { p: "¿Cuál es la diferencia entre virus y gusano informático?", ops: ["Son sinónimos, ambos se replican igual.", "El virus necesita un archivo huésped para propagarse; el gusano se replica por sí solo por la red.", "El gusano necesita intervención humana; el virus no."], ok: 1, exp: "Un virus adjunta su código a otros archivos para propagarse. Un gusano es autónomo: se replica y distribuye automáticamente por la red sin necesidad de un archivo huésped." },
    { p: "¿Qué es el ransomware?", ops: ["Software que monitoriza la actividad del usuario.", "Malware que cifra los archivos y pide rescate económico para descifrarlos.", "Programa que roba contraseñas almacenadas en el navegador."], ok: 1, exp: "El ransomware cifra los archivos de la víctima y exige un pago (generalmente criptomonedas) para entregar la clave de descifrado. WannaCry y CryptoLocker son ejemplos famosos." },
    { p: "¿Qué significa APT en ciberseguridad?", ops: ["Advanced Phishing Technique.", "Automated Protection Tool.", "Advanced Persistent Threat."], ok: 2, exp: "APT (Advanced Persistent Threat) son ataques sofisticados, prolongados y dirigidos, generalmente por actores estatales o grupos organizados. Buscan acceso persistente y extracción de información." },
    { p: "¿Qué es el spoofing?", ops: ["Interceptar tráfico de red sin modificarlo.", "Suplantar una identidad (IP, email, DNS) para engañar a sistemas o usuarios.", "Saturar un servidor con peticiones."], ok: 1, exp: "El spoofing consiste en falsificar una identidad: IP spoofing (falsificar IP origen), email spoofing (falsificar remitente), DNS spoofing (envenenar caché DNS)." },
    { p: "¿Qué artículo del CP protege contra el acceso no autorizado a sistemas informáticos?", ops: ["Art. 248.", "Art. 197 bis.", "Art. 264."], ok: 1, exp: "El Art. 197 bis CP sanciona el acceso sin autorización a sistemas informáticos o datos. Fue introducido por LO 1/2015 para trasponer la Directiva 2013/40/UE sobre ciberataques." },
    { p: "¿Qué ley española transpone la Directiva NIS de ciberseguridad de la UE?", ops: ["LOPDPGDD.", "Real Decreto-ley 12/2018.", "LSSI."], ok: 1, exp: "El RDL 12/2018 (de seguridad de las redes y sistemas de información) transpone la Directiva NIS, estableciendo obligaciones de seguridad para operadores de servicios esenciales y proveedores digitales." },
    { p: "¿Qué es la ciberresiliencia?", ops: ["La capacidad de un sistema para evitar todos los ataques.", "La capacidad de una organización para anticipar, resistir, recuperarse y adaptarse tras un ciberataque.", "El conjunto de herramientas antivirus de una empresa."], ok: 1, exp: "La ciberresiliencia va más allá de la prevención: incluye la capacidad de detectar incidentes rápidamente, contenerlos, recuperarse y aprender para mejorar. Reconoce que los ataques son inevitables." },
    { p: "¿Qué establece el principio de privacidad por diseño?", ops: ["Que la privacidad se añade como capa adicional tras el desarrollo.", "Que la protección de datos debe incorporarse desde el diseño inicial del sistema.", "Que los usuarios deben configurar manualmente su privacidad."], ok: 1, exp: "Privacy by Design (Art. 25 RGPD) exige integrar la protección de datos desde la fase de diseño, no como medida posterior. Implica minimización de datos y acceso mínimo necesario." },
    { p: "¿Qué son los Indicadores de Compromiso (IoC) en ciberseguridad?", ops: ["Métricas de rendimiento de los sistemas de seguridad.", "Evidencias forenses que indican que un sistema ha sido o está siendo comprometido.", "Certificaciones de conformidad con estándares de seguridad."], ok: 1, exp: "Los IoC (Indicators of Compromise) son artefactos observables que indican actividad maliciosa: hashes de malware, IPs maliciosas, dominios, patrones de tráfico anómalos o claves de registro modificadas." },
    { p: "¿Qué sanción máxima prevé el RGPD para las infracciones más graves?", ops: ["500.000 euros.", "20 millones de euros o el 4% del volumen de negocio global anual.", "1 millón de euros o el 2% del volumen de negocio."], ok: 1, exp: "El RGPD establece dos niveles de sanción: hasta 10M€/2% para infracciones menores, y hasta 20M€ o el 4% del volumen de negocio global anual (el mayor) para infracciones graves." },
    { p: "¿Qué es el INCIBE?", ops: ["Instituto Nacional de Ciberseguridad de España.", "Agencia Española de Protección de Datos.", "Centro Nacional de Inteligencia."], ok: 0, exp: "El INCIBE (Instituto Nacional de Ciberseguridad) es el organismo español de referencia para la ciberseguridad. Gestiona el CERT de Seguridad e Industria y ofrece recursos para ciudadanos y empresas." },
    { p: "¿Qué es la esteganografía?", ops: ["Técnica para descifrar mensajes cifrados.", "Arte de ocultar información dentro de otros archivos (imágenes, audio) sin que sea detectada.", "Protocolo de autenticación de dos factores."], ok: 1, exp: "La esteganografía oculta mensajes dentro de otros medios (una imagen JPG puede contener texto oculto en los bits menos significativos). Distinta del cifrado: el cifrado oculta el contenido, la esteganografía oculta la existencia del mensaje." },
    { p: "¿Qué es un DLP (Data Loss Prevention)?", ops: ["Un sistema de distribución de logs de aplicación.", "Un sistema que detecta y previene la fuga o pérdida no autorizada de datos sensibles.", "Un protocolo de copia de seguridad distribuida."], ok: 1, exp: "Los sistemas DLP monitorizan, detectan y bloquean la transmisión no autorizada de datos sensibles (números de tarjeta, datos personales, propiedad intelectual) hacia el exterior de la organización." },
  ],
};

// Unidades disponibles
const UFS = [
  { id: "UF1",     label: "UF1",     nombre: "Seguridad pasiva y CPD" },
  { id: "UF2-UF3", label: "UF2-UF3", nombre: "Almacenamiento y Backup" },
  { id: "UF4",     label: "UF4",     nombre: "Fundamentos de Ciberseguridad" },
  { id: "UF5",     label: "UF5",     nombre: "Seguridad en Redes" },
  { id: "UF6",     label: "UF6",     nombre: "Ciberseguridad y Redes" },
  { id: "UF7",     label: "UF7",     nombre: "Criptografía" },
  { id: "UF8",     label: "UF8",     nombre: "Legislación Informática" },
];
