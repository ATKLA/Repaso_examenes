// ═══════════════════════════════════════════════════════════════════
// EJERCICIOS DE CÓDIGO DWES — PREPARACIÓN EXAMEN
// COBERTURA 100% de los ejercicios de clase (Puntos 7, 8, 9)
// Código CORTO, VISIBLE y CONTEXTUALIZADO
// ═══════════════════════════════════════════════════════════════════

const EJERCICIOS_CODIGO = {

  // ─────────────────────────────────────────────────────────────
  // PHP - Sistema de Reservas de Restaurante (Punto 8)
  // 10 campos: nombre, email, telefono, fecha, personas, turno,
  //            zona, menu, ocasion, comentarios
  // PDO Y MySQLi
  // ─────────────────────────────────────────────────────────────
  PHP: [
    {
      id: 1,
      titulo: 'PHP 1/7: Conexión PDO',
      descripcion: 'Sistema de reservas para restaurante. Completa la conexión PDO con configuración de errores.',
      contexto: 'Base de datos: restaurante_db | Servidor: localhost',
      codigo: `$host = ___1___;
$dbname = ___2___;
$username = ___3___;
$password = ___4___;

$conn = new ___5___(
    "mysql:host=$host;dbname=$dbname;charset=utf8mb4",
    $username, $password
);
$conn->setAttribute(PDO::___6___, PDO::___7___);`,
      huecos: [
        { num: 1, respuesta: "'localhost'", explicacion: "Servidor MySQL en local (CON comillas simples)" },
        { num: 2, respuesta: "'restaurante_db'", explicacion: "Nombre de la base de datos (CON comillas)" },
        { num: 3, respuesta: "'root'", explicacion: "Usuario por defecto en XAMPP (CON comillas)" },
        { num: 4, respuesta: "''", explicacion: "Contraseña vacía en local (dos comillas vacías '')" },
        { num: 5, respuesta: 'PDO', explicacion: 'Clase PDO para crear la conexión' },
        { num: 6, respuesta: 'ATTR_ERRMODE', explicacion: 'Atributo para configurar modo de errores' },
        { num: 7, respuesta: 'ERRMODE_EXCEPTION', explicacion: 'Lanzar excepciones automáticamente' }
      ]
    },
    {
      id: 2,
      titulo: 'PHP 2/7: INSERT PDO (10 campos)',
      descripcion: 'Completa el INSERT con prepared statements PDO para guardar una reserva completa.',
      contexto: 'Campos: nombre, email, telefono, fecha_reserva, num_personas, turno, zona, tipo_menu, ocasion_especial, comentarios',
      codigo: `$sql = "___1___ INTO reservas 
        (nombre, email, telefono, fecha_reserva, num_personas, 
         turno, zona, tipo_menu, ocasion_especial, comentarios)
        ___2___ 
        (:nombre, :email, :telefono, :fecha, :personas, 
         :turno, :zona, :menu, :ocasion, :comentarios)";

$stmt = $conn->___3___($sql);
$stmt->___4___([
    ':nombre' => $_POST['nombre'],
    ':email' => $_POST['email'],
    /* ... resto de valores ... */
]);`,
      huecos: [
        { num: 1, respuesta: 'INSERT', explicacion: 'Comando SQL para insertar' },
        { num: 2, respuesta: 'VALUES', explicacion: 'Palabra que indica los valores' },
        { num: 3, respuesta: 'prepare', explicacion: 'Preparar la consulta con placeholders' },
        { num: 4, respuesta: 'execute', explicacion: 'Ejecutar sustituyendo placeholders por valores' }
      ]
    },
    {
      id: 3,
      titulo: 'PHP 3/7: MySQLi bind_param',
      descripcion: 'Completa el código MySQLi usando placeholders posicionales (?) y bind_param con tipos.',
      contexto: 'MySQLi usa ? en lugar de :nombre y requiere especificar tipos manualmente',
      codigo: `$sql = "INSERT INTO reservas 
        (nombre, email, telefono, fecha_reserva, num_personas, 
         turno, zona, tipo_menu, ocasion_especial, comentarios)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = ___1___($conn, $sql);

// Tipos: s=string, i=integer, d=double
___2___(
    $stmt, 
    ___3___, // 9 strings + 1 integer (num_personas)
    $nombre, $email, $telefono, $fecha, $personas,
    $turno, $zona, $menu, $ocasion, $comentarios
);

___4___($stmt);`,
      huecos: [
        { num: 1, respuesta: 'mysqli_prepare', explicacion: 'Función para preparar consulta en MySQLi' },
        { num: 2, respuesta: 'mysqli_stmt_bind_param', explicacion: 'Función para vincular parámetros con tipos' },
        { num: 3, respuesta: '"ssssisssss"', explicacion: '9 strings (s) + 1 integer (i) en posición 5 (num_personas)' },
        { num: 4, respuesta: 'mysqli_stmt_execute', explicacion: 'Ejecutar el statement preparado' }
      ]
    },
    {
      id: 4,
      titulo: 'PHP 4/7: SELECT WHERE',
      descripcion: 'Consultar reservas por fecha usando prepared statement.',
      contexto: 'Buscar todas las reservas de una fecha específica',
      codigo: `$fecha_buscar = '2024-06-15';

$sql = "___1___ * FROM reservas 
        WHERE fecha_reserva = ___2___";

$stmt = $conn->___3___($sql);
$stmt->___4___([':fecha' => $fecha_buscar]);

$reservas = $stmt->___5___(___6___::FETCH_ASSOC);

echo "Total: " . ___7___($reservas) . " reservas";`,
      huecos: [
        { num: 1, respuesta: 'SELECT', explicacion: 'Comando SQL para consultar' },
        { num: 2, respuesta: ':fecha', explicacion: 'Placeholder nombrado en WHERE' },
        { num: 3, respuesta: 'prepare', explicacion: 'Preparar consulta SELECT' },
        { num: 4, respuesta: 'execute', explicacion: 'Ejecutar con valor del placeholder' },
        { num: 5, respuesta: 'fetchAll', explicacion: 'Obtener TODAS las filas como array' },
        { num: 6, respuesta: 'PDO', explicacion: 'PDO::FETCH_ASSOC devuelve array asociativo' },
        { num: 7, respuesta: 'count', explicacion: 'Función PHP para contar elementos de array' }
      ]
    },
    {
      id: 5,
      titulo: 'PHP 5/7: UPDATE',
      descripcion: 'Actualizar el turno de una reserva existente.',
      contexto: 'Cambiar de "comida" a "cena"',
      codigo: `$id = 5;
$nuevo_turno = 'cena';

$sql = "___1___ reservas 
        ___2___ turno = ___3___ 
        WHERE id = ___4___";

$stmt = $conn->___5___($sql);
$stmt->___6___([':turno' => $nuevo_turno, ':id' => $id]);

echo "Filas afectadas: " . $stmt->___7___();`,
      huecos: [
        { num: 1, respuesta: 'UPDATE', explicacion: 'Comando SQL para actualizar' },
        { num: 2, respuesta: 'SET', explicacion: 'Indica qué campos modificar' },
        { num: 3, respuesta: ':turno', explicacion: 'Placeholder para nuevo valor' },
        { num: 4, respuesta: ':id', explicacion: 'Placeholder en condición WHERE' },
        { num: 5, respuesta: 'prepare', explicacion: 'Preparar UPDATE' },
        { num: 6, respuesta: 'execute', explicacion: 'Ejecutar UPDATE' },
        { num: 7, respuesta: 'rowCount', explicacion: 'Devuelve cuántas filas se modificaron' }
      ]
    },
    {
      id: 6,
      titulo: 'PHP 6/7: DELETE',
      descripcion: 'Eliminar reservas antiguas (más de 30 días).',
      contexto: 'Limpieza de reservas pasadas',
      codigo: `$sql = "___1___ FROM reservas 
        WHERE fecha_reserva < ___2___";

$stmt = $conn->___3___($sql);
$fecha_limite = date('Y-m-d', strtotime('-30 days'));
$stmt->___4___([':fecha' => $fecha_limite]);

echo "Eliminadas: " . $stmt->___5___() . " reservas";`,
      huecos: [
        { num: 1, respuesta: 'DELETE', explicacion: 'Comando SQL para eliminar' },
        { num: 2, respuesta: ':fecha', explicacion: 'Placeholder para fecha límite' },
        { num: 3, respuesta: 'prepare', explicacion: 'Preparar DELETE' },
        { num: 4, respuesta: 'execute', explicacion: 'Ejecutar DELETE' },
        { num: 5, respuesta: 'rowCount', explicacion: 'Cuántas filas se eliminaron' }
      ]
    },
    {
      id: 7,
      titulo: 'PHP 7/7: Validación',
      descripcion: 'Validar datos del formulario antes de guardar.',
      contexto: 'Validar campos obligatorios, email, teléfono y rango de personas',
      codigo: `$nombre = trim($_POST['nombre']);
$email = trim($_POST['email']);
$telefono = trim($_POST['telefono']);
$personas = (int)$_POST['personas'];

if (___1___($nombre) || ___2___($email)) {
    die("Campos obligatorios");
}

if (!___3___($email, ___4___)) {
    die("Email inválido");
}

if (!___5___("/^[0-9]{9}$/", $telefono)) {
    die("Teléfono: 9 dígitos");
}

if ($personas < ___6___ || $personas > ___7___) {
    die("Entre 1 y 20 personas");
}`,
      huecos: [
        { num: 1, respuesta: 'empty', explicacion: 'Verificar si está vacío' },
        { num: 2, respuesta: 'empty', explicacion: 'Verificar si está vacío' },
        { num: 3, respuesta: 'filter_var', explicacion: 'Filtrar/validar con filtros predefinidos' },
        { num: 4, respuesta: 'FILTER_VALIDATE_EMAIL', explicacion: 'Filtro para validar formato email' },
        { num: 5, respuesta: 'preg_match', explicacion: 'Validar con expresión regular' },
        { num: 6, respuesta: '1', explicacion: 'Mínimo 1 persona' },
        { num: 7, respuesta: '20', explicacion: 'Máximo 20 personas' }
      ]
    }
  ],

  // ─────────────────────────────────────────────────────────────
  // LARAVEL - Gestión de Películas (Punto 7)
  // Campos: id, titulo, director, anio, duracion, timestamps
  // ─────────────────────────────────────────────────────────────
  LARAVEL: [
    {
      id: 1,
      titulo: 'Laravel 1/6: Crear Proyecto',
      descripcion: 'Comandos para crear proyecto Laravel y verificar instalación.',
      contexto: 'Composer crea ~15,000 archivos automáticamente',
      codigo: `# Crear proyecto "peliculas"
___1___

# Entrar al directorio
___2___

# Iniciar servidor
___3___

# Abrir: http://127.0.0.1:8000`,
      huecos: [
        { num: 1, respuesta: 'composer create-project laravel/laravel peliculas', explicacion: 'Comando completo para crear proyecto Laravel' },
        { num: 2, respuesta: 'cd peliculas', explicacion: 'Cambiar al directorio del proyecto' },
        { num: 3, respuesta: 'php artisan serve', explicacion: 'Iniciar servidor de desarrollo en puerto 8000' }
      ]
    },
    {
      id: 2,
      titulo: 'Laravel 2/6: Configurar BD y Migración',
      descripcion: 'Crear BD, configurar .env y generar migración.',
      contexto: 'Archivo .env contiene credenciales de BD',
      codigo: `# Editar archivo .env:
DB_DATABASE=___1___
DB_USERNAME=___2___
DB_PASSWORD=___3___

# Crear modelo CON migración (flag -m):
___4___

# Ejecutar migraciones:
___5___

# Comandos útiles:
# Ver estado: ___6___
# Deshacer última: ___7___`,
      huecos: [
        { num: 1, respuesta: 'peliculas_db', explicacion: 'Nombre de la base de datos' },
        { num: 2, respuesta: 'root', explicacion: 'Usuario MySQL en local' },
        { num: 3, respuesta: '', explicacion: 'Contraseña vacía en local (dejar vacío)' },
        { num: 4, respuesta: 'php artisan make:model Pelicula -m', explicacion: 'Crea modelo Y migración con flag -m' },
        { num: 5, respuesta: 'php artisan migrate', explicacion: 'Ejecuta método up() de todas las migraciones pendientes' },
        { num: 6, respuesta: 'php artisan migrate:status', explicacion: 'Ver qué migraciones se han ejecutado' },
        { num: 7, respuesta: 'php artisan migrate:rollback', explicacion: 'Deshacer última migración (ejecuta método down())' }
      ]
    },
    {
      id: 3,
      titulo: 'Laravel 3/6: Código Migración',
      descripcion: 'Completa el método up() para crear tabla peliculas.',
      contexto: 'Campos: id, titulo, director, anio, duracion, created_at, updated_at',
      codigo: `public function up(): void
{
    ___1___('peliculas', function (Blueprint $table) {
        ___2___();
        ___3___('titulo');
        $table->string('director');
        ___4___('anio');
        ___5___('duracion');
        ___6___();
    });
}`,
      huecos: [
        { num: 1, respuesta: 'Schema::create', explicacion: 'Crear nueva tabla' },
        { num: 2, respuesta: '$table->id()', explicacion: 'ID BIGINT UNSIGNED auto-incremental PRIMARY KEY' },
        { num: 3, respuesta: '$table->string', explicacion: 'Campo VARCHAR(255)' },
        { num: 4, respuesta: '$table->integer', explicacion: 'Campo INTEGER para el año' },
        { num: 5, respuesta: '$table->integer', explicacion: 'Campo INTEGER para duración en minutos' },
        { num: 6, respuesta: '$table->timestamps()', explicacion: 'Crea created_at y updated_at automáticamente' }
      ]
    },
    {
      id: 4,
      titulo: 'Laravel 4/6: Modelo y Controlador',
      descripcion: 'Configurar $fillable y crear controlador con métodos.',
      contexto: '$fillable protege contra asignación masiva maliciosa',
      codigo: `// app/Models/Pelicula.php
class Pelicula extends Model
{
    ___1___ = [
        'titulo', 'director', 'anio', 'duracion'
    ];
}

// Crear controlador:
___2___

// Método para listar todas:
public function ___3___() {
    $peliculas = ___4___;
    return view('peliculas.index', compact('peliculas'));
}

// Método para guardar nueva:
public function ___5___(Request $request) { /* ... */ }`,
      huecos: [
        { num: 1, respuesta: 'protected $fillable', explicacion: 'Define campos asignables en masa (create, update)' },
        { num: 2, respuesta: 'php artisan make:controller PeliculaController', explicacion: 'Crea controlador en app/Http/Controllers/' },
        { num: 3, respuesta: 'index', explicacion: 'Método convencional para listar registros' },
        { num: 4, respuesta: 'Pelicula::all()', explicacion: 'Eloquent: obtener todos los registros' },
        { num: 5, respuesta: 'store', explicacion: 'Método convencional para guardar nuevo registro' }
      ]
    },
    {
      id: 5,
      titulo: 'Laravel 5/6: Validación',
      descripcion: 'Completar validaciones en el método store().',
      contexto: 'Validar antes de guardar en BD',
      codigo: `public function store(Request $request)
{
    $request->___1___([
        'titulo' => ___2___,
        'director' => 'required',
        'anio' => ___3___,
        'duracion' => 'required|integer'
    ]);
    
    Pelicula::___4___($request->all());
    
    return redirect()->route('peliculas.index')
        ->___5___('success', 'Película guardada');
}`,
      huecos: [
        { num: 1, respuesta: 'validate', explicacion: 'Método para validar datos del request' },
        { num: 2, respuesta: "'required'", explicacion: 'Regla de validación: campo obligatorio (CON comillas)' },
        { num: 3, respuesta: "'required|numeric'", explicacion: 'Múltiples reglas separadas por | (CON comillas)' },
        { num: 4, respuesta: 'create', explicacion: 'Método Eloquent para crear y guardar registro' },
        { num: 5, respuesta: 'with', explicacion: 'Añadir dato a la sesión (flash message)' }
      ]
    },
    {
      id: 6,
      titulo: 'Laravel 6/6: Rutas y Blade',
      descripcion: 'Definir rutas y completar directivas Blade.',
      contexto: 'routes/web.php define las URLs. Blade es el motor de plantillas.',
      codigo: `// routes/web.php
___1___('/peliculas', [PeliculaController::class, 'index']);
___2___('/peliculas', [PeliculaController::class, 'store']);

// Vista Blade:
___3___(session('success'))
    <div class="alert">{{ session('success') }}</div>
@endif

<form method="POST">
    ___4___
    <input name="titulo">
    ___5___('titulo')
        <span class="error">{{ $message }}</span>
    @enderror
</form>

___6___($peliculas as $pelicula)
    <p>___7___</p>
@empty
    <p>No hay películas</p>
@endforelse`,
      huecos: [
        { num: 1, respuesta: 'Route::get', explicacion: 'Ruta GET para mostrar' },
        { num: 2, respuesta: 'Route::post', explicacion: 'Ruta POST para guardar' },
        { num: 3, respuesta: '@if', explicacion: 'Directiva condicional de Blade' },
        { num: 4, respuesta: '@csrf', explicacion: 'Token CSRF obligatorio en formularios (protección)' },
        { num: 5, respuesta: '@error', explicacion: 'Directiva para mostrar errores de validación' },
        { num: 6, respuesta: '@forelse', explicacion: 'Bucle con alternativa si está vacío' },
        { num: 7, respuesta: '{{ $pelicula->titulo }}', explicacion: 'Mostrar variable escapando HTML (seguridad XSS)' }
      ]
    }
  ],

  // ─────────────────────────────────────────────────────────────
  // MONGODB - Gestión de Videojuegos (Punto 9)
  // Estructura: titulo, plataforma, precio, generos[], stock,
  //             valoraciones{jugabilidad, graficos, historia}
  // ─────────────────────────────────────────────────────────────
  MONGODB: [
    {
      id: 1,
      titulo: 'MongoDB 1/6: Crear BD e Insertar',
      descripcion: 'Comandos básicos: crear BD, colección e insertar documentos.',
      contexto: 'MongoDB crea automáticamente al usar por primera vez',
      codigo: `// Crear/seleccionar BD:
___1___

// Crear colección:
___2___

// Ver colecciones:
___3___

// Insertar uno:
___4___({ "titulo": "Minecraft", "precio": 26.95 })

// Insertar varios:
___5___([ {...}, {...} ])`,
      huecos: [
        { num: 1, respuesta: 'use gamezone', explicacion: 'Seleccionar/crear base de datos' },
        { num: 2, respuesta: 'db.createCollection("videojuegos")', explicacion: 'Crear colección explícitamente' },
        { num: 3, respuesta: 'show collections', explicacion: 'Ver todas las colecciones de la BD' },
        { num: 4, respuesta: 'db.videojuegos.insertOne', explicacion: 'Insertar un solo documento' },
        { num: 5, respuesta: 'db.videojuegos.insertMany', explicacion: 'Insertar array de documentos' }
      ]
    },
    {
      id: 2,
      titulo: 'MongoDB 2/6: Consultas Básicas',
      descripcion: 'Búsquedas con operadores de comparación.',
      contexto: 'Operadores: $gt (mayor), $lt (menor), $gte, $lte, $ne',
      codigo: `// Todos:
___1___

// Por título:
db.videojuegos.find({ titulo: "___2___" })

// Precio > 40:
db.videojuegos.find({ precio: { ___3___: 40 } })

// Stock < 10:
db.videojuegos.find({ stock: { ___4___: 10 } })

// Valoración historia >= 8:
db.videojuegos.find({ "valoraciones.historia": { ___5___: 8 } })`,
      huecos: [
        { num: 1, respuesta: 'db.videojuegos.find()', explicacion: 'Buscar todos sin filtros' },
        { num: 2, respuesta: 'Minecraft', explicacion: 'Valor exacto a buscar (sin comillas en respuesta)' },
        { num: 3, respuesta: '$gt', explicacion: 'greater than (mayor que)' },
        { num: 4, respuesta: '$lt', explicacion: 'less than (menor que)' },
        { num: 5, respuesta: '$gte', explicacion: 'greater than or equal (mayor o igual)' }
      ]
    },
    {
      id: 3,
      titulo: 'MongoDB 3/6: Actualizar',
      descripcion: 'Operadores de actualización: $set, $inc, $push.',
      contexto: '$set cambia valor, $inc suma/resta, $push añade a array',
      codigo: `// Cambiar precio:
db.videojuegos.___1___({ titulo: "Minecraft" }, 
    { ___2___: { precio: 29.99 } }
)

// Incrementar stock +5:
db.videojuegos.updateOne({ titulo: "Elden Ring" }, 
    { ___3___: { stock: 5 } }
)

// Añadir género:
db.videojuegos.updateOne({ titulo: "FIFA 24" }, 
    { ___4___: { generos: "Simulación" } }
)

// Actualizar TODOS PC:
db.videojuegos.___5___({ plataforma: "PC" }, 
    { $inc: { stock: 5 } }
)`,
      huecos: [
        { num: 1, respuesta: 'updateOne', explicacion: 'Actualizar el primer documento que coincida' },
        { num: 2, respuesta: '$set', explicacion: 'Operador para cambiar/establecer valor de campo' },
        { num: 3, respuesta: '$inc', explicacion: 'Operador para incrementar (o decrementar si es negativo)' },
        { num: 4, respuesta: '$push', explicacion: 'Operador para añadir elemento al final de array' },
        { num: 5, respuesta: 'updateMany', explicacion: 'Actualizar TODOS los documentos que coincidan' }
      ]
    },
    {
      id: 4,
      titulo: 'MongoDB 4/6: Eliminar',
      descripcion: 'Eliminar documentos con deleteOne y deleteMany.',
      contexto: 'deleteOne elimina 1, deleteMany elimina todos los que coincidan',
      codigo: `// Eliminar un videojuego:
db.videojuegos.___1___({ titulo: "FIFA 24" })

// Eliminar todos con stock 0:
db.videojuegos.___2___({ stock: 0 })

// Eliminar precio < 30:
db.videojuegos.deleteMany({ precio: { ___3___: 30 } })`,
      huecos: [
        { num: 1, respuesta: 'deleteOne', explicacion: 'Eliminar el primer documento que coincida' },
        { num: 2, respuesta: 'deleteMany', explicacion: 'Eliminar TODOS los documentos que coincidan' },
        { num: 3, respuesta: '$lt', explicacion: 'Operador less than en filtro de eliminación' }
      ]
    },
    {
      id: 5,
      titulo: 'MongoDB 5/6: Proyección y Sort',
      descripcion: 'Seleccionar campos específicos y ordenar resultados.',
      contexto: 'Proyección: 1 = incluir, 0 = excluir. Sort: 1 = ASC, -1 = DESC',
      codigo: `// Solo titulo y precio (sin _id):
db.videojuegos.find({}, 
    { titulo: ___1___, precio: ___2___, _id: ___3___ }
)

// Ordenar por precio descendente:
db.videojuegos.find().___4___({ precio: ___5___ })

// Ordenar por stock ascendente:
db.videojuegos.find().sort({ stock: ___6___ })`,
      huecos: [
        { num: 1, respuesta: '1', explicacion: '1 = incluir el campo titulo' },
        { num: 2, respuesta: '1', explicacion: '1 = incluir el campo precio' },
        { num: 3, respuesta: '0', explicacion: '0 = excluir _id (se incluye por defecto)' },
        { num: 4, respuesta: 'sort', explicacion: 'Método para ordenar resultados' },
        { num: 5, respuesta: '-1', explicacion: '-1 = orden descendente (mayor a menor)' },
        { num: 6, respuesta: '1', explicacion: '1 = orden ascendente (menor a mayor)' }
      ]
    },
    {
      id: 6,
      titulo: 'MongoDB 6/6: Búsquedas Avanzadas',
      descripcion: 'Arrays, objetos anidados y múltiples condiciones.',
      contexto: 'Búsqueda en arrays y objetos anidados con notación punto',
      codigo: `// Buscar género "Acción" en array generos:
db.videojuegos.find({ ___1___: "Acción" })

// Buscar en objeto anidado (valoraciones.jugabilidad = 10):
db.videojuegos.find({ "___2___": 10 })

// Verificar si existe el campo:
db.videojuegos.find({ "valoraciones.historia": { ___3___: true } })

// Múltiples condiciones (precio < 50 Y stock > 5):
db.videojuegos.find({
    ___4___: [
        { precio: { $lt: 50 } },
        { stock: { $gt: 5 } }
    ]
})`,
      huecos: [
        { num: 1, respuesta: 'generos', explicacion: 'MongoDB busca automáticamente dentro de arrays' },
        { num: 2, respuesta: 'valoraciones.jugabilidad', explicacion: 'Notación punto para acceder a campo de objeto anidado' },
        { num: 3, respuesta: '$exists', explicacion: 'Operador para verificar si un campo existe' },
        { num: 4, respuesta: '$and', explicacion: 'Operador lógico AND para múltiples condiciones' }
      ]
    }
  ]
};

// Exportar
if (typeof module !== 'undefined' && module.exports) {
  module.exports = EJERCICIOS_CODIGO;
}
