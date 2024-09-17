import { EventBus } from "@wayward/game/event/EventBuses";
import { EventHandler } from "@wayward/game/event/EventManager";
import Deity from "@wayward/game/game/deity/Deity";
import { Action } from "@wayward/game/game/entity/action/Action";
import { ActionType } from "@wayward/game/game/entity/action/IAction";
import { DamageType, EntityType } from "@wayward/game/game/entity/IEntity";
import { EquipType, SkillType } from "@wayward/game/game/entity/IHuman";
import { Game } from "@wayward/game/game/Game";
import { ItemType, ItemTypeGroup, RecipeLevel } from "@wayward/game/game/item/IItem";
import { RecipeComponent } from "@wayward/game/game/item/ItemDescriptions";
import Mod from "@wayward/game/mod/Mod";
import Register, { Registry } from "@wayward/game/mod/ModRegistry";
import { RenderSource, UpdateRenderFlag } from "@wayward/game/renderer/IRenderer";
import Bind from "@wayward/game/ui/input/Bind";
import Bindable from "@wayward/game/ui/input/Bindable";
import { IInput } from "@wayward/game/ui/input/IInput";
import { Bound } from "@wayward/utilities/Decorators";

export default class Argus extends Mod {

	@Mod.instance<Argus>("Argus")
	public static readonly INSTANCE: Argus;

	@Register.bindable("Toggle", IInput.key("Delete"))
	public readonly keyBind: Bindable;

	@Register.action("SeeAll", new Action()
		.setUsableBy(EntityType.Human)
		.setHandler(action => {
			if (renderer) {
				renderer.worldRenderer.setZoom(0.15);
				renderer.computeSpritesInViewport();
				renderer.updateRender(RenderSource.Mod, UpdateRenderFlag.World);
			}
		}))
	public readonly actionSeeAll: ActionType;

	@Register.item("argus", {
		attack: 1,
		damageType: DamageType.Blunt,
		equip: EquipType.Held,
		onEquip: item => Argus.INSTANCE.onEquip(),
		onUnequip: item => Argus.INSTANCE.onUnequip(),
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
			runeChance: [Deity.Good, 0.01],
		},
		storeDisassemblyItems: true,
		durability: 500,
	})
	public itemArgus: ItemType;

	@EventHandler(EventBus.Game, "play")
	public onGameStart(game: Game, isLoadingSave: boolean, playedCount: number): void {
		if (!isLoadingSave) {
			// give argus
			localPlayer.createItemInInventory(this.itemArgus);
		}
	}

	@Bind.onDown(Registry<Argus>().get("keyBind"))
	public onToggleBind(): boolean {
		this[renderer?.fieldOfView.disabled ? "onUnequip" : "onEquip"]();
		return true;
	}

	@Bound
	private onEquip(): void {
		if (renderer) {
			renderer.fieldOfView.disabled = true;
			renderer.fieldOfView.compute(game.absoluteTime);
			renderer.updateView(RenderSource.Mod, true);
		}
	}

	@Bound
	private onUnequip(): void {
		if (renderer) {
			renderer.fieldOfView.disabled = false;
			renderer.fieldOfView.compute(game.absoluteTime);
			renderer.updateView(RenderSource.Mod, true);
		}
	}
}
