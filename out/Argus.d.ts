import { ActionType } from "entity/action/IAction";
import { ItemType } from "item/IItem";
import Mod from "mod/Mod";
import Bindable from "newui/input/Bindable";
export default class Argus extends Mod {
    static readonly INSTANCE: Argus;
    readonly keyBind: Bindable;
    readonly actionSeeAll: ActionType;
    itemArgus: ItemType;
    onGameStart(isLoadingSave: boolean, playedCount: number): void;
    onToggleBind(): boolean;
    private onEquip;
    private onUnequip;
}
