using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using AutoMapper;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using TraderApp.Entities;
using TraderApp.Helpers;
using TraderApp.Interfaces;
using TraderApp.Models;

namespace TraderApp.Services
{
    public class UserService : IUserService
    {
        private DataContext _context;

        public UserService(DataContext context)
        {
            _context = context;
        }

        public User Authenticate(string username, string password)
        {
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
            {
                return null; 
            }

            var user = _context.users.SingleOrDefault(x => x.Username == username);

            if (user == null)
            {
                return null; 
            }

            if (!(VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt)))
            {
                return null;
            }

            return user; 
        }

        public User Create(User user, string password)
        {
            if (string.IsNullOrWhiteSpace(password))
            {
                throw new AppException("password is required"); 
            }

            if (_context.users.Any(x => x.Username == user.Username))
            {
                throw new AppException("Username \"" + user.Username + "\" is already taken");
            }

            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;

            _context.users.Add(user);
            _context.SaveChanges();

            return user;

        }

        public void Delete(int id)
        {
            var user = _context.users.Find(id);
            if (user == null)
            {
                return; 
            }
            _context.users.Remove(user);
            _context.SaveChanges(); 
        }

        public IEnumerable<User> GetAll()
        {
            var user = _context.users;
            return user; 
        }

        public User GetById(int id)
        {
            var user = _context.users.Find(id);
            if (user == null)
            {
                return null; 
            }
            return user; 
        }

        public void Update(User user, string password = null)
        {
            var userParam = _context.users.Find(user.Id);
            if (userParam == null)
            {
                throw new AppException("User is not found"); 
            }

            if (userParam.Username != user.Username)
            {
                // username has changed so check if the new username is already taken
                if (_context.users.Any(x => x.Username == user.Username))
                    throw new AppException("Username " + userParam.Username + " is already taken");
            }

            userParam.FirstName = user.FirstName;
            userParam.LastName = user.LastName;
            userParam.Username = user.Username;


            if (!string.IsNullOrWhiteSpace(password))
            {
                byte[] passwordHash, passwordSalt;
                CreatePasswordHash(password, out passwordHash, out passwordSalt);

                userParam.PasswordHash = passwordHash;
                userParam.PasswordSalt = passwordSalt;
            }

            _context.users.Update(userParam);
            _context.SaveChanges();
        }

        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");

            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        private static bool VerifyPasswordHash(string password, byte[] storedHash, byte[] storedSalt)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");
            if (storedHash.Length != 64) throw new ArgumentException("Invalid length of password hash (64 bytes expected).", "passwordHash");
            if (storedSalt.Length != 128) throw new ArgumentException("Invalid length of password salt (128 bytes expected).", "passwordHash");

            using (var hmac = new System.Security.Cryptography.HMACSHA512(storedSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != storedHash[i]) return false;
                }
            }

            return true;
        }
    }
}
