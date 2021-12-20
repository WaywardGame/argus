var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "event/EventBuses", "event/EventManager", "game/entity/action/Action", "game/entity/IEntity", "game/entity/IHuman", "game/item/IItem", "game/item/Items", "mod/Mod", "mod/ModRegistry", "renderer/IRenderer", "ui/input/Bind", "ui/input/IInput", "utilities/Decorators"], function (require, exports, EventBuses_1, EventManager_1, Action_1, IEntity_1, IHuman_1, IItem_1, Items_1, Mod_1, ModRegistry_1, IRenderer_1, Bind_1, IInput_1, Decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Argus extends Mod_1.default {
        onGameStart(game, isLoadingSave, playedCount) {
            if (!isLoadingSave) {
                localPlayer.createItemInInventory(this.itemArgus);
            }
        }
        onToggleBind() {
            this[(renderer === null || renderer === void 0 ? void 0 : renderer.fieldOfView.disabled) ? "onUnequip" : "onEquip"]();
            return true;
        }
        onEquip() {
            if (renderer) {
                renderer.fieldOfView.disabled = true;
                renderer.fieldOfView.compute(game.absoluteTime);
                game.updateView(IRenderer_1.RenderSource.Mod, true);
            }
        }
        onUnequip() {
            if (renderer) {
                renderer.fieldOfView.disabled = false;
                renderer.fieldOfView.compute(game.absoluteTime);
                game.updateView(IRenderer_1.RenderSource.Mod, true);
            }
        }
    }
    __decorate([
        ModRegistry_1.default.bindable("Toggle", IInput_1.IInput.key("Delete"))
    ], Argus.prototype, "keyBind", void 0);
    __decorate([
        ModRegistry_1.default.action("SeeAll", new Action_1.Action()
            .setUsableBy(IEntity_1.EntityType.Player)
            .setHandler(action => {
            if (renderer) {
                renderer.worldRenderer.setTileScale(0.15);
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
                    (0, Items_1.RecipeComponent)(IItem_1.ItemType.Lens, 2, 2, 2),
                    (0, Items_1.RecipeComponent)(IItem_1.ItemType.Log, 1, 1, 1),
                    (0, Items_1.RecipeComponent)(IItem_1.ItemType.String, 1, 1, 1),
                    (0, Items_1.RecipeComponent)(IItem_1.ItemTypeGroup.Sharpened, 1, 0),
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
    exports.default = Argus;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJndXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQXJndXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBaUJBLE1BQXFCLEtBQU0sU0FBUSxhQUFHO1FBMkM5QixXQUFXLENBQUMsSUFBVSxFQUFFLGFBQXNCLEVBQUUsV0FBbUI7WUFDekUsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFFbkIsV0FBVyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNsRDtRQUNGLENBQUM7UUFHTSxZQUFZO1lBQ2xCLElBQUksQ0FBQyxDQUFBLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxXQUFXLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFDakUsT0FBTyxJQUFJLENBQUM7UUFDYixDQUFDO1FBR08sT0FBTztZQUNkLElBQUksUUFBUSxFQUFFO2dCQUNiLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLENBQUMsVUFBVSxDQUFDLHdCQUFZLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3hDO1FBQ0YsQ0FBQztRQUdPLFNBQVM7WUFDaEIsSUFBSSxRQUFRLEVBQUU7Z0JBQ2IsUUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN0QyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxVQUFVLENBQUMsd0JBQVksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDeEM7UUFDRixDQUFDO0tBQ0Q7SUFuRUE7UUFEQyxxQkFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsZUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzswQ0FDaEI7SUFXbEM7UUFUQyxxQkFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxlQUFNLEVBQUU7YUFDckMsV0FBVyxDQUFDLG9CQUFVLENBQUMsTUFBTSxDQUFDO2FBQzlCLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNwQixJQUFJLFFBQVEsRUFBRTtnQkFDYixRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUMsUUFBUSxDQUFDLHdCQUF3QixFQUFFLENBQUM7Z0JBQ3BDLFFBQVEsQ0FBQyxZQUFZLENBQUMsd0JBQVksQ0FBQyxHQUFHLEVBQUUsNEJBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDaEU7UUFDRixDQUFDLENBQUMsQ0FBQzsrQ0FDcUM7SUF1QnpDO1FBckJDLHFCQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUN2QixNQUFNLEVBQUUsQ0FBQztZQUNULFVBQVUsRUFBRSxvQkFBVSxDQUFDLEtBQUs7WUFDNUIsS0FBSyxFQUFFLGtCQUFTLENBQUMsSUFBSTtZQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtZQUN6QyxTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUM3QyxHQUFHLEVBQUUsQ0FBQyxJQUFBLHNCQUFRLEdBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDNUMsTUFBTSxFQUFFO2dCQUNQLFVBQVUsRUFBRTtvQkFDWCxJQUFBLHVCQUFlLEVBQUMsZ0JBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3ZDLElBQUEsdUJBQWUsRUFBQyxnQkFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDdEMsSUFBQSx1QkFBZSxFQUFDLGdCQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUN6QyxJQUFBLHVCQUFlLEVBQUMscUJBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDOUM7Z0JBQ0QsS0FBSyxFQUFFLGtCQUFTLENBQUMsU0FBUztnQkFDMUIsS0FBSyxFQUFFLG1CQUFXLENBQUMsUUFBUTtnQkFDM0IsVUFBVSxFQUFFLEVBQUU7YUFDZDtZQUNELFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFVBQVUsRUFBRSxHQUFHO1NBQ2YsQ0FBQzs0Q0FDeUI7SUFHM0I7UUFEQyxJQUFBLDJCQUFZLEVBQUMscUJBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDOzRDQU1uQztJQUdEO1FBREMsY0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFBLHNCQUFRLEdBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7NkNBSTdDO0lBR0Q7UUFEQyxrQkFBSzt3Q0FPTDtJQUdEO1FBREMsa0JBQUs7MENBT0w7SUFyRUQ7UUFEQyxhQUFHLENBQUMsUUFBUSxDQUFRLE9BQU8sQ0FBQztpQ0FDVTtJQUh4Qyx3QkF5RUMifQ==