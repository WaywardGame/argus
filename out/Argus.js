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
    exports.default = Argus;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJndXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQXJndXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztHQVNHOzs7Ozs7Ozs7O0lBbUJILE1BQXFCLEtBQU0sU0FBUSxhQUFHO1FBMkM5QixXQUFXLENBQUMsSUFBVSxFQUFFLGFBQXNCLEVBQUUsV0FBbUI7WUFDekUsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFFbkIsV0FBVyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNsRDtRQUNGLENBQUM7UUFHTSxZQUFZO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO1lBQ2pFLE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQztRQUdPLE9BQU87WUFDZCxJQUFJLFFBQVEsRUFBRTtnQkFDYixRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDaEQsUUFBUSxDQUFDLFVBQVUsQ0FBQyx3QkFBWSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUM1QztRQUNGLENBQUM7UUFHTyxTQUFTO1lBQ2hCLElBQUksUUFBUSxFQUFFO2dCQUNiLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDdEMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNoRCxRQUFRLENBQUMsVUFBVSxDQUFDLHdCQUFZLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzVDO1FBQ0YsQ0FBQztLQUNEO0lBbkVnQjtRQURmLHFCQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxlQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzBDQUNoQjtJQVdsQjtRQVRmLHFCQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLGVBQU0sRUFBRTthQUNyQyxXQUFXLENBQUMsb0JBQVUsQ0FBQyxLQUFLLENBQUM7YUFDN0IsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3BCLElBQUksUUFBUSxFQUFFO2dCQUNiLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyQyxRQUFRLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztnQkFDcEMsUUFBUSxDQUFDLFlBQVksQ0FBQyx3QkFBWSxDQUFDLEdBQUcsRUFBRSw0QkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNoRTtRQUNGLENBQUMsQ0FBQyxDQUFDOytDQUNxQztJQXVCbEM7UUFyQk4scUJBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLE1BQU0sRUFBRSxDQUFDO1lBQ1QsVUFBVSxFQUFFLG9CQUFVLENBQUMsS0FBSztZQUM1QixLQUFLLEVBQUUsa0JBQVMsQ0FBQyxJQUFJO1lBQ3JCLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ3pDLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzdDLEdBQUcsRUFBRSxDQUFDLElBQUEsc0JBQVEsR0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM1QyxNQUFNLEVBQUU7Z0JBQ1AsVUFBVSxFQUFFO29CQUNYLElBQUEsa0NBQWUsRUFBQyxnQkFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDdkMsSUFBQSxrQ0FBZSxFQUFDLGdCQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUN0QyxJQUFBLGtDQUFlLEVBQUMsZ0JBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3pDLElBQUEsa0NBQWUsRUFBQyxxQkFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUM5QztnQkFDRCxLQUFLLEVBQUUsa0JBQVMsQ0FBQyxTQUFTO2dCQUMxQixLQUFLLEVBQUUsbUJBQVcsQ0FBQyxRQUFRO2dCQUMzQixVQUFVLEVBQUUsRUFBRTthQUNkO1lBQ0QsV0FBVyxFQUFFLElBQUk7WUFDakIsVUFBVSxFQUFFLEdBQUc7U0FDZixDQUFDOzRDQUN5QjtJQUdwQjtRQUROLElBQUEsMkJBQVksRUFBQyxxQkFBUSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7NENBTW5DO0lBR007UUFETixjQUFJLENBQUMsTUFBTSxDQUFDLElBQUEsc0JBQVEsR0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQzs2Q0FJN0M7SUFHTztRQURQLGtCQUFLO3dDQU9MO0lBR087UUFEUCxrQkFBSzswQ0FPTDtJQXJFc0I7UUFEdEIsYUFBRyxDQUFDLFFBQVEsQ0FBUSxPQUFPLENBQUM7aUNBQ1U7SUFIeEMsd0JBeUVDIn0=