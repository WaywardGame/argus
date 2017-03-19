import { KeyBind } from "Enums";
import { IItem } from "item/IItem";
import Mod from "mod/Mod";
export default class Argus extends Mod {
    private itemArgus;
    private keyBind;
    onInitialize(saveDataGlobal: any): any;
    onLoad(): void;
    onUnload(): void;
    onSave(): any;
    onGameStart(isLoadingSave: boolean): void;
    onKeyBindPress(keyBind: KeyBind): boolean;
    onEquip(item: IItem): void;
    onUnequip(item: IItem): void;
}
