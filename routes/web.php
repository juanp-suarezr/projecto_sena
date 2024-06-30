<?php

use App\Http\Controllers\CategoriasController;
use App\Http\Controllers\ClientesController;
use App\Http\Controllers\ProductosCliController;
use App\Http\Controllers\ProductosController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use App\Models\Categorias;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    if (auth()->check()) {
        return redirect()->route('dashboard');
    } else {
        return Inertia::render('Welcome', [
            
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'categorias' => Categorias::where('estado', 'Activo')->get(),
            
    
        ]);
    }
});

//inicio pagina web
Route::get('/Welcome', function () {
    
    return Inertia::render('Welcome', [
            
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'categorias' => Categorias::where('estado', 'Activo')->get(),
        

    ]);

})->name('Welcome');

//ruta conocenos
Route::get('/conocenos', function () {
    
        return Inertia::render('Conocenos', [
            
        ]);
    
})->name('conocenos');

//resource ruta de productos vista de cliente
Route::resource('productos_cliente', ProductosCliController::class);

//ruta para suscribir correo
Route::post('/suscripcion', [ClientesController::class, 'suscripcion'])->name('suscripcion');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/about', fn () => Inertia::render('About'))->name('about');
    Route::get('users', [UserController::class, 'index'])->name('users.index');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('/actualizarProd', [ProductosController::class, 'actualizarProd'])->name('productos.actualizarProd');
});

Route::group(['middleware' => ['auth']], function () {
    Route::resource('users', UserController::class)->middleware('auth');
    Route::resource('roles', RoleController::class);
    Route::resource('categorias', CategoriasController::class);
    Route::resource('productos', ProductosController::class);
    Route::resource('clientes', ClientesController::class);
});



require __DIR__.'/auth.php';
