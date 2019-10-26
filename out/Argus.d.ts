import { ActionType } from "entity/action/IAction";
import { ItemType } from "item/IItem";
import Mod from "mod/Mod";
import { Bindable, BindCatcherApi } from "newui/IBindingManager";
export default class Argus extends Mod {
    static readonly INSTANCE: Argus;
    readonly keyBind: Bindable;
    readonly actionSeeAll: ActionType;
    itemArgus: ItemType;
    onGameStart(isLoadingSave: boolean, playedCount: number): void;
    onBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable;
    private onEquip;
    private onUnequip;
}
