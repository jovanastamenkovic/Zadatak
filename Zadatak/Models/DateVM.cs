using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Zadatak.Models
{
    public class DateVM
    {
        public DateTime DateValue {get;set;}
        public string DateInString { get; set; }

        public DateVM()
        {
            this.DateValue = DateTime.Now;
            this.DateInString = FormattedDateValue(this);
        }

        public static string FormattedDateValue(DateVM dateVm)
        {
            string formattedDate = String.Empty;
            if (dateVm.DateValue != null)
            {
                formattedDate = dateVm.DateValue.ToString("dd/MM/yy HH:mm:ss");
            }

            return formattedDate;
        }
    }
}