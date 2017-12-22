import { IItem } from "item/IItem";
import Mod from "mod/Mod";
import { BindCatcherApi } from "newui/BindingManager";
export default class Argus extends Mod {
    private itemArgus;
    private keyBind;
    onInitialize(saveDataGlobal: any): any;
    onLoad(): void;
    onGameStart(isLoadingSave: boolean): void;
    onBindLoop(bindPressed: true | undefined, api: BindCatcherApi): true | undefined;
    onEquip(item: IItem): void;
    onUnequip(item: IItem): void;
}
