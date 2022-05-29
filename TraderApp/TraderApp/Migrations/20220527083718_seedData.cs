using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TraderApp.Migrations
{
    public partial class seedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData("users", new string[] { "FirstName", "LastName", "Username", "PasswordHash", "PasswordSalt" },
                new object[] { "test1", "test1", "test1", "101", "101" }); 
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
