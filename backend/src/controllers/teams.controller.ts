import { Request, Response } from "express";
import TeamRepository from "../repositories/teams.repository";

export default class TutorialController {
  async findAll(req: Request, res: Response) {
    try {
      const teams = await TeamRepository.retrieveAll();

      res.status(200).send(teams);
    } catch (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving tutorials."
      });
    }
  }

  async findOne(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);

    try {
      const tutorial = await TeamRepository.retrieveById(id);

      if (tutorial) res.status(200).send(tutorial);
      else
        res.status(404).send({
          message: `Cannot find team with id=${id}.`
        });
    } catch (err) {
      res.status(500).send({
        message: `Error retrieving team with id=${id}.`
      });
    }
  }

}