import {test, expect} from "@playwright/test";

test.describe("Group Test", async()=> {
    test("Test1", async ({page})=>{
        console.log("Test1");
    })
});

test.describe("Group2", async()=>{
    test("Test2", async ({page})=>{
        console.log("Test2");
    })
})