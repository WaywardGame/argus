/// <reference path="mod-reference/modreference.d.ts" />
export default class Mod extends Mods.Mod {
    private itemArgus;
    private keyBind;
    onInitialize(saveDataGlobal: any): any;
    onLoad(): void;
    onUnload(): void;
    onSave(): any;
    onGameStart(isLoadingSave: boolean): void;
    onKeyBindPress(keyBind: KeyBind): boolean;
    onEquip(item: Item.IItem): void;
    onUnequip(item: Item.IItem): void;
}
