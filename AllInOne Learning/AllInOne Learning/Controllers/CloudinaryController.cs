using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using CloudinaryImageUpload;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AllInOne_Learning.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CloudinaryController : ControllerBase
    {
        private readonly ICloudinarySystem _cloudinarySystem;
        private readonly IHostingEnvironment _hostingEnvironment;
        public CloudinaryController(ICloudinarySystem cloudinarySystem,IHostingEnvironment hostingEnvironment)
        {
            _cloudinarySystem = cloudinarySystem;
            _hostingEnvironment = hostingEnvironment;
        }
        public string Get()
        {
            return "Hello i am active now";
        }
        [HttpPost]
        [Route("upload")]
        public string Post([FromForm]IFormFile formFile)
        {
            string path= _cloudinarySystem.Add(formFile);
            return path;
        }
        [HttpPost]
        public void UploadImageToLocalPath([FromForm]IFormFile formFile)
        {
            string path = _hostingEnvironment.ContentRootPath+@"Images"+formFile.FileName;
            using (Stream sw = new FileStream(path, FileMode.Create))
            {
                formFile.CopyTo(sw);
            }
        }
    }
}