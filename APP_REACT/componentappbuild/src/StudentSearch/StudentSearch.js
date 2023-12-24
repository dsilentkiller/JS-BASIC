import React from 'react'
const data = ['ramesh','hari','gita','sita','ghanshyam','rira'];

const StudentSearch = () => {
    const [students,setStudents] = React.useState([]);
    React.useEffect(()=>{
        setStudents(data);
    },[]);
    const isWordIncluded = (word,letters)=>{
        return word.includes(letters);
    };

    // array of string

    


    }
  return (
    <div>

    <h3>List of all students</h3>
    <input placeholder='Search...'
    onChange={(event) =>{
        const input = event.target.value; 
    }
    

    // </div>

  )
}

export default StudentSearch