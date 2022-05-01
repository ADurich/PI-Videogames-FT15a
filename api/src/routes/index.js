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

router.get('/apidb',async(req,res)=>{

	var infoUrl;

	for(let i=1;i<=1;i++){
		infoUrl=await axios.get(`https://api.rawg.io/api/games?page=${i}&&key=${API_KEY}`) 

		await infoUrl.data.results.map(async (el)=>{

			let insertedVideogame = await Videogame.create({
				
					  name:el.name,
					  description:'Descripcion api',
				      platforms:el.platforms.map(el=>el.platform.name),
				      img:el.background_image
				
				
					})
			let genres= await el.genres.map(el=>el.name)


			genres.map(el=>{

				 Genre.findOrCreate({ 
					where:{name:el} 
				});
			})
				
			let genreDb=await Genre.findAll({
				where: {name:genres}
			})

			insertedVideogame.addGenre(genreDb);

			});

	}
	
	res.status(200).send("pasados los videojuegos de la api a la db");
	
})

const infoFromDb=async()=>{
	return await Videogame.findAll({
		include:{ //incluime el modelo género. 
			model:Genre,
			attributes:['name'], //traeme este atributo mediante attributes
			through:{ //
				attributes: [],
			},

		}
	})
}

const getAllCharacters=async()=>{
	//await infoFromApi();
	const dbInfo=await infoFromDb();
	//const infoTotal=apiInfo.concat(dbInfo);
	return dbInfo;
}

router.get('/videogames',async(req,res)=>{
	const name=req.query.name
	let videogamesList=await getAllCharacters();
	//let videogamesList=await infoFromApi();
	var videogameName=[];
	var joinWords;
	var separateWords;
	var separateWords2;
	var checkElement;
	if(name){	

		videogamesList.map(el=>{
			joinWords=[];
			separateWords=el.name.split(" ");
			separateWords2=separateWords.length;
			checkElement=false;
			for (let i=0; i<separateWords2; i++) {
				joinWords.push(separateWords.join(" "))
				separateWords.shift();
				if(joinWords[i].toLowerCase().startsWith(name.toLowerCase())&&!checkElement){
					videogameName.push(el)
					checkElement=true;
				}
			}			
		})
		
		/*
		videogamesList.map(el=>{
			el.genres.map(genre=>{
				if(genre.name.toLowerCase()===name.toLowerCase()){
					videogameName.push(el)
				}
			})
		})*/


		videogameName.length ?
		res.status(200).send(videogameName):
		videogameName=[];
		res.status(200).send(videogameName)
		//res.status(404).send("No está el personaje");	
	}else{
		res.status(200).send(videogamesList);
	}
})

router.get('/platforms',async(req,res)=>{
	let platformsApi= await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`)
	let platformsName=platformsApi.data.results.map(el=>{
		return el.name;
	})
	res.status(200).send(platformsName)
})

router.get('/genres',async (req,res)=> {
    const genreApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    const genreNames = genreApi.data.results.map(el => el.name)

    genreNames.forEach(el=>{
    	Genre.findOrCreate({
    		where:{name:el}
    	})
    })

    const AllGenre=await Genre.findAll();
    res.send(AllGenre);
})

router.post('/videogame',async(req,res)=>{
	try{
		let {
		name,
		description,
		platforms,
		genre,
		img,

	}=req.body

	let insertedVideogame=await Videogame.create({
		name,
		description,
		platforms,
		img,
	})
	
	Array.isArray(genre)?
	genre.map(async (el)=>{
		await Genre.findOrCreate({ 
		where:{name:el} 
	});
	}):
	await Genre.findOrCreate({ 
		where:{name:genre} 
	});
	

	
	let genreDb=await Genre.findAll({
		where: {name:genre}
	})
	insertedVideogame.addGenre(genreDb);
	
	res.send('Videojuego creado');
	}catch(error){
		res.send(error);
	}
	
})


router.get('/videogame/:id',async(req,res)=>{
	const id=req.params.id;
	const videogamesList=await getAllCharacters();
	//const videogamesList=await infoFromApi();
	
		let videogameId=await videogamesList.filter(el=>el.id==id);
		videogameId.length?
		res.status(200).send(videogameId):
		res.status(404).send('No existe este videojuego');
	
})

module.exports = router;

