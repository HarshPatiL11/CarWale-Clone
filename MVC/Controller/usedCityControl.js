import usedCityModel from '../Model/usedCityModel.js'
// create Cities for used Cities page
export const createCities = async(req,res)=>{

    try {
        const  {cityHeader,cityImg} = req.body;
         //validate input
         switch(false){
            case cityHeader:
                console.log("all Cities data req".bgYellow);
                return res.status(400).send("all Home data req")
        }
        // add Home
        const newCities = await usedCityModel.create({
            cityHeader,cityImg
        })
        console.log("Cities added successfully".bgGreen.white);        
        return res.status(201).send({ message: 'Cities added successfully'.bgGreen,  newCities });
    } catch (error) {
        console.log(`Api error ${error}`);
        return res.status(500).send("Internal Server Error".bgRed);
    }
}

//get the details of used CIties page

export const getCities = async(req,res) =>{
    try {
        const cities = await usedCityModel.find();
        res.status(200).json(cities);
        return res.status(201).send('Cities fetched successfully'.bgGreen);

    } catch (error) {
        console.log(`Api error ${error}`);
        return res.status(500).send("Internal Server Error".bgRed);
    }
}