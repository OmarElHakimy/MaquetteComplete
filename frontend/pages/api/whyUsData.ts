import type {NextApiRequest, NextApiResponse} from 'next';
import Type from "../../models/whyUs";

const json = [
    {
        id: 1,
        attributes: {
            "rate": 98,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
    },
    {
        id: 2,
        attributes: {
            "rate": 100,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
    },
    {
        id: 3,
        attributes: {
            "rate": 100,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
    }
];


const handler = (req :NextApiRequest, res :NextApiResponse<Type[]>) => {
    return res.status(200).json(json);
}
export default handler;