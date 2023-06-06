using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using ToDoList.BLL.Interfaces;
using ToDoList.BLL.Services;
using ToDoList.DAL.Context;
using ToDoList.DAL.Interfaces;
using ToDoList.DAL.Models;
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

            builder.Services.Configure<ToDoStoreDatabaseSettings>(
                builder.Configuration.GetSection(nameof(ToDoStoreDatabaseSettings)));

            builder.Services.AddSingleton<IToDoStoreDatabaseSettings>(
                s => s.GetRequiredService<IOptions<ToDoStoreDatabaseSettings>>().Value);

            builder.Services.AddSingleton<IMongoClient>(
                s => new MongoClient(builder.Configuration.GetValue<string>("ToDoStoreDatabaseSettings:ConnectionString")));

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