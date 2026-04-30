
import { useForm } from 'react-hook-form'

interface FormData {
  nombre: string;
  apellido: string;
  telefono: string;
  email: string;
  producto: string;
  plazo: number;
  GPS: boolean;
  tapiceria: boolean;
  seguro: boolean;
  politicas: boolean;
}


function Presupuesto() {

const {register, 
       handleSubmit,
       reset,
       watch,
       formState:{
       errors
}
} = useForm<FormData>();


// eslint-disable-next-line react-hooks/incompatible-library
const producto = watch("producto") as string | undefined;
const plazo = watch("plazo") as number | undefined;
const GPS = watch("GPS") as unknown as boolean | undefined;
const tapiceria = watch("tapiceria") as unknown as boolean | undefined;
const seguro = watch("seguro") as unknown as boolean | undefined;


const calcularPresupuesto = () => {
    if (!producto || !plazo) return "";

    const precioBase = Number.parseInt(producto.split("-")[1].replace(".", ""));
    let total = precioBase;

    if (GPS) total += 100;
    if (tapiceria) total += 500;
    if (seguro) total += 200;

    total = total / Number(plazo);

    return total.toLocaleString() + " €";
};

const onSubmit = (data: FormData) => {
  console.log(data);
  reset()
}


return (
    <div>
      <section className="modelos">
      <h1>Solicita Nuestro presupuesto.</h1>
      </section>
        
        <section>
        
            <h2>Ingresa tus datos y te contactaremos</h2>
            <div className="formulario-presupuesto">
                <form id="formulario" onSubmit={handleSubmit(onSubmit)}>
                    <fieldset>
                        <legend>Datos Personales</legend>
                        <div className="campo">
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" id="nombre" placeholder="Escriba su nombre" 
                            {...register("nombre", {
                                required: "El nombre es requerido", 
                                minLength: {
                                    value: 3,
                                    message: "Como minimo el Nombre debe tener 3 caracteres"
                                }
                            })}/>
                           <p className='error'>{errors.nombre?.message} </p> 
                        </div>

                        <div className="campo">
                            <label htmlFor="apellido">Apellido:</label>
                            <input type="text" id="apellido" placeholder="Escriba su apellido"  
                            {...register("apellido", {
                                required: "El Apellido es requerido",
                                minLength: {
                                    value: 3,
                                    message: "Como minimo el Nombre debe tener 3 caracteres"
                                }
                                })}/>
                            <p className='error'>{errors.apellido?.message} </p>
                        </div>
                        <div className="campo">   
                            <label htmlFor="telefono">Teléfono:</label>
                            <input type="tel" id="telefono" placeholder="Escriba su teléfono" 
                            {...register("telefono",{
                                required: "el telefono es requerido",
                                pattern: {
                                    value: /^[6789]\d{8}$/,
                                    message: "el telefono no es valido"
                                }
                            }
                            )} />
                            <p className='error'>{errors.telefono?.message} </p>
                        </div>     
                        <div className="campo">  
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" placeholder="Escriba su email" 
                            {...register("email",{
                                required: "El Email es requerido",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "el email no es valido"
                                }
                            })}/>
                            <p className='error'>{errors.email?.message} </p>
                        </div>    
                    </fieldset>
                    
                                        
                    <fieldset>
                        <legend>Presupuesto</legend>
                        <div className="campo">
                        <label htmlFor="producto">Selecciona un producto:</label>
                        <select {...register("producto", {
                                required: "Debes seleccionar un producto"
                            })} id="producto">
                            <option value="">--Selecciona un Modelo--</option>
                            <option value="Suv - 40.000">Suv - 40.000 €</option>
                            <option value="Furgoneta - 30.000">Furgoneta - 30.000 €</option>
                            <option value="camion - 50.000">Camión - 50.000 €</option>
                        </select> 
                        </div>
                        <div className='campo'>
                            <label htmlFor="plazo">Plazo en meses (1-4):</label>
                            <input type="number" id="plazo" {...register("plazo", { required: "El plazo es requerido" })} min="1" max="4" />
                            <p className='error'>{errors.plazo?.message} </p>
                        </div>
                        <div className='campo'>
                            <label htmlFor="producto">Elija los extras para el producto:</label>
                            <div>
                                <input type="checkbox" className="extra" id="GPS" {...register("GPS", { valueAsNumber: true })} />
                                <label htmlFor="GPS">GPS</label>
                            </div>
                            <div>
                            <input type="checkbox" className="extra" id="tapiceria" {...register("tapiceria", { valueAsNumber: true })} />
                            <label htmlFor="tapiceria">Tapicería de lujo</label>     
                            </div>
                            <div>
                            <input type="checkbox" className="extra" id="seguro" {...register("seguro", { valueAsNumber: true })} />
                            <label htmlFor="seguro">Seguro</label>
                            </div>
                            <div>
                            <label htmlFor="presupuestoFinal">Presupuesto estimado:</label>
                                <input type="text" id="presupuestoFinal" value={calcularPresupuesto()} readOnly/>
                            </div>
                        </div>
                   
                    </fieldset>

                    
                    <fieldset>
                        <legend>Politicas</legend>
                        <div className="campo">
                            <label htmlFor="politicas">He leido las politicas de privacidad</label>
                            <input type="checkbox" className="extra" id="politicas" {...register("politicas", {
                                required: "Debes aceptar las políticas"
                            })} />
                            <p className='error'>{errors.politicas?.message}</p>
                        </div>
                        <div className="campo">
                            <input className='boton' type="submit" value="Enviar" id="enviar"/>
                            <button
                                type="button"
                                className="boton"
                                onClick={() => reset()}
                                >
                                Borrar
                                </button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </section>


    </div>
  );
}

export default Presupuesto;