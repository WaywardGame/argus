var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Mod = (function (_super) {
    __extends(Mod, _super);
    function Mod() {
        _super.apply(this, arguments);
    }
    Mod.prototype.onInitialize = function (saveDataGlobal) {
    };
    Mod.prototype.onLoad = function () {
        var actionType = this.addActionType("See All!", "Let's you see everything", function (item) {
            game.options.zoomLevel = 12;
            game.setZoomLevel();
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
                    [ItemTypeGroup.Sharpened, 1, 0],
                    [ItemType.Lens, 2, 2, 2],
                    [ItemType.Log, 1, 1, 1],
                    [ItemType.String, 1, 1, 1]
                ],
                skill: SkillType.Tinkering,
                level: RecipeLevel.Advanced
            },
            disassemble: true,
            durability: 500
        });
        this.keyBind = this.addKeyBind("Argus", 46);
    };
    Mod.prototype.onUnload = function () {
    };
    Mod.prototype.onSave = function () {
    };
    Mod.prototype.onGameStart = function (isLoadingSave) {
        if (!isLoadingSave) {
            Item.create(this.itemArgus);
        }
    };
    Mod.prototype.onKeyBindPress = function (keyBind) {
        if (this.keyBind === keyBind) {
            if (game.fov.disabled) {
                this.onUnequip(null);
            }
            else {
                this.onEquip(null);
            }
            return false;
        }
    };
    Mod.prototype.onEquip = function (item) {
        game.fov.disabled = true;
        game.fov.compute();
        game.updateGame();
    };
    Mod.prototype.onUnequip = function (item) {
        game.fov.disabled = false;
        game.fov.compute();
        game.updateGame();
    };
    return Mod;
}(Mods.Mod));
//# sourceMappingURL=argus.js.map