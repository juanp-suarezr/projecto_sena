<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request as RequestFacade;
use App\Http\Controllers\Controller;
use App\Models\Categorias;
use App\Models\Productos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductosController extends Controller


{
    public function index()
    {
        return Inertia::render(
            'Productos/Index',
            [
                'productos' => Productos::query()
                    ->when(RequestFacade::input('search'), function ($query, $search) {
                        $query->where('nombre', 'like', '%' . $search . '%')
                            ->OrWhere('sku', 'like', '%' . $search . '%');
                    })->when(RequestFacade::input('estado'), function ($query, $estado) {
                        $query->where('estado', $estado);
                    })->with('categoria')->paginate(5)
                    ->withQueryString(),
                'filters' => RequestFacade::only(['search'])
            ]
        );
    }

    public function create()
    {
        $categorias = Categorias::select('id', 'nombre', 'estado')->where('estado', 'Activo')->get();
        return Inertia::render('Productos/Add', compact('categorias' ));
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:150',
            'sku' => 'required|string|max:150',
            'precio' => 'required',
            'cantidad' => 'required|integer',
            'talla' => 'required',
            'detalles' => 'required|string|max:300',
            'imagen' => 'required|mimes:jpg,png,jpeg,gif,bmp,tiff,svg,web,webp',
            'estado' => 'required',
        ]);

        //subir file
        if ($request->imagen) {

            $folder = 'productos';
            $extension = $request->file('imagen')->getClientOriginalExtension();

            $fileName = time() . '_' . $request->nombre . $extension;
            $filePath = $request->file('imagen')->storeAs('uploads/' . $folder, $fileName, 'public');
        }
        // Crear y persistir nuevo evento
        $productos = Productos::create([
            'nombre' => $request->nombre,
            'sku' => $request->sku,
            'precio' => $request->precio,
            'cantidad' => $request->cantidad,
            'categoria_id' => $request->categoria_id,
            'talla' => $request->talla,
            'detalles' => $request->detalles,
            'estado' => $request->estado,
            'imagen' => $fileName,

        ]);

        return to_route('productos.index');
    }

    function edit(Request $request, $id)
    {
        $producto = Productos::findOrFail($id);
        $categorias = Categorias::select('id', 'nombre', 'estado')->where('estado', 'Activo')->get();
        return Inertia::render('Productos/Edit', [
            'producto' => $producto,
            'categorias' => $categorias,
        ]);
    }

    public function actualizarProd(Request $request)
    {

        $request->validate([
            'nombre' => 'required|string|max:150',
            'sku' => 'required|string|max:150',
            'precio' => 'required',
            'cantidad' => 'required|integer',
            'talla' => 'required',
            'detalles' => 'required|string|max:300',
            'estado' => 'required',
        ]);

        $productos = Productos::findOrFail($request->id);

        // Subir archivo si se proporcionó uno nuevo
        if ($request->hasFile('imagen')) {

            $folder = 'productos';
            $extension = $request->file('imagen')->getClientOriginalExtension();
            $fileName = time() . $request->nombre . $extension;
            $filePath = $request->file('imagen')->storeAs('uploads/' . $folder, $fileName, 'public');

            // Eliminar el archivo antiguo si existe
            if ($productos->imagen) {
                Storage::delete('uploads/' . $folder . '/' . $productos->imagen);
            }

            // Actualizar la propiedad de imagen del pro$productos con el nombre del nuevo archivo
            $productos->imagen = $fileName;
        }

        $productos->nombre = $request->nombre;
        $productos->sku = $request->sku;
        $productos->precio = $request->precio;
        $productos->cantidad = $request->cantidad;
        $productos->talla = $request->talla;
        $productos->detalles = $request->detalles;
        $productos->estado = $request->estado;

        // Guardar los cambios en la base de datos
        $productos->save();

        return back();
    }
}
