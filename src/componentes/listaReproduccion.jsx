import React from "react";
import ListItem from "./list";


export let musica = [
    {
        id:1,
        nombre: "AC_DC - Back In Black",
        url: "src/music/AC_DC - Back In Black (Official Music Video)(MP3_160K).mp3",
        img: "https://tse1.mm.bing.net/th?id=OIP.PCzJrKlORofEq0-UCWEW2gHaFj&pid=Api&P=0&h=180"
    },

    {
        id:2,
        nombre: "AC_DC - Highway to Hell",
        url: "src/music/AC_DC - Highway to Hell (Official Video)(MP3_160K).mp3",
        img: "https://tse1.mm.bing.net/th?id=OIP.PCzJrKlORofEq0-UCWEW2gHaFj&pid=Api&P=0&h=180"
    },
    {
        id:3,
        nombre: "AC_DC - Thunderstruck",
        url: "src/music/AC_DC - Thunderstruck (Official Video)(MP3_160K)_1.mp3",
        img: "https://tse1.mm.bing.net/th?id=OIP.PCzJrKlORofEq0-UCWEW2gHaFj&pid=Api&P=0&h=180"
    },
    {
        id:4,
        nombre: "ADIOS AMOR - LUIS MATEUS",
        url: "src/music/ADIOS AMOR - LUIS MATEUS con Letra(MP3_160K).mp3",
        img: "https://tse1.mm.bing.net/th?id=OIP.F9XxL4yNbSrl09704FdUkwHaHa&pid=Api&P=0&h=180"
    },
    {
        id:5,
        nombre: "Adolescentes Orquesta - Virgen",
        url: "src/music/Adolescentes Orquesta - Virgen Letra(MP3_160K).mp3",
        img: "https://tse1.mm.bing.net/th?id=OIP.AzWfC3DwN7UGiNw-xdc8TAHaHZ&pid=Api&P=0&h=180"
    },
    {
        id:6,
        nombre: "Donde Estés Llegaré",
        url: "src/music/Alexis _ Fido -- Donde Estés Llegaré- letra(MP3_160K).mp3",
        img: "https://tse1.mm.bing.net/th?id=OIP.6eMPwMuag2f4W1FzwnmWEwHaHa&pid=Api&P=0&h=180"
    },
    {
        id:7,
        nombre: " Copita de Licor ",
        url: "src/music/ALZATE _ DARÍO GÓMEZ - Copita de Licor (Video Ofic(MP3_160K)_1.mp3",
        img: "https://tse4.mm.bing.net/th?id=OIP.CmPtuLSOwcbqtjrL5840KwHaHa&pid=Api&P=0&h=180"
    },
    {
        id:8,
        nombre: "Amiga",
        url: "src/music/Amiga - Maelo Ruiz-Letra(MP3_160K).mp3",
        img: "https://tse1.mm.bing.net/th?id=OIP.f1uOtFZShLU8Dg_TU8DHkgHaHa&pid=Api&P=0&h=180"
    },
    {
        id:9,
        nombre: "Amor De Lejos",
        url: "src/music/Amor De Lejos(LETRA) - Baby Rasta _ Gringo Ft Yomo(MP3_160K).mp3",
        img: "https://tse3.mm.bing.net/th?id=OIP.VzSpJ2L3I-aVROhUUDU4BQHaHa&pid=Api&P=0&h=180"
    },
    {
        id:10,
        nombre: "Amores Como El Nuestro Jerry Rivera",
        url: "src/music/Amores Como El Nuestro Jerry Rivera Letra(MP3_160K).mp3",
        img: "https://tse2.mm.bing.net/th?id=OIP.xvSEYgHbfDroDjfndDiHagHaLH&pid=Api&P=0&h=180"
    },
    {
        id:11,
        nombre: "Amor En Practica",
        url: "src/music/Amor En Practica (Remix) - J Alvarez ft Jory_ Malu(MP3_160K).mp3",
        img: "https://tse4.mm.bing.net/th?id=OIP.q0YCcIlbsagUpFPr2XWdlwHaJQ&pid=Api&P=0&h=180"
    },
    {
        id:12,
        nombre: "Aquel Viejo Motel David Pabon",
        url: "src/music/Aquel Viejo Motel David Pabon(MP3_160K)_1.mp3",
        img: "https://tse1.mm.bing.net/th?id=OIP.-HsyJQ2AhVIu_fOcTq8VXQHaHa&pid=Api&P=0&h=180"
    },
    {
        id:13,
        nombre: "Aventura - Dile Al Amor",
        url: "src/music/Aventura - Dile Al Amor(MP3_160K).mp3",
        img: "https://tse2.mm.bing.net/th?id=OIP.u2GHS9JgojCzfrakqGscsQHaHa&pid=Api&P=0&h=180"
    },
    {
        id:14,
        nombre: "Enseñame a olvidar",
        url: "src/music/Aventura - Enseñame a olvidar(MP3_160K).mp3",
        img: "https://tse2.mm.bing.net/th?id=OIP.u2GHS9JgojCzfrakqGscsQHaHa&pid=Api&P=0&h=180"
    },
    {
        id:15,
        nombre: "Hermanita",
        url: "src/music/Aventura - Hermanita (letra)(MP3_160K).mp3",
        img: "https://tse2.mm.bing.net/th?id=OIP.u2GHS9JgojCzfrakqGscsQHaHa&pid=Api&P=0&h=180"
    },
    {
        id:16,
        nombre: "La Boda",
        url: "src/music/Aventura - La Boda(MP3_160K).mp3",
        img: "https://tse2.mm.bing.net/th?id=OIP.u2GHS9JgojCzfrakqGscsQHaHa&pid=Api&P=0&h=180"
    },
    {
        id:17,
        nombre: " Por Un Segundo",
        url: "src/music/Aventura - Por Un Segundo (lyric - letra)(MP3_160K).mp3",
        img: "https://tse2.mm.bing.net/th?id=OIP.u2GHS9JgojCzfrakqGscsQHaHa&pid=Api&P=0&h=180"
    },
    {
        id:18,
        nombre: "Aventura- El Perdedor",
        url: "src/music/Aventura- El Perdedor ( letra )(MP3_160K).mp3",
        img: "https://tse2.mm.bing.net/th?id=OIP.u2GHS9JgojCzfrakqGscsQHaHa&pid=Api&P=0&h=180"
    },
    {
        id:19,
        nombre: "Bad Bunny - Vete",
        url: "src/music/Bad Bunny - Vete (Letra_Lyrics)(MP3_160K).mp3",
        img: "https://tse4.mm.bing.net/th?id=OIP.wxs23X5rp2HuVDabeDUsigHaJM&pid=Api&P=0&h=180"
    },


]


function ListaReproduccion({ onCancionClick }) {
  return (
    <div>
      {musica.map((info, i) => (
        <ListItem
          key={info.id}
          nombre={info.nombre}
          id={info.id}
          imagen={info.img}
          clickCancion={onCancionClick}
        />
      ))}
    </div>
  );
}

export default ListaReproduccion;

