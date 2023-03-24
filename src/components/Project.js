
function Project(props) {
    

    return <div className="Project" id={props.id}>
                <img alt={props.id} />
                <h3>{props.title}</h3>
            </div>
       
}
export default Project;