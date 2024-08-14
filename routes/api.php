<?php

use App\Http\Controllers\api\CategoriasController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\UserAuthController;
use App\Http\Controllers\api\ClientesController;
use App\Http\Controllers\api\ProductosController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('userinfo', function () {
    return response()->json([
        'status' => true,
        'message' => "Consume API Rest 2.1",
        'product' => 'TAYSU accesorios'
    ], 200);
});

// Protected routes 
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [UserAuthController::class, 'logout']);

    Route::get('suscripcion', [ClientesController::class, 'index']);

    Route::post('/categorias', [CategoriasController::class, 'añadirCategoria']);

    Route::controller(ProductosController::class)->group(function () {
        Route::post('/productos', 'store');
        Route::post('/productos/{id}', 'update');
        
    });
});

Route::post('login', [UserAuthController::class, 'login']);

Route::post('suscripcion', [ClientesController::class, 'suscripcion']);
Route::get('/categorias', [CategoriasController::class, 'index']);
Route::get('/productos', [ProductosController::class, 'index']);
