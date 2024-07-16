import matchedCarModel from "../Model/matchedCarModel";


// create Matched cars for Matched cars page
export const createMatchedCars = async(req,res)=>{

    try {
        const  {  img,description,price,year,distance } = req.body;
         //validate inputmatchedCarModel
         switch(false){
            case description:
            case price:
            case year:
            case distance:
                console.log("all Matched data req".bgYellow);
                return res.status(400).send("all Matched data req".bgYellow)
        }
        // add Home
        const newMatchedCars = await matchedCarModel.create({
            img,description,price,year,distance
        })
        console.log("newMatchedCars added successfully".bgGreen.white);        
        return res.status(201).send({ message: 'newMatchedCars added successfully'.bgGreen,  newMatchedCars });
    } catch (error) {
        console.log(`Api error ${error}`);
        return res.status(500).send("Internal Server Error".bgRed);
    }
}

//get the details of used CIties page

export const getMatchedCars = async(req,res) =>{
    try {
        const MatchedCars = await matchedCarModel.find();
        res.status(200).json(MatchedCars);
        return res.status(201).send('MatchedCars fetched successfully'.bgGreen);

    } catch (error) {
        console.log(`Api error ${error}`);
        return res.status(500).send("Internal Server Error".bgRed);
    }
}