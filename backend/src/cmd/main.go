package main

import (
	"log"
	"net/http"
    "github.com/gorilla/mux"
	"cybergen/src/pkg/database"
	"github.com/joho/godotenv"
	"path/filepath"
)

func main() {
	envPath := filepath.Join("..", "..", ".env")
	err := godotenv.Load(envPath)
	if err != nil {
		log.Fatalf("Erro ao carregar .env: %v", err)
	}

	err = database.ConnectDatabase()

	if err != nil {
		log.Fatalf("Falha ao conectar ao banco: %v", err)
	}

	r := mux.NewRouter()


	log.Println("iniciando servidor na porta")
	log.Fatal(http.ListenAndServe(":8080", r))
}

