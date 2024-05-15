<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request as RequestFacade;
use App\Http\Controllers\Controller;
use App\Models\Categorias;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoriasController extends Controller


{
    public function index()
    {
        return Inertia::render(
            'Categorias/Index',
            [
                'categorias' => Categorias::query()
                    ->when(RequestFacade::input('search'), function ($query, $search) {
                        $query->where('nombre', 'like', '%' . $search . '%')
                            ->OrWhere('keyword', 'like', '%' . $search . '%');
                    })->when(RequestFacade::input('estado_users'), function ($query, $estado) {
                        $query->where('estado', $estado);
                    })->with('roles')->paginate(5)
                    ->withQueryString(),
                'filters' => RequestFacade::only(['search'])
            ]
        );
    }

    public function create()
    {

        return Inertia::render('Categorias/Add');
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:150',
            'keyword' => 'required|string|max:20',
            'descripcion' => 'required|string|max:300',
            'imagen' => 'required|mimes:jpg,png,jpeg,gif,bmp,tiff,svg,web,webp|max:2048'
        ]);

        //subir file
        if ($request->imagen) {

            $folder = 'categorias';
            $extension = $request->file('imagen')->getClientOriginalExtension();

            $fileName = time() . '_' . $request->nombre . $extension;
            $filePath = $request->file('imagen')->storeAs('uploads/' . $folder, $fileName, 'public');
        }
        // Crear y persistir nuevo evento
        $eventos = Categorias::create([
            'nombre' => $request->nombre,
            'descripcion' => $request->descripcion,
            'keyword' => $request->keyword,
            'imagen' => $fileName,

        ]);

        return to_route('categorias.index');
    }

    function edit(Request $request, $categorias)
    {
        $categoria = Categorias::findOrFail($categorias);
        return Inertia::render('Categorias/Edit', [
            'categoria' => $categoria,
        ]);
    }
}
