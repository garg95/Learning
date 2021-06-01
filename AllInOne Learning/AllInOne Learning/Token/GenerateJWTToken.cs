using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace AllInOne_Learning.Token
{
    public class GenerateJWTToken
    {
        //This method is called after user's password is validated from database
        public string GenerateToken(string username)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("pintusharmaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqweqwe@hj"));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var claims = new[]
            {
                new Claim("Issuer","Vishal"),
                new Claim("Admin","true"),
                new Claim(JwtRegisteredClaimNames.UniqueName,username)
            };
            var token = new JwtSecurityToken("Vishal", "vishal", claims, expires: DateTime.Now.AddMinutes(20), signingCredentials: credentials);

            // we are getting error here-> key tried: P11 is hidden
            //IdentityModelEventSource.ShowPII = true; // we have to add this in configureservices in startup.cs
            return new JwtSecurityTokenHandler().WriteToken(token); 
            
        }
    }
}
