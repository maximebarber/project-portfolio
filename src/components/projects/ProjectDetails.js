import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.idk
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, cumque odio! Incidunt rem, delectus temporibus, expedita harum quis, sit ex minus officia facilis dignissimos! Possimus eligendi molestias repellat aut maiores.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by MDB</div>
                    <div>2nd September 2020</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
