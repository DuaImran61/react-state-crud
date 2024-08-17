const StudentList = (props) => {
    return <tr>
        <td>{props.index}</td>
        <td>{props.student.name}</td>
        <td>{props.student.age}</td>
        <td>{props.student.class}</td>
        <td>{props.student.rollNumber}</td>
        <td className="buttons">
            <button onClick={()=>{ props.onDelete(props.index) }}>Del</button>
            <button  onClick={()=>{props.onEdit(props.student,props.index)}} >Edit</button>
        </td>
    </tr>
}

export default StudentList;