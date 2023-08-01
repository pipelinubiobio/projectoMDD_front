const URL = "http://localhost:3001";

export const getAllImplementos = async () => {
    const res = await fetch(URL+'/implementos');
    const data = await res.json();
    return data;
};

export const  buscarImplemento = async (estado) => {
    const res = await fetch(URL+'/implementos/buscar?estado='+estado);
    const data = await res.json();
    return data;
}

export const eliminarImplemento = async (id) => {
    const res = await fetch(URL+'/implementos/'+id, {
        method: 'DELETE'
    });
    const data = await res.json();
    return data;
}

export const crearImplemento = async (implemento) => {
    const res = await fetch(URL+'/implementos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(implemento)
    });
    const data = await res.json();
    return data;
}