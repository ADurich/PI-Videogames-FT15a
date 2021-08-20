const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios= require('axios');
const {Genre,Videogame}=require('../db');

require('dotenv').config();
const { API_KEY } = process.env;

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const infoFromApi=async()=>{
	const infoUrl=await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`) 
	const apiInfo=await infoUrl.data.results.map(el=>{
		return{
			id: el.id,
			name: el.name,
			platforms: el.platforms.map(el=>el.platform.name),	
			img:el.background_image,
			genres: el.genres.map(el=>el.name),
		};
	});
	return apiInfo;
};

const infoFromDb=async()=>{
	return await Videogame.findAll({
		include:{ //incluime el modelo ocupacion. 
			model:Genre,
			attributes:['name'], //traeme este atributo mediante attributes
			through:{ //
				attributes: [],
			},

		}
	})
}

const getAllCharacters=async()=>{
	const apiInfo=await infoFromApi();
	const dbInfo=await infoFromDb();
	const infoTotal=apiInfo.concat(dbInfo);
	return infoTotal;
}

router.get('/videogames',async(req,res)=>{
	const name=req.query.name
	let videogamesList=await getAllCharacters();
	if(name){
		let videogameName=await videogamesList.filter(el=>el.name.toLowerCase().includes(name.toLowerCase()));
		videogameName.length ?
		res.status(200).send(videogameName):
		res.status(404).send("No está el personaje");	
	}else{
		res.status(200).send(videogamesList);
	}
})

router.post('/videogame',async(req,res)=>{
	let {
		name,
		description,
		platforms,
		genre

	}=req.body

	let insertedVideogame=await Videogame.create({
		name,
		description,
		platforms
	})
	let insertedGenre=await Genre.create({
		name: genre
	})
	let genreDb=await Genre.findAll({
		where: {name:genre}
	})
	insertedVideogame.addGenre(genreDb);
	res.send('Videojuego creado');
})





router.get('/genres',async (req,res)=> {
    const genreApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    const genreNames = genreApi.data.results.map(el => el.name)
    res.send(genreNames);
})



router.get('/videogame/:id',async(req,res)=>{
	const id=req.params.id;
	const videogamesList=await getAllCharacters();
	
		let videogameId=await videogamesList.filter(el=>el.id==id);
		videogameId.length?
		res.status(200).send(videogameId):
		res.status(404).send('No existe este videojuego');
	
})

module.exports = router;


