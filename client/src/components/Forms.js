import React from 'react'


const Customform = ({values, handleChange, handleSubmit}) => {
   
    const {title, description} = values;
 
      return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className='form-group'>
                <lable>Title:</lable>
                <input className='form-control' type="text" name="title" value={title} onChange={handleChange} placeholder='Enter your title' />
            </div>
            <div className='form-group' >
                <lable>Description:</lable>
                <input className='form-control' type="text" name="description" value={description} onChange={handleChange} placeholder='Enter your description' />
            </div>
            <div className='form-group'>
                <input className='btn btn-primary' type="submit" value="Submit" />
            </div>
        </form>
    )
}

export default Customform