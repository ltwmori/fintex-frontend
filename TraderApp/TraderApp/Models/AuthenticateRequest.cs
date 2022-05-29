using System;
using System.ComponentModel.DataAnnotations;

namespace TraderApp.Models
{
	public class AuthenticateRequest
	{
        [Required]
        public string Username{ get; set; }
        [Required]
        public string Password { get; set; }
    }
}

