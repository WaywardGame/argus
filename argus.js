var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "Enums", "item/Items", "mod/IHookHost", "mod/Mod"], function (require, exports, Enums_1, Items_1, IHookHost_1, Mod_1) {
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
        IHookHost_1.HookMethod
    ], Argus.prototype, "onGameStart", null);
    __decorate([
        IHookHost_1.HookMethod
    ], Argus.prototype, "onBindLoop", null);
    exports.default = Argus;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJndXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBcmd1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFTQSxXQUEyQixTQUFRLGFBQUc7UUFJOUIsWUFBWSxDQUFDLGNBQW1CO1lBQ3RDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM5RCxDQUFDO1FBRU0sTUFBTTtZQUNaLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQ3JDLElBQUksRUFBRSxVQUFVO2dCQUNoQixXQUFXLEVBQUUsMEJBQTBCO2FBQ3ZDLEVBQUUsQ0FBQyxNQUFlLEVBQUUsUUFBeUIsRUFBRSxNQUFxQixFQUFFLEVBQUU7Z0JBQ3hFLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVCLFFBQVEsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO2dCQUNwQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDN0IsV0FBVyxFQUFFLHFCQUFxQjtnQkFDbEMsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsVUFBVSxFQUFFLGtCQUFVLENBQUMsS0FBSztnQkFDNUIsS0FBSyxFQUFFLGlCQUFTLENBQUMsSUFBSTtnQkFDckIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2dCQUNyQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7Z0JBQ3pCLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDakIsTUFBTSxFQUFFO29CQUNQLFVBQVUsRUFBRTt3QkFDWCx1QkFBZSxDQUFDLHFCQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQzlDLHVCQUFlLENBQUMsZ0JBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ3ZDLHVCQUFlLENBQUMsZ0JBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ3RDLHVCQUFlLENBQUMsZ0JBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQ3pDO29CQUNELEtBQUssRUFBRSxpQkFBUyxDQUFDLFNBQVM7b0JBQzFCLEtBQUssRUFBRSxtQkFBVyxDQUFDLFFBQVE7b0JBQzNCLFVBQVUsRUFBRSxFQUFFO2lCQUNkO2dCQUNELFdBQVcsRUFBRSxJQUFJO2dCQUNqQixVQUFVLEVBQUUsR0FBRzthQUNmLENBQUMsQ0FBQztRQUNKLENBQUM7UUFHTSxXQUFXLENBQUMsYUFBc0IsRUFBRSxXQUFtQjtZQUM3RCxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUVuQixXQUFXLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ2xEO1FBQ0YsQ0FBQztRQUdNLFVBQVUsQ0FBQyxXQUFxQixFQUFFLEdBQW1CO1lBQzNELElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2pELElBQUksV0FBVyxDQUFDLFFBQVEsRUFBRTtvQkFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFFckI7cUJBQU07b0JBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDbkI7Z0JBRUQsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDM0I7WUFFRCxPQUFPLFdBQVcsQ0FBQztRQUNwQixDQUFDO1FBRU0sT0FBTyxDQUFDLElBQVc7WUFDekIsV0FBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDNUIsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsQ0FBQztRQUVNLFNBQVMsQ0FBQyxJQUFXO1lBQzNCLFdBQVcsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQzdCLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7S0FDRDtJQWxDQTtRQURDLHNCQUFVOzRDQU1WO0lBR0Q7UUFEQyxzQkFBVTsyQ0FjVjtJQW5FRix3QkFnRkMifQ==