using System;
using AutoMapper;
using TraderApp.Dtos;
using TraderApp.Entities;
using TraderApp.Models;

namespace TraderApp.Helpers
{
	public class AutoMapperProfile : Profile
	{
		public AutoMapperProfile()
		{
			CreateMap<User, UserDto>();
			CreateMap<UserDto, User>(); 
		}
	}
}

