using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using AllInOne_Learning.Token;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AllInOne_Learning.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JwtTokenController : ControllerBase
    {
        public string GetToken()
        {
            var token= new GenerateJWTToken().GenerateToken("vishal");
            var handler = new JwtSecurityTokenHandler();
            var decryptedToken= handler.ReadToken(token);
            return token;
        }
    }
}