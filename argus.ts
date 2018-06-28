import { IActionArgument, IActionResult } from "action/IAction";
import { Bindable, DamageType, EquipType, ItemType, ItemTypeGroup, RecipeLevel, SkillType } from "Enums";
import { IItem } from "item/IItem";
import { RecipeComponent } from "item/Items";
import { HookMethod } from "mod/IHookHost";
import Mod from "mod/Mod";
import { BindCatcherApi } from "newui/BindingManager";
import IPlayer from "player/IPlayer";

export default class Argus extends Mod {
	private itemArgus: number;
	private keyBind: number;

	public onInitialize(saveDataGlobal: any): any {
		this.keyBind = this.addBindable("Toggle", { key: "Delete" });
	}

	public onLoad(): void {
		const actionType = this.addActionType({
			name: "See All!",
			description: "Lets you see everything."
		}, (player: IPlayer, argument: IActionArgument, result: IActionResult) => {
			renderer.setTileScale(0.15);
			renderer.computeSpritesInViewport();
			game.updateRender = true;
		});

		this.itemArgus = this.addItem({
			description: "The all seeing eye.",
			name: "argus",
			prefix: "an ",
			weight: 2,
			attack: 1,
			damageType: DamageType.Blunt,
			equip: EquipType.Held,
			onEquip: this.onEquip,
			onUnequip: this.onUnequip,
			use: [actionType],
			recipe: {
				components: [
					RecipeComponent(ItemTypeGroup.Sharpened, 1, 0),
					RecipeComponent(ItemType.Lens, 2, 2, 2),
					RecipeComponent(ItemType.Log, 1, 1, 1),
					RecipeComponent(ItemType.String, 1, 1, 1)
				],
				skill: SkillType.Tinkering,
				level: RecipeLevel.Advanced,
				reputation: 10
			},
			disassemble: true,
			durability: 500
		});
	}

	@HookMethod
	public onGameStart(isLoadingSave: boolean, playedCount: number): void {
		if (!isLoadingSave) {
			// give argus
			localPlayer.createItemInInventory(this.itemArgus);
		}
	}

	@HookMethod
	public onBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable {
		if (api.wasPressed(this.keyBind) && !bindPressed) {
			if (fieldOfView.disabled) {
				this.onUnequip(null);
				
			} else {
				this.onEquip(null);
			}

			bindPressed = this.keyBind;
		}

		return bindPressed;
	}

	public onEquip(item: IItem) {
		fieldOfView.disabled = true;
		fieldOfView.compute();
		game.updateView(true);
	}

	public onUnequip(item: IItem) {
		fieldOfView.disabled = false;
		fieldOfView.compute();
		game.updateView(true);
	}
}
