using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TraderApp.Migrations
{
    public partial class newdb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Password",
                table: "users");

            migrationBuilder.AddColumn<byte[]>(
                name: "PasswordHash",
                table: "users",
                type: "bytea",
                nullable: false,
                defaultValue: new byte[0]);

            migrationBuilder.AddColumn<byte[]>(
                name: "PasswordSalt",
                table: "users",
                type: "bytea",
                nullable: false,
                defaultValue: new byte[0]);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PasswordHash",
                table: "users");

            migrationBuilder.DropColumn(
                name: "PasswordSalt",
                table: "users");

            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "users",
                type: "text",
                nullable: false,
                defaultValue: "");
        }
    }
}
