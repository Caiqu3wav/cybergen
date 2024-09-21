package main

import (
	"log"
	"net/http"
    "github.com/gorilla/mux"
	"cybergen/src/pkg/database"
	"cybergen/src/pkg/routes"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("Erro ao carregar .env: %v", err)
	}

	err = database.ConnectDatabase()

	if err != nil {
		log.Fatalf("Falha ao conectar ao banco: %v", err)
	}

	database.AutoMigrate(database.DB)

	r := mux.NewRouter()
	routes.RegisterRoutes(r)

	log.Println("iniciando servidor na porta 8080")
	log.Fatal(http.ListenAndServe(":8080", r))
}

