var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "action/Action", "entity/IEntity", "Enums", "game/IGame", "item/Items", "mod/IHookHost", "mod/Mod", "mod/ModRegistry", "utilities/Objects"], function (require, exports, Action_1, IEntity_1, Enums_1, IGame_1, Items_1, IHookHost_1, Mod_1, ModRegistry_1, Objects_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Argus extends Mod_1.default {
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
            game.updateView(IGame_1.RenderSource.Mod, true);
        }
        onUnequip(item) {
            fieldOfView.disabled = false;
            fieldOfView.compute();
            game.updateView(IGame_1.RenderSource.Mod, true);
        }
    }
    __decorate([
        ModRegistry_1.default.bindable("Toggle", { key: "Delete" })
    ], Argus.prototype, "keyBind", void 0);
    __decorate([
        ModRegistry_1.default.action("SeeAll", new Action_1.Action()
            .setUsableBy(IEntity_1.EntityType.Player)
            .setHandler(action => {
            renderer.setTileScale(0.15);
            renderer.computeSpritesInViewport();
            game.updateRender(IGame_1.RenderSource.Mod);
        }))
    ], Argus.prototype, "actionSeeAll", void 0);
    __decorate([
        ModRegistry_1.default.item("argus", {
            weight: 2,
            attack: 1,
            damageType: Enums_1.DamageType.Blunt,
            equip: Enums_1.EquipType.Held,
            onEquip: item => Argus.INSTANCE.onEquip(item),
            onUnequip: item => Argus.INSTANCE.onUnequip(item),
            use: [ModRegistry_1.Registry().get("actionSeeAll")],
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
        })
    ], Argus.prototype, "itemArgus", void 0);
    __decorate([
        Override, IHookHost_1.HookMethod
    ], Argus.prototype, "onGameStart", null);
    __decorate([
        Override, IHookHost_1.HookMethod
    ], Argus.prototype, "onBindLoop", null);
    __decorate([
        Objects_1.Bound
    ], Argus.prototype, "onEquip", null);
    __decorate([
        Objects_1.Bound
    ], Argus.prototype, "onUnequip", null);
    __decorate([
        Mod_1.default.instance("Argus")
    ], Argus, "INSTANCE", void 0);
    exports.default = Argus;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJndXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9Bcmd1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFhQSxNQUFxQixLQUFNLFNBQVEsYUFBRztRQTBDOUIsV0FBVyxDQUFDLGFBQXNCLEVBQUUsV0FBbUI7WUFDN0QsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFFbkIsV0FBVyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNsRDtRQUNGLENBQUM7UUFHTSxVQUFVLENBQUMsV0FBcUIsRUFBRSxHQUFtQjtZQUMzRCxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNqRCxJQUFJLFdBQVcsQ0FBQyxRQUFRLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBRXJCO3FCQUFNO29CQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ25CO2dCQUVELFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQzNCO1lBRUQsT0FBTyxXQUFXLENBQUM7UUFDcEIsQ0FBQztRQUdPLE9BQU8sQ0FBQyxJQUFXO1lBQzFCLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQzVCLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFZLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFHTyxTQUFTLENBQUMsSUFBVztZQUM1QixXQUFXLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUM3QixXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBWSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxDQUFDO0tBQ0Q7SUF4RUE7UUFEQyxxQkFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUM7MENBQ2I7SUFTbEM7UUFQQyxxQkFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxlQUFNLEVBQUU7YUFDckMsV0FBVyxDQUFDLG9CQUFVLENBQUMsTUFBTSxDQUFDO2FBQzlCLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNwQixRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVCLFFBQVEsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQzsrQ0FDcUM7SUF3QnpDO1FBdEJDLHFCQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUN2QixNQUFNLEVBQUUsQ0FBQztZQUNULE1BQU0sRUFBRSxDQUFDO1lBQ1QsVUFBVSxFQUFFLGtCQUFVLENBQUMsS0FBSztZQUM1QixLQUFLLEVBQUUsaUJBQVMsQ0FBQyxJQUFJO1lBQ3JCLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUM3QyxTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDakQsR0FBRyxFQUFFLENBQUMsc0JBQVEsRUFBcUIsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDeEQsTUFBTSxFQUFFO2dCQUNQLFVBQVUsRUFBRTtvQkFDWCx1QkFBZSxDQUFDLHFCQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzlDLHVCQUFlLENBQUMsZ0JBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3ZDLHVCQUFlLENBQUMsZ0JBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3RDLHVCQUFlLENBQUMsZ0JBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ3pDO2dCQUNELEtBQUssRUFBRSxpQkFBUyxDQUFDLFNBQVM7Z0JBQzFCLEtBQUssRUFBRSxtQkFBVyxDQUFDLFFBQVE7Z0JBQzNCLFVBQVUsRUFBRSxFQUFFO2FBQ2Q7WUFDRCxXQUFXLEVBQUUsSUFBSTtZQUNqQixVQUFVLEVBQUUsR0FBRztTQUNmLENBQUM7NENBQ3lCO0lBRzNCO1FBREMsUUFBUSxFQUFFLHNCQUFVOzRDQU1wQjtJQUdEO1FBREMsUUFBUSxFQUFFLHNCQUFVOzJDQWNwQjtJQUdEO1FBREMsZUFBSzt3Q0FLTDtJQUdEO1FBREMsZUFBSzswQ0FLTDtJQTFFRDtRQURDLGFBQUcsQ0FBQyxRQUFRLENBQVEsT0FBTyxDQUFDO2lDQUNVO0lBSHhDLHdCQThFQyJ9