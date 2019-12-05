using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Revolut.Domain;

namespace bankAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private List<Account> _accounts;

        public AccountsController()
        {
            _accounts = new List<Account>
            {
                new Account(300)                
            };
        }


        public IEnumerable<Account> Get()
        {
            return _accounts;
        }

        // POST api/values
        [HttpPost]
        public ActionResult Post([FromBody] double value)
        {
            _accounts.Add(new Account(value));
            return Ok(_accounts);
        }
    }
}