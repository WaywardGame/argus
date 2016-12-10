define(["require", "exports"], function (require, exports) {
    "use strict";
    class Mod extends Mods.Mod {
        onInitialize(saveDataGlobal) {
        }
        onLoad() {
            let actionType = this.addActionType("See All!", "Let's you see everything", (item) => {
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
        onUnload() {
        }
        onSave() {
        }
        onGameStart(isLoadingSave) {
            if (!isLoadingSave) {
                Item.create(this.itemArgus);
            }
        }
        onKeyBindPress(keyBind) {
            if (this.keyBind === keyBind) {
                if (game.fov.disabled) {
                    this.onUnequip(null);
                }
                else {
                    this.onEquip(null);
                }
                return false;
            }
        }
        onEquip(item) {
            game.fov.disabled = true;
            game.fov.compute();
            game.updateGame();
        }
        onUnequip(item) {
            game.fov.disabled = false;
            game.fov.compute();
            game.updateGame();
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Mod;
});
//# sourceMappingURL=argus.js.map