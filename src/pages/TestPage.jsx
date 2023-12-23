import React, {useState} from 'react'
import axios from 'axios';

function TestPage() {
    const [files, setfiles] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', files[0]);
        
        const config = {
            method: "POST",
            url: "http://localhost:8080/api/v1/attach/upload",
            headers:{
                'accept': '*/*',
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3MDMxOTg4MDIsImlkIjoiMSIsInJvbGVzIjpbIlNVUEVSX0FETUlOIiwiQURNSU4iLCJNSU5fQURNSU4iXSwiZXhwIjoxNzA0MDYyODAyLCJpc3MiOiJhcHBsaWNhbnQgUE9SVEFMIn0.oX4ns3BzgsYQJcDhlpN-0pmBtOB7setpJyo6x_avo6bUHwntp5Cy_qYio9-Y7ZQOwRgFSB_IjH5mb-uzl6o-OQ`
            },
            data: formData
        }
        console.log(config)
    
        try {
          const response = await axios(config)
          console.log(response.data)
          
        } catch (error) {
          console.log(error)
        }
      };
  return (
    <div className='m-5 p-5 rounded-xl bg-white'>
        <input type='file' multiple onChange={(e) => setfiles(e.target.files)} />
        <button onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default TestPage