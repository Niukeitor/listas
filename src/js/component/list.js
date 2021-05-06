import React from "react";
import PropTypes from "prop-types";

export function List(props) {
	/* dentro del list pones el btn */
	return <li className="list-group-item">{props.tareasPendientes}</li>;
}
List.propTypes = {
	tareasPendientes: PropTypes.string
};
