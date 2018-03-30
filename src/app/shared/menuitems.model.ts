////////////////////////////////////////////////////
//MODELS
import { SubMenuItems } from './submenuitems.model';

export class MenuItems {
    public name: string;
    public icon: string;
    public url: string;
    public subMenu: SubMenuItems[];


    constructor(name: string, icon: string, url: string, subMenu: SubMenuItems[]) {
        this.name = name;
        this.icon = icon;
        this.url = url;
        this.subMenu = subMenu;
    }
}
