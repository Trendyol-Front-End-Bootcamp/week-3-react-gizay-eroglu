import axios from "axios";
import sinon from "sinon";
import { getCharacters , getCharacterById } from "../services/RickAndMortyApi";


let sandbox = sinon.createSandbox(); 

describe('Rick and Morty Api Service Tests', function() {

    beforeEach(() => {
        sandbox;
    })

    afterEach(() => {
        sandbox.restore();
    })

    describe("Get Characters function test", () => {

        it("should return empty array if there is no data", () => {

            const expectedData = [];
            const expectedStatusCode = 200;

            sandbox.stub(axios, "get").resolves(Promise.resolve({ status: expectedStatusCode, data: expectedData}));

            return getCharacters().then(result => {
                expect(result).toHaveLength(0);
            })
        })

        it("should return empty array when 3rd service is giving Not OK Status codes", async () => {
            
            const expectedData = [];
            const expectedStatusCode = 500;

            sandbox.stub(axios, "get").resolves(Promise.resolve({ status: expectedStatusCode, data: expectedData}));

            return getCharacters().then(result => {
                expect(result).toHaveLength(0);
            })
        })

        it("should return data with the Status code 200", async () => {
            
            const expectedData =  [
                {
                "id": 1,
                "name": "Rick Sanchez",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Male"
                },
                {
                "id": 2,
                "name": "Morty Smith",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Male",
                }
            ]

            const expectedStatusCode = 200;

            sandbox.stub(axios, "get").resolves(Promise.resolve({ status: expectedStatusCode, data: { results:expectedData }}, { params: {} }));

            return getCharacters().then(result => {
                expect(result).toHaveLength(2);
            })
        })
    })

    describe("get characters by Id function", () => {

        it("should return null if there is no data with given id", () => {
            const expectedData = [{
                "info": {
                "count": 671,
                "pages": 34,
                "next": "https://rickandmortyapi.com/api/character?page=2",
                "prev": null
                },
                "results": [
                {
                "id": 1,
                "name": "Rick Sanchez",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Male"
                }]
            }];

            sandbox.stub(axios, "get").resolves(Promise.resolve({ status: 200, data: expectedData }));

            return getCharacterById(2).then(result => {
                expect(result).toBeNull();
            })
        })

        it("should return null when 3rd service is giving Not OK Status codes", async () => {
        
            const expectedData = null;
            const expectedStatusCode = 500;

            sandbox.stub(axios, "get").resolves(Promise.resolve({ status: expectedStatusCode, data: expectedData}));

            return getCharacterById(4).then(result => {
                expect(result).toBeNull();
            })
        })
     
        it("should return null if response data has error message", async () => {
            
            const expectedData = [{
                "info": {
                "count": 671,
                "pages": 34,
                "next": "https://rickandmortyapi.com/api/character?page=2",
                "prev": null
                },
                "error": "error message",
                "results": [
                {
                "id": 1,
                "name": "Rick Sanchez",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Male"
                }]
            }];

            const expectedStatusCode = 200;

            sandbox.stub(axios, "get").resolves(Promise.resolve({ status: expectedStatusCode, data: expectedData}));

            return getCharacterById(3).then(result => {
                expect(result).toBeNull();
            })
        })
    })
})


