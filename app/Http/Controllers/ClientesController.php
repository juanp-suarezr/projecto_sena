<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Request as RequestFacade;
use App\Http\Controllers\Controller;
use App\Models\Clientes;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    function __construct()
    {
        $this->middleware('permission:usuarios-listar|usuarios-crear|usuarios-editar|usuarios-eliminar', ['only' => ['index', 'store']]);
        $this->middleware('permission:usuarios-crear', ['only' => ['create', 'store']]);
        $this->middleware('permission:usuarios-editar', ['only' => ['edit', 'update']]);
        $this->middleware('permission:usuarios-eliminar', ['only' => ['destroy']]);
    }
    
    public function index()
    {
        return Inertia::render(
            'Clientes/Index',
            [
                'clientes' => Clientes::query()
                    ->when(RequestFacade::input('search'), function ($query, $search) {
                        $query->where('nombre', 'like', '%' . $search . '%')
                            ->OrWhere('correo', 'like', '%' . $search . '%');
                    })->when(RequestFacade::input('estado'), function ($query, $estado) {
                        $query->where('estado', $estado);
                    })->paginate(5)
                    ->withQueryString(),
                'filters' => RequestFacade::only(['search'])
            ]
        );
    }

    
    public function store() {

    }

    public function suscripcion(Request $request) {

        $request->validate([
            'correo' => 'required|email',
        ]);

        $productos = Clientes::create([
            'correo' => $request->correo,
        ]);

        return back();

    }
}
