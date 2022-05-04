import axios from 'axios';
import { useState } from 'react';
import Back from "./Back";

function Upload() {
  const [name,setName] = useState('')
  const [url,setUrl] = useState('')
  const handleOnChange=(e)=>{
    setName(e.target.value)
  }
  const handleSubmit=(e)=>{
    if(name===""){
      e.preventDefault();
      alert("Enter a valid input")
    }
    else{
      const exercise ={
        materialName : name,
        materialUrl : url
      }
      console.log(exercise)
      axios.post('https://cseclassroom.herokuapp.com/exercise/add',exercise)
        .then(res=>console.log(res.data));
        
    }
  }
  function guardarArchivo(e) {
    var file = e.target.files[0] //the file
    var reader = new FileReader() //this for convert to Base64 
    reader.readAsDataURL(e.target.files[0]) //start conversion...
    reader.onload = function (e) { //.. once finished..
      var rawLog = reader.result.split(',')[1]; //extract only thee file data part
      var dataSend = { dataReq: { data: rawLog, name: file.name, type: file.type }, fname: "uploadFilesToGoogleDrive" }; //preapre info to send to API
      fetch('https://script.google.com/macros/s/AKfycbz7ufL4hsZM_qA4pl2ad-cBO2uMV8ZuxV7R2kqadnQaF_5FwNHicuTm5RcFCvHkD0QX/exec', //your AppsScript URL
        { method: "POST", body: JSON.stringify(dataSend) }) //send to Api
        .then(res => res.json()).then((a) => {
          setUrl(a.url) //See response
        }).catch(e => console.log(e)) // Or Error in console
    }
  }

  return (
    <div className="App">
      <Back />
      <div className="App-header">
        <form>
        <input type="file" accept="application/pdf" id="customFile" onChange={(e) => guardarArchivo(e)} /><br></br>
        <label>Material Name:</label>
        <input type="text" placeholder='File name' onChange={handleOnChange} maxLength='50' /><br></br>
        <button className='submit-btn' onClick={handleSubmit}>Submit</button>
        </form>
        <div id="cat"></div>
      </div>
    </div>
  );
}

export default Upload;
