package main

import (
	"fmt"
	"log"
	"net/http"
    "github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()

	r.HandleFunc("/nfts", GetNfts).Methods("GET")

	log.Println("iniciando servidor na porta")
	log.Fatal(http.ListenAndServe(":8080", r))
}

func GetNfts(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Lista NFT!")
}