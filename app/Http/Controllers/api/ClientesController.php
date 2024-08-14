<?php

namespace App\Http\Controllers\api;
use Illuminate\Support\Facades\Request as RequestFacade;
use App\Http\Controllers\Controller;
use App\Models\Clientes;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientesController extends Controller
{
    
    
    public function index()
    {
        $clientes = Clientes::query()
                    ->when(RequestFacade::input('search'), function ($query, $search) {
                        $query->where('nombre', 'like', '%' . $search . '%')
                            ->OrWhere('correo', 'like', '%' . $search . '%');
                    })->when(RequestFacade::input('estado'), function ($query, $estado) {
                        $query->where('estado', $estado);
                    })->paginate(5)
                    ->withQueryString();

        $response = [
            'estado' => 'success',
            'mensaje' => 'clientes obtenidos.',
            'data' => $clientes,
        ];

        return response()->json($response, 200);
    }

    

    public function suscripcion(Request $request) {

        $request->validate([
            'correo' => 'required|email',
        ]);

        $productos = Clientes::create([
            'correo' => $request->correo,
        ]);

        $response = [
            'estado' => 'success',
            'mensaje' => 'correo validado y suscrito como cliente fiel de taysu.',
            'data' => $productos,
        ];

        return response()->json($response, 200);

    }
}
