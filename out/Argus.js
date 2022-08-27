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
    exports.default = Argus;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJndXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQXJndXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBaUJBLE1BQXFCLEtBQU0sU0FBUSxhQUFHO1FBMkM5QixXQUFXLENBQUMsSUFBVSxFQUFFLGFBQXNCLEVBQUUsV0FBbUI7WUFDekUsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFFbkIsV0FBVyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNsRDtRQUNGLENBQUM7UUFHTSxZQUFZO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO1lBQ2pFLE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQztRQUdPLE9BQU87WUFDZCxJQUFJLFFBQVEsRUFBRTtnQkFDYixRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBWSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUN4QztRQUNGLENBQUM7UUFHTyxTQUFTO1lBQ2hCLElBQUksUUFBUSxFQUFFO2dCQUNiLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDdEMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLENBQUMsVUFBVSxDQUFDLHdCQUFZLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3hDO1FBQ0YsQ0FBQztLQUNEO0lBbkVBO1FBREMscUJBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLGVBQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7MENBQ2hCO0lBV2xDO1FBVEMscUJBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksZUFBTSxFQUFFO2FBQ3JDLFdBQVcsQ0FBQyxvQkFBVSxDQUFDLE1BQU0sQ0FBQzthQUM5QixVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDcEIsSUFBSSxRQUFRLEVBQUU7Z0JBQ2IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JDLFFBQVEsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO2dCQUNwQyxRQUFRLENBQUMsWUFBWSxDQUFDLHdCQUFZLENBQUMsR0FBRyxFQUFFLDRCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2hFO1FBQ0YsQ0FBQyxDQUFDLENBQUM7K0NBQ3FDO0lBdUJ6QztRQXJCQyxxQkFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDdkIsTUFBTSxFQUFFLENBQUM7WUFDVCxVQUFVLEVBQUUsb0JBQVUsQ0FBQyxLQUFLO1lBQzVCLEtBQUssRUFBRSxrQkFBUyxDQUFDLElBQUk7WUFDckIsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDekMsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDN0MsR0FBRyxFQUFFLENBQUMsSUFBQSxzQkFBUSxHQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzVDLE1BQU0sRUFBRTtnQkFDUCxVQUFVLEVBQUU7b0JBQ1gsSUFBQSxrQ0FBZSxFQUFDLGdCQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUN2QyxJQUFBLGtDQUFlLEVBQUMsZ0JBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3RDLElBQUEsa0NBQWUsRUFBQyxnQkFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDekMsSUFBQSxrQ0FBZSxFQUFDLHFCQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQzlDO2dCQUNELEtBQUssRUFBRSxrQkFBUyxDQUFDLFNBQVM7Z0JBQzFCLEtBQUssRUFBRSxtQkFBVyxDQUFDLFFBQVE7Z0JBQzNCLFVBQVUsRUFBRSxFQUFFO2FBQ2Q7WUFDRCxXQUFXLEVBQUUsSUFBSTtZQUNqQixVQUFVLEVBQUUsR0FBRztTQUNmLENBQUM7NENBQ3lCO0lBRzNCO1FBREMsSUFBQSwyQkFBWSxFQUFDLHFCQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQzs0Q0FNbkM7SUFHRDtRQURDLGNBQUksQ0FBQyxNQUFNLENBQUMsSUFBQSxzQkFBUSxHQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzZDQUk3QztJQUdEO1FBREMsa0JBQUs7d0NBT0w7SUFHRDtRQURDLGtCQUFLOzBDQU9MO0lBckVhO1FBRGIsYUFBRyxDQUFDLFFBQVEsQ0FBUSxPQUFPLENBQUM7aUNBQ1U7SUFIeEMsd0JBeUVDIn0=