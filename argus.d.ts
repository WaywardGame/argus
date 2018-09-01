import { IActionArgument, IActionResult } from "action/IAction";
import { Bindable } from "Enums";
import Mod from "mod/Mod";
import { BindCatcherApi } from "newui/BindingManager";
import IPlayer from "player/IPlayer";
export default class Argus extends Mod {
    readonly keyBind: Bindable;
    private itemArgus;
    onLoad(): void;
    onGameStart(isLoadingSave: boolean, playedCount: number): void;
    onBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable;
    protected seeAll(player: IPlayer, argument: IActionArgument, result: IActionResult): void;
    private onEquip;
    private onUnequip;
}
