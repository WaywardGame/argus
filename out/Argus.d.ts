/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { ActionType } from "game/entity/action/IAction";
import { Game } from "game/Game";
import { ItemType } from "game/item/IItem";
import Mod from "mod/Mod";
import Bindable from "ui/input/Bindable";
export default class Argus extends Mod {
    static readonly INSTANCE: Argus;
    readonly keyBind: Bindable;
    readonly actionSeeAll: ActionType;
    itemArgus: ItemType;
    onGameStart(game: Game, isLoadingSave: boolean, playedCount: number): void;
    onToggleBind(): boolean;
    private onEquip;
    private onUnequip;
}
