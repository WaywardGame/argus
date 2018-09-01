var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "Enums", "item/Items", "mod/IHookHost", "mod/Mod", "mod/ModRegistry", "utilities/Objects"], function (require, exports, Enums_1, Items_1, IHookHost_1, Mod_1, ModRegistry_1, Objects_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Argus extends Mod_1.default {
        onLoad() {
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
                use: [ModRegistry_1.Registry.id(this.seeAll)],
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
        onGameStart(isLoadingSave, playedCount) {
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
                bindPressed = this.keyBind;
            }
            return bindPressed;
        }
        seeAll(player, argument, result) {
            renderer.setTileScale(0.15);
            renderer.computeSpritesInViewport();
            game.updateRender = true;
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
    __decorate([
        ModRegistry_1.default.bindable("Toggle", { key: "Delete" })
    ], Argus.prototype, "keyBind", void 0);
    __decorate([
        IHookHost_1.HookMethod
    ], Argus.prototype, "onGameStart", null);
    __decorate([
        IHookHost_1.HookMethod
    ], Argus.prototype, "onBindLoop", null);
    __decorate([
        ModRegistry_1.default.action({
            name: "See All!",
            description: "Lets you see everything."
        })
    ], Argus.prototype, "seeAll", null);
    __decorate([
        Objects_1.Bound
    ], Argus.prototype, "onEquip", null);
    __decorate([
        Objects_1.Bound
    ], Argus.prototype, "onUnequip", null);
    exports.default = Argus;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJndXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBcmd1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFXQSxNQUFxQixLQUFNLFNBQVEsYUFBRztRQU85QixNQUFNO1lBQ1osSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUM3QixXQUFXLEVBQUUscUJBQXFCO2dCQUNsQyxJQUFJLEVBQUUsT0FBTztnQkFDYixNQUFNLEVBQUUsS0FBSztnQkFDYixNQUFNLEVBQUUsQ0FBQztnQkFDVCxNQUFNLEVBQUUsQ0FBQztnQkFDVCxVQUFVLEVBQUUsa0JBQVUsQ0FBQyxLQUFLO2dCQUM1QixLQUFLLEVBQUUsaUJBQVMsQ0FBQyxJQUFJO2dCQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87Z0JBQ3JCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztnQkFDekIsR0FBRyxFQUFFLENBQUMsc0JBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMvQixNQUFNLEVBQUU7b0JBQ1AsVUFBVSxFQUFFO3dCQUNYLHVCQUFlLENBQUMscUJBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDOUMsdUJBQWUsQ0FBQyxnQkFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDdkMsdUJBQWUsQ0FBQyxnQkFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDdEMsdUJBQWUsQ0FBQyxnQkFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztxQkFDekM7b0JBQ0QsS0FBSyxFQUFFLGlCQUFTLENBQUMsU0FBUztvQkFDMUIsS0FBSyxFQUFFLG1CQUFXLENBQUMsUUFBUTtvQkFDM0IsVUFBVSxFQUFFLEVBQUU7aUJBQ2Q7Z0JBQ0QsV0FBVyxFQUFFLElBQUk7Z0JBQ2pCLFVBQVUsRUFBRSxHQUFHO2FBQ2YsQ0FBQyxDQUFDO1FBQ0osQ0FBQztRQUdNLFdBQVcsQ0FBQyxhQUFzQixFQUFFLFdBQW1CO1lBQzdELElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBRW5CLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDbEQ7UUFDRixDQUFDO1FBR00sVUFBVSxDQUFDLFdBQXFCLEVBQUUsR0FBbUI7WUFDM0QsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDakQsSUFBSSxXQUFXLENBQUMsUUFBUSxFQUFFO29CQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUVyQjtxQkFBTTtvQkFDTixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNuQjtnQkFFRCxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUMzQjtZQUVELE9BQU8sV0FBVyxDQUFDO1FBQ3BCLENBQUM7UUFNUyxNQUFNLENBQUMsTUFBZSxFQUFFLFFBQXlCLEVBQUUsTUFBcUI7WUFDakYsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixRQUFRLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUMxQixDQUFDO1FBR08sT0FBTyxDQUFDLElBQVc7WUFDMUIsV0FBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDNUIsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsQ0FBQztRQUdPLFNBQVMsQ0FBQyxJQUFXO1lBQzVCLFdBQVcsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQzdCLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7S0FDRDtJQS9FQTtRQURDLHFCQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQzswQ0FDYjtJQWlDbEM7UUFEQyxzQkFBVTs0Q0FNVjtJQUdEO1FBREMsc0JBQVU7MkNBY1Y7SUFNRDtRQUpDLHFCQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2hCLElBQUksRUFBRSxVQUFVO1lBQ2hCLFdBQVcsRUFBRSwwQkFBMEI7U0FDdkMsQ0FBQzt1Q0FLRDtJQUdEO1FBREMsZUFBSzt3Q0FLTDtJQUdEO1FBREMsZUFBSzswQ0FLTDtJQWpGRix3QkFrRkMifQ==