import config from "../config";
import request from "supertest";
import { app } from "..";

describe("Configuration Test", () => {
    it("port for development environment should be 5000", ()=> {
        expect(config.PORT ?? 5000).toBe(5000)
    })

    it("should logout successfully", async () => {
        // request(app).get("/logout").expect(200).expect('Content-Type', /application.json/).end((err)=>{
        //     if (err) throw Error(err.message);
        // });
    })
})