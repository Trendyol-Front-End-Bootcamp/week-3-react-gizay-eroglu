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

        it("should return empty array when 3rd service is giving Not OK Status codes",  () => {
            
            const expectedData = [];
            const expectedStatusCode = 500;

            sandbox.stub(axios, "get").rejects(Promise.resolve({ status: expectedStatusCode, data: expectedData}));

            return getCharacters().then(result => {
                expect(result).toEqual(expectedData);
            })
        })

        it("should return data with the Status code 200", () => {
            
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

            sandbox.stub(axios, "get").resolves(Promise.resolve({ status: expectedStatusCode, data: { results:expectedData } }));

            return getCharacters().then(result => {
                expect(result).toEqual(expectedData);
            })
        })
    })

    describe("get characters by Id function", () => {

        it("should return null when 3rd service is giving Not OK Status codes",  () => {
        
            const expectedData = null;
            const expectedStatusCode = 500;

            sandbox.stub(axios, "get").rejects(Promise.resolve({ status: expectedStatusCode, data: expectedData}));

            return getCharacterById(4).then(result => {
                expect(result).toBeNull();
            })
        })
     
        it("should return null if response data has error message",  () => {
            
            const expectedData = { error: "error message" }

            const expectedStatusCode = 200;

            sandbox.stub(axios, "get").resolves(Promise.resolve({ status: expectedStatusCode, data: expectedData}));

            return getCharacterById(77673).then(result => {
                expect(result).toBeNull();
            })
        })
    })

    describe("last five episodes should return which belongs to specified character", () => {
        it("should return empty array if there is no episodeUrl", async () => {
           const expectedData = { id : 2, name : "Rick Sanchez", status : "alive", episode:[]};
           const expectedStatusCode = 200;

           sandbox.stub(axios, "get").resolves(Promise.resolve({ status: expectedStatusCode, data: expectedData}));

            return getCharacterById(2).then(result => {
                 expect(result.lastFiveEpisodes).toHaveLength(0);
            })
        })

        it("should return only last five episodes even if the character has more", async () => {
           const expectedData = { 
                id : 2, 
                name : "Morty Smith", 
                status : "alive",
                episode: [
                    "https://rickandmortyapi.com/api/episode/1",
                    "https://rickandmortyapi.com/api/episode/2",
                    "https://rickandmortyapi.com/api/episode/3",
                    "https://rickandmortyapi.com/api/episode/4",
                    "https://rickandmortyapi.com/api/episode/5",
                    "https://rickandmortyapi.com/api/episode/6",
                    "https://rickandmortyapi.com/api/episode/7",
                    "https://rickandmortyapi.com/api/episode/8"
                ]
            };

           const expectedStatusCode = 200;

           sandbox.stub(axios, "get").resolves(Promise.resolve({ status: expectedStatusCode, data: expectedData}));

            return getCharacterById(2).then(result => {
                 expect(result.lastFiveEpisodes).toHaveLength(5);
            })
        })
    })      
})  


