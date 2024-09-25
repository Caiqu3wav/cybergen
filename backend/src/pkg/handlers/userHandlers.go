package handlers

import (
	"cybergen/src/pkg/database"
	"cybergen/src/pkg/models"
	"encoding/json"
	"net/http"
	"github.com/gorilla/mux"
	"golang.org/x/crypto/bcrypt"
)

func hashPassword(password string) (string, error)  {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	return string(bytes), err

}

func CreateUser(w http.ResponseWriter, r *http.Request) {
	var user models.User
	if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	hashedPassword, err := hashPassword(user.Password)
	if err != nil {
		http.Error(w, "Falha ao encriptar senha", http.StatusInternalServerError)
		return
	}
	user.Password = hashedPassword

	if err := database.DB.Create(&user).Error; err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(user)
}

func GetUsers(w http.ResponseWriter, r *http.Request) {
	var users []models.User

	if err := database.DB.Find(&users).Error; err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(users)
}

func GetUser(w http.ResponseWriter, r *http.Request) {
		params := mux.Vars(r)
		var user models.User

		if err := database.DB.Find(&user, params["id"]).Error; err != nil {
			http.Error(w, "Usuário não encontrado", http.StatusInternalServerError)
		return
		}

		w.Header().Set("Content-Type,", "application/json")
		json.NewEncoder(w).Encode(user)
}