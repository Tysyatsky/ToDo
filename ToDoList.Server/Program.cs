using Microsoft.EntityFrameworkCore;
using ToDoList.BLL.Interfaces;
using ToDoList.BLL.Services;
using ToDoList.DAL.Context;
using ToDoList.DAL.Interfaces;
using ToDoList.DAL.Repository;

namespace ToDoList.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();


            builder.Services.AddDbContext<ToDoDbContext>(
                options => options.UseSqlServer(builder.Configuration.GetConnectionString("ToDo")));

            builder.Services.AddTransient<IToDoRepository, ToDoRepository>();
            builder.Services.AddTransient<IToDoService, ToDoService>();

            builder.Services.AddCors();

            var app = builder.Build();

            app.UseCors(builder => builder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader());

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            // app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}