import React, { useState } from "react";
import { List } from "./list.js";
//create your first component
export function Home() {
	const [tarea, setTarea] = useState([]);
	const [tareasPendientes, setTareasPendientes] = useState([]);

	const agregarTarea = e => {
		e.preventDefault();
		setTareasPendientes([...tareasPendientes, tarea]);
		console.log(tareasPendientes);
		setTarea([""]);
	};
	return (
		<div className=" mt-5">
			<div className="row justify-content-center">
				<div className="col-12 text-center">
					<h1 className="text-primary">Tareas</h1>
				</div>
				<form onSubmit={agregarTarea} className="col-4">
					{/* al apretar enter */}
					<input
						type="text"
						className="form-control mx-0"
						placeholder="Ingrese su tarea"
						onChange={e => setTarea(e.target.value)}
						value={tarea}
					/>
				</form>
			</div>
			<div className="row justify-content-center">
				<div className="col-4">
					<ul className="list-group">
						{/* Aqui el .map */}
						{tareasPendientes.map((element, i) => {
							return <List key={i} tareasPendientes={element} />;
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}
