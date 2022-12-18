import config from "../config";

describe("Configuration Test", () => {
    it("port for development environment should be 5000", ()=> {
        expect(config.PORT ?? 5000).toBe(5000)
    })
})