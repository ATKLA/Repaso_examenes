// ═══════════════════════════════════════════════════════════════════
// EJERCICIOS DE CÓDIGO — DWES 0613
// PHP, Laravel y MongoDB - Análisis y corrección de código
// ═══════════════════════════════════════════════════════════════════

const EJERCICIOS_CODIGO = {

  // ─────────────────────────────────────────────────────────────
  // TIPO 1: IDENTIFICAR ERRORES EN PHP
  // ─────────────────────────────────────────────────────────────
  PHP_ERRORES: [
    {
      tipo: 'error',
      lenguaje: 'PHP',
      tema: 'UF2',
      enunciado: '¿Dónde está el error en este código?',
      codigo: `<?php
$productos = ['manzana', 'pera', 'naranja'];
echo "Total de productos: " . count($productos);
echo "Primer producto: " . $productos[1];
?>`,
      opciones: [
        'count() no existe en PHP',
        'Los arrays en PHP empiezan en índice 1, no 0',
        'El primer producto es $productos[0], no $productos[1]',
        'No se puede concatenar con el operador punto'
      ],
      correcta: 2,
      explicacion: 'Los arrays en PHP son 0-indexed. $productos[0] = "manzana", $productos[1] = "pera". El código imprime "pera" en lugar de "manzana".'
    },
    {
      tipo: 'error',
      lenguaje: 'PHP',
      tema: 'UF2',
      enunciado: '¿Qué error contiene este código?',
      codigo: `<?php
function calcularTotal($precio, $cantidad) {
    $total = $precio * cantidad;
    return $total;
}
echo calcularTotal(10, 5);
?>`,
      opciones: [
        'Falta el símbolo $ antes de cantidad',
        'La función no puede tener dos parámetros',
        'El return debe ir antes de calcular el total',
        'No hay error'
      ],
      correcta: 0,
      explicacion: 'En PHP todas las variables deben llevar el símbolo $. Debe ser: $total = $precio * $cantidad;'
    },
    {
      tipo: 'error',
      lenguaje: 'PHP',
      tema: 'UF3',
      enunciado: 'Identifica el problema en este código:',
      codigo: `<?php
class Producto {
    private $nombre;
    
    public function setNombre($nombre) {
        this->nombre = $nombre;
    }
    
    public function getNombre() {
        return $this->nombre;
    }
}
?>`,
      opciones: [
        'Las propiedades private no pueden tener setters',
        'Falta $this en setNombre(), debe ser $this->nombre',
        'Los métodos públicos deben declararse con function public',
        'El constructor está mal definido'
      ],
      correcta: 1,
      explicacion: 'En PHP se usa $this->propiedad, no this->propiedad. El $ es obligatorio tanto para la pseudovariable $this como para las variables normales.'
    },
    {
      tipo: 'error',
      lenguaje: 'PHP',
      tema: 'UF4',
      enunciado: '¿Qué falla en esta consulta PDO?',
      codigo: `<?php
$pdo = new PDO("mysql:host=localhost;dbname=tienda", "root", "");
$sql = "SELECT * FROM productos WHERE precio > :precio";
$stmt = $pdo->prepare($sql);
$stmt->execute();
$resultados = $stmt->fetchAll();
?>`,
      opciones: [
        'No se puede usar fetchAll() con prepared statements',
        'Falta bindear el parámetro :precio antes de execute()',
        'prepare() solo funciona con INSERT/UPDATE',
        'No hay error en el código'
      ],
      correcta: 1,
      explicacion: 'Los parámetros nombrados (:precio) deben vincularse con bindParam() o pasarse en execute([":precio" => $valor]). Sin vincular, la consulta falla.'
    },
    {
      tipo: 'error',
      lenguaje: 'PHP',
      tema: 'UF3',
      enunciado: 'Encuentra el error en este código de herencia:',
      codigo: `<?php
class Vehiculo {
    protected $marca;
    
    public function __construct($marca) {
        $this->marca = $marca;
    }
}

class Coche extends Vehiculo {
    private $puertas;
    
    public function __construct($marca, $puertas) {
        $this->puertas = $puertas;
    }
}
?>`,
      opciones: [
        'No se puede extender una clase con propiedades protected',
        'Falta llamar al constructor padre con parent::__construct($marca)',
        'private $puertas debe ser protected',
        'El constructor de Vehiculo debe ser protected'
      ],
      correcta: 1,
      explicacion: 'Cuando una clase hija tiene constructor, debe llamar explícitamente al constructor padre con parent::__construct($marca) si quiere inicializar las propiedades heredadas.'
    }
  ],

  // ─────────────────────────────────────────────────────────────
  // TIPO 2: AUTOCOMPLETAR CÓDIGO PHP
  // ─────────────────────────────────────────────────────────────
  PHP_AUTOCOMPLETAR: [
    {
      tipo: 'autocompletar',
      lenguaje: 'PHP',
      tema: 'UF2',
      enunciado: 'Completa el código para dividir la cadena por comas:',
      codigo: `<?php
$texto = "manzana,pera,naranja,plátano";
$frutas = ______($texto, ",");
print_r($frutas);
?>`,
      opciones: [
        'split()',
        'explode()',
        'str_split()',
        'divide()'
      ],
      correcta: 1,
      explicacion: 'explode($separador, $cadena) divide una cadena en un array usando el separador indicado. split() está deprecada. str_split() divide cada carácter.'
    },
    {
      tipo: 'autocompletar',
      lenguaje: 'PHP',
      tema: 'UF4',
      enunciado: 'Completa para preparar una consulta SQL con PDO:',
      codigo: `<?php
$pdo = new PDO("mysql:host=localhost;dbname=tienda", "root", "");
$sql = "INSERT INTO productos (nombre, precio) VALUES (:nombre, :precio)";
$stmt = $pdo->______($sql);
$stmt->execute([':nombre' => 'Portátil', ':precio' => 799]);
?>`,
      opciones: [
        'query()',
        'exec()',
        'prepare()',
        'bind()'
      ],
      correcta: 2,
      explicacion: 'prepare() prepara la consulta con parámetros para prevenir SQL injection. query() ejecuta directamente sin preparar. exec() solo devuelve filas afectadas.'
    },
    {
      tipo: 'autocompletar',
      lenguaje: 'PHP',
      tema: 'UF3',
      enunciado: 'Completa el código para acceder a una propiedad del objeto:',
      codigo: `<?php
class Usuario {
    public $nombre = "Laura";
}
$user = new Usuario();
echo $user______nombre;
?>`,
      opciones: [
        '.',
        '->',
        '::',
        '[]'
      ],
      correcta: 1,
      explicacion: 'El operador -> accede a propiedades y métodos de un objeto. El operador :: se usa para acceso estático. El punto es para concatenación de strings.'
    },
    {
      tipo: 'autocompletar',
      lenguaje: 'PHP',
      tema: 'UF2',
      enunciado: 'Completa para verificar si un valor existe en el array:',
      codigo: `<?php
$colores = ['rojo', 'azul', 'verde'];
if (______('azul', $colores)) {
    echo "El color existe";
}
?>`,
      opciones: [
        'array_exists()',
        'in_array()',
        'array_search()',
        'isset()'
      ],
      correcta: 1,
      explicacion: 'in_array($valor, $array) devuelve true si el valor existe. array_search() devuelve la clave. isset() verifica si una variable está definida.'
    },
    {
      tipo: 'autocompletar',
      lenguaje: 'PHP',
      tema: 'UF4',
      enunciado: 'Completa para obtener todos los resultados de la consulta:',
      codigo: `<?php
$pdo = new PDO("mysql:host=localhost;dbname=tienda", "root", "");
$stmt = $pdo->query("SELECT * FROM productos");
$productos = $stmt->______();
?>`,
      opciones: [
        'getAll()',
        'fetchAll()',
        'results()',
        'rows()'
      ],
      correcta: 1,
      explicacion: 'fetchAll() devuelve todas las filas como array de arrays. fetch() devuelve solo la siguiente fila. fetchColumn() devuelve una columna específica.'
    }
  ],

  // ─────────────────────────────────────────────────────────────
  // TIPO 3: ¿QUÉ HACE ESTE CÓDIGO?
  // ─────────────────────────────────────────────────────────────
  PHP_QUE_HACE: [
    {
      tipo: 'que_hace',
      lenguaje: 'PHP',
      tema: 'UF2',
      enunciado: '¿Qué salida produce este código?',
      codigo: `<?php
$numeros = [1, 2, 3, 4, 5];
$resultado = array_map(function($n) {
    return $n * 2;
}, $numeros);
print_r($resultado);
?>`,
      opciones: [
        'Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => 5 )',
        'Array ( [0] => 2 [1] => 4 [2] => 6 [3] => 8 [4] => 10 )',
        '30',
        'Error: array_map no existe'
      ],
      correcta: 1,
      explicacion: 'array_map() aplica la función a cada elemento. En este caso multiplica cada número por 2, devolviendo [2, 4, 6, 8, 10].'
    },
    {
      tipo: 'que_hace',
      lenguaje: 'PHP',
      tema: 'UF2',
      enunciado: '¿Cuál es el valor de $resultado?',
      codigo: `<?php
$a = 10;
$b = 5;
$resultado = $a > $b ? "Mayor" : "Menor";
echo $resultado;
?>`,
      opciones: [
        'Mayor',
        'Menor',
        'true',
        '10'
      ],
      correcta: 0,
      explicacion: 'El operador ternario evalúa la condición ($a > $b es true) y devuelve el primer valor "Mayor". Si fuera false devolvería "Menor".'
    },
    {
      tipo: 'que_hace',
      lenguaje: 'PHP',
      tema: 'UF3',
      enunciado: '¿Qué imprime este código?',
      codigo: `<?php
class Contador {
    private static $count = 0;
    
    public static function incrementar() {
        self::$count++;
    }
    
    public static function getValor() {
        return self::$count;
    }
}

Contador::incrementar();
Contador::incrementar();
echo Contador::getValor();
?>`,
      opciones: [
        '0',
        '1',
        '2',
        'Error: no se puede acceder a métodos estáticos'
      ],
      correcta: 2,
      explicacion: 'Las propiedades static se comparten entre todas las instancias. Se incrementa dos veces (0+1+1=2). Se accede con :: (Clase::metodo()).'
    },
    {
      tipo: 'que_hace',
      lenguaje: 'PHP',
      tema: 'UF2',
      enunciado: '¿Qué devuelve este código?',
      codigo: `<?php
$texto = "   Hola Mundo   ";
$resultado = trim($texto);
echo strlen($resultado);
?>`,
      opciones: [
        '16',
        '10',
        '11',
        '15'
      ],
      correcta: 1,
      explicacion: 'trim() elimina los espacios al inicio y final. "   Hola Mundo   " se convierte en "Hola Mundo" (10 caracteres). strlen() cuenta caracteres.'
    },
    {
      tipo: 'que_hace',
      lenguaje: 'PHP',
      tema: 'UF2',
      enunciado: '¿Qué salida produce?',
      codigo: `<?php
$array = [1, 2, 3, 4, 5];
$filtrado = array_filter($array, function($n) {
    return $n % 2 == 0;
});
print_r($filtrado);
?>`,
      opciones: [
        'Array ( [0] => 1 [1] => 3 [2] => 5 )',
        'Array ( [1] => 2 [3] => 4 )',
        'Array ( [0] => 2 [1] => 4 )',
        'Array ( )'
      ],
      correcta: 1,
      explicacion: 'array_filter() filtra elementos que cumplan la condición ($n % 2 == 0 = pares). Mantiene las claves originales [1]=>2, [3]=>4.'
    }
  ],

  // ─────────────────────────────────────────────────────────────
  // TIPO 4: LARAVEL - IDENTIFICAR ERRORES
  // ─────────────────────────────────────────────────────────────
  LARAVEL_ERRORES: [
    {
      tipo: 'error',
      lenguaje: 'Laravel',
      tema: 'UF7',
      enunciado: '¿Qué error tiene esta ruta de Laravel?',
      codigo: `Route::get('/productos', function() {
    $productos = Producto::all();
    return view('productos.index', $productos);
});`,
      opciones: [
        'Route::get no existe en Laravel',
        'Producto::all() debe usar DB::table()',
        'Debe pasar datos a la vista con compact() o un array: ["productos" => $productos]',
        'No se puede retornar una vista desde una ruta'
      ],
      correcta: 2,
      explicacion: 'Las vistas reciben datos como array asociativo: view("productos.index", ["productos" => $productos]) o con compact("productos").'
    },
    {
      tipo: 'error',
      lenguaje: 'Laravel',
      tema: 'UF7',
      enunciado: 'Identifica el problema en este modelo Eloquent:',
      codigo: `class Producto extends Model {
    protected $table = 'productos';
    protected $fillable = ['nombre', 'precio'];
}

// En el controlador:
$producto = new Producto();
$producto->nombre = 'Portátil';
$producto->precio = 799;
$producto->store();`,
      opciones: [
        'El modelo debe llamarse ProductoModel',
        'fillable solo acepta un elemento',
        'El método correcto es save(), no store()',
        'No se puede usar new Producto() con Eloquent'
      ],
      correcta: 2,
      explicacion: 'En Eloquent se usa save() para guardar un modelo. store() se usa en controladores como nombre de método para manejar la petición POST.'
    },
    {
      tipo: 'error',
      lenguaje: 'Laravel',
      tema: 'UF7',
      enunciado: '¿Qué falla en esta migración de Laravel?',
      codigo: `public function up() {
    Schema::create('productos', function (Blueprint $table) {
        $table->id();
        $table->string('nombre');
        $table->decimal('precio');
        $table->timestamp();
    });
}`,
      opciones: [
        'decimal() debe especificar precisión: decimal("precio", 8, 2)',
        'No se puede usar string() en migraciones',
        'timestamp() debe llamarse timestamps() para created_at y updated_at',
        'Ambas a y c son correctas'
      ],
      correcta: 3,
      explicacion: 'decimal() necesita precisión: decimal("precio", 8, 2). timestamps() (plural) crea created_at y updated_at automáticamente.'
    },
    {
      tipo: 'error',
      lenguaje: 'Laravel',
      tema: 'UF7',
      enunciado: 'Encuentra el error en este controlador:',
      codigo: `class ProductoController extends Controller {
    public function index() {
        $productos = Producto::all();
        return view('productos.index', compact('productos'));
    }
    
    public function show($id) {
        $producto = Producto::find($id);
        return view('productos.show', compact('producto'));
    }
}`,
      opciones: [
        'compact() solo funciona con un parámetro',
        'Falta validar que $producto no sea null en show() antes de pasar a la vista',
        'Controller debe escribirse con c minúscula',
        'No hay error, el código es correcto'
      ],
      correcta: 1,
      explicacion: 'Si no existe un producto con ese ID, find() devuelve null y la vista fallará. Se debe validar con findOrFail() o verificar if($producto).'
    },
    {
      tipo: 'error',
      lenguaje: 'Laravel',
      tema: 'UF7',
      enunciado: '¿Qué está mal en esta validación de Laravel?',
      codigo: `public function store(Request $request) {
    $validado = $request->validate([
        'nombre' => 'required|max:255',
        'email' => 'required|email|unique',
        'precio' => 'required|numeric'
    ]);
    
    Producto::create($validado);
}`,
      opciones: [
        'validate() solo acepta un campo a la vez',
        'unique debe especificar la tabla: unique:productos,email',
        'numeric no existe, debe usar integer',
        'No se puede usar create() con datos validados'
      ],
      correcta: 1,
      explicacion: 'La regla unique necesita la tabla: "email" => "required|email|unique:usuarios,email". Sin especificar tabla, Laravel no sabe dónde verificar la unicidad.'
    }
  ],

  // ─────────────────────────────────────────────────────────────
  // TIPO 5: LARAVEL - AUTOCOMPLETAR
  // ─────────────────────────────────────────────────────────────
  LARAVEL_AUTOCOMPLETAR: [
    {
      tipo: 'autocompletar',
      lenguaje: 'Laravel',
      tema: 'UF7',
      enunciado: 'Completa para crear una ruta POST:',
      codigo: `Route::______('/productos', [ProductoController::class, 'store']);`,
      opciones: [
        'get',
        'post',
        'create',
        'send'
      ],
      correcta: 1,
      explicacion: 'Route::post() define una ruta que solo acepta peticiones POST. Route::get() para GET, Route::put() para PUT, Route::delete() para DELETE.'
    },
    {
      tipo: 'autocompletar',
      lenguaje: 'Laravel',
      tema: 'UF7',
      enunciado: 'Completa para obtener un registro por ID o lanzar 404:',
      codigo: `$producto = Producto::______($id);`,
      opciones: [
        'get($id)',
        'find($id)',
        'findOrFail($id)',
        'where("id", $id)->first()'
      ],
      correcta: 2,
      explicacion: 'findOrFail() lanza una excepción 404 si no encuentra el registro. find() devuelve null. get() devuelve colección, no un solo modelo.'
    },
    {
      tipo: 'autocompletar',
      lenguaje: 'Laravel',
      tema: 'UF7',
      enunciado: 'Completa para redireccionar a una ruta nombrada:',
      codigo: `return redirect()->______('productos.index');`,
      opciones: [
        'to()',
        'route()',
        'view()',
        'url()'
      ],
      correcta: 1,
      explicacion: 'route("nombre") redirige a una ruta nombrada. to() usa URL relativa. url() genera URL absoluta. view() renderiza una vista.'
    },
    {
      tipo: 'autocompletar',
      lenguaje: 'Laravel',
      tema: 'UF7',
      enunciado: 'Completa para validar datos de request:',
      codigo: `$datos = $request->______([
    'nombre' => 'required|max:255',
    'precio' => 'required|numeric'
]);`,
      opciones: [
        'check()',
        'validate()',
        'verify()',
        'rules()'
      ],
      correcta: 1,
      explicacion: 'validate() valida los datos y lanza excepción si falla. Devuelve los datos validados. validated() también funciona pero solo devuelve datos validados.'
    },
    {
      tipo: 'autocompletar',
      lenguaje: 'Laravel',
      tema: 'UF7',
      enunciado: 'Completa para crear timestamps en migración:',
      codigo: `Schema::create('productos', function (Blueprint $table) {
    $table->id();
    $table->string('nombre');
    $table->______();
});`,
      opciones: [
        'timestamp()',
        'timestamps()',
        'created_at()',
        'dates()'
      ],
      correcta: 1,
      explicacion: 'timestamps() (plural) crea automáticamente las columnas created_at y updated_at. timestamp() (singular) crea una sola columna de tipo timestamp.'
    }
  ],

  // ─────────────────────────────────────────────────────────────
  // TIPO 6: MONGODB - SINTAXIS
  // ─────────────────────────────────────────────────────────────
  MONGODB_SINTAXIS: [
    {
      tipo: 'sintaxis',
      lenguaje: 'MongoDB',
      tema: 'UF8',
      enunciado: '¿Cómo se encuentra un documento por su campo "nombre" en MongoDB?',
      codigo: `// Buscar productos con nombre "Portátil"`,
      opciones: [
        'db.productos.find({nombre: "Portátil"})',
        'db.productos.search(nombre = "Portátil")',
        'db.productos.where("nombre", "Portátil")',
        'SELECT * FROM productos WHERE nombre = "Portátil"'
      ],
      correcta: 0,
      explicacion: 'find({campo: valor}) busca documentos que coincidan con los criterios. find() sin parámetros devuelve todos. findOne() devuelve solo el primero.'
    },
    {
      tipo: 'sintaxis',
      lenguaje: 'MongoDB',
      tema: 'UF8',
      enunciado: '¿Cómo se inserta un documento en MongoDB?',
      codigo: `// Insertar un nuevo producto`,
      opciones: [
        'db.productos.add({nombre: "Ratón", precio: 15})',
        'db.productos.insertOne({nombre: "Ratón", precio: 15})',
        'db.productos.create({nombre: "Ratón", precio: 15})',
        'INSERT INTO productos VALUES ("Ratón", 15)'
      ],
      correcta: 1,
      explicacion: 'insertOne() inserta un documento. insertMany() inserta varios. El _id se genera automáticamente si no se especifica.'
    },
    {
      tipo: 'sintaxis',
      lenguaje: 'MongoDB',
      tema: 'UF8',
      enunciado: '¿Cómo se actualiza un documento en MongoDB?',
      codigo: `// Actualizar el precio de un producto`,
      opciones: [
        'db.productos.update({nombre: "Ratón"}, {precio: 20})',
        'db.productos.updateOne({nombre: "Ratón"}, {$set: {precio: 20}})',
        'db.productos.modify({nombre: "Ratón"}, {precio: 20})',
        'UPDATE productos SET precio = 20 WHERE nombre = "Ratón"'
      ],
      correcta: 1,
      explicacion: 'updateOne() con $set actualiza campos específicos sin reemplazar todo el documento. updateMany() actualiza múltiples documentos.'
    },
    {
      tipo: 'sintaxis',
      lenguaje: 'MongoDB',
      tema: 'UF8',
      enunciado: '¿Cómo se eliminaun documento en MongoDB?',
      codigo: `// Eliminar productos con precio > 1000`,
      opciones: [
        'db.productos.remove({precio: {$gt: 1000}})',
        'db.productos.deleteOne({precio: {$gt: 1000}})',
        'db.productos.drop({precio: {$gt: 1000}})',
        'DELETE FROM productos WHERE precio > 1000'
      ],
      correcta: 1,
      explicacion: 'deleteOne() elimina el primer documento que coincida. deleteMany() elimina todos los que coincidan. $gt = greater than (mayor que).'
    },
    {
      tipo: 'sintaxis',
      lenguaje: 'MongoDB',
      tema: 'UF8',
      enunciado: '¿Cómo se hace una consulta con operadores de comparación?',
      codigo: `// Buscar productos con precio entre 10 y 50`,
      opciones: [
        'db.productos.find({precio: {$gte: 10, $lte: 50}})',
        'db.productos.find({precio >= 10 AND precio <= 50})',
        'db.productos.where("precio").between(10, 50)',
        'db.productos.find({precio: [10, 50]})'
      ],
      correcta: 0,
      explicacion: '$gte = greater than or equal (>=). $lte = less than or equal (<=). $gt = >, $lt = <, $eq = ==, $ne = !=.'
    },
    {
      tipo: 'sintaxis',
      lenguaje: 'MongoDB',
      tema: 'UF8',
      enunciado: '¿Cómo se proyectan solo ciertos campos en MongoDB?',
      codigo: `// Obtener solo nombre y precio de todos los productos`,
      opciones: [
        'db.productos.find({}, {nombre: 1, precio: 1, _id: 0})',
        'db.productos.find().select("nombre", "precio")',
        'db.productos.find({campos: ["nombre", "precio"]})',
        'SELECT nombre, precio FROM productos'
      ],
      correcta: 0,
      explicacion: 'El segundo parámetro de find() es la proyección. 1 = incluir, 0 = excluir. _id se incluye por defecto, hay que excluirlo explícitamente con _id: 0.'
    },
    {
      tipo: 'sintaxis',
      lenguaje: 'MongoDB',
      tema: 'UF8',
      enunciado: '¿Cómo se ordenan los resultados en MongoDB?',
      codigo: `// Ordenar productos por precio descendente`,
      opciones: [
        'db.productos.find().sort({precio: -1})',
        'db.productos.find().orderBy("precio", "DESC")',
        'db.productos.find({}, {sort: {precio: -1}})',
        'db.productos.find() ORDER BY precio DESC'
      ],
      correcta: 0,
      explicacion: 'sort({campo: 1}) ordena ascendente. sort({campo: -1}) ordena descendente. Se puede ordenar por múltiples campos: sort({precio: -1, nombre: 1}).'
    },
    {
      tipo: 'sintaxis',
      lenguaje: 'MongoDB',
      tema: 'UF8',
      enunciado: '¿Cómo se limitan los resultados en MongoDB?',
      codigo: `// Obtener solo los 10 primeros productos`,
      opciones: [
        'db.productos.find().limit(10)',
        'db.productos.find({$limit: 10})',
        'db.productos.find().take(10)',
        'db.productos.find() LIMIT 10'
      ],
      correcta: 0,
      explicacion: 'limit(n) limita los resultados. skip(n) salta los primeros n documentos. Se combinan para paginación: .skip(10).limit(10) (página 2).'
    },
    {
      tipo: 'sintaxis',
      lenguaje: 'MongoDB',
      tema: 'UF8',
      enunciado: '¿Cómo se cuenta el número de documentos?',
      codigo: `// Contar cuántos productos tienen precio > 100`,
      opciones: [
        'db.productos.countDocuments({precio: {$gt: 100}})',
        'db.productos.count({precio: {$gt: 100}})',
        'db.productos.find({precio: {$gt: 100}}).length()',
        'COUNT(*) FROM productos WHERE precio > 100'
      ],
      correcta: 0,
      explicacion: 'countDocuments() cuenta documentos que coincidan con el filtro. estimatedDocumentCount() cuenta todos (más rápido pero aproximado). count() está deprecado.'
    },
    {
      tipo: 'sintaxis',
      lenguaje: 'MongoDB',
      tema: 'UF8',
      enunciado: '¿Cómo se usa el operador $in en MongoDB?',
      codigo: `// Buscar productos de las categorías "Electrónica" o "Informática"`,
      opciones: [
        'db.productos.find({categoria: {$in: ["Electrónica", "Informática"]}})',
        'db.productos.find({categoria: ["Electrónica", "Informática"]})',
        'db.productos.find({categoria: "Electrónica" || "Informática"})',
        'db.productos.where("categoria").in(["Electrónica", "Informática"])'
      ],
      correcta: 0,
      explicacion: '$in busca documentos donde el campo esté en el array especificado. $nin hace lo contrario (not in). Similar a WHERE campo IN (valor1, valor2) en SQL.'
    }
  ]
};
