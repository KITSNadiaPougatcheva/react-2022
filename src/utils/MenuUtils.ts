import { MenuItemInterface } from "../components/header-components";
import menu from "../data/menu";

export class MenuUtils {
  static getMenuItems(): MenuItemInterface[] {
    return menu.map(item => ({ text: item.title, href: item.href, id: item.id}))
  }
}
