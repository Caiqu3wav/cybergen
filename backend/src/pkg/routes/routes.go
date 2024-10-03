package routes

import (
	"github.com/gorilla/mux"
	"cybergen/src/pkg/handlers"
)

func RegisterRoutes(r *mux.Router) {
	r.HandleFunc("/users", handlers.CreateUser).Methods("POST").Name("createUser")

	r.HandleFunc("/login", handlers.SignIn).Methods("POST").Name("login")

	r.HandleFunc("/register", handlers.SignUp).Methods("POST").Name("register")

	r.HandleFunc("/users", handlers.GetUsers).Methods("GET").Name("getUsers")

	r.HandleFunc("/user/{id}", handlers.GetUser).Methods("GET").Name("getUser")
}