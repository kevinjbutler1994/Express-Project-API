import db from '../db/connection.js';
import Character from '../models/Character.js'
import Planet from '../models/Planet.js';
import charactersData from './characters.json' assert {type: 'json'};
import planetsData from './planets.json' assert {type: 'json'};
import chalk from 'chalk';

const insertData = async () => {
    //Resert DB
    await db.dropDatabase()

    //Insert Data
    await Character.create(charactersData)
    await Planet.create(planetsData);
    console.log(chalk.greenBright('Characters and Planets created!'));
    // close db connection

    await db.close();
};

insertData();