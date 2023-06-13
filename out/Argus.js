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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "event/EventBuses", "event/EventManager", "game/entity/action/Action", "game/entity/IEntity", "game/entity/IHuman", "game/item/IItem", "game/item/ItemDescriptions", "mod/Mod", "mod/ModRegistry", "renderer/IRenderer", "ui/input/Bind", "ui/input/IInput", "utilities/Decorators"], function (require, exports, EventBuses_1, EventManager_1, Action_1, IEntity_1, IHuman_1, IItem_1, ItemDescriptions_1, Mod_1, ModRegistry_1, IRenderer_1, Bind_1, IInput_1, Decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Argus extends Mod_1.default {
        onGameStart(game, isLoadingSave, playedCount) {
            if (!isLoadingSave) {
                localPlayer.createItemInInventory(this.itemArgus);
            }
        }
        onToggleBind() {
            this[renderer?.fieldOfView.disabled ? "onUnequip" : "onEquip"]();
            return true;
        }
        onEquip() {
            if (renderer) {
                renderer.fieldOfView.disabled = true;
                renderer.fieldOfView.compute(game.absoluteTime);
                renderer.updateView(IRenderer_1.RenderSource.Mod, true);
            }
        }
        onUnequip() {
            if (renderer) {
                renderer.fieldOfView.disabled = false;
                renderer.fieldOfView.compute(game.absoluteTime);
                renderer.updateView(IRenderer_1.RenderSource.Mod, true);
            }
        }
    }
    exports.default = Argus;
    __decorate([
        ModRegistry_1.default.bindable("Toggle", IInput_1.IInput.key("Delete"))
    ], Argus.prototype, "keyBind", void 0);
    __decorate([
        ModRegistry_1.default.action("SeeAll", new Action_1.Action()
            .setUsableBy(IEntity_1.EntityType.Human)
            .setHandler(action => {
            if (renderer) {
                renderer.worldRenderer.setZoom(0.15);
                renderer.computeSpritesInViewport();
                renderer.updateRender(IRenderer_1.RenderSource.Mod, IRenderer_1.UpdateRenderFlag.World);
            }
        }))
    ], Argus.prototype, "actionSeeAll", void 0);
    __decorate([
        ModRegistry_1.default.item("argus", {
            attack: 1,
            damageType: IEntity_1.DamageType.Blunt,
            equip: IHuman_1.EquipType.Held,
            onEquip: item => Argus.INSTANCE.onEquip(),
            onUnequip: item => Argus.INSTANCE.onUnequip(),
            use: [(0, ModRegistry_1.Registry)().get("actionSeeAll")],
            recipe: {
                components: [
                    (0, ItemDescriptions_1.RecipeComponent)(IItem_1.ItemType.Lens, 2, 2, 2),
                    (0, ItemDescriptions_1.RecipeComponent)(IItem_1.ItemType.Log, 1, 1, 1),
                    (0, ItemDescriptions_1.RecipeComponent)(IItem_1.ItemType.String, 1, 1, 1),
                    (0, ItemDescriptions_1.RecipeComponent)(IItem_1.ItemTypeGroup.Sharpened, 1, 0),
                ],
                skill: IHuman_1.SkillType.Tinkering,
                level: IItem_1.RecipeLevel.Advanced,
                reputation: 10,
            },
            disassemble: true,
            durability: 500,
        })
    ], Argus.prototype, "itemArgus", void 0);
    __decorate([
        (0, EventManager_1.EventHandler)(EventBuses_1.EventBus.Game, "play")
    ], Argus.prototype, "onGameStart", null);
    __decorate([
        Bind_1.default.onDown((0, ModRegistry_1.Registry)().get("keyBind"))
    ], Argus.prototype, "onToggleBind", null);
    __decorate([
        Decorators_1.Bound
    ], Argus.prototype, "onEquip", null);
    __decorate([
        Decorators_1.Bound
    ], Argus.prototype, "onUnequip", null);
    __decorate([
        Mod_1.default.instance("Argus")
    ], Argus, "INSTANCE", void 0);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJndXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQXJndXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztHQVNHOzs7Ozs7Ozs7O0lBbUJILE1BQXFCLEtBQU0sU0FBUSxhQUFHO1FBMkM5QixXQUFXLENBQUMsSUFBVSxFQUFFLGFBQXNCLEVBQUUsV0FBbUI7WUFDekUsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFFbkIsV0FBVyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNsRDtRQUNGLENBQUM7UUFHTSxZQUFZO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO1lBQ2pFLE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQztRQUdPLE9BQU87WUFDZCxJQUFJLFFBQVEsRUFBRTtnQkFDYixRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDaEQsUUFBUSxDQUFDLFVBQVUsQ0FBQyx3QkFBWSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUM1QztRQUNGLENBQUM7UUFHTyxTQUFTO1lBQ2hCLElBQUksUUFBUSxFQUFFO2dCQUNiLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDdEMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNoRCxRQUFRLENBQUMsVUFBVSxDQUFDLHdCQUFZLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzVDO1FBQ0YsQ0FBQztLQUNEO0lBekVELHdCQXlFQztJQW5FZ0I7UUFEZixxQkFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsZUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzswQ0FDaEI7SUFXbEI7UUFUZixxQkFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxlQUFNLEVBQUU7YUFDckMsV0FBVyxDQUFDLG9CQUFVLENBQUMsS0FBSyxDQUFDO2FBQzdCLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNwQixJQUFJLFFBQVEsRUFBRTtnQkFDYixRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDckMsUUFBUSxDQUFDLHdCQUF3QixFQUFFLENBQUM7Z0JBQ3BDLFFBQVEsQ0FBQyxZQUFZLENBQUMsd0JBQVksQ0FBQyxHQUFHLEVBQUUsNEJBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDaEU7UUFDRixDQUFDLENBQUMsQ0FBQzsrQ0FDcUM7SUF1QmxDO1FBckJOLHFCQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUN2QixNQUFNLEVBQUUsQ0FBQztZQUNULFVBQVUsRUFBRSxvQkFBVSxDQUFDLEtBQUs7WUFDNUIsS0FBSyxFQUFFLGtCQUFTLENBQUMsSUFBSTtZQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtZQUN6QyxTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUM3QyxHQUFHLEVBQUUsQ0FBQyxJQUFBLHNCQUFRLEdBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDNUMsTUFBTSxFQUFFO2dCQUNQLFVBQVUsRUFBRTtvQkFDWCxJQUFBLGtDQUFlLEVBQUMsZ0JBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3ZDLElBQUEsa0NBQWUsRUFBQyxnQkFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDdEMsSUFBQSxrQ0FBZSxFQUFDLGdCQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUN6QyxJQUFBLGtDQUFlLEVBQUMscUJBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDOUM7Z0JBQ0QsS0FBSyxFQUFFLGtCQUFTLENBQUMsU0FBUztnQkFDMUIsS0FBSyxFQUFFLG1CQUFXLENBQUMsUUFBUTtnQkFDM0IsVUFBVSxFQUFFLEVBQUU7YUFDZDtZQUNELFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFVBQVUsRUFBRSxHQUFHO1NBQ2YsQ0FBQzs0Q0FDeUI7SUFHcEI7UUFETixJQUFBLDJCQUFZLEVBQUMscUJBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDOzRDQU1uQztJQUdNO1FBRE4sY0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFBLHNCQUFRLEdBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7NkNBSTdDO0lBR087UUFEUCxrQkFBSzt3Q0FPTDtJQUdPO1FBRFAsa0JBQUs7MENBT0w7SUFyRXNCO1FBRHRCLGFBQUcsQ0FBQyxRQUFRLENBQVEsT0FBTyxDQUFDO2lDQUNVIn0=