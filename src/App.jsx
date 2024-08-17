import logo from './logo.svg';
import './App.css';
import { students } from './components/data';
import { useState } from 'react';
import StudentList from './components/studentList';

function App() {
  let [student, setStudent] = useState(students)
  let [name, setName] = useState("")
  let [age, setAge] = useState("")
  let [stuClass, setClass] = useState("")
  let [rollNumber, setRollNumber] = useState("")
  let [flag, setFlag] = useState(false)
  let [stuIndex, setStuIndex] = useState(null)




  let newData = {
    name,
    age,
    class: stuClass,
    rollNumber
  }

  const AddStudent = () => {
    console.log(newData);
    setStudent([...student, newData])
  }

  const DeleteStudent = (id) => {
    console.log(id);
    student.splice(id, 1)
    setStudent([...student])
  }


  const EditStudent = (stu, index) => {
    console.log(stu);
    setName(stu.name)
    setAge(stu.age)
    setClass(stu.class)
    setRollNumber(stu.rollNumber)
    setFlag(true)

    setStuIndex(index)

  }

  const updateStudent = () => {
    let newData = {
      name,
      age,
      class: stuClass,
      rollNumber
    }


    let copyStudent = student.splice(stuIndex, 1, newData)
    console.log(copyStudent);
    setFlag(false)


  }



  return (
    <div className="App">
      <h1>REACT CRDU APP</h1>


      <div className="formDiv">
        <input type="text" value={name} placeholder='Enter your name' onChange={(e) => { setName(e.target.value) }} />
        <input type="text" value={age} placeholder='Enter your age' onChange={(e) => { setAge(e.target.value) }} />
        <input type="text" value={stuClass} placeholder='Enter your class' onChange={(e) => { setClass(e.target.value) }} />
        <input type="text" value={rollNumber} placeholder='Enter your roll Number  ' onChange={(e) => { setRollNumber(e.target.value) }} />
        {flag ?
          <button onClick={updateStudent}>Update Student</button>
          :
          <button onClick={AddStudent}>Add Student</button>
        }
      </div>

      <table>
        <tr>
          <th>S NO.</th>
          <th>Name</th>
          <th>Age</th>
          <th>Class</th>
          <th>Roll Number</th>
          <th>Action</th>
        </tr>

        {student.map((item, index) => {
          return <StudentList student={item} index={index} onDelete={DeleteStudent} onEdit={EditStudent} />
        })}

      </table>
    </div>
  );
}

export default App;
