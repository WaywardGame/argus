define(["require", "exports", "Enums", "item/Items", "mod/Mod"], function (require, exports, Enums_1, Items_1, Mod_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Argus extends Mod_1.default {
        onInitialize(saveDataGlobal) {
            this.keyBind = this.addBindable("Toggle", { key: "Delete" });
        }
        onLoad() {
            const actionType = this.addActionType({
                name: "See All!",
                description: "Lets you see everything."
            }, (player, argument, result) => {
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
                damageType: Enums_1.DamageType.Blunt,
                equip: Enums_1.EquipType.Held,
                onEquip: this.onEquip,
                onUnequip: this.onUnequip,
                use: [actionType],
                recipe: {
                    components: [
                        Items_1.RecipeComponent(Enums_1.ItemTypeGroup.Sharpened, 1, 0),
                        Items_1.RecipeComponent(Enums_1.ItemType.Lens, 2, 2, 2),
                        Items_1.RecipeComponent(Enums_1.ItemType.Log, 1, 1, 1),
                        Items_1.RecipeComponent(Enums_1.ItemType.String, 1, 1, 1)
                    ],
                    skill: Enums_1.SkillType.Tinkering,
                    level: Enums_1.RecipeLevel.Advanced,
                    reputation: 10
                },
                disassemble: true,
                durability: 500
            });
        }
        onGameStart(isLoadingSave) {
            if (!isLoadingSave) {
                localPlayer.createItemInInventory(this.itemArgus);
            }
        }
        onBindLoop(bindPressed, api) {
            if (api.wasPressed(this.keyBind) && !bindPressed) {
                if (fieldOfView.disabled) {
                    this.onUnequip(null);
                }
                else {
                    this.onEquip(null);
                }
                bindPressed = true;
            }
            return bindPressed;
        }
        onEquip(item) {
            fieldOfView.disabled = true;
            fieldOfView.compute();
            game.updateView(true);
        }
        onUnequip(item) {
            fieldOfView.disabled = false;
            fieldOfView.compute();
            game.updateView(true);
        }
    }
    exports.default = Argus;
});
//# sourceMappingURL=Argus.js.map