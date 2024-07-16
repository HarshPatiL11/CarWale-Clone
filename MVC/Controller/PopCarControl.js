import popCarModel from "../Model/popCarModel";

// create popular cars for pop cars page
export const createPopCars = async(req,res)=>{

    try {
        const  {popHeader,linkText} = req.body;
         //validate input
         switch(false){
            case popHeader:
                console.log("all HOme data req".bgYellow);
                return res.status(400).send("all Home data req".bgYellow)
        }
        // add Home
        const newPopCars = await popCarModel.create({
            popHeader,linkText
        })
        console.log("newPopCars added successfully".bgGreen.white);        
        return res.status(201).send({ message: 'newPopCars added successfully'.bgGreen,  newPopCars });
    } catch (error) {
        console.log(`Api error ${error}`);
        return res.status(500).send("Internal Server Error".bgRed);
    }
}

//get the details of used CIties page

export const getPopCars = async(req,res) =>{
    try {
        const PopCars = await popCarModel.find();
        res.status(200).json(PopCars);
        return res.status(201).send('Cities fetched successfully'.bgGreen);

    } catch (error) {
        console.log(`Api error ${error}`);
        return res.status(500).send("Internal Server Error".bgRed);
    }
}