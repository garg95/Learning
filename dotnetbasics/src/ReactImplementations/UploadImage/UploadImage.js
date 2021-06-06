import React from 'react';
import axios from 'axios'

export default class UploadImage extends React.Component {
    state = {
        picturePreview: null,
        pictureAsFile: null,
        options:{method:'post',body:null},
        imgsrc:null
    }
    SetImageData = (e) => {
        if (e.target.files && e.target.files[0]) {
            var formData=new FormData();
            formData.append('formFile',e.target.files[0]);
            var obj=Object.assign({},this.state.options);
            obj.body=formData;
            this.setState({
                picturePreview: URL.createObjectURL(e.target.files[0]),
                pictureAsFile: e.target.files[0],
                options:obj
            });
        }
    }
    UploadDataToCloudinary = () => {
        let formData = new FormData();
        formData.append('formFile', this.state.pictureAsFile,this.state.pictureAsFile.name);

        axios.post('https://localhost:44310/api/Cloudinary/upload',formData).then(response=>this.setState({imgsrc:response.data}));
        // fetch('https://localhost:44310/api/Cloudinary/upload',this.state.options).then(response=>console.log(response));
    }
    UploadDataToLocalPath=()=>{
        let formData = new FormData();
        formData.append('formFile', this.state.pictureAsFile,this.state.pictureAsFile.name);
        axios.post('https://localhost:44310/api/Cloudinary',formData);
    }
    render() {
        return (
            <div>
                <input type='file' onChange={(event) => this.SetImageData(event)} />
                <button onClick={this.UploadDataToCloudinary}>Upload Data to cloudinary</button>
                <button onClick={this.UploadDataToLocalPath}>Upload data to local path</button>
                <p>When used fetch to send data to api ,don't send content-type .<b>Explaination </b> When using fetch with the 'Content-Type': 'multipart/form-data' you also have to set the <i>boundary </i>(the separator between the fields that are being sent in the request).</p>
                <h3> Below is the uploaded image</h3>
                <img src={this.state.imgsrc} alt=""/>
                <hr /><hr />
            </div>
        )
    }
}