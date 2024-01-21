const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()
const Marvel = require("../api/models/marvel.model");

const DB_URL = process.env.DB_URL;

const arrayMarvel = [
    {
        "titulo": "Captain America: The Winter Soldier",
        "genero": ["Acción", "Aventura", "Suspense", "Ciencia ficción"],
        "personajes": ["Captain America", " The Winter Soldier", " Black Widow", " Falcon"],
        "año": 2014,
        "sinopsis": "Steve Rogers, como Capitán América, se une a Black Widow y Falcon para descubrir una conspiración dentro de S.H.I.E.L.D. liderada por una figura del pasado de Capitán América.",
        "facturacion": 714.4000000,
        "foto":'https://th.bing.com/th/id/OIP.5x5TJsOIWK8RoaKSjRb1kQHaK-?pid=ImgDet&w=121.55317951603827&h=180&c=7'
      },
      {
        "titulo": "Thor: Ragnarok",
        "genero": ["Acción", "Aventura", "Comedia", "Ciencia ficción"],
        "personajes": ["Thor", "Loki", "Hulk", "Valkyrie", "Hela"],
        "año": 2017,
        "sinopsis": "Thor se encuentra atrapado en un planeta alienígena y debe competir en una lucha gladiatorial contra Hulk mientras intenta detener el Ragnarok, la destrucción de Asgard.",
        "facturacion": 854000000,
        "foto":'https://th.bing.com/th/id/OIP.P0HBAJFygkhCcUQJhouMzwHaLH?pid=ImgDet&w=120&h=180&c=7'
      },
      {
        "titulo": "Doctor Strange",
        "personajes": ["Doctor Stephen Strange", "Ancient One", "Karl Mordo", "Dormammu"],
        "genero": ["Acción", "Aventura", "Fantasía", "Ciencia ficción"],
        "año": 2016,
        "sinopsis": "El neurocirujano Doctor Strange busca la cura para sus manos lesionadas y descubre poderes místicos, convirtiéndose en el Hechicero Supremo para defender al mundo de amenazas místicas.",
        "facturacion": 677.7000000,
        "foto":'https://th.bing.com/th/id/OIP.JbxGBJXF9UHaecjjnwDe0wHaLH?pid=ImgDet&w=126.75517790759427&h=180&c=7'
      },
      {
        "titulo": "Ant-Man",
        "genero": ["Acción", "Aventura", "Comedia", "Ciencia ficción"],
        "personajes": [" Ant-Man", "Hank Pym", "The Wasp"],
        "año": 2015,
        "sinopsis": "Scott Lang, un ladrón convertido en héroe, recibe un traje que le permite encogerse de tamaño pero aumentar su fuerza. Debe abrazar su lado heroico y ayudar a su mentor a proteger la tecnología de Ant-Man.",
        "facturacion": 519.3000000 ,
        "foto":'https://th.bing.com/th/id/OIP.lipH8gTMGCJ0C9PqkfjUsQHaK-?pid=ImgDet&w=121.45492883500265&h=180&c=7'
      },
      {
        "titulo": "Spider-Man: Homecoming",
        "genero": ["Acción", "Aventura", "Comedia", "Ciencia ficción"],
        "personajes": [" Spider-Man", " Iron Man", " Vulture"],
        "año": 2017,
        "sinopsis": "Peter Parker, como Spider-Man, intenta equilibrar su vida de estudiante con ser un superhéroe, mientras se enfrenta a un villano que amenaza a la ciudad y lucha por demostrar su valía a Tony Stark.",
        "facturacion": 880.2000000,
        "foto":'https://th.bing.com/th/id/OIP.FX5j50vk-VXdsQDKxm2fxgHaLH?pid=ImgDet&w=101.25&h=180&c=7'
      },
      {
        "titulo": "Iron Man",
        "genero": ["Acción", "Ciencia ficción"],
        "personajes": [" Iron Man", "Pepper Potts", "Obadiah Stane"],
        "año": 2008,
        "sinopsis": "El multimillonario fabricante de armas Tony Stark construye un traje blindado y asume el papel de su alter ego, Iron Man, para combatir el crimen y la corrupción.",
        "facturacion": 585000000,
        "foto":'https://th.bing.com/th/id/OIP.YRDG3lQit5mHGia6sA1V9AHaK-?pid=ImgDet&w=121.5&h=180&c=7'
      },
      {
        "titulo": "The Avengers",
        "genero": ["Acción", "Fantasía", "Ciencia ficción"],
        "personajes": [" Iron Man", " Captain America", "Thor", " Hulk", "Black Widow", " Hawkeye"],
        "año": 2012,
        "sinopsis": "El equipo de superhéroes se une para luchar contra Loki, quien planea conquistar la Tierra utilizando el poder del Teseracto.",
        "facturacion": 1.518000000,
        "foto":'https://th.bing.com/th/id/OIP.iAsDFqwmY2RZZVAt9kiojwHaLH?pid=ImgDet&w=120.40133779264214&h=180&c=7'
      },
      {
        "titulo": "Guardians of the Galaxy",
        "genero": ["Acción", "Aventura", "Ciencia ficción"],
        "personajes": ["Star-Lord", "Gamora", "Drax the Destroyer", "Rocket", "Groot"],
        "año": 2014,
        "sinopsis": "Un grupo de inadaptados espaciales se une para formar los Guardianes de la Galaxia y proteger un objeto de gran poder de Ronan the Accuser.",
        "facturacion": 773.3000000 ,
        "foto":'https://th.bing.com/th/id/OIP.pYZChZzBUT3q4EBoDXFA-QHaK-?pid=ImgDet&w=121.55317951603827&h=180&c=7'
      },
      {
        "titulo": "Black Panther",
        "genero": ["Acción", "Aventura", "Drama", "Ciencia ficción"],
        "personajes": [" Black Panther", "Killmonger", "Shuri", "Okoye"],
        "año": 2018,
        "sinopsis": "Después de la muerte de su padre, T'Challa regresa a Wakanda para asumir el trono y se enfrenta a un viejo enemigo que pone en peligro a su nación.",
        "facturacion": 1.3470000000 ,
        "foto":'https://th.bing.com/th/id/OIP.tnzR4SNgzUnPCIB1fFa16QHaLH?pid=ImgDet&w=135.02722323049002&h=180&c=7'
      },
      {
        "titulo": "Avengers: Infinity War",
        "genero": ["Acción", "Fantasía", "Ciencia ficción"],
        "personajes": ["Thanos", "Iron Man", "Captain America", "Thor", " Hulk", " Black Widow", "Hawkeye"],
        "año": 2018,
        "sinopsis": "Thanos busca reunir las Gemas del Infinito para imponer su voluntad retorcida sobre la realidad, y los Vengadores se unen para detenerlo.",
        "facturacion": 2.0480000000 ,
        "foto":'https://th.bing.com/th/id/OIP.1jdklJKgjAe81COtBdjG9AHaLH?pid=ImgDet&w=135&h=180&c=7'
      },
      {
        "titulo": "Iron Man 2",
        "genero": ["Acción", "Ciencia ficción"],
        "personajes": ["Iron Man", "Black Widow", " War Machine"],
        "año": 2010,
        "sinopsis": "Tony Stark se enfrenta a nuevas amenazas mientras lidia con su salud, la presión del gobierno y la aparición de un nuevo rival tecnológico.",
        "facturacion": 623.9000000,
        "foto":'https://image.tmdb.org/t/p/original/vfPP5JUC0iQje0lUBLljKzAquLh.jpg'
      },
      {
        "titulo": "Thor",
        "genero": ["Acción", "Aventura", "Fantasía", "Ciencia ficción"],
        "personajes": ["Thor", "Loki", "Jane Foster", "Odin"],
        "año": 2011,
        "sinopsis": "Thor, el dios del trueno, es desterrado a la Tierra y debe aprender a ser un verdadero héroe mientras su malvado hermano Loki conspira para apoderarse de Asgard.",
        "facturacion": 449.3000000,
        "foto":'https://www.themoviedb.org/t/p/original/3Q7VxyZlqCEfiUY9E9bcBE9qcyu.jpg'
      },
      {
        "titulo": "Captain America: The First Avenger",
        "genero": ["Acción", "Aventura", "Ciencia ficción"],
        "personajes": ["Captain America", "Peggy Carter", "Red Skull", "Bucky Barnes"],
        "año": 2011,
        "sinopsis": "Steve Rogers se convierte en el super soldado Capitán América durante la Segunda Guerra Mundial para enfrentarse a la organización HYDRA liderada por el malvado Red Skull.",
        "facturacion": 370.6000000,
        "foto":'https://th.bing.com/th/id/OIP.xZIxllmFW2g7Uxb-opTTkAHaK-?pid=ImgDet&w=121.51898734177216&h=180&c=7'
      },
      {
        "titulo": "The Avengers: Age of Ultron",
        "genero": ["Acción", "Aventura", "Ciencia ficción"],
        "personajes": ["Iron Man", "Captain America", "Thor", " Hulk", " Black Widow", "Hawkeye"],
        "año": 2015,
        "sinopsis": "Los Vengadores luchan contra Ultron, una inteligencia artificial decidida a erradicar la humanidad, mientras enfrentan conflictos internos que ponen en peligro su unidad.",
        "facturacion": 1.4020000000,
        "foto":'https://th.bing.com/th/id/R.3d7ccad9e0c56302049a0954e2728674?rik=xRFCBAJnHgoucA&riu=http%3a%2f%2fwww.electric-shadows.com%2fwp-content%2fuploads%2f2015%2f04%2fAvengers-Age-of-Ultron-poster.jpg&ehk=g0hAUp%2bBRZObISHnn0loU9NKjRQefQP0iO5SMd2%2fL44%3d&risl=&pid=ImgRaw&r=0'
      },
      {
        "titulo": "Ant-Man and The Wasp",
        "genero": ["Acción", "Aventura", "Ciencia ficción"],
        "personajes": ["Ant-Man", "The Wasp", "Hank Pym", "Ghost"],
        "año": 2018,
        "sinopsis": "Scott Lang debe equilibrar su vida como superhéroe y padre mientras se une a Hope van Dyne para descubrir secretos del pasado, enfrentándose a un nuevo enemigo.",
        "facturacion": 622.7000000,
        "foto":'https://th.bing.com/th/id/OIP.gWGsAc-kCR_CZ3FHJjavvgHaJ4?pid=ImgDet&w=135&h=180&c=7'
      },
]

mongoose.connect(DB_URL).then(async () => {
    const allMarvel = await Marvel.find();
    if(allMarvel.length > 0) {
        await Marvel.collection.drop();
        console.log("El universo Marvel no existe");
    }
})
.catch ((error) => console.log("error borrando universo Marvel",error))
    .then (async () =>{
        const marvelMap = arrayMarvel.map((marvel) => new Marvel(marvel));
        await Marvel.insertMany(marvelMap);
        console.log("Universo marvel insertado");
 })
 .catch((error) => console.log("error insertando universo marvel",error))
 .finally(() => mongoose.disconnect());