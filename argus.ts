import { Action } from "entity/action/Action";
import { ActionType } from "entity/action/IAction";
import { DamageType, EntityType } from "entity/IEntity";
import { EquipType, SkillType } from "entity/IHuman";
import { RenderSource } from "game/IGame";
import { ItemType, ItemTypeGroup, RecipeLevel } from "item/IItem";
import Item from "item/Item";
import { RecipeComponent } from "item/Items";
import { HookMethod } from "mod/IHookHost";
import Mod from "mod/Mod";
import Register, { Registry } from "mod/ModRegistry";
import { Bindable, BindCatcherApi } from "newui/IBindingManager";

export default class Argus extends Mod {

	@Mod.instance<Argus>("Argus")
	public static readonly INSTANCE: Argus;

	@Register.bindable("Toggle", { key: "Delete" })
	public readonly keyBind: Bindable;

	@Register.action("SeeAll", new Action()
		.setUsableBy(EntityType.Player)
		.setHandler(action => {
			renderer.setTileScale(0.15);
			renderer.computeSpritesInViewport();
			game.updateRender(RenderSource.Mod);
		}))
	public readonly actionSeeAll: ActionType;

	@Register.item("argus", {
		attack: 1,
		damageType: DamageType.Blunt,
		equip: EquipType.Held,
		onEquip: item => Argus.INSTANCE.onEquip(item),
		onUnequip: item => Argus.INSTANCE.onUnequip(item),
		use: [Registry<Argus>().get("actionSeeAll")],
		recipe: {
			components: [
				RecipeComponent(ItemType.Lens, 2, 2, 2),
				RecipeComponent(ItemType.Log, 1, 1, 1),
				RecipeComponent(ItemType.String, 1, 1, 1),
				RecipeComponent(ItemTypeGroup.Sharpened, 1, 0),
			],
			skill: SkillType.Tinkering,
			level: RecipeLevel.Advanced,
			reputation: 10,
		},
		disassemble: true,
		durability: 500,
	})
	public itemArgus: ItemType;

	@Override @HookMethod
	public onGameStart(isLoadingSave: boolean, playedCount: number): void {
		if (!isLoadingSave) {
			// give argus
			localPlayer.createItemInInventory(this.itemArgus);
		}
	}

	@Override @HookMethod
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

	@Bound
	private onEquip(item: Item) {
		fieldOfView.disabled = true;
		fieldOfView.compute();
		game.updateView(RenderSource.Mod, true);
	}

	@Bound
	private onUnequip(item: Item) {
		fieldOfView.disabled = false;
		fieldOfView.compute();
		game.updateView(RenderSource.Mod, true);
	}
}
