import { Request, Response } from 'express';
import CLIENTES from '../models/CLIENTES';

export const getClientId = async( req: Request, res: Response ) => {

    const { client } = req.params;

    const cliente = await CLIENTES.findAll({ 
        where: {
            client,
            active: '1'
        }
    });

    if ( !cliente ) {
        res.status(404).json({
            msg: `No existen clientes con el CLIENTE ${ client }`
        });
    }

    res.json({
        cliente
    });
};

export const postClientPolygon = async( req: Request, res: Response ) => {
    
    const { body } = req;
    
    try {
        await CLIENTES.findOne({
            raw: true,
            where: {
                client: body.client
            },
            order: [
                ['id', 'desc']
            ]
        }).then(( data: any ) => {
            if ( !data ) {
                const id = 1;
                body.id = id;
                return true;
            }

            const id = parseInt(data['id']) + 1;
            body.id = id;
        });

        const clientes = {
            id: body.id,
            client: body.client,
            name: body.name,
            location: body.location,
            polygon: body.polygon,
            active: '1'
        };
        
        const cliente = new (CLIENTES as any)( clientes );
        await cliente.save();

        res.status(201).json();

    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador del sistema',
            error
        });
    }
};

export const deletePolygon = async( req: Request, res: Response ) => {

    const { body } = req;

    try {
        const polygon = await CLIENTES.findOne({
            where: {
                id: body.id
            }
        });

        if( !polygon ) {
            return res.status(400).json({
                msg: `No existe información con el ID ${ body.id }`
            });
        }

        body.active = '0';

        await polygon.update( body );

        res.status(200).json({
            polygon 
        });
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador',
            error
        });
    }
};