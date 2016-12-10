/// <reference path="mod-reference/modreference.d.ts"/>

export default class Mod extends Mods.Mod {
	private itemArgus: number;
	private keyBind: number;

	public onInitialize(saveDataGlobal: any): any {
	}

	public onLoad(): void {
		let actionType = this.addActionType("See All!", "Let's you see everything", (item: Item.IItem) => {
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
					Item.RecipeComponent(ItemTypeGroup.Sharpened, 1, 0),
					Item.RecipeComponent(ItemType.Lens, 2, 2, 2),
					Item.RecipeComponent(ItemType.Log, 1, 1, 1),
					Item.RecipeComponent(ItemType.String, 1, 1, 1)
				],
				skill: SkillType.Tinkering,
				level: RecipeLevel.Advanced,
				malignity: 10
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
			Item.create(this.itemArgus);
		}
	}

	public onKeyBindPress(keyBind: KeyBind): boolean {
		if (this.keyBind === keyBind) {
			if (game.fov.disabled) {
				this.onUnequip(null);
			} else {
				this.onEquip(null);
			}
			return false;
		}
	}

	public onEquip(item: Item.IItem) {
		game.fov.disabled = true;
		game.fov.compute();
		game.updateGame();
	}

	public onUnequip(item: Item.IItem) {
		game.fov.disabled = false;
		game.fov.compute();
		game.updateGame();
	}
}
