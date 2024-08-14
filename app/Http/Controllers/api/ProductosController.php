<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Request as RequestFacade;
use App\Http\Controllers\Controller;
use App\Models\Categorias;
use App\Models\Productos;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductosController extends Controller
{
    public function index()
    {
        $productos = Productos::query()
            ->when(RequestFacade::input('search'), function ($query, $search) {
                $query->where('nombre', 'like', '%' . $search . '%')
                    ->OrWhere('sku', 'like', '%' . $search . '%');
            })->when(RequestFacade::input('estado'), function ($query, $estado) {
                $query->where('estado', $estado);
            })->with('categoria')->paginate(5)
            ->withQueryString();

        $response = [
            'estado' => 'success',
            'mensaje' => 'Productos',
            'data' => $productos,
        ];

        return response()->json($response, 200);
    }


    public function store(Request $request)
    {

        // Crear y persistir nuevo evento
        $productos = Productos::create([
            'nombre' => $request->nombre,
            'detalles' => $request->detalles,
            'sku' => $request->sku,
            'precio' => $request->precio,
            'cantidad' => $request->cantidad,
            'categoria_id' => $request->categoria_id,

        ]);

        $response = [
            'estado' => 'success',
            'mensaje' => 'producto creado exitosamente',
            'data' => $productos,
        ];

        return response()->json($response, 200);
    }

    public function update(Request $request)
    {

        $productos = Productos::findOrFail($request->id);


        $productos->nombre = $request->nombre;
        $productos->detalles = $request->detalles;
        $productos->sku = $request->sku;
        $productos->precio = $request->precio;
        $productos->cantidad = $request->cantidad;
        $productos->categoria_id = $request->categoria_id;

        $productos->save();

        $response = [
            'estado' => 'success',
            'mensaje' => 'Producto actualizado exitosamente',
            'data' => $productos,
        ];

        return response()->json($response, 200);
    }
}
