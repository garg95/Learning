using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace CloudinaryImageUpload
{
    public interface ICloudinarySystem
    {
        void Add(IFormFile formFile);
    }
}
