// ═══════════════════════════════════════════════════════════════════
// EJERCICIOS DE CÓDIGO DWES — CONTEXTOS COMPLETOS
// Cada hueco tiene descripción clara de QUÉ poner
// ═══════════════════════════════════════════════════════════════════

const EJERCICIOS_CODIGO = {

  // ─────────────────────────────────────────────────────────────
  // PHP - Sistema de Reservas de Restaurante (7 ejercicios)
  // ─────────────────────────────────────────────────────────────
  PHP: [
    {
      id: 1,
      titulo: 'PHP 1/7: Conexión PDO',
      descripcion: 'Completa las variables de configuración para conectarte a la base de datos "restaurante_db" en el servidor local usando PDO.',
      contexto: '🎯 Base de datos: restaurante_db | Servidor: localhost | Usuario: root | Contraseña: vacía | IMPORTANTE: Todas las variables de texto van CON comillas simples (\'texto\')',
      codigo: `$host = ___1___;
$dbname = ___2___;
$username = ___3___;
$password = ___4___;

$conn = new ___5___("mysql:host=$host;dbname=$dbname", $username, $password);
$conn->setAttribute(PDO::___6___, PDO::___7___);`,
      huecos: [
        { num: 1, respuesta: "localhost", explicacion: "Servidor MySQL local → escribe: 'localhost' (CON comillas simples)" },
        { num: 2, respuesta: "restaurante_db", explicacion: "Nombre de la BD del enunciado → escribe: 'restaurante_db' (CON comillas)" },
        { num: 3, respuesta: "root", explicacion: "Usuario por defecto en XAMPP/WAMP → escribe: 'root' (CON comillas)" },
        { num: 4, respuesta: "", explicacion: "Contraseña vacía en local → escribe: '' (dos comillas simples vacías)" },
        { num: 5, respuesta: 'PDO', explicacion: 'Clase PDO para crear conexión (sin comillas)' },
        { num: 6, respuesta: 'ATTR_ERRMODE', explicacion: 'Constante PDO para modo de errores (sin comillas)' },
        { num: 7, respuesta: 'ERRMODE_EXCEPTION', explicacion: 'Constante PDO para lanzar excepciones (sin comillas)' }
      ]
    },
    {
      id: 2,
      titulo: 'PHP 2/7: INSERT con PDO',
      descripcion: 'Completa la consulta INSERT para guardar una reserva con 10 campos usando prepared statements.',
      contexto: '🎯 Tabla: reservas | 10 campos: nombre, email, telefono, fecha_reserva, num_personas, turno, zona, tipo_menu, ocasion_especial, comentarios | Usa placeholders nombrados (:nombre, :email, etc.)',
      codigo: `$sql = "___1___ INTO reservas 
        (nombre, email, telefono, fecha_reserva, num_personas, 
         turno, zona, tipo_menu, ocasion_especial, comentarios)
        ___2___ 
        (:nombre, :email, :telefono, :fecha, :personas, 
         :turno, :zona, :menu, :ocasion, :comentarios)";

$stmt = $conn->___3___($sql);
$stmt->___4___([
    ':nombre' => $_POST['nombre'],
    ':email' => $_POST['email']
    /* ... resto de valores ... */
]);`,
      huecos: [
        { num: 1, respuesta: 'INSERT', explicacion: 'Comando SQL para insertar datos en tabla' },
        { num: 2, respuesta: 'VALUES', explicacion: 'Palabra SQL que introduce los valores a insertar' },
        { num: 3, respuesta: 'prepare', explicacion: 'Método PDO para preparar consulta con placeholders' },
        { num: 4, respuesta: 'execute', explicacion: 'Método PDO para ejecutar consulta con valores reales' }
      ]
    },
    {
      id: 3,
      titulo: 'PHP 3/7: MySQLi bind_param',
      descripcion: 'Completa el código MySQLi usando placeholders posicionales (?) y especificando tipos de datos.',
      contexto: '🎯 MySQLi usa ? en lugar de :placeholder | bind_param necesita especificar TIPOS de datos | Tipos: s=string, i=integer | En este caso: 9 strings + 1 integer (num_personas en posición 5)',
      codigo: `$sql = "INSERT INTO reservas 
        (nombre, email, telefono, fecha_reserva, num_personas, 
         turno, zona, tipo_menu, ocasion_especial, comentarios)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = ___1___($conn, $sql);

___2___(
    $stmt, 
    ___3___, 
    $nombre, $email, $telefono, $fecha, $personas,
    $turno, $zona, $menu, $ocasion, $comentarios
);

___4___($stmt);`,
      huecos: [
        { num: 1, respuesta: 'mysqli_prepare', explicacion: 'Función MySQLi para preparar statement' },
        { num: 2, respuesta: 'mysqli_stmt_bind_param', explicacion: 'Función MySQLi para vincular parámetros con tipos' },
        { num: 3, respuesta: 'ssssisssss', explicacion: '10 parámetros con tipos: s,s,s,s,i,s,s,s,s,s → escribe: "ssssisssss" (CON comillas dobles)' },
        { num: 4, respuesta: 'mysqli_stmt_execute', explicacion: 'Función MySQLi para ejecutar statement' }
      ]
    },
    {
      id: 4,
      titulo: 'PHP 4/7: SELECT con WHERE',
      descripcion: 'Consulta todas las reservas de una fecha específica y devuelve array asociativo.',
      contexto: '🎯 Buscar reservas del 15 de junio de 2024 | Placeholder: :fecha | Devolver todas las filas como array asociativo',
      codigo: `$fecha_buscar = '2024-06-15';

$sql = "___1___ * FROM reservas 
        WHERE fecha_reserva = ___2___";

$stmt = $conn->___3___($sql);
$stmt->___4___([':fecha' => $fecha_buscar]);

$reservas = $stmt->___5___(___6___::FETCH_ASSOC);

echo "Total: " . ___7___($reservas) . " reservas";`,
      huecos: [
        { num: 1, respuesta: 'SELECT', explicacion: 'Comando SQL para consultar datos' },
        { num: 2, respuesta: ':fecha', explicacion: 'Placeholder nombrado para la fecha en WHERE' },
        { num: 3, respuesta: 'prepare', explicacion: 'Preparar SELECT con placeholder' },
        { num: 4, respuesta: 'execute', explicacion: 'Ejecutar SELECT sustituyendo :fecha por valor real' },
        { num: 5, respuesta: 'fetchAll', explicacion: 'Método PDO para obtener TODAS las filas' },
        { num: 6, respuesta: 'PDO', explicacion: 'Clase PDO (PDO::FETCH_ASSOC = array asociativo)' },
        { num: 7, respuesta: 'count', explicacion: 'Función PHP para contar elementos de un array' }
      ]
    },
    {
      id: 5,
      titulo: 'PHP 5/7: UPDATE con PDO',
      descripcion: 'Actualiza el turno de la reserva con id=5, cambiándolo de "comida" a "cena".',
      contexto: '🎯 Modificar campo: turno | Nuevo valor: cena | Condición WHERE: id = 5 | Usar placeholders :turno y :id',
      codigo: `$id = 5;
$nuevo_turno = 'cena';

$sql = "___1___ reservas 
        ___2___ turno = ___3___ 
        WHERE id = ___4___";

$stmt = $conn->___5___($sql);
$stmt->___6___([':turno' => $nuevo_turno, ':id' => $id]);

echo "Filas modificadas: " . $stmt->___7___();`,
      huecos: [
        { num: 1, respuesta: 'UPDATE', explicacion: 'Comando SQL para actualizar datos' },
        { num: 2, respuesta: 'SET', explicacion: 'Palabra SQL que indica campos a modificar' },
        { num: 3, respuesta: ':turno', explicacion: 'Placeholder para nuevo valor del turno' },
        { num: 4, respuesta: ':id', explicacion: 'Placeholder para id en WHERE' },
        { num: 5, respuesta: 'prepare', explicacion: 'Preparar UPDATE' },
        { num: 6, respuesta: 'execute', explicacion: 'Ejecutar UPDATE con valores' },
        { num: 7, respuesta: 'rowCount', explicacion: 'Método PDO: cuántas filas fueron modificadas' }
      ]
    },
    {
      id: 6,
      titulo: 'PHP 6/7: DELETE con PDO',
      descripcion: 'Elimina todas las reservas antiguas (de hace más de 30 días).',
      contexto: '🎯 Eliminar reservas con fecha_reserva anterior a hace 30 días | Placeholder: :fecha',
      codigo: `$sql = "___1___ FROM reservas 
        WHERE fecha_reserva < ___2___";

$stmt = $conn->___3___($sql);
$fecha_limite = date('Y-m-d', strtotime('-30 days'));
$stmt->___4___([':fecha' => $fecha_limite]);

echo "Reservas eliminadas: " . $stmt->___5___();`,
      huecos: [
        { num: 1, respuesta: 'DELETE', explicacion: 'Comando SQL para eliminar datos' },
        { num: 2, respuesta: ':fecha', explicacion: 'Placeholder para fecha límite' },
        { num: 3, respuesta: 'prepare', explicacion: 'Preparar DELETE' },
        { num: 4, respuesta: 'execute', explicacion: 'Ejecutar DELETE con fecha' },
        { num: 5, respuesta: 'rowCount', explicacion: 'Cuántas filas fueron eliminadas' }
      ]
    },
    {
      id: 7,
      titulo: 'PHP 7/7: Validación de datos',
      descripcion: 'Valida los datos del formulario antes de guardar: campos no vacíos, email válido, teléfono 9 dígitos, personas entre 1 y 20.',
      contexto: '🎯 Validar: campos vacíos | email válido | teléfono 9 dígitos numéricos | personas entre 1-20',
      codigo: `$nombre = trim($_POST['nombre']);
$email = trim($_POST['email']);
$telefono = trim($_POST['telefono']);
$personas = (int)$_POST['personas'];

if (___1___($nombre) || ___2___($email)) {
    die("Campos obligatorios vacíos");
}

if (!___3___($email, ___4___)) {
    die("Email inválido");
}

if (!___5___("/^[0-9]{9}$/", $telefono)) {
    die("Teléfono debe tener 9 dígitos");
}

if ($personas < ___6___ || $personas > ___7___) {
    die("Personas: entre 1 y 20");
}`,
      huecos: [
        { num: 1, respuesta: 'empty', explicacion: 'Función PHP: verifica si variable está vacía' },
        { num: 2, respuesta: 'empty', explicacion: 'Verificar si email está vacío' },
        { num: 3, respuesta: 'filter_var', explicacion: 'Función PHP para validar con filtros' },
        { num: 4, respuesta: 'FILTER_VALIDATE_EMAIL', explicacion: 'Constante PHP para validar email' },
        { num: 5, respuesta: 'preg_match', explicacion: 'Función PHP para validar con regex' },
        { num: 6, respuesta: '1', explicacion: 'Mínimo: 1 persona' },
        { num: 7, respuesta: '20', explicacion: 'Máximo: 20 personas' }
      ]
    }
  ],

  // ─────────────────────────────────────────────────────────────
  // LARAVEL - Sistema de Películas (6 ejercicios)
  // ─────────────────────────────────────────────────────────────
  LARAVEL: [
    {
      id: 1,
      titulo: 'Laravel 1/6: Instalación',
      descripcion: 'Crea un nuevo proyecto Laravel llamado "peliculas" e inicia el servidor de desarrollo.',
      contexto: '🎯 Nombre del proyecto: peliculas | Puerto del servidor: 8000 | URL: http://127.0.0.1:8000',
      codigo: `# Crear proyecto Laravel:
___1___

# Entrar al directorio:
___2___

# Iniciar servidor de desarrollo:
___3___

# Abrir navegador: http://127.0.0.1:8000`,
      huecos: [
        { num: 1, respuesta: 'composer create-project laravel/laravel peliculas', explicacion: 'Comando completo para crear proyecto Laravel con nombre "peliculas"' },
        { num: 2, respuesta: 'cd peliculas', explicacion: 'Cambiar al directorio del proyecto' },
        { num: 3, respuesta: 'php artisan serve', explicacion: 'Iniciar servidor en puerto 8000' }
      ]
    },
    {
      id: 2,
      titulo: 'Laravel 2/6: Configurar BD y Migración',
      descripcion: 'Configura la conexión a la base de datos "peliculas_db" en el archivo .env, crea el modelo Pelicula con migración y ejecuta las migraciones.',
      contexto: '🎯 Nombre de la BD: peliculas_db | Usuario: root | Contraseña: vacía | Modelo: Pelicula (singular, con mayúscula P) | Crear modelo Y migración juntos con flag -m',
      codigo: `# Editar archivo .env y poner estos valores:
DB_DATABASE=___1___
DB_USERNAME=___2___
DB_PASSWORD=___3___

# Crear modelo CON migración (flag -m):
___4___

# Ejecutar migraciones para crear tablas:
___5___

# Comandos útiles:
# Ver estado de migraciones: ___6___
# Deshacer última migración: ___7___`,
      huecos: [
        { num: 1, respuesta: 'peliculas_db', explicacion: 'Nombre de la base de datos (del enunciado)' },
        { num: 2, respuesta: 'root', explicacion: 'Usuario MySQL por defecto en local' },
        { num: 3, respuesta: '', explicacion: 'Contraseña vacía en local (dejar en blanco)' },
        { num: 4, respuesta: 'php artisan make:model Pelicula -m', explicacion: 'Crear modelo Pelicula Y migración con flag -m' },
        { num: 5, respuesta: 'php artisan migrate', explicacion: 'Ejecutar todas las migraciones pendientes' },
        { num: 6, respuesta: 'php artisan migrate:status', explicacion: 'Ver estado de todas las migraciones' },
        { num: 7, respuesta: 'php artisan migrate:rollback', explicacion: 'Deshacer el último batch de migraciones' }
      ]
    },
    {
      id: 3,
      titulo: 'Laravel 3/6: Definir Migración',
      descripcion: 'Completa la migración para crear la tabla "peliculas" con los campos: id, titulo (string), director (string), anio (integer), duracion (integer), created_at y updated_at.',
      contexto: '🎯 Tabla: peliculas | Campos: id (auto), titulo (VARCHAR), director (VARCHAR), anio (INTEGER), duracion (INTEGER en minutos), timestamps (created_at, updated_at)',
      codigo: `public function up()
{
    ___1___('peliculas', function (Blueprint $table) {
        ___2___;
        ___3___('titulo');
        $table->string('director');
        ___4___('anio');
        ___5___('duracion');
        ___6___();
    });
}`,
      huecos: [
        { num: 1, respuesta: 'Schema::create', explicacion: 'Método Laravel para crear tabla nueva' },
        { num: 2, respuesta: '$table->id()', explicacion: 'Crea id BIGINT UNSIGNED auto-incremental PRIMARY KEY' },
        { num: 3, respuesta: '$table->string', explicacion: 'Campo VARCHAR(255) para titulo' },
        { num: 4, respuesta: '$table->integer', explicacion: 'Campo INTEGER para año' },
        { num: 5, respuesta: '$table->integer', explicacion: 'Campo INTEGER para duración (minutos)' },
        { num: 6, respuesta: '$table->timestamps()', explicacion: 'Crea created_at y updated_at automáticamente' }
      ]
    },
    {
      id: 4,
      titulo: 'Laravel 4/6: Modelo y Controlador',
      descripcion: 'Define los campos asignables en el modelo Pelicula ($fillable) y crea el controlador con métodos para listar todas las películas y guardar una nueva.',
      contexto: '🎯 $fillable protege contra asignación masiva | Campos asignables: titulo, director, anio, duracion | Controlador: PeliculaController | Métodos: index() para listar, store() para guardar',
      codigo: `// app/Models/Pelicula.php
class Pelicula extends Model
{
    ___1___ = [
        'titulo', 'director', 'anio', 'duracion'
    ];
}

// Crear controlador con comando artisan:
___2___

// Método para listar todas las películas:
public function ___3___() {
    $peliculas = ___4___;
    return view('peliculas.index', compact('peliculas'));
}

// Método para guardar nueva película:
public function ___5___(Request $request) { 
    Pelicula::create($request->all());
}`,
      huecos: [
        { num: 1, respuesta: 'protected $fillable', explicacion: 'Propiedad que define campos asignables en masa' },
        { num: 2, respuesta: 'php artisan make:controller PeliculaController', explicacion: 'Crear controlador PeliculaController' },
        { num: 3, respuesta: 'index', explicacion: 'Método para mostrar lista (convención Laravel)' },
        { num: 4, respuesta: 'Pelicula::all()', explicacion: 'Eloquent: obtener todos los registros' },
        { num: 5, respuesta: 'store', explicacion: 'Método para guardar nuevo registro (convención)' }
      ]
    },
    {
      id: 5,
      titulo: 'Laravel 5/6: Rutas y Vistas',
      descripcion: 'Define las rutas para listar películas (GET /peliculas) y guardar nueva película (POST /peliculas), y completa la vista para mostrar la lista.',
      contexto: '🎯 Ruta GET /peliculas → método index() | Ruta POST /peliculas → método store() | Vista: peliculas.index con foreach para mostrar cada película',
      codigo: `// routes/web.php
Route::___1___('/peliculas', [PeliculaController::class, '___2___']);
Route::___3___('/peliculas', [PeliculaController::class, 'store']);

// resources/views/peliculas/index.blade.php
___4___ ($peliculas as $pelicula)
    <div>
        <h3>{{ $pelicula->___5___ }}</h3>
        <p>Director: {{ $pelicula->director }}</p>
    </div>
___6___`,
      huecos: [
        { num: 1, respuesta: 'get', explicacion: 'Método HTTP GET para mostrar/listar' },
        { num: 2, respuesta: 'index', explicacion: 'Método del controlador que lista películas' },
        { num: 3, respuesta: 'post', explicacion: 'Método HTTP POST para enviar datos' },
        { num: 4, respuesta: '@foreach', explicacion: 'Directiva Blade para bucle foreach' },
        { num: 5, respuesta: 'titulo', explicacion: 'Campo titulo de la película' },
        { num: 6, respuesta: '@endforeach', explicacion: 'Cierre de directiva @foreach' }
      ]
    },
    {
      id: 6,
      titulo: 'Laravel 6/6: Consultas Eloquent',
      descripcion: 'Realiza consultas Eloquent: películas de un año específico, ordenar por duración descendente, buscar por título, y contar total.',
      contexto: '🎯 Eloquent: where() para filtrar | orderBy() para ordenar | count() para contar | like para búsqueda parcial',
      codigo: `// Películas del año 2020:
$peliculas = Pelicula::___1___('anio', 2020)->get();

// Ordenar por duración (mayor a menor):
$peliculas = Pelicula::___2___('duracion', '___3___')->get();

// Buscar por título que contenga "matrix":
$peliculas = Pelicula::where('titulo', '___4___', '%matrix%')->get();

// Contar total de películas:
$total = Pelicula::___5___();`,
      huecos: [
        { num: 1, respuesta: 'where', explicacion: 'Método Eloquent para filtrar WHERE anio = 2020' },
        { num: 2, respuesta: 'orderBy', explicacion: 'Método Eloquent para ordenar ORDER BY' },
        { num: 3, respuesta: 'desc', explicacion: 'Orden descendente (mayor a menor)' },
        { num: 4, respuesta: 'like', explicacion: 'Operador SQL LIKE para búsqueda parcial' },
        { num: 5, respuesta: 'count()', explicacion: 'Método Eloquent para contar registros' }
      ]
    }
  ],

  // ─────────────────────────────────────────────────────────────
  // MONGODB - Sistema de Videojuegos (6 ejercicios)
  // ─────────────────────────────────────────────────────────────
  MONGODB: [
    {
      id: 1,
      titulo: 'MongoDB 1/6: Conexión y Crear BD',
      descripcion: 'Conéctate a MongoDB, selecciona/crea la base de datos "gamezone" y la colección "videojuegos".',
      contexto: '🎯 Base de datos: gamezone | Colección: videojuegos | MongoDB crea BD y colección automáticamente al usarlas por primera vez',
      codigo: `# Conectar a MongoDB:
___1___

# Seleccionar/crear BD "gamezone":
___2___

# MongoDB crea colección automáticamente al insertar
# No necesita comando explícito como SQL CREATE TABLE`,
      huecos: [
        { num: 1, respuesta: 'mongosh', explicacion: 'Comando para abrir shell de MongoDB' },
        { num: 2, respuesta: 'use gamezone', explicacion: 'Selecciona BD (la crea si no existe)' }
      ]
    },
    {
      id: 2,
      titulo: 'MongoDB 2/6: Insertar Documento',
      descripcion: 'Inserta un nuevo videojuego en la colección "videojuegos" con los campos: titulo, genero, plataforma, anio, precio.',
      contexto: '🎯 Colección: videojuegos | Insertar 1 documento con db.videojuegos.insertOne() | MongoDB usa documentos JSON (campos: valor)',
      codigo: `db.videojuegos.___1___({
    titulo: "The Witcher 3",
    ___2___: "RPG",
    plataforma: ["PC", "PS4", "Xbox"],
    anio: 2015,
    ___3___: 29.99
});`,
      huecos: [
        { num: 1, respuesta: 'insertOne', explicacion: 'Método MongoDB para insertar 1 documento' },
        { num: 2, respuesta: 'genero', explicacion: 'Campo genero del videojuego' },
        { num: 3, respuesta: 'precio', explicacion: 'Campo precio (número decimal)' }
      ]
    },
    {
      id: 3,
      titulo: 'MongoDB 3/6: Consultar Documentos',
      descripcion: 'Consulta todos los videojuegos, filtra por género "RPG", y busca juegos con precio menor o igual a 30.',
      contexto: '🎯 find() para consultar | {} vacío = todos | {campo: valor} para filtrar | Operadores: $lte (menor o igual), $gte (mayor o igual)',
      codigo: `// Consultar TODOS los videojuegos:
db.videojuegos.___1___({})

// Filtrar por género RPG:
db.videojuegos.find({ ___2___: "RPG" })

// Videojuegos con precio <= 30:
db.videojuegos.find({ 
    precio: { ___3___: 30 } 
})`,
      huecos: [
        { num: 1, respuesta: 'find', explicacion: 'Método MongoDB para consultar documentos' },
        { num: 2, respuesta: 'genero', explicacion: 'Campo para filtrar por género' },
        { num: 3, respuesta: '$lte', explicacion: 'Operador MongoDB: menor o igual (less than or equal)' }
      ]
    },
    {
      id: 4,
      titulo: 'MongoDB 4/6: Actualizar Documento',
      descripcion: 'Actualiza el precio de "The Witcher 3" a 19.99 usando updateOne() con $set.',
      contexto: '🎯 updateOne() actualiza 1 documento | $set para modificar campos | Primer parámetro: filtro | Segundo parámetro: { $set: {campo: nuevo_valor} }',
      codigo: `db.videojuegos.___1___(
    { titulo: "The Witcher 3" },
    { ___2___: { ___3___: 19.99 } }
);`,
      huecos: [
        { num: 1, respuesta: 'updateOne', explicacion: 'Método MongoDB para actualizar 1 documento' },
        { num: 2, respuesta: '$set', explicacion: 'Operador MongoDB para modificar campos' },
        { num: 3, respuesta: 'precio', explicacion: 'Campo a actualizar (precio)' }
      ]
    },
    {
      id: 5,
      titulo: 'MongoDB 5/6: Eliminar Documento',
      descripcion: 'Elimina todos los videojuegos del año 2010 o anteriores usando deleteMany().',
      contexto: '🎯 deleteMany() elimina múltiples documentos | $lte: menor o igual | Eliminar todos con anio <= 2010',
      codigo: `db.videojuegos.___1___(
    { anio: { ___2___: 2010 } }
);`,
      huecos: [
        { num: 1, respuesta: 'deleteMany', explicacion: 'Método MongoDB para eliminar múltiples documentos' },
        { num: 2, respuesta: '$lte', explicacion: 'Operador: menor o igual (anio <= 2010)' }
      ]
    },
    {
      id: 6,
      titulo: 'MongoDB 6/6: Consultas Avanzadas',
      descripcion: 'Consultas con ordenación, límite, conteo y búsqueda en arrays.',
      contexto: '🎯 sort() para ordenar | limit() para limitar | countDocuments() para contar | Búsqueda en arrays con {campo: valor}',
      codigo: `// Top 5 más caros (descendente):
db.videojuegos.find({})
    .___1___({ precio: -1 })
    .___2___(5)

// Contar videojuegos de RPG:
db.videojuegos.___3___({ genero: "RPG" })

// Buscar juegos disponibles en PC (array):
db.videojuegos.find({ ___4___: "PC" })`,
      huecos: [
        { num: 1, respuesta: 'sort', explicacion: 'Método MongoDB para ordenar (-1 = descendente)' },
        { num: 2, respuesta: 'limit', explicacion: 'Método MongoDB para limitar resultados' },
        { num: 3, respuesta: 'countDocuments', explicacion: 'Método MongoDB para contar documentos' },
        { num: 4, respuesta: 'plataforma', explicacion: 'Campo array plataforma (busca "PC" en el array)' }
      ]
    }
  ]
};
