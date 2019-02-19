using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;


namespace Zadatak.Controllers
{
    [RoutePrefix("api/date")]
    public class DateController : ApiController
    {      
        [HttpGet]
        [Route("")]
        public string Get()
        {
            DateTime date = DateTime.Now;
            return FormatDate(date);
        }

        private string FormatDate(DateTime date)
        {
            string dateformatted = String.Empty;
            if (date != null)
            {
                dateformatted = date.ToString("dd/MM/yy HH:mm:ss");
            }

            return dateformatted;
        }
    }
}