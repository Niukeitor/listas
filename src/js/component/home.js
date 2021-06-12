import React, { useState, useEffect } from "react";
import { List } from "./list.js";

export function Home() {
	const [tarea, setTarea] = useState([""]);
	const [tareasPendientes, setTareasPendientes] = useState([]);

	const borrarIDElement = idelement => {
		let newArray = [];
		tareasPendientes.filter(function(element, i) {
			if (i != idelement) {
				newArray.push(element);
			}
		});
		setTareasPendientes(newArray);
	};
	const agregarTarea = e => {
		e.preventDefault();
		if (tarea != "") {
			setTareasPendientes([tarea, ...tareasPendientes]);
			setTarea([""]);
		}
	};

	return (
		<div className=" mt-5">
			<div className="row justify-content-center">
				<div className="col-12 text-center">
					<h1 className="text-success">Cartas</h1>
				</div>
				<form onSubmit={agregarTarea} className="col-4">
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
						{}
						{tareasPendientes.map((element, i) => {
							return (
								<List
									key={i}
									tareasPendientes={element}
									idBorrar={i}
									borrarIDElement={borrarIDElement}
								/>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}
