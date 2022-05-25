import { Request, Response } from 'express';
import { Personalidade } from '@models/Personalidade';
import { Citi, Crud } from '../global'

export default class PersonalidadeController implements Crud {

    async create(request: Request, response: Response){
        const {title, description, email, youtube, instagram} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(title, description);
        if(isAnyUndefined) return response.status(400).send();

        const newPersonalidade = { title, description, email, youtube, instagram };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Personalidade, newPersonalidade);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Personalidade);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: personalidadeFound, message } = await Citi.findByID(Personalidade, id); 
           
        if(!personalidadeFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(Personalidade, personalidadeFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const { title, description, email, youtube, instagram } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(title, description, id);
        if(isAnyUndefined) return response.status(400).send();

        const personalidadeWithUpdatedValues = { title, description, email, youtube, instagram };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Personalidade, id, personalidadeWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

    
}