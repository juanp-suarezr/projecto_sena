<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Request as RequestFacade;
use App\Http\Controllers\Controller;
use App\Models\Categorias;
use App\Models\Clientes;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoriasController extends Controller
{
    public function index()
    {
        $categorias = Categorias::query()
            ->when(RequestFacade::input('search'), function ($query, $search) {
                $query->where('nombre', 'like', '%' . $search . '%')
                    ->OrWhere('keyword', 'like', '%' . $search . '%');
            })->when(RequestFacade::input('estado_users'), function ($query, $estado) {
                $query->where('estado', $estado);
            })->with('roles')->paginate(5)
            ->withQueryString();

        $response = [
            'estado' => 'success',
            'mensaje' => 'Categorias',
            'data' => $categorias,
        ];

        return response()->json($response, 200);
    }

    
    public function añadirCategoria(Request $request)
    {
        
        // Crear y persistir nuevo evento
        $categorias = Categorias::create([
            'nombre' => $request->nombre,
            'descripcion' => $request->descripcion,
            'keyword' => $request->keyword,

        ]);

        $response = [
            'estado' => 'success',
            'mensaje' => 'Categoria creada exitosamente',
            'data' => $categorias,
        ];

        return response()->json($response, 200);
    }
}
