import React, { useState } from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { carouselStyles as sx } from "./styles.jsx";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Data for carousel items
  const carouselItems = [
    {
      id: 1,
      name: "Amuse Bouche",
      image: "assets/menu/amusebouche.jpg",
      body: "sajian amuse-bouche adalah keripik ubi dengan tambahan keju atau sup kacang yang disajikan dalam cangkir espreso",
    },
    {
      id: 2,
      name: "Daging Bebek Bakar",
      image: "assets/menu/dagingBebek.jpg",
      body: "daging bebek guring dengan aroma manis.",
    },
    {
      id: 3,
      name: "Hors d'oeuvres",
      image: "assets/menu/horsDovres.jpg",
      body: "Hors d'oeuvres adalah sajian pertama yang akan diberikan pada tamu. Hors d'oeuvres biasanya berupa makanan ringan yang bisa dipegang langsung dengan tangan.",
    },
    {
      id: 4,
      name: "sushi",
      image: "assets/menu/mentah.jpg",
      body: "olahan ikan yang disajikan mentah , makan yang berasal dari jepang",
    },
    {
      id: 5,
      name: "salad",
      image: "assets/menu/saladSayur.jpeg",
      body: "salad yang berisikan sayur dengan tambahan saus spesial, dihidangkan sebelum atau sesudah hidangan utama",
    },
    {
      id: 6,
      name: "Mignardise",
      image: "assets/menu/MAccaron.jpeg",
      body: "Merupakan kue kecil yang disajikan sebagai hidangan penutup",
    },
    {
      id: 7,
      name: "Pudding",
      image: "assets/menu/Pudding.jpg",
      body: "Makanan manis yang disantap untuk hidangan penutup.",
    },
    {
      id: 8,
      name: "steik daging rusa",
      image: "assets/menu/steakDagingRusa.jpg",
      body: "merupakan hidangan utama yang dibuat menggunakan daging rusa yang akan memanjakan lidah dengan rasa yang unik.",
    },
    {
      id: 9,
      name: "steik salmon",
      image: "assets/menu/steakSalmon.jpg",
      body: "steik daging salmon dapat menjadi pilihan untuk main course karena memiliki tekstur dan rasa yang otentik.",
    },
  ];

  const visibleItems = carouselItems.slice(currentIndex, currentIndex + 4);

  console.log(carouselItems);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "unset", md: "40%" },
      }}
    >
      <Box className="categoryCarousel" sx={sx.container}>
        {visibleItems.map((item) => (
          <Box
            sx={{
              position: "relative",
              margin: "10px",
              borderRadius: "30px",
            }}
          >
            <Card
              key={item.id}
              sx={{
                width: "430px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                height: "300px",
                background: "linear-gradient(to right, #8360c3, #2ebf91)",
                "&:hover": {
                  height: "350px",
                  transition: "all 0.5s",
                },
                "&:hover:before": {
                  opacity: "0.3",
                  height: "100%",
                  transition: "all 0.5s",
                  overflow: "hidden",
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  backgroundSize: "contain",
                  top: "0",
                  right: "0",
                  left: "0",
                  bottom: "0",
                  opacity: "0",
                },
              }}
            >
              <CardContent sx={sx.cardContentBox}>
                <Box
                  component="img"
                  src={item.image}
                  sx={{
                    width: "300px",
                    height: "150px",
                    borderRadius: "20px",
                    position: "cover",
                  }}
                />
                <Typography sx={sx.textTitle}>{item.name}</Typography>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "1p6x",
                    lineHeight: "18px",
                    width: "300px",
                    color: "black",
                  }}
                >
                  {item.body}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
      <Box sx={sx.boxBtn}>
        <Button
          variant="contained"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          sx={{
            width: "113px",
            height: "50px",
            backgroundColor: "#8BAC3E",
            borderRadius: "100px",
            display: { xs: "none", md: "flex" },
            gap: "10px",
            "&:hover": {
              background: "#8BAC3E",
            },
          }}
        >
          <NavigateBeforeIcon sx={sx.iconBtn} />
          Prev
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          disabled={currentIndex === carouselItems.length - 5}
          sx={{
            "&:hover": {
              background: "#8BAC3E",
            },
            width: "113px",
            height: "50px",
            backgroundColor: "#8BAC3E",
            borderRadius: "100px",
            display: { xs: "none", md: "flex" },
            gap: "10px",
          }}
        >
          Next
          <NavigateNextIcon sx={sx.iconBtn} />
        </Button>
      </Box>
    </Box>
  );
};

export default Carousel;
