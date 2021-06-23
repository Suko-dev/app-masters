import cors from "cors";
import express, { NextFunction, Request, Response } from "express";

import "express-async-errors";
import { heroRoutes } from "./routes/heroRoutes";

const app = express();

app.use(heroRoutes);
app.use(cors());

app.use(
    async (
        err: Error,
        request: Request,
        response: Response,
        next: NextFunction
    ): Promise<Response> => {
        return response.status(400).json({ message: err.message });
    }
);
app.listen(process.env.PORT || 8080, () => console.log(`Servidor rodando`));
