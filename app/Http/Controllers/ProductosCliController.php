<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request as RequestFacade;
use App\Http\Controllers\Controller;
use App\Models\Categorias;
use App\Models\Productos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductosCliController extends Controller


{
    public function index()
    {
        return Inertia::render(
            'ProductosCli',
            [
                'productos' => Productos::query()
                    ->when(RequestFacade::input('search'), function ($query, $search) {
                        $query->where('nombre', 'like', '%' . $search . '%')
                            ->OrWhere('sku', 'like', '%' . $search . '%');
                    })->when(RequestFacade::input('categoria'), function ($query, $categoria) {
                        $query->where('categoria_id', $categoria);
                    })->when(RequestFacade::input('talla'), function ($query, $talla) {
                        $query->where('talla', $talla);
                    })->with('categoria')->paginate(5)
                    ->withQueryString(),
                'categorias' => Categorias::select('id', 'nombre', 'estado')->where('estado', 'Activo')->get(),
                'filters' => RequestFacade::only(['search'])
            ]
        );
    }

    
}
