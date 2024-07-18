import usedHomeModel from "../Model/usedHomeModel.js";

// create home or used cars page
export const newHome = async(req,res)=>{

    try {
        const  {mainHeader,subHeader, homeImg } = req.body;
         //validate input
         switch(false){
            case mainHeader:
            case subHeader:
            case homeImg:
                console.log("all HOme data req".bgYellow);
                return res.status(400).send("all Home data req")
        }
        // add Home
        const homeNew = await usedHomeModel.create({
            mainHeader,subHeader, homeImg
        })
        console.log("Home added successfully".bgGreen.white);        
        return res.status(201).send({ message: 'Home added successfully'.bgGreen,  homeNew });
    } catch (error) {
        console.log(`Api error ${error}`);
        return res.status(500).send("Internal Server Error".bgRed);
    }
}

//get the details of used car page

export const getHome = async(req,res) =>{
    try {
        const home = await usedHomeModel.find();
        res.status(200).json(home);
        return res.status(201).send('Home Fetched successfully'.bgGreen);

    } catch (error) {
        console.log(`Api error ${error}`);
        return res.status(500).send("Internal Server Error".bgRed);
    }
}