import { Header } from "./header";
import { Main } from "./main/main";
import { MenuList } from "./menu/menu-list";
import { Testimonial } from "./testimonial/testimonial";

export function Home(){
    return(
        <>
            <Header/>
            <Main/>
            <MenuList/>
            <Testimonial/>
        </>
    );
}