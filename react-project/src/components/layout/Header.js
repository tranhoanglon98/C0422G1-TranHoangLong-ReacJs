import React from "react";

export class Header extends React.Component{
    render() {
        return (
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Add</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link ">List</a>
                </li>
            </ul>
        );
    }
}
