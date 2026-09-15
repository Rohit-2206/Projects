import {test, expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { AdminPage } from "../pages/AdminPage"

test ("Admin page navigation", async({page})=>{
    const loginPage = new LoginPage(page);
    
})

