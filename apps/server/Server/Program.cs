var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();
}

// Let's start with HTTP first
// app.UseHttpsRedirection();

// Want Authorization? Use this:
// app.UseAuthorization();

app.MapControllers();

// To Access from the client, must enable CORS
app.UseCors();

app.Run();

