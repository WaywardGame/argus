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

import { EventBus } from "event/EventBuses";
import { EventHandler } from "event/EventManager";
import { Action } from "game/entity/action/Action";
import { ActionType } from "game/entity/action/IAction";
import { DamageType, EntityType } from "game/entity/IEntity";
import { EquipType, SkillType } from "game/entity/IHuman";
import { Game } from "game/Game";
import { ItemType, ItemTypeGroup, RecipeLevel } from "game/item/IItem";
import { RecipeComponent } from "game/item/ItemDescriptions";
import Mod from "mod/Mod";
import Register, { Registry } from "mod/ModRegistry";
import { RenderSource, UpdateRenderFlag } from "renderer/IRenderer";
import Bind from "ui/input/Bind";
import Bindable from "ui/input/Bindable";
import { IInput } from "ui/input/IInput";
import { Bound } from "utilities/Decorators";

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
			reputation: 10,
		},
		disassemble: true,
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
	public onToggleBind() {
		this[renderer?.fieldOfView.disabled ? "onUnequip" : "onEquip"]();
		return true;
	}

	@Bound
	private onEquip() {
		if (renderer) {
			renderer.fieldOfView.disabled = true;
			renderer.fieldOfView.compute(game.absoluteTime);
			renderer.updateView(RenderSource.Mod, true);
		}
	}

	@Bound
	private onUnequip() {
		if (renderer) {
			renderer.fieldOfView.disabled = false;
			renderer.fieldOfView.compute(game.absoluteTime);
			renderer.updateView(RenderSource.Mod, true);
		}
	}
}
