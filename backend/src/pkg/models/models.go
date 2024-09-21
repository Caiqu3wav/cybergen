package models

import (
	"time"
	"github.com/google/uuid"
)

type User struct {
	ID		uint	 `gorm:"primaryKey;autoIncrement"`
	Name     string 	`gorm:"type:varchar(50);unique;not null"`
	Email    string	 `gorm:"type:varchar(100);not null"`
	Password string  `gorm:"type:varchar(60);not null"`
	NFTs     []NFT  `gorm:"foreignKey:OwnerId"`
}

type NFT struct {
	ID		uuid.UUID 	`gorm:"type:uuid;default:uuid_generate_v4();primaryKey"`
	Name	string 	   `gorm:"type:varchar(100);not null"`
	Description string `gorm:"type:text"`
	ImageUrl string    `gorm:"type:varchar(255)"`
	Owner    User  `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
	OwnerId  uint
	CreatedAt   time.Time `gorm:"autoCreateTime"`
	UpdatedAt   time.Time `gorm:"autoUpdateTime"`
}