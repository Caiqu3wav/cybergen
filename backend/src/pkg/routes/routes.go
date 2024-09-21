package routes

import (
	"github.com/gorilla/mux"
	"cybergen/src/pkg/handlers"
)

func RegisterRoutes(r *mux.Router) {
	r.HandleFunc("/users", handlers.CreateUser).Methods("POST")
}