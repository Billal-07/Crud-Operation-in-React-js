import React, { useState } from 'react'

function Home() {
    const [Values, setValues] = useState ({
        Name: " ",
        Email: " ",
        Designation: " "
    })

    const [Data, setData] = useState([])
    const [UpdateBt, setUpdateBt] = useState(false)
    const [Edit, setEdit] = useState(false)
    const [editIndex, seteditIndex] = useState()

    const handleChange = (e) => {
        e.preventDefault()
        setValues({
            ...Values,
            [e.target.name]: (e.target.value)
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(Edit){
            const temp = Data
            Object.assign(temp[editIndex], Values)
            setData([...temp])
            setUpdateBt(false)
            setEdit(false)
            alert("Employee info Updated")
        }
        else{
            setData(
                [...Data,
                    Values]
            )
            setValues({
                Name: " ",
                Email: " ",
                Designation: " "
            })
            alert("Employee info added")
        }
    }
    const handledDelete = (index) =>{
        const updatedData = Data.filter((item,i) => i !== index)
        setData(updatedData)
        alert("Employee Removed")
    }
    const handleEdit = (index) => {
        const tempData = Data[index]
        setValues({
            Name: tempData.Name,
            Email: tempData.Email,
            Designation: tempData.Designation
        })
        setUpdateBt(true)
        seteditIndex(index)
        setEdit(true)
    }
    return (
        <div className='main_div'>
            <h1 className='mainhead'>CRUD OPERATIONS USING REACT</h1>
            <form onSubmit={handleSubmit}>
                <label>Employee Name</label>
                <input name='Name' type="text" value={Values.Name} onChange={handleChange} />
                <br/>
                <label >Email</label>
                <input name='Email' type="text" value={Values.Email} onChange={handleChange} />
                <br/>
                <label>Designation</label>
                <input name='Designation' type="text" value={Values.Designation} onChange={handleChange} />
                <br/>
                <button className='add' type='Submit'>{UpdateBt ? "UPDATE" : "ADD"}</button>
            </form>
            <br/>
            <br/>
            <br/>
            <table className='table'>
                <tr>
                    <th >Employee Name</th>
                    <th >Employee Email</th>
                    <th >Employee Designation</th>
                    <th >Actions</th>
                </tr>
                {Data.map((items, i) => (
                    <tr>
                        <td>{items.Name}</td>
                        <td>{items.Email}</td>
                        <td>{items.Designation}</td>
                        <td>
                            <button onClick={()=>handleEdit(i)}>Edit</button>
                            <button onClick={()=>handledDelete(i)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    )
}
export default Home