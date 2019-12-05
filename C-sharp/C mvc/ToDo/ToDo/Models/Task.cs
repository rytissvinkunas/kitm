using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDo.Models.enums;

namespace ToDo.Models
{
    public class Task
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public Priority Priority { get; set; }
        public DateTime TillDate { get; set; }
        public Status Status { get; set; }
        public string AssigneTo { get; set; }
    }


}
