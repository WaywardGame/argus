import { ActionType } from "action/IAction";
import { Bindable, ItemType } from "Enums";
import Mod from "mod/Mod";
import { BindCatcherApi } from "newui/BindingManager";
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
