FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY . .
RUN dotnet restore "Server/Server.csproj"
WORKDIR /src/Server
RUN dotnet publish "Server.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
ENV ASPNETCORE_URLS=http://+:8080;https://+:443
ARG APP_UID=1001
USER $APP_UID
WORKDIR /app
COPY --from=build /app/publish .
EXPOSE 8080
EXPOSE 443
ENTRYPOINT ["dotnet", "Server.dll"]
