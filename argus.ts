import { IActionArgument, IActionResult } from "action/IAction";
import { DamageType, EquipType, ItemType, ItemTypeGroup, KeyBind, RecipeLevel, SkillType } from "Enums";
import { IItem } from "item/IItem";
import { RecipeComponent } from "item/Items";
import Mod from "mod/Mod";
import IPlayer from "player/IPlayer";

export default class Argus extends Mod {
	private itemArgus: number;
	private keyBind: number;

	public onInitialize(saveDataGlobal: any): any {
	}

	public onLoad(): void {
		const actionType = this.addActionType({
			name: "See All!",
			description: "Let's you see everything"
		}, (player: IPlayer, argument: IActionArgument, result: IActionResult) => {
			renderer.setTileScale(0.15);
			renderer.computeSpritesInViewport();
			game.updateRender = true;
		});

		this.itemArgus = this.addItem({
			description: "The all seeing eye.",
			name: "Argus",
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

		this.keyBind = this.addKeyBind("Argus", 46);
	}

	public onUnload(): void {
	}

	public onSave(): any {
	}

	public onGameStart(isLoadingSave: boolean): void {
		if (!isLoadingSave) {
			// give argus
			localPlayer.createItemInInventory(this.itemArgus);
		}
	}

	public onKeyBindPress(keyBind: KeyBind): boolean {
		if (this.keyBind === keyBind) {
			if (fieldOfView.disabled) {
				this.onUnequip(null);
			} else {
				this.onEquip(null);
			}
			return false;
		}
	}

	public onEquip(item: IItem) {
		fieldOfView.disabled = true;
		fieldOfView.compute();
		game.updateGame();
	}

	public onUnequip(item: IItem) {
		fieldOfView.disabled = false;
		fieldOfView.compute();
		game.updateGame();
	}
}
