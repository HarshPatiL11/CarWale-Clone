import usedToolsModel from "../Model/usedToolsModel.js";

export const newTools = async (req,res)=>{
    try {
        const{toolHeader,toolSubHeader,linkText} = req.body;

        //validate input
        switch(false){
            case toolHeader:
            case toolSubHeader:
            case linkText:
                console.log("all tools input req".bgYellow);
                return res.status(400).send("all tools input req".bgYellow)
        }


        const createTools = await usedToolsModel.create({
            toolHeader,toolSubHeader,linkText
        })

        return res.status(201).send({ message: 'tools added successfully'.bgGreen,  createTools });


    } catch (error) {
        console.log(`Api error ${error}`);
        return res.status(500).send("Internal Server Error".bgRed);
    }
}


// use to get the tools page data
export const getTools = async(req,res) =>{
    try {
        const tools = await usedToolsModel.find();
        res.status(200).json(tools)
        return res.status(201).send('tools added successfully'.bgGreen);
    } catch (error) {
        console.log(`Api error ${error}`);
        return res.status(500).send("Internal Server Error".bgRed);
    }
}