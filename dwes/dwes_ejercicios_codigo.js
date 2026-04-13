// ═══════════════════════════════════════════════════════════════════
// EJERCICIOS DE CÓDIGO — DWES 0613
// PHP (30), Laravel (30), MongoDB (10) - Total: 70 ejercicios
// ═══════════════════════════════════════════════════════════════════

const EJERCICIOS_CODIGO = {

  // ─────────────────────────────────────────────────────────────
  // PHP - IDENTIFICAR ERRORES (10 ejercicios)
  // ─────────────────────────────────────────────────────────────
  PHP_ERRORES: [
    {
      tipo: 'error',
      lenguaje: 'PHP',
      tema: 'UF2',
      enunciado: '¿Dónde está el error en este código?',
      codigo: `<?php
$productos = ['manzana', 'pera', 'naranja'];
echo "Primer producto: " . $productos[1];
?>`,
      opciones: [
        'count() no existe en PHP',
        'Los arrays en PHP empiezan en índice 1',
        'El primer producto es $productos[0], no [1]',
        'No se puede concatenar con punto'
      ],
      correcta: 2,
      explicacion: 'Los arrays en PHP son 0-indexed. $productos[0]="manzana", $productos[1]="pera". Imprime "pera" en lugar de "manzana".'
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
?>`,
      opciones: [
        'Falta $ antes de cantidad',
        'La función no puede tener dos parámetros',
        'El return debe ir antes del cálculo',
        'No hay error'
      ],
      correcta: 0,
      explicacion: 'En PHP todas las variables llevan $. Debe ser: $total = $precio * $cantidad;'
    },
    {
      tipo: 'error',
      lenguaje: 'PHP',
      tema: 'UF3',
      enunciado: 'Identifica el problema:',
      codigo: `<?php
class Producto {
    private $nombre;
    public function setNombre($nombre) {
        this->nombre = $nombre;
    }
}
?>`,
      opciones: [
        'private no puede tener setters',
        'Falta $this, debe ser $this->nombre',
        'Debe ser function public',
        'El constructor está mal'
      ],
      correcta: 1,
      explicacion: 'En PHP se usa $this->propiedad. El $ es obligatorio.'
    },
    {
      tipo: 'error',
      lenguaje: 'PHP',
      tema: 'UF4',
      enunciado: '¿Qué falla en esta consulta PDO?',
      codigo: `<?php
$sql = "SELECT * FROM productos WHERE precio > :precio";
$stmt = $pdo->prepare($sql);
$stmt->execute();
?>`,
      opciones: [
        'No se puede usar fetchAll() con prepare',
        'Falta bindear :precio antes de execute()',
        'prepare() solo funciona con INSERT',
        'No hay error'
      ],
      correcta: 1,
      explicacion: 'Los parámetros :precio deben vincularse: execute([":precio" => $valor]).'
    },
    {
      tipo: 'error',
      lenguaje: 'PHP',
      tema: 'UF3',
      enunciado: 'Error en herencia:',
      codigo: `<?php
class Vehiculo {
    protected $marca;
    public function __construct($marca) {
        $this->marca = $marca;
    }
}
class Coche extends Vehiculo {
    public function __construct($marca, $puertas) {
        $this->puertas = $puertas;
    }
}
?>`,
      opciones: [
        'No se puede extender con protected',
        'Falta parent::__construct($marca)',
        '$puertas debe ser protected',
        'Constructor padre debe ser protected'
      ],
      correcta: 1,
      explicacion: 'La clase hija debe llamar parent::__construct($marca) para inicializar propiedades heredadas.'
    },
    {
      tipo: 'error',
      lenguaje: 'PHP',
      tema: 'UF2',
      enunciado: '¿Qué falla en el bucle?',
      codigo: `<?php
$nums = [1, 2, 3, 4, 5];
for ($i = 0; $i <= count($nums); $i++) {
    echo $nums[$i];
}
?>`,
      opciones: [
        'for no existe, debe usar foreach',
        'count() debe ir fuera del for',
        'Debe ser $i < count($nums), no <=',
        'No se puede usar índice numérico'
      ],
      correcta: 2,
      explicacion: 'Array tiene índices 0-4. Con <= intenta acceder a [5] que no existe.'
    },
    {
      tipo: 'error',
      lenguaje: 'PHP',
      tema: 'UF2',
      enunciado: 'Error en función:',
      codigo: `<?php
function sumar($a, $b) {
    $resultado = $a + $b;
}
$total = sumar(5, 3);
?>`,
      opciones: [
        'Falta return $resultado',
        'No puede tener dos parámetros',
        'No se puede asignar función a variable',
        'echo no funciona con variables'
      ],
      correcta: 0,
      explicacion: 'Calcula pero no devuelve. Necesita return $resultado;'
    },
    {
      tipo: 'error',
      lenguaje: 'PHP',
      tema: 'UF2',
      enunciado: 'Problema aquí:',
      codigo: `<?php
$edad = "25";
if ($edad = 18) {
    echo "Mayor";
}
?>`,
      opciones: [
        'No se comparan strings con números',
        'Usa = (asignación) en lugar de ==',
        'if no acepta strings',
        'Falta punto y coma'
      ],
      correcta: 1,
      explicacion: '= asigna. Para comparar: == o ===. Correcto: if ($edad == 18)'
    },
    {
      tipo: 'error',
      lenguaje: 'PHP',
      tema: 'UF2',
      enunciado: 'Error en array:',
      codigo: `<?php
$arr = ["nombre" => "Laura"];
echo $arr->nombre;
?>`,
      opciones: [
        'Arrays asociativos no existen',
        'Debe usar $arr["nombre"]',
        'echo no concatena arrays',
        'Falta definir clase'
      ],
      correcta: 1,
      explicacion: '-> es para objetos. Arrays usan []: $arr["nombre"]'
    },
    {
      tipo: 'error',
      lenguaje: 'PHP',
      tema: 'UF3',
      enunciado: 'Error en clase:',
      codigo: `<?php
class Usuario {
    public $nombre;
    function __construct($nombre) {
        nombre = $nombre;
    }
}
?>`,
      opciones: [
        'Constructores no tienen parámetros',
        'Falta $this-> antes de nombre',
        'public va después del nombre',
        'Debe llamarse Usuario()'
      ],
      correcta: 1,
      explicacion: 'Debe usar $this->nombre. Sin $this-> crea variable local.'
    }
  ],

  // ─────────────────────────────────────────────────────────────
  // PHP - AUTOCOMPLETAR (10 ejercicios)
  // ─────────────────────────────────────────────────────────────
  PHP_AUTOCOMPLETAR: [
    {
      tipo: 'autocompletar',
      lenguaje: 'PHP',
      tema: 'UF2',
      enunciado: 'Dividir cadena por comas:',
      codigo: `$frutas = ______(",", $texto);`,
      opciones: ['split()', 'explode()', 'str_split()', 'divide()'],
      correcta: 1,
      explicacion: 'explode($sep, $str) divide cadena en array.'
    },
    {
      tipo: 'autocompletar',
      lenguaje: 'PHP',
      tema: 'UF4',
      enunciado: 'Preparar consulta PDO:',
      codigo: `$stmt = $pdo->______($sql);`,
      opciones: ['query()', 'exec()', 'prepare()', 'bind()'],
      correcta: 2,
      explicacion: 'prepare() prepara consulta con parámetros.'
    },
    {
      tipo: 'autocompletar',
      lenguaje: 'PHP',
      tema: 'UF3',
      enunciado: 'Acceder a propiedad de objeto:',
      codigo: `echo $user______nombre;`,
      opciones: ['.', '->', '::', '[""]'],
      correcta: 1,
      explicacion: '-> accede a propiedades y métodos de objetos.'
    },
    {
      tipo: 'autocompletar',
      lenguaje: 'PHP',
      tema: 'UF2',
      enunciado: 'Verificar si valor existe:',
      codigo: `if (______('azul', $colores))`,
      opciones: ['array_exists()', 'in_array()', 'array_search()', 'isset()'],
      correcta: 1,
      explicacion: 'in_array($valor, $array) verifica existencia.'
    },
    {
      tipo: 'autocompletar',
      lenguaje: 'PHP',
      tema: 'UF4',
      enunciado: 'Obtener todos los resultados:',
      codigo: `$productos = $stmt->______();`,
      opciones: ['getAll()', 'fetchAll()', 'results()', 'rows()'],
      correcta: 1,
      explicacion: 'fetchAll() devuelve todas las filas.'
    },
    {
      tipo: 'autocompletar',
      lenguaje: 'PHP',
      tema: 'UF2',
      enunciado: 'Unir array en cadena:',
      codigo: `$frase = ______(' ', $palabras);`,
      opciones: ['join()', 'concat()', 'implode()', 'merge()'],
      correcta: 2,
      explicacion: 'implode($sep, $arr) une array en string.'
    },
    {
      tipo: 'autocompletar',
      lenguaje: 'PHP',
      tema: 'UF2',
      enunciado: 'Ordenar array:',
      codigo: `______ ($numeros);`,
      opciones: ['order()', 'sort()', 'arrange()', 'organize()'],
      correcta: 1,
      explicacion: 'sort() ordena array ascendentemente.'
    },
    {
      tipo: 'autocompletar',
      lenguaje: 'PHP',
      tema: 'UF2',
      enunciado: 'Longitud de cadena:',
      codigo: `$len = ______($texto);`,
      opciones: ['length()', 'size()', 'strlen()', 'count()'],
      correcta: 2,
      explicacion: 'strlen() cuenta caracteres en string.'
    },
    {
      tipo: 'autocompletar',
      lenguaje: 'PHP',
      tema: 'UF2',
      enunciado: 'Convertir a minúsculas:',
      codigo: `$min = ______($texto);`,
      opciones: ['toLowerCase()', 'strtolower()', 'lower()', 'toLower()'],
      correcta: 1,
      explicacion: 'strtolower() convierte a minúsculas.'
    },
    {
      tipo: 'autocompletar',
      lenguaje: 'PHP',
      tema: 'UF3',
      enunciado: 'Llamar constructor padre:',
      codigo: `______::__construct($nombre);`,
      opciones: ['super', 'parent', 'base', 'Item'],
      correcta: 1,
      explicacion: 'parent::__construct() llama al constructor padre.'
    }
  ],

  // ─────────────────────────────────────────────────────────────
  // PHP - QUÉ HACE (10 ejercicios)
  // ─────────────────────────────────────────────────────────────
  PHP_QUE_HACE: [
    {
      tipo: 'que_hace',
      lenguaje: 'PHP',
      tema: 'UF2',
      enunciado: '¿Qué salida produce?',
      codigo: `$nums = [1,2,3];
$r = array_map(fn($n) => $n*2, $nums);
print_r($r);`,
      opciones: ['[1,2,3]', '[2,4,6]', '6', 'Error'],
      correcta: 1,
      explicacion: 'array_map() multiplica cada elemento por 2.'
    },
    {
      tipo: 'que_hace',
      lenguaje: 'PHP',
      tema: 'UF2',
      enunciado: 'Valor de $resultado:',
      codigo: `$a = 10; $b = 5;
$resultado = $a > $b ? "Mayor" : "Menor";`,
      opciones: ['Mayor', 'Menor', 'true', '10'],
      correcta: 0,
      explicacion: 'Operador ternario: condición true devuelve "Mayor".'
    },
    {
      tipo: 'que_hace',
      lenguaje: 'PHP',
      tema: 'UF3',
      enunciado: '¿Qué imprime?',
      codigo: `class Contador {
    private static $count = 0;
    public static function inc() { self::$count++; }
    public static function get() { return self::$count; }
}
Contador::inc();
Contador::inc();
echo Contador::get();`,
      opciones: ['0', '1', '2', 'Error'],
      correcta: 2,
      explicacion: 'Propiedad static compartida, incrementa 2 veces: 0+1+1=2'
    },
    {
      tipo: 'que_hace',
      lenguaje: 'PHP',
      tema: 'UF2',
      enunciado: '¿Qué devuelve?',
      codigo: `$t = "   Hola   ";
echo strlen(trim($t));`,
      opciones: ['11', '4', '10', '7'],
      correcta: 1,
      explicacion: 'trim() quita espacios: "Hola" = 4 caracteres.'
    },
    {
      tipo: 'que_hace',
      lenguaje: 'PHP',
      tema: 'UF2',
      enunciado: 'Salida del código:',
      codigo: `$arr = [1,2,3,4,5];
$f = array_filter($arr, fn($n) => $n % 2 == 0);
print_r($f);`,
      opciones: ['[1,3,5]', '[1=>2, 3=>4]', '[2,4]', '[]'],
      correcta: 1,
      explicacion: 'array_filter() filtra pares, mantiene índices originales.'
    },
    {
      tipo: 'que_hace',
      lenguaje: 'PHP',
      tema: 'UF2',
      enunciado: '¿Qué imprime?',
      codigo: `$x = "5"; $y = 10;
echo $x + $y;`,
      opciones: ['510', '15', 'Error', '5+10'],
      correcta: 1,
      explicacion: 'PHP convierte "5" a 5 para sumar: 5+10=15'
    },
    {
      tipo: 'que_hace',
      lenguaje: 'PHP',
      tema: 'UF2',
      enunciado: 'Resultado:',
      codigo: `$arr = ["a"=>1, "b"=>2];
echo count($arr);`,
      opciones: ['0', '2', '3', 'Error'],
      correcta: 1,
      explicacion: 'count() cuenta pares clave-valor: 2 elementos.'
    },
    {
      tipo: 'que_hace',
      lenguaje: 'PHP',
      tema: 'UF2',
      enunciado: 'Salida:',
      codigo: `$arr = [1,2,3];
array_push($arr, 4, 5);
echo count($arr);`,
      opciones: ['3', '4', '5', '7'],
      correcta: 2,
      explicacion: 'array_push() añade 4 y 5: total 5 elementos.'
    },
    {
      tipo: 'que_hace',
      lenguaje: 'PHP',
      tema: 'UF2',
      enunciado: '¿Imprime?',
      codigo: `$a = 0; $b = "0";
if ($a == $b) echo "Iguales";
else echo "Diferentes";`,
      opciones: ['Iguales', 'Diferentes', 'Error', 'true'],
      correcta: 0,
      explicacion: '== compara valores: 0 == "0" es true. === compara tipo+valor.'
    },
    {
      tipo: 'que_hace',
      lenguaje: 'PHP',
      tema: 'UF2',
      enunciado: 'Devuelve:',
      codigo: `$nums = [3,1,4,1,5];
echo max($nums);`,
      opciones: ['1', '3', '4', '5'],
      correcta: 3,
      explicacion: 'max() devuelve valor máximo del array: 5'
    }
  ],

  // ─────────────────────────────────────────────────────────────
  // LARAVEL - ERRORES (10 ejercicios)
  // ─────────────────────────────────────────────────────────────
  LARAVEL_ERRORES: [
    {
      tipo: 'error',
      lenguaje: 'Laravel',
      tema: 'UF7',
      enunciado: 'Error en ruta:',
      codigo: `Route::get('/productos', function() {
    $productos = Producto::all();
    return view('productos.index', $productos);
});`,
      opciones: [
        'Route::get no existe',
        'Producto::all() debe usar DB',
        'Debe pasar datos con compact() o array',
        'No se puede retornar vista'
      ],
      correcta: 2,
      explicacion: 'Vistas reciben array: view("...", ["productos" => $productos])'
    },
    {
      tipo: 'error',
      lenguaje: 'Laravel',
      tema: 'UF7',
      enunciado: 'Error en modelo:',
      codigo: `$producto = new Producto();
$producto->nombre = 'Portátil';
$producto->store();`,
      opciones: [
        'Modelo debe llamarse ProductoModel',
        'fillable solo acepta un elemento',
        'El método correcto es save()',
        'No se puede usar new'
      ],
      correcta: 2,
      explicacion: 'En Eloquent se usa save(), no store().'
    },
    {
      tipo: 'error',
      lenguaje: 'Laravel',
      tema: 'UF7',
      enunciado: 'Error en migración:',
      codigo: `Schema::create('productos', function ($table) {
    $table->id();
    $table->decimal('precio');
    $table->timestamp();
});`,
      opciones: [
        'decimal() necesita precisión: decimal("precio",8,2)',
        'No se puede usar string()',
        'timestamp() debe ser timestamps()',
        'Ambas a y c'
      ],
      correcta: 3,
      explicacion: 'decimal() necesita precisión y timestamps() (plural) crea created_at/updated_at.'
    },
    {
      tipo: 'error',
      lenguaje: 'Laravel',
      tema: 'UF7',
      enunciado: 'Error en controlador:',
      codigo: `public function show($id) {
    $producto = Producto::find($id);
    return view('show', compact('producto'));
}`,
      opciones: [
        'compact() solo acepta un parámetro',
        'Falta validar que $producto no sea null',
        'Controller con c minúscula',
        'No hay error'
      ],
      correcta: 1,
      explicacion: 'find() devuelve null si no existe. Usar findOrFail() o validar.'
    },
    {
      tipo: 'error',
      lenguaje: 'Laravel',
      tema: 'UF7',
      enunciado: 'Error en validación:',
      codigo: `$validado = $request->validate([
    'email' => 'required|email|unique'
]);`,
      opciones: [
        'validate() solo acepta un campo',
        'unique necesita tabla: unique:usuarios,email',
        'numeric no existe',
        'No se puede usar create()'
      ],
      correcta: 1,
      explicacion: 'unique debe especificar tabla: unique:usuarios,email'
    },
    {
      tipo: 'error',
      lenguaje: 'Laravel',
      tema: 'UF7',
      enunciado: 'Error en update:',
      codigo: `$producto = Producto::find($id);
$producto->nombre = $request->nombre;
$producto->update();`,
      opciones: [
        'Falta validar datos',
        'update() no necesita params, usar save()',
        'find() debe ser findOrFail()',
        'Todas correctas'
      ],
      correcta: 1,
      explicacion: 'Tras modificar propiedades usar save(). update() usa array.'
    },
    {
      tipo: 'error',
      lenguaje: 'Laravel',
      tema: 'UF7',
      enunciado: 'Error en Route:',
      codigo: `Route::resource('productos', ProductoController);`,
      opciones: [
        'resource no existe',
        'Falta ::class',
        'resource solo GET',
        'Debe especificar rutas manualmente'
      ],
      correcta: 1,
      explicacion: 'Laravel 8+: ProductoController::class'
    },
    {
      tipo: 'error',
      lenguaje: 'Laravel',
      tema: 'UF7',
      enunciado: 'Error en Blade:',
      codigo: `@foreach ($productos as $producto)
    <p>{{ producto->nombre }}</p>
@endforeach`,
      opciones: [
        '@foreach no existe',
        'Falta $ antes de producto',
        'Debe usar {!! !!}',
        'endforeach con ;'
      ],
      correcta: 1,
      explicacion: 'Variables PHP llevan $: {{ $producto->nombre }}'
    },
    {
      tipo: 'error',
      lenguaje: 'Laravel',
      tema: 'UF7',
      enunciado: 'Error en where:',
      codigo: `$productos = Producto::where('precio', 100)->get();`,
      opciones: [
        'where() solo un parámetro',
        'Correcto, busca precio = 100',
        'get() antes de where()',
        'Falta operador: where("precio","=",100)'
      ],
      correcta: 1,
      explicacion: 'where() asume = por defecto. where("campo", valor) es válido.'
    },
    {
      tipo: 'error',
      lenguaje: 'Laravel',
      tema: 'UF7',
      enunciado: 'Error en redirect:',
      codigo: `return redirect('productos.index');`,
      opciones: [
        'Debe ser redirect()->route("productos.index")',
        'redirect no existe',
        'Debe usar view()',
        'Falta return'
      ],
      correcta: 0,
      explicacion: 'Para ruta nombrada: redirect()->route("nombre")'
    }
  ],

  // ─────────────────────────────────────────────────────────────
  // LARAVEL - AUTOCOMPLETAR (10 ejercicios)
  // ─────────────────────────────────────────────────────────────
  LARAVEL_AUTOCOMPLETAR: [
    {
      tipo: 'autocompletar',
      lenguaje: 'Laravel',
      tema: 'UF7',
      enunciado: 'Crear ruta POST:',
      codigo: `Route::______('/productos', [ProductoController::class, 'store']);`,
      opciones: ['get', 'post', 'create', 'send'],
      correcta: 1,
      explicacion: 'Route::post() para peticiones POST.'
    },
    {
      tipo: 'autocompletar',
      lenguaje: 'Laravel',
      tema: 'UF7',
      enunciado: 'Obtener por ID o 404:',
      codigo: `$producto = Producto::______($id);`,
      opciones: ['get($id)', 'find($id)', 'findOrFail($id)', 'where("id",$id)'],
      correcta: 2,
      explicacion: 'findOrFail() lanza 404 si no encuentra.'
    },
    {
      tipo: 'autocompletar',
      lenguaje: 'Laravel',
      tema: 'UF7',
      enunciado: 'Redireccionar a ruta nombrada:',
      codigo: `return redirect()->______('productos.index');`,
      opciones: ['to()', 'route()', 'view()', 'url()'],
      correcta: 1,
      explicacion: 'route() redirige a ruta nombrada.'
    },
    {
      tipo: 'autocompletar',
      lenguaje: 'Laravel',
      tema: 'UF7',
      enunciado: 'Validar datos:',
      codigo: `$datos = $request->______(['nombre' => 'required']);`,
      opciones: ['check()', 'validate()', 'verify()', 'rules()'],
      correcta: 1,
      explicacion: 'validate() valida y devuelve datos.'
    },
    {
      tipo: 'autocompletar',
      lenguaje: 'Laravel',
      tema: 'UF7',
      enunciado: 'Crear timestamps en migración:',
      codigo: `$table->______();`,
      opciones: ['timestamp()', 'timestamps()', 'created_at()', 'dates()'],
      correcta: 1,
      explicacion: 'timestamps() crea created_at y updated_at.'
    },
    {
      tipo: 'autocompletar',
      lenguaje: 'Laravel',
      tema: 'UF7',
      enunciado: 'Filtrar con where:',
      codigo: `$productos = Producto::______('precio', '>', 100)->get();`,
      opciones: ['filter()', 'where()', 'find()', 'search()'],
      correcta: 1,
      explicacion: 'where() filtra consultas Eloquent.'
    },
    {
      tipo: 'autocompletar',
      lenguaje: 'Laravel',
      tema: 'UF7',
      enunciado: 'Token CSRF en formulario:',
      codigo: `<form method="POST">
    ______
</form>`,
      opciones: ['@token', '@csrf', '@security', '@form'],
      correcta: 1,
      explicacion: '@csrf genera campo de token CSRF.'
    },
    {
      tipo: 'autocompletar',
      lenguaje: 'Laravel',
      tema: 'UF7',
      enunciado: 'Crear enlace a ruta:',
      codigo: `<a href="{{ ______('productos.show', $producto->id) }}">`,
      opciones: ['url()', 'route()', 'link()', 'path()'],
      correcta: 1,
      explicacion: 'route() genera URL de ruta nombrada.'
    },
    {
      tipo: 'autocompletar',
      lenguaje: 'Laravel',
      tema: 'UF7',
      enunciado: 'Pasar variables a vista:',
      codigo: `return view('index', ______('productos'));`,
      opciones: ['with()', 'pass()', 'compact()', 'send()'],
      correcta: 2,
      explicacion: 'compact() convierte variables en array.'
    },
    {
      tipo: 'autocompletar',
      lenguaje: 'Laravel',
      tema: 'UF7',
      enunciado: 'Mensaje flash con redirección:',
      codigo: `return redirect()->route('index')->______('success', 'Guardado');`,
      opciones: ['flash()', 'message()', 'with()', 'session()'],
      correcta: 2,
      explicacion: 'with() añade datos flash a la sesión.'
    }
  ],

  // ─────────────────────────────────────────────────────────────
  // MONGODB - SINTAXIS (10 ejercicios - solo CRUD y operadores)
  // ─────────────────────────────────────────────────────────────
  MONGODB_SINTAXIS: [
    {
      tipo: 'sintaxis',
      lenguaje: 'MongoDB',
      tema: 'UF8',
      enunciado: 'Buscar producto por nombre:',
      codigo: `// Buscar nombre "Portátil"`,
      opciones: [
        'db.productos.find({nombre: "Portátil"})',
        'db.productos.search(nombre="Portátil")',
        'db.productos.where("nombre","Portátil")',
        'SELECT * FROM productos WHERE nombre="Portátil"'
      ],
      correcta: 0,
      explicacion: 'find({campo: valor}) busca documentos.'
    },
    {
      tipo: 'sintaxis',
      lenguaje: 'MongoDB',
      tema: 'UF8',
      enunciado: 'Insertar documento:',
      codigo: `// Insertar producto`,
      opciones: [
        'db.productos.add({nombre:"Ratón"})',
        'db.productos.insertOne({nombre:"Ratón"})',
        'db.productos.create({nombre:"Ratón"})',
        'INSERT INTO productos VALUES("Ratón")'
      ],
      correcta: 1,
      explicacion: 'insertOne() inserta documento. _id se genera auto.'
    },
    {
      tipo: 'sintaxis',
      lenguaje: 'MongoDB',
      tema: 'UF8',
      enunciado: 'Actualizar precio:',
      codigo: `// Actualizar precio a 20`,
      opciones: [
        'db.productos.update({nombre:"Ratón"},{precio:20})',
        'db.productos.updateOne({nombre:"Ratón"},{$set:{precio:20}})',
        'db.productos.modify({nombre:"Ratón"},{precio:20})',
        'UPDATE productos SET precio=20 WHERE nombre="Ratón"'
      ],
      correcta: 1,
      explicacion: 'updateOne() con $set actualiza campos sin reemplazar todo.'
    },
    {
      tipo: 'sintaxis',
      lenguaje: 'MongoDB',
      tema: 'UF8',
      enunciado: 'Eliminar documento:',
      codigo: `// Eliminar precio > 1000`,
      opciones: [
        'db.productos.remove({precio:{$gt:1000}})',
        'db.productos.deleteOne({precio:{$gt:1000}})',
        'db.productos.drop({precio:{$gt:1000}})',
        'DELETE FROM productos WHERE precio>1000'
      ],
      correcta: 1,
      explicacion: 'deleteOne() elimina primero que coincida. $gt = mayor que.'
    },
    {
      tipo: 'sintaxis',
      lenguaje: 'MongoDB',
      tema: 'UF8',
      enunciado: 'Consulta con rango:',
      codigo: `// Precio entre 10 y 50`,
      opciones: [
        'db.productos.find({precio:{$gte:10,$lte:50}})',
        'db.productos.find({precio>=10 AND precio<=50})',
        'db.productos.where("precio").between(10,50)',
        'db.productos.find({precio:[10,50]})'
      ],
      correcta: 0,
      explicacion: '$gte = >=, $lte = <=, $gt = >, $lt = <'
    },
    {
      tipo: 'sintaxis',
      lenguaje: 'MongoDB',
      tema: 'UF8',
      enunciado: 'Proyección de campos:',
      codigo: `// Solo nombre y precio`,
      opciones: [
        'db.productos.find({},{nombre:1,precio:1,_id:0})',
        'db.productos.find().select("nombre","precio")',
        'db.productos.find({campos:["nombre","precio"]})',
        'SELECT nombre,precio FROM productos'
      ],
      correcta: 0,
      explicacion: 'Segundo parámetro de find(): 1=incluir, 0=excluir.'
    },
    {
      tipo: 'sintaxis',
      lenguaje: 'MongoDB',
      tema: 'UF8',
      enunciado: 'Ordenar resultados:',
      codigo: `// Ordenar por precio descendente`,
      opciones: [
        'db.productos.find().sort({precio:-1})',
        'db.productos.find().orderBy("precio","DESC")',
        'db.productos.find({},{sort:{precio:-1}})',
        'db.productos.find() ORDER BY precio DESC'
      ],
      correcta: 0,
      explicacion: 'sort({campo:1}) ascendente, sort({campo:-1}) descendente.'
    },
    {
      tipo: 'sintaxis',
      lenguaje: 'MongoDB',
      tema: 'UF8',
      enunciado: 'Limitar resultados:',
      codigo: `// Primeros 10 productos`,
      opciones: [
        'db.productos.find().limit(10)',
        'db.productos.find({$limit:10})',
        'db.productos.find().take(10)',
        'db.productos.find() LIMIT 10'
      ],
      correcta: 0,
      explicacion: 'limit(n) limita resultados. skip(n) salta primeros n.'
    },
    {
      tipo: 'sintaxis',
      lenguaje: 'MongoDB',
      tema: 'UF8',
      enunciado: 'Contar documentos:',
      codigo: `// Contar precio > 100`,
      opciones: [
        'db.productos.countDocuments({precio:{$gt:100}})',
        'db.productos.count({precio:{$gt:100}})',
        'db.productos.find({precio:{$gt:100}}).length()',
        'COUNT(*) FROM productos WHERE precio>100'
      ],
      correcta: 0,
      explicacion: 'countDocuments() cuenta con filtro.'
    },
    {
      tipo: 'sintaxis',
      lenguaje: 'MongoDB',
      tema: 'UF8',
      enunciado: 'Operador $in:',
      codigo: `// Categoría Electrónica o Informática`,
      opciones: [
        'db.productos.find({categoria:{$in:["Electrónica","Informática"]}})',
        'db.productos.find({categoria:["Electrónica","Informática"]})',
        'db.productos.find({categoria:"Electrónica"||"Informática"})',
        'db.productos.where("categoria").in(["Electrónica","Informática"])'
      ],
      correcta: 0,
      explicacion: '$in busca donde campo está en array. $nin = not in.'
    }
  ]
};
