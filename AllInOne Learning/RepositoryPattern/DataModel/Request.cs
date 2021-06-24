using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RepositoryPattern.DataModel
{
    public class Request
    {
        public int Id { get; set; }
        public string RequestData { get; set; }
        public string ResponseData { get; set; }
        public string type { get; set; }
        public string URI { get; set; }
    }
}
