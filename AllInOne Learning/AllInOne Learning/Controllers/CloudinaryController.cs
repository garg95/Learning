using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CloudinaryImageUpload;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AllInOne_Learning.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CloudinaryController : ControllerBase
    {
        private readonly ICloudinarySystem _cloudinarySystem;
        public CloudinaryController(ICloudinarySystem cloudinarySystem)
        {
            _cloudinarySystem = cloudinarySystem;
        }
        public string Get()
        {
            return "Hello i am active now";
        }
        [HttpPost]
        public void Post([FromForm]IFormFile formFile)
        {
            _cloudinarySystem.Add(formFile);
        }
        [HttpPost]
        public void UploadImageToLocalPath([FromForm]IFormFile formFile)
        {

        }
    }
}