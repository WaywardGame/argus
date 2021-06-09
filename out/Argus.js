var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "game/entity/action/Action", "game/entity/IEntity", "game/entity/IHuman", "game/IGame", "game/item/IItem", "game/item/Items", "mod/IHookHost", "mod/Mod", "mod/ModRegistry", "ui/input/Bind", "ui/input/IInput"], function (require, exports, Action_1, IEntity_1, IHuman_1, IGame_1, IItem_1, Items_1, IHookHost_1, Mod_1, ModRegistry_1, Bind_1, IInput_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Argus extends Mod_1.default {
        onGameStart(isLoadingSave, playedCount) {
            if (!isLoadingSave) {
                localPlayer.createItemInInventory(this.itemArgus);
            }
        }
        onToggleBind() {
            this[fieldOfView.disabled ? "onUnequip" : "onEquip"](null);
            return true;
        }
        onEquip(item) {
            fieldOfView.disabled = true;
            fieldOfView.compute(game.absoluteTime);
            game.updateView(IGame_1.RenderSource.Mod, true);
        }
        onUnequip(item) {
            fieldOfView.disabled = false;
            fieldOfView.compute(game.absoluteTime);
            game.updateView(IGame_1.RenderSource.Mod, true);
        }
    }
    __decorate([
        ModRegistry_1.default.bindable("Toggle", IInput_1.IInput.key("Delete"))
    ], Argus.prototype, "keyBind", void 0);
    __decorate([
        ModRegistry_1.default.action("SeeAll", new Action_1.Action()
            .setUsableBy(IEntity_1.EntityType.Player)
            .setHandler(action => {
            renderer.setTileScale(0.15);
            renderer.computeSpritesInViewport();
            game.updateRender(IGame_1.RenderSource.Mod, IGame_1.UpdateRenderFlag.World);
        }))
    ], Argus.prototype, "actionSeeAll", void 0);
    __decorate([
        ModRegistry_1.default.item("argus", {
            attack: 1,
            damageType: IEntity_1.DamageType.Blunt,
            equip: IHuman_1.EquipType.Held,
            onEquip: item => Argus.INSTANCE.onEquip(item),
            onUnequip: item => Argus.INSTANCE.onUnequip(item),
            use: [ModRegistry_1.Registry().get("actionSeeAll")],
            recipe: {
                components: [
                    Items_1.RecipeComponent(IItem_1.ItemType.Lens, 2, 2, 2),
                    Items_1.RecipeComponent(IItem_1.ItemType.Log, 1, 1, 1),
                    Items_1.RecipeComponent(IItem_1.ItemType.String, 1, 1, 1),
                    Items_1.RecipeComponent(IItem_1.ItemTypeGroup.Sharpened, 1, 0),
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
        Override, IHookHost_1.HookMethod
    ], Argus.prototype, "onGameStart", null);
    __decorate([
        Bind_1.default.onDown(ModRegistry_1.Registry().get("keyBind"))
    ], Argus.prototype, "onToggleBind", null);
    __decorate([
        Bound
    ], Argus.prototype, "onEquip", null);
    __decorate([
        Bound
    ], Argus.prototype, "onUnequip", null);
    __decorate([
        Mod_1.default.instance("Argus")
    ], Argus, "INSTANCE", void 0);
    exports.default = Argus;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJndXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9Bcmd1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFlQSxNQUFxQixLQUFNLFNBQVEsYUFBRztRQXlDOUIsV0FBVyxDQUFDLGFBQXNCLEVBQUUsV0FBbUI7WUFDN0QsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFFbkIsV0FBVyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNsRDtRQUNGLENBQUM7UUFHTSxZQUFZO1lBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNELE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQztRQUdPLE9BQU8sQ0FBQyxJQUFVO1lBQ3pCLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQzVCLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQVksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUdPLFNBQVMsQ0FBQyxJQUFVO1lBQzNCLFdBQVcsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQzdCLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQVksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekMsQ0FBQztLQUNEO0lBN0RBO1FBREMscUJBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLGVBQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7MENBQ2hCO0lBU2xDO1FBUEMscUJBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksZUFBTSxFQUFFO2FBQ3JDLFdBQVcsQ0FBQyxvQkFBVSxDQUFDLE1BQU0sQ0FBQzthQUM5QixVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDcEIsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixRQUFRLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFZLENBQUMsR0FBRyxFQUFFLHdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFDOytDQUNxQztJQXVCekM7UUFyQkMscUJBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLE1BQU0sRUFBRSxDQUFDO1lBQ1QsVUFBVSxFQUFFLG9CQUFVLENBQUMsS0FBSztZQUM1QixLQUFLLEVBQUUsa0JBQVMsQ0FBQyxJQUFJO1lBQ3JCLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUM3QyxTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDakQsR0FBRyxFQUFFLENBQUMsc0JBQVEsRUFBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM1QyxNQUFNLEVBQUU7Z0JBQ1AsVUFBVSxFQUFFO29CQUNYLHVCQUFlLENBQUMsZ0JBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3ZDLHVCQUFlLENBQUMsZ0JBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3RDLHVCQUFlLENBQUMsZ0JBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3pDLHVCQUFlLENBQUMscUJBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDOUM7Z0JBQ0QsS0FBSyxFQUFFLGtCQUFTLENBQUMsU0FBUztnQkFDMUIsS0FBSyxFQUFFLG1CQUFXLENBQUMsUUFBUTtnQkFDM0IsVUFBVSxFQUFFLEVBQUU7YUFDZDtZQUNELFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFVBQVUsRUFBRSxHQUFHO1NBQ2YsQ0FBQzs0Q0FDeUI7SUFHM0I7UUFEQyxRQUFRLEVBQUUsc0JBQVU7NENBTXBCO0lBR0Q7UUFEQyxjQUFJLENBQUMsTUFBTSxDQUFDLHNCQUFRLEVBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7NkNBSTdDO0lBR0Q7UUFEQyxLQUFLO3dDQUtMO0lBR0Q7UUFEQyxLQUFLOzBDQUtMO0lBL0REO1FBREMsYUFBRyxDQUFDLFFBQVEsQ0FBUSxPQUFPLENBQUM7aUNBQ1U7SUFIeEMsd0JBbUVDIn0=