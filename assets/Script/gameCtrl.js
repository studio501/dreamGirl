// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html
var EventListener = require("./event_listener");
var global = require("./global");

cc.Class({
    extends: cc.Component,

    properties: {
        main_world_prefab:{
            default:null,
            type : cc.Prefab
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        global.eventlistener = EventListener({});
        global.eventlistener.on("intoGame",function () {
            console.log("will into game ");
            
        });


        this.enterMainWorld();
    },


    enterMainWorld : function () {
        console.log("enter main world");
        if(this.runningWorld != undefined){
            this.runningWorld.removeFromParent(true);
        }
        this.runningWorld = cc.instantiate(this.main_world_prefab);
        this.runningWorld.parent = this.node;
    }

    // update (dt) {},
});
