import { MenuList } from "../home/menu/menu-list";
import { HeaderM } from "./headerM";
import { MainMenu } from "./main-menu";


export function Menu(){
    return(
        <>
            <HeaderM/>
            <MainMenu/>
            <MenuList/>
        </>
    );
}