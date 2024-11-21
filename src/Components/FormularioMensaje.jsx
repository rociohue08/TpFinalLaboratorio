import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Message } from 'primereact/message';
import { Button } from 'primereact/button';
import axios from 'axios'; 

export default function Formulario() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [consulta, setConsulta] = useState('');
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    consulta: ''
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación del formulario
    let formErrors = { username: '', email: '', consulta: '' };

    if (!username) formErrors.username = 'Username is required';
    if (!email) formErrors.email = 'Email is required';
    if (!consulta) formErrors.consulta = 'Consulta is required';

    setErrors(formErrors);

    // Si no hay errores, enviar el formulario
    if (!formErrors.username && !formErrors.email && !formErrors.consulta) {
      try {
        setLoading(true);
        setResponseMessage('');
        
        // Datos del formulario
        const mensajeData = {
          nombre: username,
          correo: email,
          consulta,
        };

        // Enviar los datos al backend usando Axios
        const response = await axios.post('http://localhost:3000/api/mensajes', mensajeData, {
          headers: {
            'Content-Type': 'application/json', // Asegurarse de que se esté enviando como JSON
          },
        });

        // Si la solicitud es exitosa
        if (response.status === 200) {
          setResponseMessage('Mensaje enviado correctamente');
          setUsername('');
          setEmail('');
          setConsulta('');
        }
      } catch (error) {
        // En caso de error
        setResponseMessage('Error al enviar el mensaje');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Envíanos un mensaje</h2>

      <div className="flex flex-wrap align-items-center mb-3 gap-2">
        <label htmlFor="username" className="p-sr-only">Username</label>
        <InputText
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className={errors.username ? 'p-invalid mr-2' : 'mr-2'}
        />
        {errors.username && <Message severity="error" text={errors.username} />}
      </div>

      <div className="flex flex-wrap align-items-center mb-3 gap-2">
        <label htmlFor="email" className="p-sr-only">Email</label>
        <InputText
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={errors.email ? 'p-invalid mr-2' : 'mr-2'}
        />
        {errors.email && <Message severity="error" text={errors.email} />}
      </div>

      <div className="flex flex-wrap align-items-center mb-3 gap-2">
        <label htmlFor="consulta" className="p-sr-only">Consulta</label>
        <InputTextarea
          id="consulta"
          value={consulta}
          onChange={(e) => setConsulta(e.target.value)}
          placeholder="Escribe tu consulta aquí"
          rows={5}
          className={errors.consulta ? 'p-invalid mr-2' : 'mr-2'}
        />
        {errors.consulta && <Message severity="error" text={errors.consulta} />}
      </div>

      {/* Mensaje de estado (cargando, éxito o error) */}
      {responseMessage && (
        <Message severity={responseMessage.includes('Error') ? 'error' : 'success'} text={responseMessage} />
      )}

      <div className="flex justify-content-center">
        <Button label={loading ? 'Enviando...' : 'Enviar'} type="submit" severity="success" disabled={loading} />
      </div>
    </form>
  );
}
