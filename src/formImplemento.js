import React, { useState } from 'react';
const { crearImplemento } = require('./api/implementos');

const FormImplemento = (props) => {
  const [formData, setFormData] = useState({
    numeroSerie: '',
    estado: '',
    descripcion: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await crearImplemento(formData);
    setFormData({
        numeroSerie: '',
        estado: '',
        descripcion: '',
    });
    props.onSave();
  };

  return (
    <form className="inline-form" onSubmit={handleSubmit}>
      <label htmlFor="numeroSerie">Número de Serie:</label>
      <input
        type="text"
        id="numeroSerie"
        name="numeroSerie"
        value={formData.numeroSerie}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="estado">Estado:</label>
      <select
        id="estado"
        name="estado"
        value={formData.estado}
        onChange={handleInputChange}
        required
      >
        <option value="">Seleccionar</option>
        <option value="Operativo">Operativo</option>
        <option value="Inoperativo">No Operativo</option>
      </select>

      <label htmlFor="descripcion">Descripción:</label>
      <input
        type="text"
        id="descripcion"
        name="descripcion"
        value={formData.descripcion}
        onChange={handleInputChange}
        required
      />

      <button type="submit">Guardar</button>
    </form>
  );
};

export default FormImplemento;