import Planet from "../models/House.js";

export const getPlanets = async (req, res) => {
  try {
    const planets = await Planet.find();
    res.json(planets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getPlanet = async (req, res) => {
    try {
      const { id } = req.params;
      const house = await Planet.findById(id)
  
      if (house) {
        return res.json(planet);
      }
  
      res.status(404).json({ message: "Planet not found" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };
  
  export const createPlanet = async (req, res) => {
    const house = new Planet(req.body);
    await planet.save();
    res.status(201).json(house);
  };
  

        export const updatePlanet = async (req, res) => {
            try {
              const { id } = req.params;
              const house = await Planet.findByIdAndUpdate(id, req.body);
              res.status(201).json(house);
            } catch (error) {
              console.error(error);
              res.status(500).json({ error: error.message });
            }
          };
          
          export const deleteHouse = async (req, res) => {
            try {
              const { id } = req.params;
              const deleted = await Planet.findByIdAndDelete(id);
          
              if (deleted) {
                return res.status(200).send("Planet deleted!");
              }
          
              throw new Error("Planet not found");
            } catch (error) {
              console.error(error);
              res.status(500).json({ error: error.message });
            }
          };