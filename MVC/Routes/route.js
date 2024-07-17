import express from "express";
import { getHome, newHome } from "../Controller/usedHomeControl";
import { getTools, newTools } from "../Controller/usedToolsController";
import { newCities,getCities } from "../Controller/usedCityControl";
import { getPopCars, newPopCars } from "../Controller/PopCarControl";
import { getMatchedCars, newMatchedCars } from "../Controller/MatchedCar";

const router = express.Router();

// used page home
router.post('/used/newHome',newHome);  
router.get('/used/getHome',getHome);

// tools card 
router.post('/used/newTools',newTools);  
router.get('/used/getHome',getTools);

//used page cities cards
router.post('/used/newCity',newCities);  
router.get('/used/getCity',getCities);


//used -page popular cars
router.post('/used/newPop',newPopCars);  
router.get('/used/getPop',getPopCars);

//used -page matched cars
router.post('/used/newMatched',newMatchedCars);  
router.get('/used/getMatched',getMatchedCars);

export default router;