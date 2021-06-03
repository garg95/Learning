using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AllInOne_Learning.Model
{
    public class Employee
    {
        [JsonProperty("id")]
        public int? Id { get; set; }
        [JsonProperty("name")]
        public string Name { get; set; }
        public int? CompanyId { get; set; }
    }
}
