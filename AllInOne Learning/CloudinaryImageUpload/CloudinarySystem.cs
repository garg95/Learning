using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using CloudinaryImageUpload.Model;
using Microsoft.AspNetCore.Http;
using System;

namespace CloudinaryImageUpload
{
    public class CloudinarySystem:ICloudinarySystem
    {
        private CloudinarySettings cloudinarySettings;
        private readonly Cloudinary _cloudinary;
        public CloudinarySystem()
        {
            cloudinarySettings = new CloudinarySettings()
            {
                CloudName = "shin95",
                ApiKey = "481715297592877",
                ApiSecret = "kE-_-RSHjCTOAWDWkLb6wicSF_A"
            };
            var account = new Account("shin95", "481715297592877", "kE-_-RSHjCTOAWDWkLb6wicSF_A");
            _cloudinary = new Cloudinary(account);
        }
        public string Add(IFormFile formFile)
        {
            string path = string.Empty;
            if(formFile.Length>0)
            {
                var stream = formFile.OpenReadStream();
                var uploadParams = new ImageUploadParams
                {
                    File = new FileDescription(formFile.FileName, stream)
                };
                ImageUploadResult uploadResult = _cloudinary.Upload(uploadParams);
                if (uploadResult != null)
                {
                    path = uploadResult.Url.ToString();
                }
            }
            return path;
        }
    }
}
